# Shahin Khosravi — Portfolio Website

Architect & interior designer portfolio and lead-generation site. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Project Structure

```
src/
  app/
    page.tsx              # Home (single-scroll conversion page)
    work/
      page.tsx            # Projects index with filters
      [slug]/page.tsx     # Project detail template
    services/page.tsx     # Service packages
    about/page.tsx        # Bio, tools, languages
    resume/page.tsx       # Experience timeline + skills
    contact/page.tsx      # Contact form + direct methods
    layout.tsx            # Root layout (font, header, footer)
    globals.css           # Tailwind theme + animations
    hooks/useInView.ts    # Scroll-based animation hook
  components/
    Header.tsx            # Sticky header with mobile menu
    Footer.tsx            # Contact info + navigation
    Button.tsx            # Primary/secondary/outline variants
    SectionWrapper.tsx    # Consistent padding + scroll animation
    StatStrip.tsx         # Experience stats bar
    ProjectCard.tsx       # Project thumbnail card
    ProjectGallery.tsx    # Responsive image grid + lightbox
    FactsBar.tsx          # Chips: location, year, type, etc.
    CTABox.tsx            # WhatsApp + Book call + Email
    ContactForm.tsx       # Client-side validated form
    WhatsAppFloatingButton.tsx  # Mobile-only floating CTA
  content/
    projects.ts           # Project data array
  lib/
    analytics.ts          # Event tracking + WhatsApp URL
public/
  assets/
    projects/{slug}/      # Project images
    Shahin-CV-2025.pdf    # Downloadable CV
  og.jpg                  # OpenGraph image
```

## Adding Images

Replace placeholder images with real project photos:

```
public/assets/projects/{slug}/hero.jpg     # Hero/cover image (16:9 or 4:3)
public/assets/projects/{slug}/01.jpg       # Gallery images
public/assets/projects/{slug}/02.jpg
public/assets/projects/{slug}/plan-01.jpg  # Drawing/plan images (optional)
```

Recommended sizes:
- Hero images: 1920x1280px (or similar 3:2 ratio)
- Gallery images: 1200x900px (4:3 ratio)
- Drawing images: 1600x1200px

Also replace:
- `public/og.jpg` — 1200x630px OpenGraph image
- `public/assets/Shahin-CV-2025.pdf` — actual CV PDF

## Adding a New Project

1. Add a new object to `src/content/projects.ts`:

```ts
{
  slug: "project-slug",
  title: "Project Name",
  location: "City, Country",
  year: 2025,
  status: "Built",           // Built | Completed | Concept | In Progress
  type: "Residential",
  area: "~200 sqm (approx.)", // optional
  role: "Interior Designer",
  summary: "2-3 sentence project description.",
  highlights: [
    "Key decision or approach 1",
    "Key decision or approach 2",
    "Key decision or approach 3",
  ],
  deliverables: [
    "Interior design drawings",
    "Material specifications",
  ],
  tags: ["Built", "Dubai", "Residential"],
  heroImage: "/assets/projects/project-slug/hero.jpg",
  galleryImages: [
    "/assets/projects/project-slug/01.jpg",
    "/assets/projects/project-slug/02.jpg",
  ],
  drawingImages: [],
}
```

2. Create the image directory and add photos:
```bash
mkdir -p public/assets/projects/project-slug
# Add hero.jpg, 01.jpg, 02.jpg, etc.
```

3. The project will automatically appear on the Work page and be accessible at `/work/project-slug`.

## Analytics

Analytics placeholders are included but commented out. To activate:

**Plausible:** Uncomment the script tag in `src/app/layout.tsx` and add your domain.

**GA4:** Uncomment the GA4 scripts in `src/app/layout.tsx` and replace `G-XXXXXXXXXX` with your measurement ID.

Event tracking is already wired up for WhatsApp clicks, book-a-call clicks, form submissions, CV downloads, and email clicks.

## Design Tokens

| Token | Value |
|-------|-------|
| Dark background | `#0B0B0C` |
| Light background | `#FFFFFF` |
| Text (on dark) | `#F5F5F5` |
| Text (on light) | `#111111` |
| Accent (gold) | `#C9B38C` |

## Contact Form

The contact form currently simulates submission. To connect to a real backend, update the `handleSubmit` function in `src/components/ContactForm.tsx` with your API endpoint or form service (Formspree, Netlify Forms, etc.).

## Deployment

Works with any Next.js hosting:
- **Vercel**: `npx vercel`
- **Static export**: Add `output: 'export'` to `next.config.ts`
