'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CakeSlice, Menu, Phone, X } from 'lucide-react';

import { BUSINESS, NAV_LINKS, whatsappUrl } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        solid
          ? 'bg-cream-100/95 py-3 shadow-[0_1px_0_0_rgba(74,46,31,0.12)] backdrop-blur-md'
          : 'bg-transparent py-5'
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className={cn(
            'flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500',
            solid ? 'text-cocoa-900' : 'text-cream-100'
          )}
          onClick={() => setOpen(false)}
        >
          <span
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-500',
              solid
                ? 'border-cocoa-700/30 bg-cocoa-800 text-gold-300'
                : 'border-gold-300/60 bg-cocoa-900/30 text-gold-300'
            )}
          >
            <CakeSlice className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-wide">
            {BUSINESS.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'group relative text-sm font-semibold tracking-wide transition-colors',
                  solid
                    ? 'text-cocoa-700 hover:text-cocoa-900'
                    : 'text-cream-100/90 hover:text-cream-100'
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500',
              solid
                ? 'text-cocoa-800 hover:bg-cocoa-50'
                : 'text-cream-100 hover:bg-cream-100/10'
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-caramel-700 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-md transition-all hover:-translate-y-0.5 hover:bg-caramel-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            Order on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 lg:hidden',
            solid ? 'text-cocoa-900 hover:bg-cocoa-50' : 'text-cream-100 hover:bg-cream-100/10'
          )}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-0 bottom-0 top-[64px] overflow-y-auto bg-cream-100 lg:hidden"
          >
            <div className="flex flex-col px-5 pb-10 pt-6">
              <ul className="flex flex-col divide-y divide-cocoa-100">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-serif text-3xl text-cocoa-900"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-caramel-700 px-6 py-3.5 text-base font-semibold text-cream-50"
                >
                  Order on WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cocoa-700/30 px-6 py-3.5 text-base font-semibold text-cocoa-900"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
