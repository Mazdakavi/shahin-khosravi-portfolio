import Image from "next/image";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import StatStrip from "@/components/StatStrip";
import ProjectCard from "@/components/ProjectCard";
import CTABox from "@/components/CTABox";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/content/projects";
import { WHATSAPP_URL } from "@/lib/analytics";

/* ── Hero ──────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/projects/villa-renovation-shiraz/hero.jpg"
          alt="Villa interior design by Shahin Khosravi"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-6 animate-fade-up">
            Architect &middot; Interior Designer &middot; Dubai, UAE
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-text leading-[1.1] tracking-tight mb-6 animate-fade-up delay-1">
            Villa interior fit-out
            <br />
            <span className="text-accent">+ site supervision</span>
            <br />
            in Dubai.
          </h1>

          <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up delay-2">
            I design and deliver clean, buildable interiors — focused on joinery
            details, lighting execution, and site coordination so the finished
            result matches the drawings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-3">
            <Button href={WHATSAPP_URL} variant="primary" size="lg" external>
              WhatsApp
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a 15-minute call
            </Button>
            <Button href="#projects" variant="secondary" size="lg">
              View work
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-5">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-text-muted/40 to-transparent" />
      </div>
    </section>
  );
}

/* ── What You Get ──────────────────────────────────── */
const WHAT_YOU_GET = [
  {
    title: "Design that's buildable",
    description:
      "Every drawing is detailed for construction — not just presentation. Materials, dimensions, and junctions are specified so contractors can build without guesswork.",
  },
  {
    title: "Joinery + ceiling + lighting details",
    description:
      "Custom millwork sections, ceiling cut lines with indirect lighting layouts, and fixture specifications that coordinate with MEP.",
  },
  {
    title: "Site supervision + quality control",
    description:
      "Regular site visits, trade coordination, snag lists, and material verification. I stay on-site until the finish matches the design intent.",
  },
  {
    title: "Documentation that reduces mistakes",
    description:
      "Comprehensive drawing sets, material schedules, and specifications that minimize RFIs and rework during construction.",
  },
];

function WhatYouGet() {
  return (
    <SectionWrapper id="what-you-get">
      <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
        Deliverables
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight mb-12">
        What you get
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHAT_YOU_GET.map((item) => (
          <div
            key={item.title}
            className="bg-dark-card border border-dark-border/30 rounded-sm p-6 hover:border-accent/30 transition-colors"
          >
            <h3 className="text-text text-base font-medium mb-3">
              {item.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ── Featured Projects ─────────────────────────────── */
function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" dark={false}>
      <p className="text-accent-dark text-xs uppercase tracking-[0.2em] mb-4">
        Portfolio
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-light-text tracking-tight mb-4">
        Featured Projects
      </h2>
      <p className="text-light-text/50 text-sm mb-12 max-w-lg">
        Selected work across residential and commercial interiors in Iran and
        the UAE.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="[&_h3]:text-light-text [&_p]:text-light-text/50 [&_span]:border-light-text/10 [&_span]:text-light-text/40">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/work" variant="outline" className="border-light-text/20 text-light-text hover:bg-light-text hover:text-light">
          View all projects
        </Button>
      </div>
    </SectionWrapper>
  );
}

/* ── Services Teaser ───────────────────────────────── */
const SERVICES = [
  {
    title: "Full Villa Fit-Out + Site Supervision",
    label: "Recommended",
    description:
      "End-to-end: concept, detailed drawings, material specs, procurement support, and on-site supervision through handover.",
  },
  {
    title: "Design + IFC Drawing Package",
    label: "For contractors & studios",
    description:
      "Complete design and Issued-For-Construction drawings — ready for your team to build from.",
  },
  {
    title: "Site Supervision / Quality Control",
    label: "Standalone",
    description:
      "Regular site visits, trade coordination, snag lists, and quality control for projects already in construction.",
  },
];

function ServicesTeaser() {
  return (
    <SectionWrapper id="services">
      <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
        Services
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight mb-12">
        How I work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-dark-card border border-dark-border/30 rounded-sm p-6 md:p-8 hover:border-accent/30 transition-colors"
          >
            <span className="text-accent text-[10px] uppercase tracking-widest">
              {service.label}
            </span>
            <h3 className="text-text text-lg font-medium mt-2 mb-3">
              {service.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button href="/services" variant="secondary">
          See full service details
        </Button>
      </div>
    </SectionWrapper>
  );
}

/* ── Process ───────────────────────────────────────── */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Brief + Site Visit",
    description:
      "We discuss your requirements, visit the site, and define scope, budget expectations, and timeline.",
  },
  {
    step: "02",
    title: "Concept + Design Development",
    description:
      "Layouts, material palettes, 3D visualizations, and design iterations until we lock the direction.",
  },
  {
    step: "03",
    title: "Detailed Drawings + Specs",
    description:
      "Construction drawings for joinery, ceilings, lighting, and finishes. Material schedules and specifications for procurement.",
  },
  {
    step: "04",
    title: "Site Supervision + Handover",
    description:
      "Regular site visits, trade coordination, quality control, snag lists, and final handover.",
  },
];

function Process() {
  return (
    <SectionWrapper dark={false}>
      <p className="text-accent-dark text-xs uppercase tracking-[0.2em] mb-4">
        Process
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-light-text tracking-tight mb-12">
        From brief to handover
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROCESS_STEPS.map((step) => (
          <div key={step.step}>
            <span className="text-accent text-3xl font-light block mb-3">
              {step.step}
            </span>
            <h3 className="text-light-text text-base font-medium mb-2">
              {step.title}
            </h3>
            <p className="text-light-text/50 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* ── About Teaser ──────────────────────────────────── */
function AboutTeaser() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight mb-6">
            Shahin Khosravi
          </h2>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            Architect and interior designer with 12+ years of experience across
            Iran and the UAE. I focus on villa interiors where buildable
            detailing, joinery design, lighting execution, and site coordination
            matter most.
          </p>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            My work bridges design intent and construction reality — detailed
            drawings that contractors can build from, and on-site presence to
            ensure the result matches.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["AutoCAD", "Revit/BIM", "Lumion", "SketchUp", "Adobe Suite"].map(
              (tool) => (
                <span
                  key={tool}
                  className="text-[10px] uppercase tracking-widest text-text-muted border border-dark-border/40 px-3 py-1 rounded-sm"
                >
                  {tool}
                </span>
              )
            )}
          </div>

          <Button href="/about" variant="secondary">
            More about me
          </Button>
        </div>

        <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-dark-card">
          <Image
            src="/assets/projects/villa-renovation-shiraz/01.jpg"
            alt="Interior design work by Shahin Khosravi"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── CTA Strip ─────────────────────────────────────── */
function CTAStrip() {
  return (
    <section className="bg-dark-soft border-y border-dark-border/30 py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 text-center">
        <p className="text-text text-lg md:text-xl font-light mb-6">
          Have a villa project in Dubai?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={WHATSAPP_URL} variant="primary" external>
            WhatsApp
          </Button>
          <Button href="/contact" variant="secondary">
            Book a 15-minute call
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Contact Section ───────────────────────────────── */
function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        <div>
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-text tracking-tight mb-6">
            Let&apos;s discuss your project
          </h2>
          <p className="text-text-muted text-sm leading-relaxed mb-8">
            Whether you need full interior fit-out, a drawing package, or site
            supervision — reach out and I&apos;ll get back to you within 24
            hours.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-accent hover:text-accent-hover transition-colors"
            >
              <span className="text-sm">+971 50 113 8078 (WhatsApp)</span>
            </a>
            <a
              href="mailto:mazdakavi@gmail.com"
              className="flex items-center gap-3 text-text-muted hover:text-text transition-colors"
            >
              <span className="text-sm">mazdakavi@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/shahin-khosravi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-muted hover:text-text transition-colors"
            >
              <span className="text-sm">linkedin.com/in/shahin-khosravi</span>
            </a>
          </div>

          <CTABox />
        </div>

        <ContactForm />
      </div>
    </SectionWrapper>
  );
}

/* ── Page ───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <WhatYouGet />
      <CTAStrip />
      <FeaturedProjects />
      <ServicesTeaser />
      <Process />
      <AboutTeaser />
      <CTAStrip />
      <ContactSection />
    </>
  );
}
