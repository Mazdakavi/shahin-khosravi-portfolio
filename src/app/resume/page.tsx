import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Shahin Khosravi — architect and interior designer with 12+ years of experience in Iran and the UAE.",
  openGraph: {
    title: "Resume | Shahin Khosravi",
    description:
      "Professional resume of Shahin Khosravi — architect and interior designer with 12+ years of experience.",
  },
};

const EXPERIENCE = [
  {
    period: "2023 – Present",
    title: "Freelance Architect & Interior Designer",
    location: "Dubai, UAE",
    description:
      "Villa interior fit-out and site supervision for private clients and developers. Projects include Al Barsha Villa, Regalia Tower, and Al Kabayel lighting design.",
    highlights: [
      "Full interior design and fit-out management",
      "Site supervision and quality control",
      "Lighting design and installation coordination",
    ],
  },
  {
    period: "2019 – 2023",
    title: "Senior Interior Designer",
    location: "Dubai, UAE",
    description:
      "Interior design for residential and commercial projects. Responsible for design development, construction documentation, and site coordination.",
    highlights: [
      "Led design teams on villa and apartment fit-outs",
      "Developed IFC drawing packages for contractors",
      "Coordinated with MEP and structural consultants",
    ],
  },
  {
    period: "2014 – 2019",
    title: "Architect & Interior Designer",
    location: "Iran",
    description:
      "Architectural and interior design for private residential projects. Covered full project lifecycle from concept through construction supervision.",
    highlights: [
      "Villa Renovation in Shiraz (built & occupied, ~350 sqm)",
      "Complete exterior and interior redesign projects",
      "Construction documentation and site supervision",
    ],
  },
  {
    period: "2012 – 2014",
    title: "Junior Architect",
    location: "Iran",
    description:
      "Architectural drafting, design support, and construction documentation for residential and small commercial projects.",
    highlights: [
      "AutoCAD production drawings",
      "Design development support",
      "Site visit documentation",
    ],
  },
];

const SKILLS = {
  design: [
    "Interior Design",
    "Space Planning",
    "Joinery Detailing",
    "Lighting Design",
    "Material Specification",
    "3D Visualization",
  ],
  technical: [
    "Construction Documentation",
    "IFC Drawing Packages",
    "BIM Coordination",
    "Site Supervision",
    "Quality Control",
    "Trade Coordination",
  ],
  software: [
    "AutoCAD (Expert)",
    "Revit/BIM (Advanced)",
    "Lumion (Advanced)",
    "SketchUp (Advanced)",
    "Adobe InDesign/Photoshop (Proficient)",
    "V-Ray/Enscape (Intermediate)",
  ],
};

export default function ResumePage() {
  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
              Resume
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-text tracking-tight mb-2">
              Shahin Khosravi
            </h1>
            <p className="text-text-muted text-sm">
              Architect &middot; Interior Designer &middot; Visualization
            </p>
          </div>
          <Button
            href="/assets/Shahin-CV-2025.pdf"
            variant="primary"
            external
          >
            Download CV
          </Button>
        </div>

        {/* Summary */}
        <div className="max-w-3xl mb-16">
          <p className="text-text-muted text-sm leading-relaxed">
            Architect and interior designer with 12+ years of experience across
            Iran and the UAE. Specialized in villa interior fit-out with a focus
            on buildable detailing, joinery design, lighting execution,
            construction documentation, and site supervision. 20+ projects
            delivered across residential and commercial sectors.
          </p>
        </div>

        {/* Experience Timeline */}
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-8">
            Experience
          </p>

          <div className="space-y-0">
            {EXPERIENCE.map((job, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-dark-border/30"
              >
                <div>
                  <p className="text-accent text-sm font-light">
                    {job.period}
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    {job.location}
                  </p>
                </div>
                <div>
                  <h3 className="text-text text-base font-medium mb-2">
                    {job.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <ul className="space-y-1">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text-accent text-xs mt-0.5">
                          &#10003;
                        </span>
                        <span className="text-text-muted/70 text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <SectionWrapper dark={false}>
        <p className="text-accent-dark text-xs uppercase tracking-[0.2em] mb-4">
          Skills
        </p>
        <h2 className="text-2xl md:text-3xl font-light text-light-text tracking-tight mb-10">
          Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(
            Object.entries(SKILLS) as [string, string[]][]
          ).map(([category, skills]) => (
            <div key={category}>
              <p className="text-light-text/40 text-xs uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-light-text/70 text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <CTABox />
      </SectionWrapper>
    </>
  );
}
