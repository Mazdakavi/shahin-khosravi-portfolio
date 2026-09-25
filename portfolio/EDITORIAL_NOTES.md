# SCALE — Selected Works: editorial pass

Source: `SCALE_Portfolio_Digital.pdf` (39 pp, A4 landscape).
Output: `SCALE_Portfolio_Selected_Works.pdf` (39 pp, A4 landscape, fonts embedded, ~8.4 MB).
Rebuild: `python3 build.py && node render.mjs` (needs Playwright + Chromium).

No project facts were added. Every name, location, area, year and scope comes from the source PDF.

## What changed

**Opening**
- Cover: the wordmark appeared twice ("SCALE" logo plus a large "SCALE"). The cover now carries the logo once and the title "Selected Works".
- Contents: removed the duplicated page reference for Studio and gave Founders, Project index and Contact their own page numbers. Added a cover image credit.
- Studio: replaced the headline "From concept to construction, held to one line" with a plainer statement. Removed the tagline "What is drawn is what is built", which repeated principle 06. Tightened the body text.
- Design position: shortened the six principles to one-word heads.
  - Changed the massing caption from "Villa Sarbast" to a general "Massing studies", because only the lowest model is clearly Sarbast.

**Projects** (9 projects, each a separate sequence: hero page first, then supporting pages)
- Captions that called perspective views "elevations" now read "façade" or "view" (Palm Jumeirah, Villa Sarbast, Parsa Villa).
- Hero texts are no longer repeated word for word on the following pages. This affected Palm Jumeirah, Parsa, Niknam and Al Barsha.
- Al Barsha Apartment: dropped the third kitchen view, which repeated the hero and the kitchen image.
- O'Munt Store: dropped the corridor view, which is the source image of the floor-light detail on page 36.
- O'Munt: the materials text said "a single deep red", but the renders also show red, green and orange furniture. It is corrected.
- Dousideh: the caption said joinery elevations "A–J", but G and H are not shown. It now reads "Joinery elevations".
- Interior spreads were enlarged to fill the page and no longer leave the lower third empty.
- The Al Barsha and ALO plans no longer sit on a visible beige box.

**Practice**
- Services: removed "Architectural visualization", which duplicated the column heading. Added "Renovation", supported by the studio text and the project index.
- Process: removed the second, differently named stage bar, so there are now three phases and nine steps. The page moved from black to warm grey to match the palette.
- Technical capability: the old page repeated four drawings already shown in the projects and repeated the services list. It now has:
  - the capability text,
  - one Sarbast section,
  - a table pointing to the drawings in this portfolio by page number.
- Detail: removed the Al Barsha mirror, which duplicated the entry image. The O'Munt image is now the only place that view appears.

**Closing**
- Founders: rebalanced the page and removed the "direct oversight" sentence from the Studio page so it appears only here.
- Project index: missing cells now show "—". The note explains which projects carry a page reference.
- Contact: the headline now names the studio's stated geography instead of the generic "Let's discuss your project".

## Confirmed by the client (applied)
- Al Barsha Apartment is in Dubai Marina. Project renamed **Dubai Marina Apartment**.
- Villa Sarbast: Shiraz, Iran.
- Parsa Villa: Shiraz, Iran, 2026.
- Niknam Villa: Fars Province, Iran, 2025.
- O'Munt Store: Shiraz, Iran, 2019.
- ALO Turkey Office: Skyland Tower, Istanbul, 2026.
- Private Villa: concept to execution; 180 m² built on a 1,000 m² plot.
- Dubai Marina Apartment: 2026.
- Farnam Saremi: bio taken from the SCALE website.

## Still open
1. **Image resolution** is 110–125 ppi at placement, taken from the compressed digital edition. That is fine on screen, but for print, rebuild from the original renders.
