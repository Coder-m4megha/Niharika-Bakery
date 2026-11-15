'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { GALLERY } from '@/lib/menu';

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;
  const count = GALLERY.length;

  const close = () => setIndex(null);
  const next = () => setIndex((i) => (i === null ? 0 : (i + 1) % count));
  const prev = () => setIndex((i) => (i === null ? 0 : (i - 1 + count) % count));

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((i) => (i === null ? 0 : (i + 1) % count));
      if (e.key === 'ArrowLeft') setIndex((i) => (i === null ? 0 : (i - 1 + count) % count));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, count]);

  const active = index !== null ? GALLERY[index] : null;

  return (
    <section id="gallery" className="bg-cocoa-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Gallery"
            title="A closer look at the bakery."
            description="Cakes, pastries, fresh bread and the warm corners of our shop."
          />
        </Reveal>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALLERY.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open photo: ${item.caption}`}
                className="group relative mb-5 block w-full overflow-hidden rounded-2xl bg-cocoa-800 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-4 focus-visible:ring-offset-cocoa-900"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-cocoa-900/85 via-cocoa-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <p className="p-5 font-serif text-xl text-cream-50">{item.caption}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-cocoa-900/95 p-4 sm:p-10"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-50 transition-colors hover:bg-cream-100/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-100/10 text-cream-50 transition-colors hover:bg-cream-100/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-100/10 text-cream-50 transition-colors hover:bg-cream-100/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <motion.figure
              key={active.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-h-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
              />
              <figcaption className="mt-5 font-serif text-xl text-cream-100">
                {active.caption}
                <span className="ml-3 text-sm text-cream-300">
                  {(index ?? 0) + 1} / {count}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
