import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shahin Khosravi — architect and interior designer with 12+ years of experience across Iran and the UAE, focused on villa interior fit-out and site supervision.",
  openGraph: {
    title: "About | Shahin Khosravi",
    description:
      "Shahin Khosravi — architect and interior designer with 12+ years of experience across Iran and the UAE.",
  },
};

const FOCUS_AREAS = [
  "Buildable detailing — drawings contractors can build from",
  "Custom joinery design and millwork sections",
  "Lighting design — indirect, accent, and task lighting execution",
  "Construction documentation that reduces RFIs",
  "Site supervision and quality control",
  "Material specification and procurement coordination",
];

const SOFTWARE = [
  { name: "AutoCAD", level: "Expert" },
  { name: "Revit / BIM", level: "Advanced" },
  { name: "Lumion", level: "Advanced" },
  { name: "SketchUp", level: "Advanced" },
  { name: "Adobe InDesign / Photoshop", level: "Proficient" },
  { name: "V-Ray / Enscape", level: "Intermediate" },
  { name: "AI-driven design tools", level: "Intermediate" },
];

const LANGUAGES = [
  { name: "Farsi", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Basic" },
];

export default function AboutPage() {
  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="max-w-3xl">
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-text tracking-tight mb-6">
            Shahin Khosravi
          </h1>
          <p className="text-accent text-sm mb-8">
            Architect &middot; Interior Designer &middot; Visualization
          </p>

          <div className="space-y-4 text-text-muted text-sm leading-relaxed mb-12">
            <p>
              I&apos;m an architect and interior designer based in Dubai with
              12+ years of experience across Iran and the UAE. My focus is
              residential interior fit-out — specifically villa projects where
              clean detailing, joinery precision, lighting execution, and site
              coordination are what determine the quality of the final result.
            </p>
            <p>
              I believe the gap between a good design and a good built result is
              in the documentation and supervision. Every drawing I produce is
              detailed for construction, not just presentation. And I stay on
              site to ensure what gets built matches what was drawn.
            </p>
            <p>
              Over 20+ projects, I&apos;ve worked across scales — from private
              villa renovations to commercial interiors — always with the same
              focus: buildable design, thorough documentation, and hands-on
              quality control.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Focus areas */}
      <SectionWrapper dark={false}>
        <div className="max-w-3xl">
          <p className="text-accent-dark text-xs uppercase tracking-[0.2em] mb-4">
            Focus
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-light-text tracking-tight mb-8">
            Core strengths
          </h2>
          <ul className="space-y-3">
            {FOCUS_AREAS.map((area) => (
              <li key={area} className="flex gap-3">
                <span className="text-accent flex-shrink-0">—</span>
                <span className="text-light-text/70 text-sm">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Tools & Languages */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
              Software
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-text tracking-tight mb-8">
              Tools
            </h2>
            <div className="space-y-3">
              {SOFTWARE.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between py-2 border-b border-dark-border/20"
                >
                  <span className="text-text text-sm">{tool.name}</span>
                  <span className="text-text-muted text-xs tracking-wide">
                    {tool.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
              Communication
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-text tracking-tight mb-8">
              Languages
            </h2>
            <div className="space-y-3">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between py-2 border-b border-dark-border/20"
                >
                  <span className="text-text text-sm">{lang.name}</span>
                  <span className="text-text-muted text-xs tracking-wide">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
                Location
              </p>
              <p className="text-text text-sm">Dubai, UAE</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <CTABox />
      </SectionWrapper>
    </>
  );
}
