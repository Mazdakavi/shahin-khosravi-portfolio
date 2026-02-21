"use client";

import { useInView } from "@/app/hooks/useInView";

type SectionWrapperProps = {
  id?: string;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

export default function SectionWrapper({
  id,
  dark = true,
  children,
  className = "",
  noPadding = false,
}: SectionWrapperProps) {
  const { ref, isVisible } = useInView(0.08);

  return (
    <section
      id={id}
      ref={ref}
      className={`
        ${dark ? "bg-dark text-text" : "bg-light text-light-text"}
        ${noPadding ? "" : "py-20 md:py-28 lg:py-32"}
        ${className}
      `}
    >
      <div
        className={`mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
