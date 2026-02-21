import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAllSlugs } from "@/content/projects";
import FactsBar from "@/components/FactsBar";
import ProjectGallery from "@/components/ProjectGallery";
import CTABox from "@/components/CTABox";
import SectionWrapper from "@/components/SectionWrapper";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.location}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.location} | Shahin Khosravi`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const facts = [
    { label: "Location", value: project.location },
    { label: "Year", value: String(project.year) },
    { label: "Type", value: project.type },
    { label: "Status", value: project.status },
    { label: "Role", value: project.role },
    ...(project.area ? [{ label: "Area", value: project.area }] : []),
  ];

  // Find next/prev projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] bg-dark overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.title} — ${project.location}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 pb-12 md:pb-16">
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-3">
              {project.type} &middot; {project.year}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-text tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-text-muted text-base">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Facts bar */}
      <SectionWrapper className="py-8 md:py-10 border-b border-dark-border/30">
        <FactsBar facts={facts} />
      </SectionWrapper>

      {/* Overview */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
            Overview
          </p>
          <p className="text-text text-base md:text-lg leading-relaxed">
            {project.summary}
          </p>
        </div>
      </SectionWrapper>

      {/* Key decisions */}
      {project.highlights.length > 0 && (
        <SectionWrapper dark={false}>
          <div className="max-w-3xl">
            <p className="text-accent-dark text-xs uppercase tracking-[0.2em] mb-4">
              Key decisions
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-light-text tracking-tight mb-8">
              Details &amp; execution
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent flex-shrink-0 mt-1">—</span>
                  <span className="text-light-text/70 text-sm leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      {/* Gallery */}
      {project.galleryImages.length > 0 && (
        <SectionWrapper>
          <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
            Gallery
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-text tracking-tight mb-8">
            Project images
          </h2>
          <ProjectGallery
            images={project.galleryImages}
            title={project.title}
          />
        </SectionWrapper>
      )}

      {/* Drawings */}
      {project.drawingImages.length > 0 && (
        <SectionWrapper dark={false}>
          <p className="text-accent-dark text-xs uppercase tracking-[0.2em] mb-4">
            Drawings
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-light-text tracking-tight mb-8">
            Plans &amp; sections
          </h2>
          <ProjectGallery
            images={project.drawingImages}
            title={`${project.title} — drawings`}
          />
        </SectionWrapper>
      )}

      {/* What I delivered */}
      {project.deliverables.length > 0 && (
        <SectionWrapper>
          <div className="max-w-3xl">
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
              Scope
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-text tracking-tight mb-8">
              What I delivered
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent flex-shrink-0">&#10003;</span>
                  <span className="text-text-muted text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      {/* CTA */}
      <SectionWrapper>
        <CTABox />
      </SectionWrapper>

      {/* Next project */}
      {nextProject && nextProject.slug !== slug && (
        <section className="border-t border-dark-border/30">
          <a
            href={`/work/${nextProject.slug}`}
            className="block group"
          >
            <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 py-12 md:py-16 flex items-center justify-between">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">
                  Next project
                </p>
                <p className="text-text text-xl md:text-2xl font-light group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <span className="text-text-muted text-2xl group-hover:text-accent group-hover:translate-x-1 transition-all">
                &rarr;
              </span>
            </div>
          </a>
        </section>
      )}
    </>
  );
}
