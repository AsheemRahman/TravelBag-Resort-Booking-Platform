"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: string[];
  index: number | null;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const open = index !== null;

  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-ink/90 backdrop-blur-sm data-[state=open]:animate-fade-up" />
        <Dialog.Content className="fixed inset-0 z-[80] flex items-center justify-center p-4 outline-none">
          <Dialog.Title className="sr-only">Image preview</Dialog.Title>
          {index !== null && (
            <div className="relative aspect-[4/3] w-full max-w-4xl">
              <Image
                src={images[index]}
                alt={`Gallery image ${index + 1}`}
                fill
                className="rounded-2xl object-contain"
                sizes="90vw"
              />
            </div>
          )}
          <Dialog.Close className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </Dialog.Close>
          {index !== null && images.length > 1 && (
            <>
              <button
                aria-label="Previous image"
                onClick={() => onIndexChange((index - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                aria-label="Next image"
                onClick={() => onIndexChange((index + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
