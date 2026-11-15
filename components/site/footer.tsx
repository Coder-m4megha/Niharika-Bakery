import Link from 'next/link';
import { CakeSlice, MapPin, Phone } from 'lucide-react';

import { BUSINESS, NAV_LINKS } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/50 bg-cocoa-800 text-gold-300">
              <CakeSlice className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-serif text-2xl font-semibold text-cream-50">{BUSINESS.name}</span>
          </div>
          <p className="mt-6 max-w-xs font-serif text-xl italic leading-snug text-gold-300">
            {BUSINESS.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">Explore</h2>
          <ul className="mt-6 space-y-3">
            <li>
              <Link href="#top" className="text-sm transition-colors hover:text-gold-300">
                Home
              </Link>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">Contact</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold-300"
              >
                <Phone className="h-4 w-4 text-gold-300" aria-hidden="true" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-3 transition-colors hover:text-gold-300"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                <span>{BUSINESS.addressFull}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">Order</h2>
          <p className="mt-6 text-sm leading-[1.5] text-cream-300">
            Place your order or ask about a custom cake on WhatsApp.
          </p>
        </div>
      </div>

      <div className="border-t border-cocoa-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream-300 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Mall Road, Kanpur, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
