"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active !== null && !d.open) d.showModal();
    if (active === null && d.open) d.close();
  }, [active]);

  const step = (delta: number) =>
    setActive((a) => (a === null ? a : (a + delta + images.length) % images.length));

  return (
    <>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className="card-pop card-pop-hover relative aspect-video overflow-hidden"
            aria-label={`Open screen ${i + 1} of ${title}`}
          >
            <Image src={src} alt="" fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialogRef.current && setActive(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto w-[min(1100px,94vw)] max-w-none bg-transparent p-0 backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {active !== null && (
          <div className="card-pop relative overflow-hidden">
            <div className="relative aspect-video bg-ink">
              <Image src={images[active]} alt={`${title}, screen ${active + 1}`} fill sizes="94vw" className="object-contain" />
            </div>
            <div className="flex items-center justify-between border-t-2 border-ink px-4 py-3">
              <span className="font-mono text-xs text-ink-soft">
                {active + 1} / {images.length}
              </span>
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} className="btn btn-secondary btn-sm !px-3" aria-label="Previous screen">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => step(1)} className="btn btn-secondary btn-sm !px-3" aria-label="Next screen">
                  <ChevronRight size={18} />
                </button>
                <button type="button" onClick={() => setActive(null)} className="btn btn-dark btn-sm !px-3" aria-label="Close">
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
