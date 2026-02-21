"use client";

import { useInView } from "@/app/hooks/useInView";

const STATS = [
  { value: "12+", label: "years" },
  { value: "20+", label: "projects" },
  { value: "Iran + UAE", label: "" },
];

export default function StatStrip() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section className="bg-dark-soft border-y border-dark-border/30 py-10 md:py-14">
      <div
        ref={ref}
        className={`mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 flex flex-wrap items-center justify-center gap-8 md:gap-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-baseline gap-2 text-center">
            <span className="text-accent text-2xl md:text-3xl font-light tracking-tight">
              {stat.value}
            </span>
            {stat.label && (
              <span className="text-text-muted text-sm tracking-wide">
                {stat.label}
              </span>
            )}
            {i < STATS.length - 1 && (
              <span className="text-dark-border ml-6 md:ml-8 hidden sm:inline">
                &middot;
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
