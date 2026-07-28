#!/usr/bin/env python3
"""Al Safa Park 2 — parametric masterplan overlay generator.

Draws a landscape-architecture masterplan as a vector-style overlay directly on
the orthographic aerial photograph of the site. The photo is never warped or
replaced: existing mature trees, the parking strip, sports courts, walls and
the surrounding urban fabric all remain visible. The proposed parametric
circulation network, planting islands, bicycle loop and plazas are drawn as
semi-transparent layers, and the existing canopy (extracted from the photo as a
vegetation mask) is re-composited on top so the new pattern reads as weaving
underneath and around the protected trees.

Base image coordinate system: 852 x 1846 px, park rectangle ~ x 150-705, y 405-1410.
"""

import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

S = 3  # supersampling factor for drawing
ASSETS = os.path.join(os.path.dirname(__file__), "..", "..",
                      "public", "assets", "projects", "al-safa-park-2")
BASE = os.path.join(ASSETS, "base-aerial.png")
OUT = os.path.join(ASSETS, "masterplan.png")

# ---------------------------------------------------------------- geometry utils

def catmull_rom(pts, samples_per_seg=24, closed=False):
    """Sample a Catmull-Rom spline through pts. Returns list of (x, y)."""
    p = [np.array(pt, dtype=float) for pt in pts]
    if closed:
        p = [p[-1]] + p + [p[0], p[1]]
    else:
        p = [p[0]] + p + [p[-1]]
    out = []
    for i in range(1, len(p) - 2):
        p0, p1, p2, p3 = p[i - 1], p[i], p[i + 1], p[i + 2]
        for j in range(samples_per_seg):
            t = j / samples_per_seg
            t2, t3 = t * t, t * t * t
            pt = 0.5 * ((2 * p1) + (-p0 + p2) * t +
                        (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
                        (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
            out.append(pt)
    out.append(p[-2])
    return out


def ribbon_polygon(pts_w, samples_per_seg=24):
    """pts_w: list of ((x, y), width). Returns filled polygon points for a
    variable-width ribbon along the Catmull-Rom spline through the points."""
    pts = [pw[0] for pw in pts_w]
    widths = [pw[1] for pw in pts_w]
    curve = catmull_rom(pts, samples_per_seg)
    n = len(curve)
    # interpolate widths over the curve samples
    seg_count = len(pts) - 1
    wcurve = []
    for i in range(n):
        f = i / (n - 1) * seg_count
        k = min(int(f), seg_count - 1)
        t = f - k
        wcurve.append(widths[k] * (1 - t) + widths[k + 1] * t)
    left, right = [], []
    for i in range(n):
        a = np.array(curve[max(i - 1, 0)])
        b = np.array(curve[min(i + 1, n - 1)])
        d = b - a
        L = np.hypot(*d)
        if L < 1e-6:
            d = np.array([1.0, 0.0]); L = 1.0
        nx, ny = -d[1] / L, d[0] / L
        w = wcurve[i] / 2
        c = np.array(curve[i])
        left.append((c[0] + nx * w, c[1] + ny * w))
        right.append((c[0] - nx * w, c[1] - ny * w))
    return left + right[::-1], curve, wcurve


def draw_ribbon(layer, pts_w, fill, edge=None, edge_extra=3.0, round_ends=True):
    d = ImageDraw.Draw(layer)
    if edge is not None:
        poly_e, curve, wc = ribbon_polygon([(p, w + edge_extra) for p, w in pts_w])
        d.polygon([(x * S, y * S) for x, y in poly_e], fill=edge)
        if round_ends:
            for (c, w) in [(curve[0], wc[0] + edge_extra), (curve[-1], wc[-1] + edge_extra)]:
                r = w / 2 * S
                d.ellipse([c[0] * S - r, c[1] * S - r, c[0] * S + r, c[1] * S + r], fill=edge)
    poly, curve, wc = ribbon_polygon(pts_w)
    d.polygon([(x * S, y * S) for x, y in poly], fill=fill)
    if round_ends:
        for (c, w) in [(curve[0], wc[0]), (curve[-1], wc[-1])]:
            r = w / 2 * S
            d.ellipse([c[0] * S - r, c[1] * S - r, c[0] * S + r, c[1] * S + r], fill=fill)


def draw_blob(layer, pts, fill, outline=None, ow=2.0):
    d = ImageDraw.Draw(layer)
    curve = catmull_rom(pts, closed=True)
    poly = [(x * S, y * S) for x, y in curve]
    d.polygon(poly, fill=fill)
    if outline:
        d.line(poly + [poly[0]], fill=outline, width=int(ow * S), joint="curve")


def draw_stroke(layer, pts, color, width, closed=False, dash=None):
    d = ImageDraw.Draw(layer)
    curve = catmull_rom(pts, closed=closed)
    poly = [(x * S, y * S) for x, y in curve]
    if closed:
        poly.append(poly[0])
    if dash is None:
        d.line(poly, fill=color, width=int(width * S), joint="curve")
    else:
        on, off = dash
        acc, pen = 0.0, True
        prev = poly[0]
        for cur in poly[1:]:
            seg = np.hypot(cur[0] - prev[0], cur[1] - prev[1]) / S
            if pen:
                d.line([prev, cur], fill=color, width=int(width * S))
            acc += seg
            lim = on if pen else off
            if acc >= lim:
                acc = 0.0
                pen = not pen
            prev = cur


def circle_ribbon(layer, cx, cy, r, w, fill, edge=None, edge_extra=3.0):
    d = ImageDraw.Draw(layer)
    if edge:
        d.ellipse([(cx - r - (w + edge_extra) / 2) * S, (cy - r - (w + edge_extra) / 2) * S,
                   (cx + r + (w + edge_extra) / 2) * S, (cy + r + (w + edge_extra) / 2) * S],
                  outline=edge, width=int((w + edge_extra) * S))
    d.ellipse([(cx - r - w / 2) * S, (cy - r - w / 2) * S,
               (cx + r + w / 2) * S, (cy + r + w / 2) * S],
              outline=fill, width=int(w * S))


def tree_symbol(layer, x, y, r, fill, rim):
    d = ImageDraw.Draw(layer)
    d.ellipse([(x - r) * S, (y - r) * S, (x + r) * S, (y + r) * S], fill=fill)
    d.ellipse([(x - r) * S, (y - r) * S, (x + r) * S, (y + r) * S],
              outline=rim, width=int(1.2 * S))
    rr = r * 0.35
    d.ellipse([(x - rr) * S, (y - rr) * S, (x + rr) * S, (y + rr) * S], fill=rim)


# ---------------------------------------------------------------- load + masks

base = Image.open(BASE).convert("RGB")
W, H = base.size
img = base.resize((W * S, H * S), Image.LANCZOS).convert("RGBA")

arr = np.asarray(base, dtype=np.int16)
r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
veg = ((g > r + 8) & (g > b + 8)) | ((r + g + b < 260) & (g >= r) & (g >= b - 5))

# park rectangle (base coords)
PX0, PY0, PX1, PY1 = 150, 405, 705, 1410
park = np.zeros((H, W), dtype=bool)
park[PY0:PY1, PX0:PX1] = True
veg_park = veg & park

veg_img = Image.fromarray((veg_park * 255).astype(np.uint8)).resize((W * S, H * S), Image.LANCZOS)
veg_img = veg_img.filter(ImageFilter.MaxFilter(5)).filter(ImageFilter.GaussianBlur(2 * S))

# ---------------------------------------------------------------- palette

WASH = (244, 239, 226, 46)
PAVE = (233, 223, 201, 198)
PAVE_MAIN = (241, 229, 203, 228)
PAVE_EDGE = (255, 255, 255, 150)
PAVE_HI = (245, 235, 210, 235)
BIKE = (186, 92, 58, 235)
BIKE_DASH = (255, 244, 230, 220)
ISL_FILL = (110, 158, 88, 205)
ISL_FILL2 = (143, 187, 110, 190)
ISL_OUT = (63, 107, 53, 220)
SEAT = (255, 255, 255, 210)
CANOPY = (30, 66, 36, 74)
TREE_NEW = (127, 192, 96, 230)
TREE_NEW_RIM = (52, 96, 44, 235)
ENTR = (214, 120, 70, 200)

def new_layer():
    return Image.new("RGBA", img.size, (0, 0, 0, 0))

# ---------------------------------------------------------------- 1. neutral wash on open (non-veg) park areas

wash_mask = Image.fromarray(((park & ~veg) * 255).astype(np.uint8)).resize((W * S, H * S), Image.LANCZOS)
wash_mask = wash_mask.filter(ImageFilter.GaussianBlur(1.5 * S))
wash = Image.new("RGBA", img.size, WASH)
wash.putalpha(Image.fromarray(
    (np.asarray(wash_mask, dtype=np.float32) / 255 * WASH[3]).astype(np.uint8)))
img = Image.alpha_composite(img, wash)

# ---------------------------------------------------------------- 2. planting islands

isl = new_layer()
islands = [
    # north lawn islands
    [(318, 588), (368, 575), (398, 600), (372, 632), (322, 630)],
    [(243, 528), (272, 520), (285, 545), (262, 562), (238, 552)],
    [(452, 640), (482, 632), (496, 660), (474, 682), (448, 668)],
    # central lawn islands
    [(392, 782), (428, 770), (448, 800), (426, 828), (392, 818)],
    [(452, 878), (486, 868), (500, 898), (478, 922), (450, 908)],
    # entrance flanks
    [(196, 636), (226, 630), (238, 652), (218, 668), (194, 658)],
    [(202, 720), (234, 714), (246, 738), (224, 756), (198, 746)],
    # sports zone islands
    [(600, 1294), (634, 1286), (650, 1310), (630, 1332), (602, 1322)],
    [(178, 1168), (206, 1160), (218, 1180), (200, 1196), (176, 1186)],
]
for pts in islands:
    draw_blob(isl, pts, ISL_FILL, ISL_OUT, 1.6)
    inner = [((x - np.mean([p[0] for p in pts])) * 0.55 + np.mean([p[0] for p in pts]),
              (y - np.mean([p[1] for p in pts])) * 0.55 + np.mean([p[1] for p in pts]))
             for x, y in pts]
    draw_blob(isl, inner, ISL_FILL2)
img = Image.alpha_composite(img, isl)

# ---------------------------------------------------------------- 3. bicycle loop

bike = new_layer()
bike_loop = [
    (155, 672), (174, 596), (200, 506), (258, 458), (342, 438), (452, 432),
    (562, 440), (642, 464), (683, 522), (690, 642), (684, 782), (678, 930),
    (668, 1062), (650, 1140), (560, 1152), (430, 1152), (300, 1150), (212, 1154),
    (180, 1118), (168, 1000), (162, 862), (157, 752),
]
draw_stroke(bike, bike_loop, BIKE, 5.5, closed=True)
draw_stroke(bike, bike_loop, BIKE_DASH, 1.3, closed=True, dash=(9, 7))
img = Image.alpha_composite(img, bike)

# ---------------------------------------------------------------- 4. pedestrian ribbon network

ped = new_layer()
primary = [
    # P1 primary axis: entrance -> central plaza  (wind axis NW->SE)
    [((142, 688), 27), ((205, 692), 22), ((292, 712), 18), ((392, 748), 17), ((452, 782), 20)],
    # P2 primary south: plaza -> sports -> parking gate
    [((522, 884), 20), ((480, 940), 16), ((454, 1005), 14), ((447, 1070), 16),
     ((454, 1125), 14), ((464, 1168), 16), ((470, 1218), 14), ((462, 1262), 14),
     ((444, 1305), 13), ((442, 1355), 14), ((458, 1402), 17), ((466, 1438), 13)],
]
secondary = [
    # P3 north lawn loop
    [((298, 714), 11), ((262, 652), 9), ((270, 576), 11), ((330, 528), 9),
     ((405, 532), 11), ((456, 570), 9), ((472, 625), 11), ((452, 678), 9),
     ((408, 706), 10), ((390, 742), 10)],
    # P4 north-east canopy walk
    [((456, 568), 9), ((452, 506), 8), ((472, 460), 9), ((542, 448), 8),
     ((612, 470), 9), ((656, 506), 8), ((668, 562), 9), ((662, 642), 8),
     ((640, 700), 9), ((628, 732), 10)],
    # P5 east walk to sports
    [((644, 834), 11), ((656, 902), 9), ((652, 992), 11), ((628, 1062), 9),
     ((586, 1106), 11), ((562, 1146), 9), ((558, 1180), 11)],
    # P6 west grove walk
    [((272, 708), 9), ((242, 762), 8), ((234, 832), 9), ((250, 884), 8),
     ((305, 898), 9), ((364, 902), 8), ((418, 924), 9), ((450, 962), 10)],
    # P7 sports pitch loop (west)
    [((462, 1172), 11), ((400, 1190), 10), ((310, 1206), 9), ((230, 1218), 10),
     ((180, 1258), 9), ((174, 1306), 10), ((190, 1352), 9), ((262, 1372), 10),
     ((352, 1376), 9), ((426, 1368), 10), ((452, 1356), 10)],
    # P8 sports courts walk (east): north edge + south edge of courts
    [((558, 1180), 10), ((622, 1172), 9), ((680, 1186), 10)],
    [((530, 1366), 9), ((586, 1360), 9), ((644, 1356), 9), ((676, 1330), 8), ((684, 1294), 8)],
]
for pw in secondary:
    draw_ribbon(ped, pw, PAVE, PAVE_EDGE)
for pw in primary:
    draw_ribbon(ped, pw, PAVE_MAIN, PAVE_EDGE)

# central plaza ring
circle_ribbon(ped, 545, 790, 96, 19, PAVE_MAIN, PAVE_EDGE)
# sports circular garden node
circle_ribbon(ped, 520, 1320, 50, 10, PAVE, PAVE_EDGE)
img = Image.alpha_composite(img, ped)

# ---------------------------------------------------------------- 5. entrance plaza emphasis

ent = new_layer()
draw_blob(ent, [(150, 652), (208, 648), (248, 672), (250, 704), (210, 728), (150, 724)],
          PAVE_HI, (255, 255, 255, 190), 1.6)
d = ImageDraw.Draw(ent)
for rr in (34, 46, 58):
    d.arc([(196 - rr) * S, (688 - rr) * S, (196 + rr) * S, (688 + rr) * S],
          -65, 65, fill=ENTR, width=int(1.8 * S))
img = Image.alpha_composite(img, ent)

# ---------------------------------------------------------------- 6. seating edges

seat = new_layer()
d = ImageDraw.Draw(seat)
seat_arcs = [
    (545, 790, 108, 150, 260),   # plaza SW edge
    (545, 790, 108, 300, 40),    # plaza NE edge
    (520, 1320, 63, 120, 300),   # sports node
    (352, 604, 46, 20, 160),     # north lawn island
    (420, 800, 36, 60, 200),     # central island
    (196, 688, 68, -60, 60),     # entrance
]
for cx, cy, rr, a0, a1 in seat_arcs:
    d.arc([(cx - rr) * S, (cy - rr) * S, (cx + rr) * S, (cy + rr) * S],
          a0, a1, fill=SEAT, width=int(2.2 * S))
img = Image.alpha_composite(img, seat)

# ---------------------------------------------------------------- 7. existing canopy re-composited on top (deep green, protected)

can = Image.new("RGBA", img.size, (CANOPY[0], CANOPY[1], CANOPY[2], 255))
can.putalpha(Image.fromarray(
    (np.asarray(veg_img, dtype=np.float32) / 255 * CANOPY[3]).astype(np.uint8)))
img = Image.alpha_composite(img, can)

# ---------------------------------------------------------------- 8. relocated / new trees

trees = new_layer()
relocated = [
    (662, 700), (670, 762), (672, 862), (662, 1012), (172, 942), (170, 1062),
    (208, 660), (212, 722), (586, 1292), (626, 1344), (214, 1166), (186, 1364),
    (338, 606), (472, 656), (468, 892),
]
for x, y in relocated:
    tree_symbol(trees, x, y, 6.5, TREE_NEW, TREE_NEW_RIM)
img = Image.alpha_composite(img, trees)

# ---------------------------------------------------------------- output

final = img.convert("RGB").resize((W * 2, H * 2), Image.LANCZOS)
final.save(OUT, "PNG")
print("saved", OUT, final.size)
