"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/ui/lightbox";
import { cn } from "@/lib/utils";

export function GalleryMasonry({ images, className }: { images: string[]; className?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className={cn("columns-2 gap-4 md:columns-3", className)}>
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActiveIndex(i)}
            className="mb-4 block w-full overflow-hidden rounded-2xl focus-visible:outline-emerald"
          >
            <div className="relative w-full" style={{ aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "1/1" : "4/3" }}>
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </button>
        ))}
      </div>
      <Lightbox
        images={images}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setActiveIndex(null)}
      />
    </>
  );
}
