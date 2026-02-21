import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-dark-card mb-4">
        <Image
          src={project.heroImage}
          alt={`${project.title} — ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status chip */}
        <span className="absolute top-3 left-3 bg-dark/70 backdrop-blur-sm text-text text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm">
          {project.status}
        </span>
      </div>

      <h3 className="text-text text-lg font-medium tracking-wide group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-text-muted text-sm mt-1">
        {project.location} &middot; {project.year}
      </p>
      <p className="text-text-muted/70 text-sm mt-2 line-clamp-2 leading-relaxed">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-widest text-text-muted/60 border border-dark-border/40 px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
