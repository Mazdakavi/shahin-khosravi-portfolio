import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Villa interior fit-out, design drawing packages, and site supervision services by Shahin Khosravi in Dubai.",
  openGraph: {
    title: "Services | Shahin Khosravi",
    description:
      "Villa interior fit-out, design drawing packages, and site supervision services by Shahin Khosravi in Dubai.",
  },
};

const SERVICES = [
  {
    label: "Recommended",
    title: "Full Villa Fit-Out + Site Supervision",
    description:
      "End-to-end interior design and fit-out management. From initial concept through detailed design, material procurement, and on-site supervision to handover. Best for villa owners who want one person accountable for design quality and construction execution.",
    included: [
      "Site visit and project brief",
      "Concept design and mood boards",
      "Space planning and layout development",
      "3D visualizations for key areas",
      "Detailed construction drawings (IFC level)",
      "Joinery, ceiling, and lighting detail drawings",
      "Material and finish specifications",
      "Procurement coordination and vendor liaison",
      "Regular site visits and progress reporting",
      "Trade coordination (joinery, MEP, finishes)",
      "Quality control and snag list management",
      "Final handover documentation",
    ],
  },
  {
    label: "For contractors & studios",
    title: "Design + IFC Drawing Package",
    description:
      "Complete design development and Issued-For-Construction drawing sets. Ideal for fit-out contractors, design studios, or developers who have their own site team but need detailed, buildable documentation.",
    included: [
      "Concept design and design development",
      "Space planning and layout options",
      "3D visualizations",
      "Detailed IFC drawing package",
      "Joinery sections and millwork details",
      "Ceiling layout with lighting coordination",
      "Material and finish schedule",
      "Electrical and lighting fixture schedule",
      "Specification documents",
    ],
  },
  {
    label: "Standalone",
    title: "Site Supervision / Quality Control",
    description:
      "For projects already in construction that need professional oversight. Regular site visits, trade coordination, and quality control to ensure the design intent is maintained through execution.",
    included: [
      "Regular scheduled site visits",
      "Construction progress monitoring",
      "Material and workmanship quality checks",
      "Trade coordination and conflict resolution",
      "Snag list preparation and follow-up",
      "Design intent compliance verification",
      "Progress photo documentation",
      "Handover support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40">
        <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
          Services
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-text tracking-tight mb-4">
          What I offer
        </h1>
        <p className="text-text-muted text-sm mb-16 max-w-lg">
          Three service packages designed for different project needs — from
          full fit-out management to standalone drawing packages and site
          supervision.
        </p>

        <div className="space-y-8">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-sm p-8 md:p-10 border ${
                i === 0
                  ? "bg-dark-card border-accent/30"
                  : "bg-dark-card border-dark-border/30"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div className="max-w-xl">
                  <span className="text-accent text-[10px] uppercase tracking-widest">
                    {service.label}
                  </span>
                  <h2 className="text-xl md:text-2xl font-light text-text tracking-tight mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
                  What&apos;s included
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent flex-shrink-0 text-sm">
                        &#10003;
                      </span>
                      <span className="text-text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
