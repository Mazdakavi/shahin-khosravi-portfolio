export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  status: "Built" | "Concept" | "In Progress" | "Completed";
  type: string;
  area?: string;
  role: string;
  summary: string;
  highlights: string[];
  deliverables: string[];
  tags: string[];
  heroImage: string;
  galleryImages: string[];
  drawingImages: string[];
}

export const projects: Project[] = [
  {
    slug: "villa-renovation-shiraz",
    title: "Villa Renovation",
    location: "Shiraz, Iran",
    year: 2021,
    status: "Built",
    type: "Residential",
    area: "~350 sqm (approx.)",
    role: "Lead Architect & Interior Designer",
    summary:
      "A private villa renovation covering exterior and interior redesign. The project centered on creating an open-plan living, dining, and kitchen layout with indirect perimeter lighting, ceiling cut lines, and a custom sculptural fireplace — all organized around a courtyard and pool as the social heart of the home.",
    highlights: [
      "Open-plan living/dining/kitchen with seamless spatial flow",
      "Indirect perimeter lighting with precision ceiling cut lines",
      "Custom sculptural fireplace as focal point with integrated joinery throughout",
    ],
    deliverables: [
      "Full architectural drawings (plans, sections, elevations)",
      "Interior design concept and material specifications",
      "Lighting design and fixture schedule",
      "Custom joinery and millwork details",
      "Construction documentation",
      "Site supervision through completion",
    ],
    tags: ["Built", "Iran", "Residential", "Renovation"],
    heroImage: "/assets/projects/villa-renovation-shiraz/hero.jpg",
    galleryImages: [
      "/assets/projects/villa-renovation-shiraz/01.jpg",
      "/assets/projects/villa-renovation-shiraz/02.jpg",
      "/assets/projects/villa-renovation-shiraz/03.jpg",
      "/assets/projects/villa-renovation-shiraz/04.jpg",
    ],
    drawingImages: [
      "/assets/projects/villa-renovation-shiraz/plan-01.jpg",
    ],
  },
  {
    slug: "regalia-tower",
    title: "Regalia Tower",
    location: "Business Bay, Dubai",
    year: 2025,
    status: "Completed",
    type: "Commercial / Residential",
    role: "Interior Designer & Fit-Out Supervisor",
    summary:
      "Interior design and fit-out for a unit in Regalia Tower, Business Bay. The project spanned from concept development through detailed design to on-site supervision, ensuring every material choice and finish detail was executed to specification.",
    highlights: [
      "Concept-to-completion interior design with detailed supervision",
      "Material and finish coordination across multiple trades",
      "Quality control ensuring design intent matched final execution",
    ],
    deliverables: [
      "Concept design and mood boards",
      "Detailed interior drawings (IFC level)",
      "Material and finish schedule",
      "Fit-out coordination and supervision",
      "Snag list and handover documentation",
    ],
    tags: ["Completed", "Dubai", "Commercial", "Fit-Out"],
    heroImage: "/assets/projects/regalia-tower/hero.jpg",
    galleryImages: [
      "/assets/projects/regalia-tower/01.jpg",
      "/assets/projects/regalia-tower/02.jpg",
      "/assets/projects/regalia-tower/03.jpg",
    ],
    drawingImages: [],
  },
  {
    slug: "al-barsha-villa",
    title: "Al Barsha Villa",
    location: "Dubai, UAE",
    year: 2025,
    status: "Completed",
    type: "Residential",
    role: "Interior Designer & Site Coordinator",
    summary:
      "Full interior design and fit-out for a villa in Al Barsha, Dubai. The scope covered materials selection, lighting design, site coordination across all trades, and quality control from demolition through handover.",
    highlights: [
      "End-to-end interior design with full materials and lighting specification",
      "Site coordination across joinery, MEP, and finishing trades",
      "Lighting execution aligned with design intent and load requirements",
    ],
    deliverables: [
      "Interior design drawings and specifications",
      "Lighting design and load calculations",
      "Material procurement coordination",
      "Site supervision and quality control",
      "Final snag list and handover",
    ],
    tags: ["Completed", "Dubai", "Residential", "Villa"],
    heroImage: "/assets/projects/al-barsha-villa/hero.jpg",
    galleryImages: [
      "/assets/projects/al-barsha-villa/01.jpg",
      "/assets/projects/al-barsha-villa/02.jpg",
      "/assets/projects/al-barsha-villa/03.jpg",
    ],
    drawingImages: [],
  },
  {
    slug: "al-kabayel-lighting",
    title: "Al Kabayel Lighting",
    location: "Dubai, UAE",
    year: 2024,
    status: "Completed",
    type: "Technical / Lighting",
    role: "Lighting Designer",
    summary:
      "Specialized lighting design and installation project including chandelier load calculations and fixture specification. Focused on achieving the right balance between ambient, task, and accent lighting while meeting structural and electrical requirements.",
    highlights: [
      "Chandelier load calculations and structural coordination",
      "Custom lighting layout with layered ambient/task/accent approach",
      "Installation supervision ensuring precise fixture positioning",
    ],
    deliverables: [
      "Lighting design layout",
      "Load calculations and structural coordination documents",
      "Fixture specification and procurement support",
      "Installation supervision",
    ],
    tags: ["Completed", "Dubai", "Lighting", "Technical"],
    heroImage: "/assets/projects/al-kabayel-lighting/hero.jpg",
    galleryImages: [
      "/assets/projects/al-kabayel-lighting/01.jpg",
      "/assets/projects/al-kabayel-lighting/02.jpg",
    ],
    drawingImages: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
