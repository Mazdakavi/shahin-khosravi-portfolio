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
    slug: "villa-dr-sajadi",
    title: "Dr. Sajadi Villa",
    location: "Shiraz, Fars Province, Iran",
    year: 2024,
    status: "Concept",
    type: "Residential",
    area: "180 sqm built · 1,000 sqm land",
    role: "Lead Architect & Interior Designer",
    summary:
      "A private single-storey courtyard villa in Shiraz, Fars Province, Iran. Designed on a 1,000 sqm land plot, the 180 sqm villa focuses on privacy, calm indoor-outdoor living, and a strong connection between architecture, landscape, water, and natural light. Clean concrete volumes, large glass openings, and a restrained material palette create a contemporary residence that feels private, quiet, and refined.",
    highlights: [
      "Courtyard-based layout with pool, garden, and outdoor living areas integrated into the main spatial experience.",
      "Minimal concrete massing with large glass openings, controlled views, and strong privacy from the surrounding site.",
      "Warm contemporary interior using muted tones, stone, wood, textured panels, black glass, concealed lighting, and clean custom joinery.",
    ],
    deliverables: [
      "Architectural concept design",
      "Villa layout and spatial planning",
      "Exterior façade design",
      "Interior design — bedroom, kitchen, living, circulation",
      "Courtyard, pool, deck, and landscape design concept",
      "Material and lighting concept",
      "3D realistic exterior renders",
      "3D realistic interior renders",
      "Floor plan presentation",
      "Visual identity for portfolio presentation",
    ],
    tags: ["Concept", "Iran", "Residential", "Villa"],
    heroImage: "/assets/projects/villa-dr-sajadi/REALISTIC/1.png",
    galleryImages: [
      "/assets/projects/villa-dr-sajadi/REALISTIC/2.png",
      "/assets/projects/villa-dr-sajadi/REALISTIC/3.png",
      "/assets/projects/villa-dr-sajadi/REALISTIC/4.png",
      "/assets/projects/villa-dr-sajadi/REALISTIC/5.png",
      "/assets/projects/villa-dr-sajadi/REALISTIC/6.png",
      "/assets/projects/villa-dr-sajadi/REALISTIC/7.png",
      "/assets/projects/villa-dr-sajadi/REALISTIC/8.png",
      "/assets/projects/villa-dr-sajadi/REALISTIC/9.png",
    ],
    drawingImages: [],
  },
  {
    slug: "dubai-marina-apartment",
    title: "Dubai Marina Apartment Interior",
    location: "Dubai Marina, Dubai, UAE",
    year: 2026,
    status: "Completed",
    type: "Residential",
    area: "2-Bedroom Apartment",
    role: "Lead Interior Designer / 3D Visualizer",
    summary:
      "A modern 2-bedroom residential interior design project focused on creating a clean, functional, and elegant living space. The design uses a muted contemporary palette, warm lighting, refined materials, and practical furniture planning to deliver a high-end yet comfortable apartment suited to modern Dubai living.",
    highlights: [
      "Clean modern interior language with soft neutral tones, warm lighting, and elegant material combinations.",
      "Practical space planning with clear circulation, efficient furniture layout, and functional daily-use zones.",
      "High-end visual presentation using realistic 3D renders to communicate mood, materials, lighting, and final interior atmosphere.",
    ],
    deliverables: [
      "Interior design concept",
      "Furniture layout and space planning",
      "Material and color palette selection",
      "Lighting mood and ceiling design direction",
      "Kitchen and bedroom furniture styling",
      "Realistic 3D visualization",
      "Presentation-ready project imagery",
    ],
    tags: ["Completed", "Dubai", "Residential", "Interior Design"],
    heroImage: "/assets/projects/dubai-marina-apartment/1.png",
    galleryImages: [
      "/assets/projects/dubai-marina-apartment/2.png",
      "/assets/projects/dubai-marina-apartment/3.png",
      "/assets/projects/dubai-marina-apartment/4.png",
      "/assets/projects/dubai-marina-apartment/5.png",
      "/assets/projects/dubai-marina-apartment/6.png",
      "/assets/projects/dubai-marina-apartment/7.png",
      "/assets/projects/dubai-marina-apartment/8.png",
    ],
    drawingImages: [
      "/assets/projects/dubai-marina-apartment/DR_SADRI_blueprint_BFAD97_white.png",
    ],
  },
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
