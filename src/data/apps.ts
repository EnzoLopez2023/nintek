export type IconKey =
  | 'layers' | 'flame' | 'gauge' | 'check' | 'drop' | 'calendar' | 'news'
  | 'bookmark' | 'grid' | 'trophy' | 'star' | 'book' | 'package' | 'alert'
  | 'user' | 'dollar' | 'tag' | 'hammer' | 'percent' | 'heart';

/** Marketing copy for the floating product mock. The body itself is rendered
 *  by a bespoke per-app component under components/mocks. */
export interface Mockup {
  title: string;
  subtitle: string;
  chip: string;
  live?: string;
}

export interface App {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  headline: { lead: string; em: string };
  description: string;
  quiet: string;
  icon: IconKey;
  bundleId: string;
  hasPage: boolean;
  mockup: Mockup;
}

export const COMPANY = {
  name: 'Nintek',
  domain: 'nintek.com',
  email: 'hello@nintek.com',
  privacyEmail: 'privacy@nintek.com',
  tagline: 'Small, thoughtful software for everyday life.',
};

export const apps: App[] = [
  {
    slug: 'tare',
    name: 'Tare',
    category: 'Health & Wellness',
    tagline: 'Your weight journey, weighed honestly.',
    headline: { lead: 'Every number tells a story.', em: 'Read the trend.' },
    description:
      'Track weight, doses and the metrics that matter on a GLP-1 journey — with smoothing that cuts through the daily noise and shows the real direction.',
    quiet: 'Private by default. Your health data never leaves your control.',
    icon: 'drop',
    bundleId: 'com.nintek.tare',
    hasPage: true,
    mockup: {
      title: 'This Month',
      subtitle: 'Trend · weight & doses',
      chip: 'Logged · 184.2 lb',
      live: 'On track',
    },
  },
  {
    slug: 'shopkeep',
    name: 'ShopKeep',
    category: 'For Makers & Workshops',
    tagline: 'Every tool. Every drawer.',
    headline: { lead: 'Every tool. Every drawer.', em: 'Right where you left it.' },
    description:
      'Inventory the whole workshop — tools, materials and their value — and know in a glance what needs attention before you start the next build.',
    quiet: 'Snap a receipt; your new tools are already logged.',
    icon: 'hammer',
    bundleId: 'com.nintek.shopkeep',
    hasPage: true,
    mockup: {
      title: 'Workshop Dashboard',
      subtitle: 'Tools & materials',
      chip: 'Receipt imported · 3 tools added',
      live: 'Live',
    },
  },
  {
    slug: 'cairn',
    name: 'Cairn',
    category: 'Study & Certification',
    tagline: 'Pass the exam. Keep the knowledge.',
    headline: { lead: 'Study with intent.', em: 'Walk in ready.' },
    description:
      'Adaptive flashcards and practice exams that track every objective domain, so you always know exactly where you stand before test day.',
    quiet: 'Spaced repetition that adapts to what you keep getting wrong.',
    icon: 'layers',
    bundleId: 'com.nintek.cairn',
    hasPage: true,
    mockup: {
      title: 'Exam Readiness',
      subtitle: 'AZ-104 · Azure Administrator',
      chip: 'Quiz complete · +120 XP',
      live: 'Studying',
    },
  },
  {
    slug: 'workshop',
    name: 'Workshop',
    category: 'Woodworking & Projects',
    tagline: 'From cut list to finished piece.',
    headline: { lead: 'Plan the cuts.', em: 'Build with confidence.' },
    description:
      'Plan a build end to end — cut lists, board layout and progress — so every project moves from sketch to sawdust without the guesswork.',
    quiet: 'Optimised cut layouts that waste less of every board.',
    icon: 'package',
    bundleId: 'com.nintek.workshop',
    hasPage: true,
    mockup: {
      title: 'Walnut Bench',
      subtitle: 'Cut list & progress',
      chip: 'Cut list optimised · 4% waste',
      live: 'In progress',
    },
  },
  {
    slug: 'puzzlebox',
    name: 'Puzzlebox',
    category: 'Games & Puzzles',
    tagline: 'A new puzzle every day.',
    headline: { lead: 'One box.', em: 'A dozen ways to play.' },
    description:
      'A cosy collection of daily word and number puzzles with streaks, stats and a fresh challenge waiting every morning.',
    quiet: 'Keep your streak alive. One quick puzzle a day.',
    icon: 'grid',
    bundleId: 'com.nintek.puzzlebox',
    hasPage: true,
    mockup: {
      title: 'Daily Lineup',
      subtitle: 'Six puzzles · resets at midnight',
      chip: 'Streak saved · 9 days',
      live: 'New today',
    },
  },
  {
    slug: 'tabloom',
    name: 'Tabloom',
    category: 'Notes & Writing',
    tagline: 'Notebooks that grow with your thinking.',
    headline: { lead: 'Capture the spark.', em: 'Find it again later.' },
    description:
      'Organised notebooks with rich text, tags and instant search — a calm home for everything you want to remember and nothing you don\'t.',
    quiet: 'Everything you write, one search away.',
    icon: 'book',
    bundleId: 'com.nintek.tabloom',
    hasPage: true,
    mockup: {
      title: 'Field Notes',
      subtitle: '4 notebooks · 218 notes',
      chip: 'Saved · just now',
      live: 'Synced',
    },
  },
  {
    slug: 'pulsewire',
    name: 'PulseWire',
    category: 'News & Reading',
    tagline: 'The signal, not the noise.',
    headline: { lead: 'A hundred sources.', em: 'One clear briefing.' },
    description:
      'PulseWire clusters the day\'s reporting into the stories that actually matter, ranked by how many independent outlets are covering them.',
    quiet: 'No infinite scroll. Just today, summarised and ranked.',
    icon: 'news',
    bundleId: 'com.nintek.pulsewire',
    hasPage: true,
    mockup: {
      title: 'Today\'s Briefing',
      subtitle: 'Ranked by signal',
      chip: 'Updated · 6 min ago',
      live: 'Live',
    },
  },
  {
    slug: 'hearth',
    name: 'Hearth',
    category: 'Home & Family',
    tagline: 'The whole household, on the same page.',
    headline: { lead: 'The home you keep —', em: 'kept warm, in one place.' },
    description:
      'Hearth holds your recipes, your maintenance log, your home inventory, the lawn calendar, the Plex library, and an AI assistant — under one warm, calm interface.',
    quiet: 'Not a productivity tool. A place for the records that keep your home running.',
    icon: 'flame',
    bundleId: 'com.nintek.hearth',
    hasPage: true,
    mockup: {
      title: 'At a Glance',
      subtitle: 'Home · maintenance · recipes',
      chip: 'Next task · Furnace filter',
      live: 'Home',
    },
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}
