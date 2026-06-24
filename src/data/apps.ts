// Central registry for every Nintek product.
// The home page renders all apps; only apps with `hasPage: true` link to a
// dedicated /<slug> marketing page. Add a new app by appending an entry here.

export type App = {
  /** URL slug under www.nintek.com/<slug> */
  slug: string;
  /** Public product name */
  name: string;
  /** One-line positioning statement for cards */
  tagline: string;
  /** Longer description for the product page hero */
  description: string;
  /** Square brand icon under /public/apps/<file> */
  icon: string;
  /** Accent color used on the product page */
  accent: string;
  /** App Store bundle identifier (reverse-DNS) */
  bundleId: string;
  /** Whether a dedicated marketing/privacy page exists yet */
  hasPage: boolean;
  /** Short category label */
  category: string;
};

export const apps: App[] = [
  {
    slug: 'cairn',
    name: 'Cairn',
    tagline: 'Guided prep for the certifications that move your career.',
    description:
      'Cairn is a focused study hub for cloud and platform certifications. Spaced-repetition flashcards, realistic practice exams, and progress tracking keep you on a steady path to exam day.',
    icon: '/apps/cairn.png',
    accent: '#7C3E1F',
    bundleId: 'com.nintek.cairn',
    hasPage: true,
    category: 'Learning',
  },
  {
    slug: 'tare',
    name: 'Tare',
    tagline: 'A calm, complete companion for GLP-1 health journeys.',
    description:
      'Tare brings injections, glucose, weight, nutrition, side effects, and well-being into one private place, with optional AI insights.',
    icon: '/apps/tare.png',
    accent: '#b86c1e',
    bundleId: 'com.nintek.tare',
    hasPage: false,
    category: 'Health',
  },
  {
    slug: 'pulsewire',
    name: 'PulseWire',
    tagline: 'An AI-native reader that clusters the news that matters.',
    description:
      'PulseWire dedupes, clusters, and scores stories across your feeds so you read the signal, not the noise.',
    icon: '/apps/pulsewire.png',
    accent: '#7c3aed',
    bundleId: 'com.nintek.pulsewire',
    hasPage: false,
    category: 'Productivity',
  },
  {
    slug: 'puzzlebox',
    name: 'Puzzlebox',
    tagline: 'A cozy arcade of classic puzzles and word games.',
    description:
      'Sudoku, word search, number sums, and more — with leaderboards and a few friends-only multiplayer surprises.',
    icon: '/apps/puzzlebox.png',
    accent: '#3b82f6',
    bundleId: 'com.nintek.puzzlebox',
    hasPage: false,
    category: 'Games',
  },
  {
    slug: 'hearth',
    name: 'Hearth',
    tagline: 'The warm center of a well-run home.',
    description:
      'Recipes, home and yard maintenance, and media tools come together in one family hub with a helpful assistant.',
    icon: '/apps/hearth.png',
    accent: '#5C2A4A',
    bundleId: 'com.nintek.hearth',
    hasPage: false,
    category: 'Home',
  },
  {
    slug: 'shopkeep',
    name: 'ShopKeep',
    tagline: 'Know every tool you own — and where it lives.',
    description:
      'A smart inventory for your garage or workshop, with QR labels, barcode scanning, and AI-assisted entry.',
    icon: '/apps/shopkeep.png',
    accent: '#7A3D12',
    bundleId: 'com.nintek.shopkeep',
    hasPage: false,
    category: 'Utilities',
  },
  {
    slug: 'tabloom',
    name: 'tabloom',
    tagline: 'The notebook that grows with your ideas.',
    description:
      'A rich, searchable notebook with notebooks, pages, tags, OCR, and AI assistance — built for thinking, not filing.',
    icon: '/apps/tabloom.png',
    accent: '#4f6e3a',
    bundleId: 'com.nintek.tabloom',
    hasPage: false,
    category: 'Productivity',
  },
  {
    slug: 'workshop',
    name: 'Workshop',
    tagline: 'From cut list to finished build, beautifully tracked.',
    description:
      'Plan woodworking projects with cut lists, an optimizing cut planner, materials and cost tracking, and build logs.',
    icon: '/apps/workshop.png',
    accent: '#8a5a2b',
    bundleId: 'com.nintek.workshop',
    hasPage: false,
    category: 'Hobby',
  },
];

export const getApp = (slug: string): App | undefined =>
  apps.find((a) => a.slug === slug);

export const COMPANY = {
  name: 'Nintek',
  domain: 'www.nintek.com',
  email: 'hello@nintek.com',
  privacyEmail: 'privacy@nintek.com',
  tagline: 'Small, thoughtful software for everyday life.',
};
