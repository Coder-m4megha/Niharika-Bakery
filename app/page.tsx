import { MessageCircle } from 'lucide-react';

import { About } from '@/components/site/about';
import { BestSellers } from '@/components/site/best-sellers';
import { Footer } from '@/components/site/footer';
import { Gallery } from '@/components/site/gallery';
import { Hero } from '@/components/site/hero';
import { Location } from '@/components/site/location';
import { Navbar } from '@/components/site/navbar';
import { Reviews } from '@/components/site/reviews';
import { Specialities } from '@/components/site/specialities';
import { WhyChooseUs } from '@/components/site/why-choose-us';
import { BUSINESS, whatsappUrl } from '@/lib/site';

const bakeryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: BUSINESS.name,
  description:
    'Bakery and cake shop on Mall Road, Kanpur offering birthday and designer cakes, pastries, fresh bread, patties and bakery specials.',
  telephone: `+${BUSINESS.phoneTel.slice(1)}`,
  priceRange: BUSINESS.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5/6, Mall Road, Naughara, Phool Bagh, Civil Lines',
    addressLocality: 'Kanpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '208001',
    addressCountry: 'IN',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialities />
        <BestSellers />
        <Gallery />
        <WhyChooseUs />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-caramel-700 text-cream-50 shadow-2xl ring-4 ring-cream-100/70 transition-all duration-300 hover:scale-110 hover:bg-caramel-500 focus-visible:outline-none focus-visible:ring-gold-500 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </>
  );
}
