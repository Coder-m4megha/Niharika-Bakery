import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';

import { BUSINESS } from '@/lib/site';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const title = `${BUSINESS.name} | Cakes, Pastries & Bread on Mall Road, Kanpur`;
const description = `${BUSINESS.name} is a bakery and cake shop on Mall Road, Kanpur. Birthday and designer cakes, pastries, fresh bread, patties and bakery specials.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Niharika Bakery',
    'bakery Kanpur',
    'cake shop Mall Road Kanpur',
    'birthday cake Kanpur',
    'designer cakes Kanpur',
    'pastries Kanpur',
    'fresh bread Kanpur',
  ],
  applicationName: BUSINESS.name,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IN',
    siteName: BUSINESS.name,
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <meta name="theme-color" content="#24150B" />
      </head>
      <body>{children}</body>
    </html>
  );
}
