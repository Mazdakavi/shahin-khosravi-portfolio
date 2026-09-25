"""SCALE — Selected Works. Builds portfolio.html; render.mjs prints it to PDF.

Page: A4 landscape (297 x 210 mm). 12-column grid, 16 mm margins, 5 mm gutter.
All project facts come from SCALE_Portfolio_Digital.pdf; nothing is added.
"""
from pathlib import Path

ROOT = Path(__file__).parent
M, G, COLW = 16.0, 5.0, 17.5


def cx(n):  # left edge of column n (1-based)
    return M + (n - 1) * (COLW + G)


def span(k):  # width of k columns
    return k * COLW + (k - 1) * G


# ---------------------------------------------------------------- primitives
def fig(src, x, y, w, h, cap=None, pos="center", cls=""):
    c = f'<figcaption class="cap">{cap}</figcaption>' if cap else ""
    return (f'<figure class="fig {cls}" style="left:{x}mm;top:{y}mm;width:{w}mm">'
            f'<div class="ph" style="height:{h}mm"><img src="images/{src}" '
            f'style="object-position:{pos}"></div>{c}</figure>')


def cap(title, rest=""):
    return f"<b>{title}</b> {rest}".strip()


def block(x, y, w, html, cls=""):
    return f'<div class="blk {cls}" style="left:{x}mm;top:{y}mm;width:{w}mm">{html}</div>'


def text(label, *paras):
    lab = f'<div class="lab">{label}</div>' if label else ""
    return lab + "".join(f'<p class="txt">{p}</p>' for p in paras)


pages = []  # (section-label, html, extra-class)


def page(section, body, cls="", foot=True):
    pages.append({"section": section, "body": body, "cls": cls, "foot": foot})
    return len(pages)  # page number


# ---------------------------------------------------------------- projects
projects = []


def hero(p, img, pos="center"):
    meta = "".join(f"<dt>{k}</dt><dd>{v}</dd>" for k, v in p["meta"])
    body = (
        f'<div class="hero"><img src="images/{img}" style="object-position:{pos}"></div>'
        + block(cx(1), 157, span(4),
                f'<div class="pnum"><span>{p["no"]}</span>{p["cat"]}</div>'
                f'<h2 class="ptitle">{p["title"]}</h2><div class="psub">{p["sub"]}</div>')
        + block(cx(6), 157.6, span(4), f'<p class="lead">{p["lead"]}</p>')
        + block(cx(10), 157.6, span(3), f'<dl class="meta">{meta}</dl>')
    )
    p["page"] = page(f'{p["no"]} — {p["title"]}', body, "hero-page")
    projects.append(p)


def ppage(p, body, cls=""):
    page(f'{p["no"]} — {p["title"]}', body, cls)


# ================================================================ 01 COVER
page("", (
    '<div class="cover"><img src="images/p01_0.jpeg" style="object-position:center 55%"></div>'
    '<div class="cover-shade"></div>'
    f'<div class="blk logo light" style="left:{cx(1)}mm;top:14mm">{{LOGO}}</div>'
    + block(cx(1), 146, span(8),
            '<h1 class="cover-title">Selected Works</h1>'
            '<div class="cover-sub">Architecture &amp; Interior Design</div>', "light")
    + block(cx(10), 182.2, span(3),
            '<div class="lab light r">Dubai — United Arab Emirates</div>', "light")
), "cover-page", foot=False)

# ================================================================ 02 CONTENTS (filled later)
CONTENTS = page("Contents", "{CONTENTS}")

# ================================================================ 03 STUDIO
STUDIO = page("Studio", (
    block(cx(1), 16, span(3), '<div class="lab">Studio</div>')
    + block(cx(1), 40, span(6),
            '<h1 class="display">Architecture and interiors, designed with construction in view.</h1>')
    + block(cx(8), 41.5, span(5), text(
        "",
        "SCALE is an architecture and interior design studio based in Dubai, working on villas, "
        "apartments, renovations and commercial interiors in the UAE and internationally.",
        "Architecture and interior are developed as one process. Each project is shaped through "
        "proportion, circulation, material and light, then resolved in construction drawings, "
        "joinery details and material specification.",
        "Design decisions are made with coordination and execution already in view. Work is "
        "documented in a BIM / Revit workflow, so that the intent set at concept reaches the "
        "finished space intact."))
    + block(cx(1), 160, span(12),
            '<div class="facts">'
            '<div><div class="lab">Base</div><p>Dubai, United Arab Emirates</p></div>'
            '<div><div class="lab">Practice</div><p>Architecture · Interior architecture · Technical design</p></div>'
            '<div><div class="lab">Typologies</div><p>Villas, apartments, renovations, retail and workplace</p></div>'
            '<div><div class="lab">Workflow</div><p>BIM / Revit, from concept to site</p></div>'
            '</div>')
))

# ================================================================ 04 DESIGN POSITION
principles = [
    ("Clarity", "The idea is legible in plan, section and mass."),
    ("Proportion", "Dimension, rhythm and alignment carry the space."),
    ("Planning", "Circulation, storage and services are resolved in the plan."),
    ("Material", "Few materials in each space, each used for what it is."),
    ("Light", "Natural and artificial light designed as part of the architecture."),
    ("Built as drawn", "Junctions, shadow gaps and joinery resolved in the drawings, not on site."),
]
plist = "".join(f'<li><span class="n">{i+1:02d}</span><b>{a}</b><span>{b}</span></li>'
                for i, (a, b) in enumerate(principles))
page("Studio — Design position", (
    fig("p04_0.jpeg", cx(1), 16, span(5), 158.5,
        cap("Massing studies.", "Form and openings tested in white before material is applied."))
    + block(cx(7), 16, span(3), '<div class="lab">Design position</div>')
    + block(cx(7), 40, span(6),
            '<p class="statement">A building should hold its presence once every decorative '
            'element is removed. We begin with mass, proportion and light, and add only what '
            'the space requires.</p>')
    + block(cx(7), 104, span(6), f'<ol class="principles">{plist}</ol>')
), "tone")

# ================================================================ PROJECTS
# ---- 01 Palm Jumeirah Duplex Villa
p = dict(no="01", cat="Residential architecture", title="Palm Jumeirah Duplex Villa",
         sub="Palm Jumeirah, Dubai",
         lead="A two-level villa composed of a stone base and a recessed upper volume. The ground "
              "floor opens directly onto a pool terrace facing the water; the upper floor is held "
              "behind slatted timber screens and planted terraces.",
         meta=[("Location", "Palm Jumeirah, Dubai"), ("Typology", "Duplex residential villa"),
               ("Area", "570 m²"), ("Scope", "Architecture · Interior · Visualization"),
               ("Year", "2026")])
hero(p, "p05_0.jpeg", "center 62%")
ppage(p, (
    fig("p06_0.jpeg", cx(1), 16, span(8), 140,
        cap("Pool terrace.", "The living level opens fully to the water-facing terrace."))
    + fig("p06_1.jpeg", cx(9), 16, span(4), 62, cap("Garden façade."))
    + block(cx(9), 94, span(4), text(
        "Massing and façade",
        "Stone frames hold recessed glazing on both levels. On the upper floor, slatted timber "
        "screens give the private rooms privacy and filter their views; at ground level the "
        "frames open completely to the terrace.",
        "Planting is built into the terraces as part of the section, not placed around the house."))
))
ppage(p, (
    fig("p07_0.jpeg", cx(1), 16, span(8), 150,
        cap("Living.", "Limestone, oak joinery and a continuous line of concealed light at ceiling level."), "center 55%")
    + fig("p07_1.jpeg", cx(9), 16, span(4), 88,
          cap("Stair.", "Lit treads against a timber-lined wall."), "center 60%")
    + fig("p07_2.jpeg", cx(9), 113.5, span(4), 52.5, cap("Kitchen.", "Stone island and flush oak joinery."))
))
ppage(p, (
    fig("p08_0.jpeg", cx(1), 16, span(6), 150, cap("Bedroom suite.", "Stone, oak and bronze-framed glazing."), "center 60%")
    + fig("p08_1.jpeg", cx(7), 16, span(3), 78, cap("Dressing room."))
    + fig("p08_2.jpeg", cx(10), 16, span(3), 78, cap("Bathroom."))
    + block(cx(7), 112, span(5), text(
        "Private rooms",
        "The palette of the living spaces — limestone, oak veneer and bronze — continues unchanged "
        "into the private rooms. Wardrobes, bed wall and vanity are built into the architecture, "
        "with light concealed in the joinery rather than hung in the room."))
))

# ---- 02 Villa Sarbast
p = dict(no="02", cat="Residential architecture", title="Villa Sarbast", sub="Shiraz, Iran",
         lead="Two asymmetrical volumes with opposing sloped roofs, drawn from the line of the "
              "surrounding ridges, are set around an internal courtyard. A narrow glazed hinge "
              "joins them and carries the entrance and circulation.",
         meta=[("Location", "Shiraz, Iran"), ("Typology", "Private villa · Exterior &amp; interior"),
               ("Scope", "Architecture · Interior · Visualization"), ("Year", "2026")])
hero(p, "p09_0.jpeg", "center 45%")
ppage(p, (
    fig("p10_0.jpeg", cx(1), 16, span(9), 139.6,
        cap("Design study, “Twin Slopes”.", "Massing sequence, section logic, entrance hinge and roof profile."))
    + block(cx(10), 16, span(3), text(
        "Architectural idea",
        "The upper floor is held in two deep frames that shelter the rooms behind them. Below, a "
        "recessed, fully glazed ground floor opens the living spaces to the courtyard, the pool "
        "and the distant mountains.",
        "Where the two roofs rise toward the hinge, they read as a single abstract ridge."))
    + fig("p10_1.jpeg", cx(10), 92, span(3), 71, cap("Site plan.", "Plot, terraces and the two wings."), "center 30%")
))
ppage(p, (
    fig("p11_0.jpeg", cx(1), 16, span(7), 118.8,
        cap("Ground-floor plan.", "Living, dining and kitchen open to the terrace; pool, jacuzzi and "
            "sunken lounge with fire pit on the courtyard side."))
    + fig("p11_1.jpeg", cx(8), 16, span(5), 83.7,
          cap("First-floor plan.", "Private rooms held within the two upper frames."))
    + block(cx(8), 116, span(4), text(
        "Drawings",
        "The plans were developed in Revit from the massing study. The two wings, the hinge and "
        "the courtyard were fixed first; rooms, structure and levels were then coordinated "
        "within them.")
        + '<p class="note">Drawings graphically cleaned for presentation; geometry and annotation unchanged.</p>')
), "drawings")
ppage(p, (
    fig("p12_0.jpeg", cx(1), 16, span(9), 150,
        cap("Courtyard façade.", "The upper volumes frame the glazed hinge; terraces step down to the pool."))
    + fig("p12_1.jpeg", cx(10), 16, span(3), 44.2,
          cap("Night.", "The hinge reads as a lit void between the two masses."))
    + block(cx(10), 78, span(3), text(
        "Landscape",
        "The ground steps down in planted terraces and low walls toward the pool, so the house "
        "is approached through its own garden."))
))

# ---- 03 Private Villa
p = dict(no="03", cat="Residential architecture", title="Private Villa", sub="Shiraz, Iran",
         lead="Low concrete volumes, full-height glazing and thin metal frames arranged around an "
              "infinity-edge pool. The pool organizes the outdoor room and returns the architecture "
              "as reflection; gravel, stone and restrained planting keep attention on material and light.",
         meta=[("Location", "Shiraz, Iran"), ("Typology", "Private villa · Exterior &amp; interior"),
               ("Area", "180 m² built · 1,000 m² plot"), ("Scope", "Architecture · Interior —<br>concept to execution"), ("Year", "2024")])
hero(p, "p13_0.jpeg", "center 62%")
ppage(p, (
    fig("p14_0.jpeg", cx(1), 16, span(8), 150,
        cap("Aerial view.", "Pool court, planted courtyard and gravel garden as one composition."))
    + fig("p14_1.jpeg", cx(9), 16, span(4), 63.8,
          cap("Garden terrace.", "Glazed volumes open onto a reflecting pool."))
    + block(cx(9), 95, span(4), text(
        "Architectural idea",
        "The house is planned as a sequence of outdoor rooms — a pool court, a planted courtyard "
        "and a gravel garden. Full-height glazing opens each interior to its own exterior space, "
        "while solid concrete planes close the house toward the boundaries."))
))
ppage(p, (
    fig("p15_0.jpeg", cx(1), 16, span(8), 150,
        cap("Living.", "A curved stone wall carries the media niche and a continuous line of light."))
    + fig("p15_1.jpeg", cx(9), 16, span(4), 68, cap("Kitchen.", "Island beneath a rooflight."))
    + fig("p15_2.jpeg", cx(9), 93.5, span(4), 72.5, cap("Joinery.", "Stone niche set into flush paneling."), "center 40%")
))
ppage(p, (
    fig("p16_0.jpeg", cx(1), 16, span(8), 150,
        cap("Lounge.", "Fluted panels and a recessed light line define the room without applied ornament."))
    + fig("p16_1.jpeg", cx(9), 16, span(4), 56, cap("Bedroom.", "Timber, dark glass and indirect light."))
    + block(cx(9), 88, span(4), text(
        "Material and light",
        "The interior continues the language of the exterior: few materials, long lines of "
        "concealed light, and joinery built into the walls rather than placed against them."))
))

# ---- 04 Parsa Villa
p = dict(no="04", cat="Residential architecture", title="Parsa Villa", sub="Shiraz, Iran",
         lead="Board-formed concrete volumes. The upper mass steps back and cantilevers over a glazed "
              "ground floor, and a perforated screen wall on the upper level filters sun and view.",
         meta=[("Location", "Shiraz, Iran"), ("Typology", "Private villa · Exterior &amp; landscape"),
               ("Scope", "Architecture · Landscape · Visualization"), ("Year", "2026")])
hero(p, "p17_0.jpeg", "center 45%")
ppage(p, (
    fig("p18_0.jpeg", cx(1), 16, span(9), 140,
        cap("Street view.", "The upper mass cantilevers over the glazed ground floor."))
    + fig("p18_1.jpeg", cx(10), 16, span(3), 40,
          cap("Night.", "The concrete shell against warm interior light."))
    + block(cx(10), 73, span(3), text(
        "Landscape",
        "The front terrace is raised above a dry garden of agave, cactus and gravel. The garden "
        "holds the house back from the street and separates the living spaces from the approach."))
))

# ---- 05 Niknam Villa
p = dict(no="05", cat="Residential architecture", title="Niknam Villa", sub="Fars Province, Iran",
         lead="A single-story villa in hand-laid brick. Deep-set openings frame the garden and "
              "filter daylight into the rooms.",
         meta=[("Location", "Fars Province, Iran"), ("Typology", "Private villa · Exterior &amp; landscape"),
               ("Scope", "Architecture · Landscape · Visualization"), ("Year", "2025")])
hero(p, "p19_0.jpeg", "center 50%")
ppage(p, (
    fig("p20_0.jpeg", cx(1), 16, span(12), 149,
        cap("Entrance court.", "Alternating strips of brick and stone paving, softened by planting."))
    + block(cx(9), 172, span(4), '<p class="txt">Low walls, olive trees and grasses tie the house to '
            'its terrain. A sunken fire pit sets the gathering point between house and garden.</p>')
))

# ---- 06 Dubai Marina Apartment
p = dict(no="06", cat="Interior architecture", title="Dubai Marina Apartment", sub="Dubai Marina, Dubai",
         lead="An apartment organized around one open living and kitchen zone. A white envelope is "
              "set against matte black surfaces, fluted paneling and warm wood.",
         meta=[("Location", "Dubai Marina, Dubai"), ("Typology", "Apartment interior"),
               ("Scope", "Interior architecture · Visualization"), ("Year", "2026")])
hero(p, "p21_0.jpeg", "center 50%")
ppage(p, (
    fig("p22_0_w.jpeg", cx(1), 16, span(5), 151.8, cap("Floor plan."), "center", "plan")
    + fig("p22_1.jpeg", cx(7), 16, span(6), 73.3,
          cap("Kitchen.", "Tall joinery wall, stone-topped island and bar seating."))
    + block(cx(7), 104, span(4), text(
        "Layout",
        "Kitchen, dining and living share one open zone along the façade. The master suite with "
        "walk-in closet and the second bedroom sit at either end of the plan, separated from the "
        "living space by storage and service walls."))
), "drawings")
ppage(p, (
    fig("p23_0.jpeg", cx(1), 16, span(7), 130,
        cap("Entry.", "A round mirror set into fluted joinery; the door concealed in the wall."))
    + fig("p23_1.jpeg", cx(8), 16, span(5), 70,
          cap("Master bedroom.", "Bed wall and mirror as one joinery piece."))
    + block(cx(8), 100, span(4), text(
        "Joinery",
        "Storage is concealed and joinery is built into the walls, so the rooms carry few loose "
        "pieces. Recessed linear light follows the joinery lines."))
))

# ---- 07 Dousideh Boutique
p = dict(no="07", cat="Commercial / retail", title="Dousideh Boutique", sub="Dubai",
         lead="A compact fashion boutique set out as a rhythm of dark timber fins and white display "
              "planes, leading from the shopfront to a feature stair.",
         meta=[("Location", "Dubai"), ("Typology", "Fashion boutique interior"),
               ("Scope", "Interior design · Joinery · Visualization"), ("Year", "2026")])
hero(p, "p24_0.jpeg", "center 45%")
ppage(p, (
    fig("p25_0.jpeg", cx(1), 16, span(8), 130,
        cap("Sales floor.", "Timber fins, a white display plane and the stair beyond."))
    + fig("p25_1.jpeg", cx(9), 16, span(4), 68,
          cap("Counter.", "A faceted white volume beneath floating timber shelving."))
    + block(cx(9), 100, span(4), text(
        "Circulation",
        "The fins set a rhythm from the shopfront into the shop and screen the stair without "
        "closing it. Display, counter and stair are placed as one sequence rather than as "
        "separate pieces of furniture."))
))
ppage(p, (
    fig("p26_1.jpeg", cx(1), 16, span(6), 104, cap("Key plan.", "Display tables, wall joinery, counter and stair."))
    + block(cx(1), 136, span(4), text(
        "Technical joinery",
        "Each joinery element — counter, display frames and wall units — is drawn, keyed to the "
        "plan and dimensioned, so that fabrication follows the drawing rather than decisions made on site."))
    + fig("p26_0.jpeg", cx(7), 16, span(6), 165,
          cap("Joinery elevations.", "Keyed to the plan and dimensioned for fabrication."))
), "drawings")

# ---- 08 O'Munt Store
p = dict(no="08", cat="Commercial / retail", title="O’Munt Store", sub="Shiraz, Iran",
         lead="A two-level fashion store whose shopfront reads as a lit volume on the street at "
              "night. Inside, a floating stair links the retail floor to a mezzanine.",
         meta=[("Location", "Shiraz, Iran"), ("Typology", "Fashion retail · Exterior &amp; interior"),
               ("Scope", "Architecture · Interior · Visualization"), ("Year", "2019")])
hero(p, "p27_0.jpeg", "center 40%")
ppage(p, (
    fig("p28_0.jpeg", cx(1), 16, span(8), 98.6,
        cap("Reception.", "A sculpted desk on axis, framed by steel garment rails and stone plinths."))
    + fig("p28_1.jpeg", cx(9), 16, span(4), 47.8, cap("Retail floor.", "Track lighting keeps the focus on the product."))
    + fig("p28_2.jpeg", cx(9), 74, span(4), 47.8, cap("Fitting rooms.", "Arched openings in soft grey."))
    + block(cx(1), 128, span(5), text(
        "Spatial sequence",
        "The ground floor reads as one continuous room. Garment rails and plinths set out the "
        "route from the shopfront to the reception desk, with fitting rooms and stair placed behind it."))
))
ppage(p, (
    fig("p29_0.jpeg", cx(1), 16, span(8), 130,
        cap("Stair and mezzanine.", "A floating stair links the retail floor to the upper level."))
    + fig("p29_2.jpeg", cx(9), 16, span(4), 56, cap("Display niche.", "Light lines at floor and shelf edge."), "right center")
    + block(cx(9), 82, span(4), text(
        "Materials",
        "Black steel, stone, white plaster and charcoal walls form a restrained background. "
        "Color is left to the garments, a few pieces of loose furniture and the deep red of the "
        "fitting-room curtains."))
))

# ---- 09 ALO Turkey Office
p = dict(no="09", cat="Workplace", title="ALO Turkey Office", sub="Skyland Tower, Istanbul",
         lead="An office planned around a central meeting table, with a glazed meeting room and "
              "private offices along the tower façade. Dark exposed ceilings and linear light are "
              "set against pale plaster, oak and timber slats.",
         meta=[("Location", "Skyland Tower, Istanbul, Turkey"), ("Typology", "Real estate office interior"),
               ("Scope", "Interior architecture · Visualization"), ("Year", "2026")])
hero(p, "p30_0.jpeg", "center 55%")
ppage(p, (
    fig("p31_0.jpeg", cx(1), 16, span(8), 98.6,
        cap("Meeting area.", "Frameless glass gives each room privacy without closing the plan."))
    + fig("p31_1.jpeg", cx(9), 16, span(4), 47.8, cap("Main workspace, daylight."))
    + fig("p31_2.jpeg", cx(9), 74, span(4), 47.8, cap("Main workspace, night."))
    + block(cx(1), 128, span(5), text(
        "Glass and light",
        "Frameless glass encloses the meeting room and private offices, so the central table "
        "keeps its view of the skyline. The scheme was studied in daylight, at dusk and at night "
        "to balance linear ceiling light, warm timber and the city outside."))
))
ppage(p, (
    fig("p32_0_w.jpeg", cx(1), 16, span(7), 169, cap("Floor plan.", "Meeting table, workstations and room widths, dimensioned."), "center", "plan")
    + fig("p32_1.jpeg", cx(9), 16, span(4), 47.8,
          cap("Glazed meeting room.", "Oak floor, pale plaster and the exposed ceiling."))
    + block(cx(9), 74, span(4), text(
        "Floor plan",
        "The central table occupies the widest part of the floor. The glazed meeting room and "
        "private offices follow the angled façade, and dimensions are fixed for each room and "
        "furniture zone."))
), "drawings")

# ================================================================ PRACTICE
services = [
    ("Architecture", ["Concept development", "Architectural design", "Renovation", "Space planning",
                      "Design development", "Façade design"]),
    ("Interior architecture", ["Residential interiors", "Commercial interiors", "Workplace design",
                               "Retail design", "Hospitality design"]),
    ("Technical design", ["Construction documentation", "Detailed drawings", "Joinery design",
                          "Ceiling &amp; lighting design", "MEP coordination", "BIM / Revit documentation"]),
    ("Visualization", ["Interior &amp; exterior renders", "Rendered floor plans", "Design presentation"]),
    ("Project delivery", ["Material selection", "FF&amp;E selection", "Design coordination",
                          "Contractor coordination", "Site supervision"]),
]
cols = "".join(
    f'<div class="svc"><div class="n">{i+1:02d}</div><h3>{h}</h3><ul>'
    + "".join(f"<li>{x}</li>" for x in items) + "</ul></div>"
    for i, (h, items) in enumerate(services))
SERVICES = page("Practice — Services", (
    block(cx(1), 16, span(3), '<div class="lab">Practice — Services</div>')
    + block(cx(1), 40, span(6), '<h1 class="display">One studio from design through delivery.</h1>')
    + block(cx(8), 41.5, span(4), '<p class="txt">Architecture, interiors and technical design are '
            'handled by the same team, so decisions made at concept are carried through the '
            'drawings to site.</p>')
    + block(cx(1), 112, span(12), f'<div class="services">{cols}</div>')
))

phases = [
    ("Design", "Brief, site and idea resolved into space.",
     ["Brief", "Research &amp; site analysis", "Concept", "Spatial design", "Design development"]),
    ("Resolve", "The design made buildable in drawings.",
     ["Materials &amp; technical coordination", "Construction documentation"]),
    ("Build", "Design intent held on site.", ["Site supervision", "Handover"]),
]
n = 0
ph_html = ""
for h, s, steps in phases:
    li = ""
    for st in steps:
        n += 1
        li += f"<li><span class='n'>{n:02d}</span>{st}</li>"
    ph_html += f'<div class="phase"><h3>{h}</h3><p>{s}</p><ol>{li}</ol></div>'
page("Practice — Process", (
    block(cx(1), 16, span(3), '<div class="lab">Practice — Process</div>')
    + block(cx(1), 40, span(6), '<h1 class="display">From brief to handover, one continuous line.</h1>')
    + block(cx(1), 112, span(12), f'<div class="phases">{ph_html}</div>')
), "tone")

TECH = page("Practice — Technical capability", "{TECH}")

page("Practice — Detail", (
    block(cx(1), 16, span(3), '<div class="lab">Practice — Detail</div>')
    + block(cx(1), 40, span(4), '<h1 class="display">Resolved at the junction.</h1>')
    + block(cx(1), 76, span(3.6), '<p class="txt">Quality is decided where materials meet: a shadow gap '
            'between wall and ceiling, a flush joinery panel, a concealed light line, a stone edge. '
            'These conditions are drawn and coordinated before work starts on site.</p>')
    + fig("p36_0.jpeg", cx(5), 16, span(4), 169,
          cap("Display joinery with integrated light.", "Palm Jumeirah Duplex Villa."), "center 40%")
    + fig("p36_1.jpeg", cx(9), 16, span(2), 78, cap("Stone, niche light, backlit mirror.", "Palm Jumeirah."), "center")
    + fig("p36_3.jpeg", cx(11), 16, span(2), 78, cap("Concealed shelf light.", "Palm Jumeirah."), "30% center")
    + fig("p36_2.jpeg", cx(9), 107, span(4), 78, cap("Floor light line at the wall base.", "O’Munt Store."), "18% center")
), "tone")

# ================================================================ FOUNDERS
FOUNDERS = page("Founders", (
    block(cx(1), 16, span(3), '<div class="lab">Founders</div>')
    + block(cx(1), 40, span(6), '<h1 class="display">Design and delivery, led directly by the founders.</h1>')
    + block(cx(8), 41.5, span(4), '<p class="txt">SCALE was co-founded by Shahin Khosravi and Farnam '
            'Saremi. Both keep direct architectural oversight on every project, from concept and '
            'spatial planning through documentation, material coordination and site.</p>')
    + block(cx(1), 112, span(6),
            '<div class="founder"><h2>Shahin Khosravi</h2><div class="lab">Co-founder — Architect &amp; interior designer</div>'
            '<p class="txt">Over twelve years of experience across architecture, interior design, technical '
            'documentation, visualization and site coordination — developing projects from concept '
            'design through construction drawings, material coordination and site support, with a focus '
            'on translating design intent into buildable detail.</p></div>')
    + block(cx(7), 112, span(6),
            '<div class="founder"><h2>Farnam Saremi</h2><div class="lab">Co-founder — Architect &amp; interior designer</div>'
            '<p class="txt">Co-leads the studio’s design and delivery, working across spatial planning, '
            'material and joinery detailing and project coordination — holding the same commitment '
            'to controlled proportion, calm material palettes and construction-conscious design.</p></div>')
))

# ================================================================ INDEX
index = [
    ("Residential architecture", [
        ("Palm Jumeirah Duplex Villa", "Palm Jumeirah, Dubai", "Duplex residential villa · 570 m²", "Architecture · Interior · Visualization", "2026", "01"),
        ("Villa Sarbast", "Shiraz, Iran", "Private villa", "Architecture · Interior · Visualization", "2026", "02"),
        ("Private Villa", "Shiraz, Iran", "Private villa · 180 m²", "Architecture · Interior — concept to execution", "2024", "03"),
        ("Parsa Villa", "Shiraz, Iran", "Private villa · Exterior &amp; landscape", "Architecture · Landscape · Visualization", "2026", "04"),
        ("Niknam Villa", "Fars Province, Iran", "Private villa · Exterior &amp; landscape", "Architecture · Landscape · Visualization", "2025", "05"),
        ("Villa Lapui", "Shiraz, Iran", "Villa renovation", "Architecture · Interior — concept to execution", "2022", None),
        ("Villa Renovation", "Shiraz, Iran", "Villa renovation", "Architecture · Interior — concept to execution", "2021", None),
    ]),
    ("Interior architecture", [
        ("Dubai Marina Apartment", "Dubai Marina, Dubai", "Apartment interior", "Interior architecture · Visualization", "2026", "06"),
        ("Regalia Tower Apartment", "Business Bay, Dubai", "Apartment interior · 68 m²", "Interior architecture · Visualization", "2025", None),
        ("Rakhshan Apartment", "—", "Apartment interior", "Interior architecture · Visualization", "—", None),
    ]),
    ("Commercial / retail · Workplace", [
        ("Dousideh Boutique", "Dubai", "Fashion boutique interior", "Interior design · Joinery · Visualization", "2026", "07"),
        ("O’Munt Store", "Shiraz, Iran", "Fashion retail · Exterior &amp; interior", "Architecture · Interior · Visualization", "2019", "08"),
        ("ALO Turkey Office", "Istanbul, Turkey", "Real estate office interior", "Interior architecture · Visualization", "2026", "09"),
    ]),
]
page_of = {q["no"]: q["page"] for q in projects}
rows = ""
for grp, items in index:
    rows += f'<tr class="grp"><td colspan="6">{grp}</td></tr>'
    for name, loc, typ, scope, yr, no in items:
        pg = f"{page_of[no]:02d}" if no else ""
        rows += (f'<tr class="{"" if no else "dim"}"><td>{name}</td><td>{loc}</td><td>{typ}</td>'
                 f'<td>{scope}</td><td>{yr}</td><td class="r">{pg}</td></tr>')
INDEX = page("Project index", (
    block(cx(1), 16, span(3), '<div class="lab">Project index</div>')
    + block(cx(1), 40, span(3), '<h1 class="display">Projects</h1>')
    + block(cx(1), 64, span(3), '<p class="txt muted">Projects presented in this portfolio carry a '
            'page reference. Other projects are listed for completeness.</p>')
    + block(cx(5), 16.5, span(8),
            '<table class="index"><thead><tr><th>Project</th><th>Location</th><th>Typology</th>'
            f'<th>Scope</th><th>Year</th><th class="r">Page</th></tr></thead><tbody>{rows}</tbody></table>')
))

# ================================================================ CONTACT
page("", (
    f'<div class="blk logo" style="left:{cx(1)}mm;top:14mm">{{LOGO}}</div>'
    + block(cx(1), 76, span(7), '<h1 class="display xl">For new projects in the UAE and internationally.</h1>')
    + block(cx(1), 160, span(12),
            '<div class="facts contact">'
            '<div><div class="lab">Studio</div><p>Dubai<br>United Arab Emirates</p></div>'
            '<div><div class="lab">Telephone / WhatsApp</div><p>+971 50 113 8078</p></div>'
            '<div><div class="lab">Email</div><p>info@scaleatelier.ae</p></div>'
            '<div><div class="lab">Website / Instagram</div><p>scaleatelier.ae<br>@scaleatelier</p></div>'
            '</div>')
), "", foot=False)

# ================================================================ TECHNICAL CAPABILITY (needs page numbers)
proj = {q["title"]: q["page"] for q in projects}
evidence = [
    ("Massing and section study", "Villa Sarbast", proj["Villa Sarbast"] + 1),
    ("Plans developed in Revit", "Villa Sarbast", proj["Villa Sarbast"] + 2),
    ("Apartment plan with joinery", "Dubai Marina Apartment", proj["Dubai Marina Apartment"] + 1),
    ("Joinery elevations for fabrication", "Dousideh Boutique", proj["Dousideh Boutique"] + 2),
    ("Dimensioned office plan", "ALO Turkey Office", proj["ALO Turkey Office"] + 2),
]
ev = "".join(f"<tr><td>{a}</td><td>{b}</td><td class='r'>{c:02d}</td></tr>" for a, b, c in evidence)
pages[TECH - 1]["body"] = (
    block(cx(1), 16, span(3), '<div class="lab">Practice — Technical capability</div>')
    + block(cx(1), 40, span(5), '<h1 class="display">Designed to be built.</h1>')
    + block(cx(1), 64, span(5), '<p class="txt">SCALE develops projects beyond concept imagery. Design '
            'is resolved in BIM / Revit documentation, construction drawings, joinery details and '
            'coordinated ceiling, lighting and MEP layouts, so the built result holds the geometry, '
            'materials and light set at concept.</p>'
            '<p class="txt">Shadow gaps, junctions and joinery are detailed in the drawings, and the '
            'same team follows the work on site.</p>')
    + block(cx(1), 128, span(5), '<div class="lab">Drawings in this portfolio</div>'
            f'<table class="evidence">{ev}</table>')
    + fig("p35_3_w.jpeg", cx(7), 60, span(6), 40.8,
          cap("Villa Sarbast, section.", "Solid, void and transparency — upper frames over a glazed lower level."), "center", "plan")
)

# ================================================================ CONTENTS
toc = f'<div class="toc-grp"><div class="lab">Studio</div><ul><li><span>Profile and design position</span><em>{STUDIO:02d}</em></li></ul></div>'
toc += '<div class="toc-grp"><div class="lab">Selected projects</div><ul>'
for q in projects:
    toc += (f'<li><i>{q["no"]}</i><span>{q["title"]}</span><small>{q["cat"]}</small>'
            f'<em>{q["page"]:02d}</em></li>')
toc += "</ul></div>"
toc += (f'<div class="toc-grp"><div class="lab">Practice</div><ul>'
        f'<li><span>Services</span><em>{SERVICES:02d}</em></li>'
        f'<li><span>Process</span><em>{SERVICES+1:02d}</em></li>'
        f'<li><span>Technical capability</span><em>{TECH:02d}</em></li>'
        f'<li><span>Detail</span><em>{TECH+1:02d}</em></li></ul></div>')
toc += (f'<div class="toc-grp"><div class="lab">Founders · Index · Contact</div><ul>'
        f'<li><span>Founders</span><em>{FOUNDERS:02d}</em></li>'
        f'<li><span>Project index</span><em>{INDEX:02d}</em></li>'
        f'<li><span>Contact</span><em>{len(pages):02d}</em></li></ul></div>')
pages[CONTENTS - 1]["body"] = (
    block(cx(1), 16, span(3), '<div class="lab">Contents</div>')
    + block(cx(1), 40, span(4), '<p class="statement sm">Selected works in architecture, interior '
            'architecture and commercial interiors.</p>')
    + block(cx(1), 172, span(4), '<p class="note">Cover — Private Villa, Shiraz, Iran.</p>')
    + block(cx(6), 16.5, span(7), f'<div class="toc">{toc}</div>')
)

# ================================================================ ASSEMBLE
LOGO = ('<svg class="mark" viewBox="0 0 12 12"><path d="M0 0h3.2v8.8H12V12H0z"/></svg>'
        '<span>SCALE</span>')
html_pages = []
for i, pg in enumerate(pages, 1):
    foot = ""
    if pg["foot"]:
        foot = (f'<div class="foot"><span>SCALE</span><span>{pg["section"]}</span>'
                f'<span>{i:02d}</span></div>')
    body = pg["body"].replace("{LOGO}", LOGO)
    html_pages.append(f'<section class="page {pg["cls"]}">{body}{foot}</section>')

css = (ROOT / "style.css").read_text()
html = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>SCALE — Selected Works</title><style>{css}</style></head>
<body>{''.join(html_pages)}</body></html>"""
(ROOT / "portfolio.html").write_text(html)
print(len(pages), "pages")
