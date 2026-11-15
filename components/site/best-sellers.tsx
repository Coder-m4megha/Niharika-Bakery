'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { ProductCard } from '@/components/site/product-card';
import { SectionHeading } from '@/components/site/section-heading';
import { CATEGORIES, PRODUCTS, type CategoryId } from '@/lib/menu';
import { cn } from '@/lib/utils';

type Filter = 'all' | CategoryId;

export function BestSellers() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = PRODUCTS.filter((p) => filter === 'all' || p.category === filter);
  const filters: { id: Filter; name: string }[] = [
    { id: 'all', name: 'All' },
    ...CATEGORIES.map((c) => ({ id: c.id, name: c.name })),
  ];

  return (
    <section id="best-sellers" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Best Sellers"
          title="Our most-loved treats."
          description="Browse by category and order your favourites directly on WhatsApp."
        />

        <div
          role="group"
          aria-label="Filter products by category"
          className="mt-12 flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={cn(
                  'relative shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2',
                  active ? 'text-cream-50' : 'text-cocoa-600 hover:text-cocoa-900'
                )}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-cocoa-800"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{f.name}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
