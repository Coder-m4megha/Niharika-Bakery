import { MessageCircle } from 'lucide-react';

import { whatsappUrl } from '@/lib/site';
import { CATEGORIES, type Product } from '@/lib/menu';

export function ProductCard({ product }: { product: Product }) {
  const orderMessage = `Hello Niharika Bakery, I would like to order: ${product.name}.`;
  const categoryName = CATEGORIES.find((c) => c.id === product.category)?.name;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-[0_10px_30px_-12px_rgba(51,32,15,0.25)] ring-1 ring-cocoa-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-16px_rgba(51,32,15,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-xs font-semibold text-cocoa-700 shadow-sm">
          {categoryName}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-medium text-cocoa-900">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-[1.5] text-cocoa-500">{product.description}</p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-cocoa-100 pt-5">
          <p className="text-sm font-semibold text-caramel-700">Price on request</p>
          <a
            href={whatsappUrl(orderMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-4 py-2.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-caramel-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Order
          </a>
        </div>
      </div>
    </article>
  );
}
