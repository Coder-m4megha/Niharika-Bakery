import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { CATEGORIES } from '@/lib/menu';

export function Specialities() {
  return (
    <section id="specialities" className="bg-cream-200/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Specialities"
            title="Something sweet for every occasion."
            description="Explore the categories our bakers and cake artists are known for on Mall Road."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 0.08}>
              <Link
                href="#best-sellers"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-cocoa-800 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4 focus-visible:ring-offset-cream-200"
              >
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/90 via-cocoa-900/30 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-medium text-cream-50">{category.name}</h3>
                      <p className="mt-2 max-w-xs text-sm leading-[1.5] text-cream-200 transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
                        {category.description}
                      </p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-100 text-cocoa-900 transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
