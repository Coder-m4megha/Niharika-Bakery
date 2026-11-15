import { ArrowRight, MapPin } from 'lucide-react';

import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { BUSINESS } from '@/lib/site';

const ABOUT_IMAGE =
  'https://images.pexels.com/photos/40407949/pexels-photo-40407949.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={ABOUT_IMAGE}
                alt="Warmly lit bakery interior with customers browsing pastries"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl bg-cocoa-800 p-6 text-cream-100 shadow-xl sm:block">
              <p className="font-serif text-3xl font-medium text-gold-300">Mall Road</p>
              <p className="mt-2 text-sm leading-[1.5] text-cream-200">
                Kanpur&rsquo;s neighbourhood bakery, right where you shop.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Baked with warmth, served with a smile."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-[1.5] text-cocoa-600 sm:text-lg">
              <p>
                Nestled on Mall Road in the heart of Kanpur, {BUSINESS.name} is a
                bakery and cake shop built around one simple idea: every visit should
                feel like a small celebration.
              </p>
              <p>
                From birthday cakes and designer creations to golden pastries, fresh
                bread and savoury patties, our counter brings together the everyday
                favourites and the occasions worth marking.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#specialities"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-caramel-700 px-7 py-3.5 text-base font-semibold text-cream-50 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
              >
                Discover our specialities
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <p className="flex items-center gap-2 text-sm text-cocoa-500">
                <MapPin className="h-4 w-4 text-caramel-500" aria-hidden="true" />
                5/6 Mall Road, Civil Lines, Kanpur
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
