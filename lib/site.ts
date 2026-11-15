export const BUSINESS = {
  name: 'Niharika Bakery',
  tagline: 'A Little Sweetness, A Lot of Happiness.',
  addressLines: [
    '5/6, Mall Road, Naughara, Phool Bagh',
    'Civil Lines, Kanpur, Uttar Pradesh 208001',
    'India',
  ],
  addressFull:
    '5/6, Mall Road, Naughara, Phool Bagh, Civil Lines, Kanpur, Uttar Pradesh 208001, India',
  phoneDisplay: '0512 325 9679',
  phoneTel: '+915123259679',
  googleReviewCount: 1132,
  priceRange: '₹1 - ₹400',
  mapsSearchUrl:
    'https://www.google.com/maps/place/Niharika+Bakery/@26.4643398,80.3594895,20.31z/data=!4m7!3m6!1s0x399c47514c92e917:0x4906552f47463ad0!4b1!8m2!3d26.464325!4d80.359358!16s%2Fg%2F1hm58cmrg?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=26.4643398,80.3594895&z=18&output=embed',
  mapsReviewsUrl:
    'https://www.google.com/maps/place/Niharika+Bakery/@26.4643398,80.3594895,20.31z/data=!4m7!3m6!1s0x399c47514c92e917:0x4906552f47463ad0!4b1!8m2!3d26.464325!4d80.359358!16s%2Fg%2F1hm58cmrg?entry=ttu&g_ep=EgoyMDI2MTExMC4wIKXMDSoASAFQAw%3D%3D',
} as const;

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';

export const WHATSAPP_ORDER_MESSAGE =
  'Hello Niharika Bakery, I would like to place an order.';

export function whatsappUrl(message: string = WHATSAPP_ORDER_MESSAGE) {
  const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/';
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Specialities', href: '#specialities' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
] as const;
