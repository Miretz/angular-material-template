export type ProductCategory =
  | 'Notebooks'
  | 'Phones'
  | 'Tablets'
  | 'Monitors'
  | 'Components'
  | 'Accesories'
  | 'Software'
  | 'Games';

export type Currency = 'EUR' | 'USD' | 'GBP';

export type RatingStars = 0 | 1 | 2 | 3 | 4 | 5;

export interface Product {
  id: number;
  name: string;
  vendor: string;
  description: string;
  unitPrice: number;
  currency: Currency;
  category: ProductCategory;
  ratingStars: RatingStars;
}

/** Mock product data */
export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: 'SuperBook 1A',
    vendor: 'Carrot',
    description: 'Gaming Laptop of the Future.',
    unitPrice: 2300,
    currency: 'USD',
    category: 'Notebooks',
    ratingStars: 4,
  },
  {
    id: 2,
    name: 'SuperBook 3A',
    vendor: 'Carrot',
    description: 'Ideal Laptop for Office Work.',
    unitPrice: 600,
    currency: 'USD',
    category: 'Notebooks',
    ratingStars: 2,
  },
  {
    id: 3,
    name: 'LinuxBook 123',
    vendor: 'Strawberry',
    description: 'ARM Based Laptop.',
    unitPrice: 900,
    currency: 'USD',
    category: 'Notebooks',
    ratingStars: 5,
  },
  {
    id: 4,
    name: 'WindShield 21',
    vendor: 'MicroChips',
    description: 'Professional Ultrabook.',
    unitPrice: 2700,
    currency: 'USD',
    category: 'Notebooks',
    ratingStars: 3,
  },
  {
    id: 5,
    name: 'SuperPhone SX',
    vendor: 'Carrot',
    description: 'Smartphone ARM 16GB',
    unitPrice: 1000,
    currency: 'USD',
    category: 'Phones',
    ratingStars: 3,
  },
  {
    id: 6,
    name: 'SuperPhone X',
    vendor: 'Carrot',
    description: 'Smartphone ARM 32GB',
    unitPrice: 2400,
    currency: 'USD',
    category: 'Phones',
    ratingStars: 5,
  },
  {
    id: 7,
    name: 'Domino',
    vendor: 'Mingu',
    description: 'Smartphone ARM 32GM MicroSD',
    unitPrice: 300,
    currency: 'USD',
    category: 'Phones',
    ratingStars: 5,
  },
  {
    id: 8,
    name: 'Neko 4K',
    vendor: 'Zoya',
    description: '4K LED Monitor',
    unitPrice: 700,
    currency: 'USD',
    category: 'Monitors',
    ratingStars: 4,
  },
  {
    id: 9,
    name: 'Neko HD',
    vendor: 'Zoya',
    description: 'UltrhaHD LED Monitor',
    unitPrice: 200,
    currency: 'USD',
    category: 'Monitors',
    ratingStars: 3,
  },
  {
    id: 10,
    name: 'Tundra Cooling',
    vendor: 'Sybir',
    description: 'CPU Fan',
    unitPrice: 100,
    currency: 'USD',
    category: 'Components',
    ratingStars: 2,
  },
  {
    id: 11,
    name: 'RMX 9080',
    vendor: 'Nuvia',
    description: '32GB RAM Gaming GPU PCIe',
    unitPrice: 840,
    currency: 'USD',
    category: 'Components',
    ratingStars: 5,
  },
  {
    id: 12,
    name: 'K7639i',
    vendor: 'Imio',
    description: 'Quad-Core 3,2Mhz x86_64 CPU 64MB L3, Socket 1AB',
    unitPrice: 1000,
    currency: 'USD',
    category: 'Components',
    ratingStars: 4,
  },
  {
    id: 13,
    name: 'USB-C Hub',
    vendor: 'Xiano',
    description: '6x USB-C output',
    unitPrice: 50,
    currency: 'USD',
    category: 'Accesories',
    ratingStars: 5,
  },
  {
    id: 14,
    name: 'Keyboard 102 US',
    vendor: 'Klack',
    description: 'Gaming keyboard.',
    unitPrice: 90,
    currency: 'USD',
    category: 'Accesories',
    ratingStars: 5,
  },
  {
    id: 15,
    name: 'Graphics Suite 2022',
    vendor: 'Macronella',
    description: 'Graphics editing software suite.',
    unitPrice: 348,
    currency: 'USD',
    category: 'Software',
    ratingStars: 2,
  },
  {
    id: 16,
    name: 'Lies of Phantoms',
    vendor: 'Niso Entertainment',
    description: '3D First-person shooter videogame for PC.',
    unitPrice: 60,
    currency: 'USD',
    category: 'Games',
    ratingStars: 5,
  },
];
