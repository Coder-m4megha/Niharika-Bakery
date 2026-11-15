export type CategoryId =
  | 'birthday-cakes'
  | 'designer-cakes'
  | 'pastries'
  | 'fresh-bread'
  | 'patties-savouries'
  | 'bakery-specials';

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const CATEGORIES: Category[] = [
  {
    id: 'birthday-cakes',
    name: 'Birthday Cakes',
    description: 'Celebration cakes for every age, written with your own message.',
    image:
      'https://images.pexels.com/photos/5691261/pexels-photo-5691261.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Yellow birthday cake decorated with macarons and golden accents',
  },
  {
    id: 'designer-cakes',
    name: 'Designer Cakes',
    description: 'Tiered and floral designs for weddings, anniversaries and milestones.',
    image:
      'https://images.pexels.com/photos/17315403/pexels-photo-17315403.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Luxurious wedding cake surrounded by elegant flower arrangements',
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'A daily display of flaky, golden pastries and sweet favourites.',
    image:
      'https://images.pexels.com/photos/36602914/pexels-photo-36602914.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Croissants and danishes displayed in a bakery showcase',
  },
  {
    id: 'fresh-bread',
    name: 'Fresh Bread',
    description: 'Loaves and rolls baked through the day for your table.',
    image:
      'https://images.pexels.com/photos/30826792/pexels-photo-30826792.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Artisan sourdough loaves displayed in a rustic bakery',
  },
  {
    id: 'patties-savouries',
    name: 'Patties & Savouries',
    description: 'Crisp, savoury bites for a quick snack or a teatime treat.',
    image:
      'https://images.pexels.com/photos/4408551/pexels-photo-4408551.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Crispy puff pastry buns with sesame seeds on a ceramic plate',
  },
  {
    id: 'bakery-specials',
    name: 'Bakery Specials',
    description: 'Seasonal and house specials, crafted in small batches.',
    image:
      'https://images.pexels.com/photos/8774179/pexels-photo-8774179.jpeg?auto=compress&cs=tinysrgb&w=1000',
    imageAlt: 'Assorted cakes and pastries arranged on slate boards',
  },
];

export type Product = {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  image: string;
  imageAlt: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'classic-birthday-cake',
    name: 'Classic Birthday Cake',
    description: 'A celebration cake with your name and message, sized to your guest list.',
    category: 'birthday-cakes',
    image:
      'https://images.pexels.com/photos/12616001/pexels-photo-12616001.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Decorated chocolate birthday cake',
  },
  {
    id: 'themed-birthday-cake',
    name: 'Themed Birthday Cake',
    description: 'Decorated to match your favourite theme, from superheroes to fairytales.',
    category: 'birthday-cakes',
    image:
      'https://images.pexels.com/photos/10336820/pexels-photo-10336820.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Colourful superhero cake with a fondant figurine',
  },
  {
    id: 'floral-designer-cake',
    name: 'Floral Designer Cake',
    description: 'Elegant tiers finished with floral detailing for special occasions.',
    category: 'designer-cakes',
    image:
      'https://images.pexels.com/photos/11712500/pexels-photo-11712500.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Two-tier cake adorned with white roses',
  },
  {
    id: 'tiered-party-cake',
    name: 'Tiered Party Cake',
    description: 'Multi-tier designs for weddings, engagements and anniversaries.',
    category: 'designer-cakes',
    image:
      'https://images.pexels.com/photos/29051739/pexels-photo-29051739.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Three elegant floral wedding cakes with greenery',
  },
  {
    id: 'pastry-selection',
    name: 'Assorted Pastry Selection',
    description: 'Choose a mix of our most-loved pastries from the display case.',
    category: 'pastries',
    image:
      'https://images.pexels.com/photos/27304325/pexels-photo-27304325.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Gourmet desserts displayed under warm lighting',
  },
  {
    id: 'flaky-pastries',
    name: 'Flaky Golden Pastries',
    description: 'Light, golden layers that pair beautifully with a hot cup of tea or coffee.',
    category: 'pastries',
    image:
      'https://images.pexels.com/photos/17104937/pexels-photo-17104937.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Flaky pastries served with coffee on a wooden tray',
  },
  {
    id: 'artisan-loaf',
    name: 'Artisan Loaf',
    description: 'A crusty loaf baked fresh and available through the day.',
    category: 'fresh-bread',
    image:
      'https://images.pexels.com/photos/1383908/pexels-photo-1383908.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Freshly baked rustic bread loaves on a wooden board',
  },
  {
    id: 'sourdough-rounds',
    name: 'Sourdough Rounds',
    description: 'Golden, rustic rounds with a crisp crust for your everyday table.',
    category: 'fresh-bread',
    image:
      'https://images.pexels.com/photos/30350350/pexels-photo-30350350.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Golden-brown artisan bread loaves cooling in a kitchen',
  },
  {
    id: 'savoury-patties',
    name: 'Savoury Patties',
    description: 'Crisp, flaky patties that make a satisfying quick bite.',
    category: 'patties-savouries',
    image:
      'https://images.pexels.com/photos/38356213/pexels-photo-38356213.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Golden savoury pastries topped with sesame seeds',
  },
  {
    id: 'puff-buns',
    name: 'Sesame Puff Buns',
    description: 'Soft puff buns with a sprinkle of sesame, ideal with evening tea.',
    category: 'patties-savouries',
    image:
      'https://images.pexels.com/photos/36774514/pexels-photo-36774514.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Freshly baked pastries with sesame seeds on a wooden plate',
  },
  {
    id: 'chocolate-slice',
    name: 'Chocolate Slice Cake',
    description: 'A rich chocolate slice for dessert lovers, served by the piece.',
    category: 'bakery-specials',
    image:
      'https://images.pexels.com/photos/28402363/pexels-photo-28402363.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Decadent chocolate cake slice on a white plate',
  },
  {
    id: 'berry-chocolate-cake',
    name: 'Berry Chocolate Cake',
    description: 'Layered chocolate cake with a fruity berry finish.',
    category: 'bakery-specials',
    image:
      'https://images.pexels.com/photos/20807281/pexels-photo-20807281.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Chocolate cake layered with berry filling',
  },
];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export const GALLERY: GalleryItem[] = [
  {
    id: 'display-domes',
    src: 'https://images.pexels.com/photos/10507819/pexels-photo-10507819.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Pastries and cakes under glass domes on wooden stands',
    caption: 'The pastry display',
  },
  {
    id: 'dessert-display',
    src: 'https://images.pexels.com/photos/15366687/pexels-photo-15366687.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Assorted gourmet desserts on display with chocolate and fruit treats',
    caption: 'Chocolate and fruit treats',
  },
  {
    id: 'shop-interior',
    src: 'https://images.pexels.com/photos/40407949/pexels-photo-40407949.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Warmly lit bakery with customers browsing pastries',
    caption: 'Our bakery, warmly lit',
  },
  {
    id: 'birthday-chocolate',
    src: 'https://images.pexels.com/photos/12616001/pexels-photo-12616001.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Decorated chocolate cake for a birthday celebration',
    caption: 'Birthday cakes',
  },
  {
    id: 'counter-interior',
    src: 'https://images.pexels.com/photos/20543564/pexels-photo-20543564.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Warm bakery interior with a pastry counter',
    caption: 'Inside the shop',
  },
  {
    id: 'yellow-birthday',
    src: 'https://images.pexels.com/photos/5691261/pexels-photo-5691261.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Yellow birthday cake with macarons and golden accents',
    caption: 'Celebration cakes',
  },
  {
    id: 'croissant-showcase',
    src: 'https://images.pexels.com/photos/36602914/pexels-photo-36602914.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Croissants and danishes in a bakery showcase',
    caption: 'Fresh pastries',
  },
  {
    id: 'rustic-bread',
    src: 'https://images.pexels.com/photos/30826792/pexels-photo-30826792.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Artisan sourdough loaves in a rustic bakery',
    caption: 'Bread from the oven',
  },
  {
    id: 'wedding-cake',
    src: 'https://images.pexels.com/photos/17315463/pexels-photo-17315463.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Wedding cake and floral arrangement in a sophisticated venue',
    caption: 'Designer cakes',
  },
];
