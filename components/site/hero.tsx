'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';

import { whatsappUrl } from '@/lib/site';

const HERO_IMAGE =
  'https://images.pexels.com/photos/15366687/pexels-photo-15366687.jpeg?auto=compress&cs=tinysrgb&w=2000';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-cocoa-900"
    >
      <motion.img
        src={HERO_IMAGE}
        alt="Pastries and desserts displayed under warm light at Niharika Bakery"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease }}
        className="animate-float-soft absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="animate-glow-soft absolute inset-0 bg-gradient-to-t from-cocoa-900 via-cocoa-900/70 to-cocoa-900/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa-900/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-28 lg:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold-300"
        >
          Bakery &amp; Cake Shop &middot; Mall Road, Kanpur
        </motion.p>

        <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl">
          {['A Little Sweetness,', 'A Lot of Happiness.'].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-2">
              <motion.span
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.5 + i * 0.15, ease }}
                className={`block ${i === 1 ? 'font-serif italic text-gold-300' : ''}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-6 max-w-xl text-base leading-[1.5] text-cream-200 sm:text-lg"
        >
          Freshly baked delights, beautiful cakes and unforgettable moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#best-sellers"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream-100 px-8 py-4 text-base font-semibold text-cocoa-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-cocoa-900"
          >
            Explore Our Menu
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/60 px-8 py-4 text-base font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-cocoa-900"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Order on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
