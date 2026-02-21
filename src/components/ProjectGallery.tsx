"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="relative aspect-[4/3] overflow-hidden rounded-sm bg-dark-card group cursor-pointer"
          >
            <Image
              src={src}
              alt={`${title} — image ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-text-muted hover:text-text text-2xl z-10"
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <div className="relative max-w-5xl w-full aspect-[16/10]">
            <Image
              src={images[selected]}
              alt={`${title} — image ${selected + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected((selected - 1 + images.length) % images.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text text-3xl p-2"
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected((selected + 1) % images.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text text-3xl p-2"
                aria-label="Next image"
              >
                &#8250;
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
