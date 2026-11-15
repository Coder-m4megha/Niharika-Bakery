import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { BUSINESS } from '@/lib/site';

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Loved by our Kanpur customers."
            description="Read what people are saying about Niharika Bakery on Google."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center rounded-[2rem] bg-cocoa-800 px-8 py-14 text-center shadow-2xl sm:px-16">
            <p className="font-serif text-6xl font-medium text-cream-50 sm:text-7xl">
              {BUSINESS.googleReviewCount.toLocaleString('en-IN')}
            </p>
            <p className="mt-3 text-base font-semibold uppercase tracking-[0.2em] text-gold-300">
              Google Reviews
            </p>
            <p className="mt-6 max-w-md text-base leading-[1.5] text-cream-200">
              Thank you to every family, friend and celebrant who has shared their experience with us.
            </p>
            <a
              href={BUSINESS.mapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-cream-100 px-7 py-3.5 text-sm font-semibold text-cocoa-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-cocoa-800"
            >
              Read reviews on Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
