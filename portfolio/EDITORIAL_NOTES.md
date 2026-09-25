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

## Open questions (not changed; need your confirmation)
1. **Private Villa**: the website repo (`src/content/projects.ts`) uses the same renders as "Dr. Sajadi Villa". There it is marked *Concept*, 180 m² built on 1,000 m² land. The portfolio says *concept to execution*. Which is correct, and should the area be added?
2. **Al Barsha Apartment**: the repo uses the same renders as "Dubai Marina Apartment" (2026, Completed). The portfolio says Al Barsha, 2025. Which location and year are correct?
3. **Villa Sarbast**: the design-study board reads "Sarbast, Fars Province". The portfolio says Shiraz. Please confirm.
4. **Farnam Saremi's bio** is short because the source gives no years of experience or background. Send details if you'd like it to match Shahin's.
5. **Missing data**: Parsa Villa, Niknam Villa and O'Munt Store have no location or year. ALO Turkey Office has no location.
6. **Image resolution** is 110–125 ppi at placement, taken from the compressed digital edition. That is fine on screen, but for print, rebuild using the original renders or the 20 MB "Selected Works" PDF.
