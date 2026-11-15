import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';

import { Reveal } from '@/components/site/reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { BUSINESS, whatsappUrl } from '@/lib/site';

export function Location() {
  return (
    <section id="visit" className="bg-cream-200/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Location & Contact"
            title="Come visit, or order ahead."
            description="Stop by our shop on Mall Road, call us, or send your order on WhatsApp."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <InfoCard icon={MapPin} title="Address">
                <address className="not-italic text-cocoa-600">
                  {BUSINESS.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <a
                  href={BUSINESS.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-caramel-700 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                >
                  Open in Google Maps
                </a>
              </InfoCard>

              <InfoCard icon={Clock} title="Opening Hours">
                <p className="text-cocoa-600">Contact us for today&rsquo;s timings.</p>
              </InfoCard>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-cocoa-800 px-6 py-5 text-base font-semibold text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                >
                  <Phone className="h-5 w-5 text-gold-300" aria-hidden="true" />
                  Call {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl bg-caramel-700 px-6 py-5 text-base font-semibold text-cream-50 transition-all duration-300 hover:-translate-y-0.5 hover:bg-caramel-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] bg-cocoa-100 shadow-xl ring-1 ring-cocoa-100">
              <iframe
                title="Niharika Bakery location on Google Maps"
                src={BUSINESS.mapsEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-cream-50 p-6 ring-1 ring-cocoa-100">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caramel-100 text-caramel-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-xl font-medium text-cocoa-900">{title}</h3>
      </div>
      <div className="mt-4 pl-[52px] text-sm leading-[1.5]">{children}</div>
    </div>
  );
}
