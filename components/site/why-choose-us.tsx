import { CakeSlice, Croissant, MapPin, Tag } from 'lucide-react';

import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';

const REASONS = [
  {
    icon: Croissant,
    title: 'A Wide Variety',
    text: 'Cakes, pastries, bread, patties and savouries, all under one roof for every craving.',
  },
  {
    icon: MapPin,
    title: 'Easy to Reach',
    text: 'Conveniently located on Mall Road, Civil Lines, so popping in is effortless.',
  },
  {
    icon: CakeSlice,
    title: 'Cakes for Every Occasion',
    text: 'From birthday cakes to designer creations, we help mark the moments that matter.',
  },
  {
    icon: Tag,
    title: 'Affordable Treats',
    text: 'Items across an indicative price range of ₹1 to ₹400, so something sweet fits every budget.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream-200/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Everything you need from your neighbourhood bakery."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 0.08}>
                <div className="group h-full rounded-[1.75rem] bg-cream-50 p-8 ring-1 ring-cocoa-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-caramel-100 text-caramel-700 transition-colors duration-500 group-hover:bg-caramel-700 group-hover:text-cream-50">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 text-2xl font-medium text-cocoa-900">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-[1.5] text-cocoa-500">{reason.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
