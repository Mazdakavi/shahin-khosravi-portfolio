"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import CTABox from "@/components/CTABox";
import { projects } from "@/content/projects";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Built", value: "Built" },
  { label: "Completed", value: "Completed" },
  { label: "Dubai", value: "Dubai" },
  { label: "Iran", value: "Iran" },
];

export default function WorkPageClient() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.tags.some((t) => t === activeFilter) ||
            p.location.includes(activeFilter) ||
            p.status === activeFilter
        );

  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40">
        <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-text tracking-tight mb-4">
          Work
        </h1>
        <p className="text-text-muted text-sm mb-10 max-w-lg">
          Interior design and fit-out projects across residential and commercial
          sectors in Iran and the UAE.
        </p>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`text-xs uppercase tracking-widest px-4 py-2 rounded-sm border transition-colors ${
                activeFilter === filter.value
                  ? "bg-accent text-dark border-accent"
                  : "border-dark-border/40 text-text-muted hover:border-accent/40 hover:text-text"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-text-muted text-sm text-center py-16">
            No projects match this filter.
          </p>
        )}
      </SectionWrapper>

      <SectionWrapper>
        <CTABox />
      </SectionWrapper>
    </>
  );
}
