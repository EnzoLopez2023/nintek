export type IconKey =
  | 'layers' | 'flame' | 'gauge' | 'check' | 'drop' | 'calendar' | 'news'
  | 'bookmark' | 'grid' | 'trophy' | 'star' | 'book' | 'package' | 'alert'
  | 'user' | 'dollar' | 'tag' | 'hammer' | 'percent' | 'heart'
  | 'scan' | 'widget' | 'sparkle' | 'lock' | 'bell' | 'cloud' | 'pencil'
  | 'chart' | 'share' | 'apple' | 'gamepad' | 'search' | 'ruler' | 'swift';

/** Marketing copy for the floating product mock. The body itself is rendered
 *  by a bespoke per-app component under components/mocks. */
export interface Mockup {
  title: string;
  subtitle: string;
  chip: string;
  live?: string;
}

/** Where an app actually runs today. */
export interface Platforms {
  /** Has a shipping web app. */
  web: boolean;
  /** Has a native iOS app in some state — see `native.status`. */
  ios: boolean;
}

export type NativeStatus = 'testflight' | 'next';

export interface NativeHighlight {
  icon: IconKey;
  title: string;
  body: string;
}

/** The native iOS story for an app. Every highlight below is backed by shipping
 *  Swift code — nothing aspirational lives in here. */
export interface Native {
  status: NativeStatus;
  /** One line on why this app is worth having natively. */
  thesis: string;
  /** A paragraph of context for the /ios page. */
  intro: string;
  highlights: NativeHighlight[];
  /** Frameworks and platform tech, rendered as chips. */
  tech: string[];
  minOS: string;
  devices: string;
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
  platforms: Platforms;
  mockup: Mockup;
  native?: Native;
}

export const COMPANY = {
  name: 'Nintek',
  domain: 'nintek.com',
  email: 'hello@nintek.com',
  privacyEmail: 'privacy@nintek.com',
  tagline: 'Small, thoughtful software for everyday life.',
};

/** The shared Swift foundation the native utility apps are built on. */
export const ECOSYSTEM = {
  kit: 'NintekKit',
  kitSummary:
    'A dependency-free Swift package that the native utility apps all build on — shared data models, the API clients, the widget snapshots, the Live Activity definitions, and the algorithms that used to only run on a server.',
  kitPoints: [
    {
      icon: 'swift' as IconKey,
      title: 'Zero dependencies',
      body:
        'Around two thousand lines of Swift 6 with nothing pulled in from outside. Networking and auth are protocols, so platform SDKs stay in the app and the package stays testable on its own.',
    },
    {
      icon: 'layers' as IconKey,
      title: 'One set of models',
      body:
        'Tools, projects, cut lists, exam attempts — defined once and decoded the same way in the app, the widget and the share extension. Nothing drifts between surfaces.',
    },
    {
      icon: 'widget' as IconKey,
      title: 'Widgets share the source',
      body:
        'Snapshots are written to a shared App Group, so widgets and Live Activities render real data without a network call, a login, or a private copy of the theme that quietly goes stale.',
    },
    {
      icon: 'gauge' as IconKey,
      title: 'Algorithms moved on device',
      body:
        'The cut-plan optimiser and the spaced-repetition scheduler were ported to Swift and unit-tested against the originals. What used to be a round trip is now instant.',
    },
  ],
};

export const apps: App[] = [
  {
    slug: 'tare',
    name: 'Tare',
    category: 'Health & Wellness',
    tagline: 'Your weight journey, weighed honestly.',
    headline: { lead: 'Every number tells a story.', em: 'Read the trend.' },
    description:
      'Track weight, doses, glucose and labs on a GLP-1 journey — then read them together. Ambulatory glucose profiles, zone distributions, kidney and thyroid trends, and an AI analyst that can answer questions about any of it.',
    quiet: 'Private by default. Your health data never leaves your control.',
    icon: 'drop',
    bundleId: 'com.nintek.tare',
    hasPage: true,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'This Month',
      subtitle: 'Trend · weight, doses & glucose',
      chip: 'Logged · 184.2 lb',
      live: 'On track',
    },
    native: {
      status: 'next',
      thesis: 'Next in line for a native port.',
      intro:
        'Tare is the next app to go native. It is the one that most wants to live on a phone — logging happens in the moment, and the numbers it tracks are the kind you want on a Home Screen rather than behind a browser tab.',
      highlights: [],
      tech: [],
      minOS: '',
      devices: '',
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
    quiet: 'On iPhone, the camera does the filing for you.',
    icon: 'hammer',
    bundleId: 'com.nintek.shopkeep',
    hasPage: true,
    platforms: { web: true, ios: true },
    mockup: {
      title: 'Workshop Dashboard',
      subtitle: 'Tools & materials',
      chip: 'Receipt imported · 3 tools added',
      live: 'Live',
    },
    native: {
      status: 'testflight',
      thesis:
        'The camera is the feature. Point it at a barcode or a drawer label and the shop inventories itself.',
      intro:
        'ShopKeep on the web is a good filing cabinet. ShopKeep on iPhone is a scanner you already own. It signs into the same account and reads the same inventory — it just stops asking you to type in things a camera can already see.',
      highlights: [
        {
          icon: 'scan',
          title: 'Live barcode scanning',
          body:
            'VisionKit reads QR plus nine barcode formats — EAN-13 and EAN-8, UPC-E, Code 128, 39 and 93, Aztec, DataMatrix and PDF417 — straight off the box, with a haptic tap the moment it lands.',
        },
        {
          icon: 'tag',
          title: 'QR-code your drawers',
          body:
            'Print a label, stick it on a drawer, scan it. Location and sub-location get filed in one motion instead of two dropdowns.',
        },
        {
          icon: 'widget',
          title: 'The shop at a glance',
          body:
            'Home Screen widgets for totals, categories and recent tools — plus Lock Screen and StandBy accessories showing how many tools need attention. Tap one and land on that exact filtered list.',
        },
        {
          icon: 'sparkle',
          title: 'Straight to the scanner',
          body:
            '“Scan a tool in ShopKeep” from Siri or Spotlight opens the camera without a single tap on the way.',
        },
        {
          icon: 'chart',
          title: 'Reports you can drill into',
          body:
            'Swift Charts renders yearly spend, cumulative investment, monthly and quarterly breakdowns — filterable by brand and category, and tappable all the way down to the individual tool.',
        },
        {
          icon: 'apple',
          title: 'Sign in with Apple',
          body:
            'Use your Apple ID or your Microsoft account. Either way it is the same inventory you already have on the web, not a second copy of it.',
        },
      ],
      tech: ['SwiftUI', 'VisionKit', 'WidgetKit', 'App Intents', 'Swift Charts', 'Sign in with Apple'],
      minOS: 'iOS 17',
      devices: 'iPhone and iPad',
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
    quiet: 'On iPhone there is no account at all — and no internet required.',
    icon: 'layers',
    bundleId: 'com.nintek.cairn',
    hasPage: true,
    platforms: { web: true, ios: true },
    mockup: {
      title: 'Exam Readiness',
      subtitle: 'AZ-104 · Azure Administrator',
      chip: 'Quiz complete · +120 XP',
      live: 'Studying',
    },
    native: {
      status: 'testflight',
      thesis:
        'No account, no network, no excuses — the entire exam library lives on your phone.',
      intro:
        'Cairn was the first port, and it went furthest. There is no sign-in, no server and no sync service: your progress lives in your own iCloud account, and every question, flashcard and study guide ships inside the app. It is the version of Cairn that works in a basement, on a plane, or in the twenty minutes before a test.',
      highlights: [
        {
          icon: 'cloud',
          title: 'No login. Ever.',
          body:
            'Your progress lives in your private iCloud database and follows you to every Apple device you own. There is no sign-up form, no password to lose, and no server holding your study history.',
        },
        {
          icon: 'package',
          title: 'Every exam, offline',
          body:
            'The full question bank, flashcards, study guides and glossary are bundled into the app. Nothing to download, nothing to wait for, nothing that breaks when the signal drops.',
        },
        {
          icon: 'widget',
          title: 'Your streak on the Home Screen',
          body:
            'A small or medium widget keeps your streak, cards due, focus exam and best score in view — so the habit does not depend on remembering to open an app.',
        },
        {
          icon: 'lock',
          title: 'A timer on the Lock Screen',
          body:
            'Start a timed sandbox exam and a Live Activity puts the countdown in the Dynamic Island and on your Lock Screen. Check the clock without leaving the question.',
        },
        {
          icon: 'sparkle',
          title: 'Ask Siri',
          body:
            '“Study with Cairn” opens straight to your exams. “How am I doing in Cairn” jumps to your activity. Both work from Spotlight and inside Shortcuts.',
        },
        {
          icon: 'bell',
          title: 'One reminder, at your hour',
          body:
            'A single daily nudge at a time you choose, scheduled on the device itself. No notification server, no engagement campaign.',
        },
      ],
      tech: ['SwiftUI', 'SwiftData', 'CloudKit', 'WidgetKit', 'ActivityKit', 'App Intents'],
      minOS: 'iOS 17',
      devices: 'iPhone and iPad',
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
    quiet: 'On iPhone the cut list rides on your Lock Screen while you work.',
    icon: 'package',
    bundleId: 'com.nintek.workshop',
    hasPage: true,
    platforms: { web: true, ios: true },
    mockup: {
      title: 'Walnut Bench',
      subtitle: 'Cut list & progress',
      chip: 'Cut list optimised · 4% waste',
      live: 'In progress',
    },
    native: {
      status: 'testflight',
      thesis:
        'The cut plan runs on your phone, and the cut list lives on your Lock Screen while you work.',
      intro:
        'Workshop is the app that needed to leave the desk. Nobody plans a build at a keyboard — you plan it standing at the saw with sawdust on your hands. The native version puts the optimiser in your pocket and the checklist on your Lock Screen.',
      highlights: [
        {
          icon: 'gauge',
          title: 'Cut plans computed on device',
          body:
            'The guillotine packing optimiser is a direct Swift port of the web algorithm, unit-tested against the original so the layouts match exactly. It runs in your hand — no round trip, no spinner, no signal required.',
        },
        {
          icon: 'lock',
          title: 'Check off cuts from the Lock Screen',
          body:
            'A Live Activity keeps the cut list on your Lock Screen and in the Dynamic Island. Tick parts off at the saw without unlocking the phone or switching apps.',
        },
        {
          icon: 'widget',
          title: 'A shopping list you can tap',
          body:
            'Three widgets: project stats, builds in progress, and a shopping list you can actually tick off from the Home Screen. The app reconciles the change next time you open it.',
        },
        {
          icon: 'share',
          title: 'Add to Workshop',
          body:
            'Share a link from Safari or a photo from your library straight into the app. Inspiration gets captured where you find it, instead of in a note you never revisit.',
        },
        {
          icon: 'pencil',
          title: 'Sketch with Apple Pencil',
          body:
            'On iPad, draw the plan directly onto the project instead of photographing a napkin.',
        },
        {
          icon: 'ruler',
          title: 'Read the tape measure',
          body:
            'Point the camera at a tape or a printed cut sheet and tap the dimension you want, instead of typing “27 1/2” with one clean finger.',
        },
        {
          icon: 'search',
          title: 'Find a build from anywhere',
          body:
            'Projects are indexed in Spotlight, so a system search lands you on the right build — and Siri can open your dashboard or shopping list on command.',
        },
        {
          icon: 'chart',
          title: 'Insights the web does not have',
          body:
            'Swift Charts breaks down spend over time, cost by project, and how often you are actually out in the shop.',
        },
      ],
      tech: ['SwiftUI', 'WidgetKit', 'ActivityKit', 'App Intents', 'VisionKit', 'PencilKit', 'Swift Charts'],
      minOS: 'iOS 17',
      devices: 'iPhone and iPad',
    },
  },
  {
    slug: 'puzzlebox',
    name: 'Puzzlebox',
    category: 'Games & Puzzles',
    tagline: 'A whole arcade in one tab.',
    headline: { lead: 'One box.', em: 'A whole arcade inside.' },
    description:
      'A growing arcade of daily puzzles and full-sized games — a thirty-wave tower defence campaign, a trading sim running on real market data, themed slot machines, word and number puzzles — all tied together by one currency.',
    quiet: 'Step into the 3D room and play the arcade cabinet in the corner.',
    icon: 'grid',
    bundleId: 'com.nintek.puzzlebox',
    hasPage: true,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'The Arcade',
      subtitle: 'Ten games · one economy',
      chip: 'Wave 30 cleared · +450 Boxes',
      live: 'New today',
    },
  },
  {
    slug: 'cortex',
    name: 'Cortex',
    category: 'Games · iPhone & iPad',
    tagline: 'Eight games. No connection required.',
    headline: { lead: 'Eight games, one hub.', em: 'Nothing to sign into.' },
    description:
      'A native game hub for iPhone and iPad. Five puzzles carried over from Puzzlebox, three built only for iOS, and Game Center leaderboards and achievements across all of them — none of which needs the internet.',
    quiet: 'Shares its DNA with Puzzlebox, but it is very much its own thing.',
    icon: 'gamepad',
    bundleId: 'com.nintek.cortex',
    hasPage: false,
    platforms: { web: false, ios: true },
    mockup: {
      title: 'Cortex',
      subtitle: 'Eight games · Game Center',
      chip: 'Achievement unlocked · 10 hours played',
      live: 'Offline',
    },
    native: {
      status: 'testflight',
      thesis: 'Eight games, Game Center, and nothing to sign into.',
      intro:
        'Cortex is not a port of Puzzlebox — it is what happened when the games that belong on a phone got rebuilt for one, and then the work kept going. Five puzzles came across. Three more were written for iOS from scratch, including one running on a game engine embedded inside the app.',
      highlights: [
        {
          icon: 'grid',
          title: 'Eight games in one hub',
          body:
            'Sudoku Fight, Number Sums, Word Search, Word Rush and Scrabble came over from Puzzlebox. Pixel Flow, Neon Drop and Block Blast exist only here.',
        },
        {
          icon: 'trophy',
          title: 'Game Center, properly wired',
          body:
            'Fifteen leaderboards ranked by game and difficulty — best time where speed matters, high score where it does not. Achievements span the whole hub: play every game ten times, or log twenty hours across all of them.',
        },
        {
          icon: 'star',
          title: 'Pixel Flow',
          body:
            'A conveyor-belt colour matcher where every board resolves into a piece of pixel art. 532 hand-baked pictures feed a tiered thousand-level run, and the generator guarantees every level can actually be cleared.',
        },
        {
          icon: 'gamepad',
          title: 'Neon Drop',
          body:
            'A falling-block game done properly — SRS rotation with wall kicks, a seven-bag randomiser, T-spins, combos and back-to-back scoring. Core Haptics gives every lock and line clear its own texture.',
        },
        {
          icon: 'package',
          title: 'Block Blast',
          body:
            'A full Godot 4.7 engine embedded inside the SwiftUI app, booted on demand and handed its own Metal surface. A game engine living in a tab.',
        },
        {
          icon: 'cloud',
          title: 'No account, no network',
          body:
            'Everything runs on the device. Nothing to sign up for, nothing to sync, nothing that stops working when the plane doors close.',
        },
        {
          icon: 'widget',
          title: 'Widgets to pull you back in',
          body:
            'Quick Launch drops you straight into a game from the Home Screen. Stats shows your totals and how close you are to the next achievement.',
        },
      ],
      tech: ['SwiftUI', 'GameKit', 'Core Haptics', 'WidgetKit', 'Godot'],
      minOS: 'iOS 18',
      devices: 'iPhone and iPad',
    },
  },
  {
    slug: 'tabloom',
    name: 'Tabloom',
    category: 'Notes & Writing',
    tagline: 'Notebooks that grow with your thinking.',
    headline: { lead: 'Capture the spark.', em: 'Find it again later.' },
    description:
      'Notebooks that nest as deep as your thinking does, with rich text, tags and instant search — a calm home for everything you want to remember and nothing you don’t.',
    quiet: 'Everything you write, one search away.',
    icon: 'book',
    bundleId: 'com.nintek.tabloom',
    hasPage: true,
    platforms: { web: true, ios: false },
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
      'PulseWire clusters the day’s reporting into the stories that actually matter, ranked by how many independent outlets are covering them — with a Discover catalogue of 237 vetted feeds across 64 categories for when you want to go wider.',
    quiet: 'No infinite scroll. Just today, summarised and ranked.',
    icon: 'news',
    bundleId: 'com.nintek.pulsewire',
    hasPage: true,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'Today’s Briefing',
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
      'Hearth holds your recipes, your maintenance log, your home inventory, a to-scale garden planner with its own harvest ledger, the network and server closet, and an AI assistant — under one warm, calm interface.',
    quiet: 'Not a productivity tool. A place for the records that keep your home running.',
    icon: 'flame',
    bundleId: 'com.nintek.hearth',
    hasPage: true,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'At a Glance',
      subtitle: 'Home · garden · maintenance',
      chip: 'Next task · Furnace filter',
      live: 'Home',
    },
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}

/** Apps with a native iOS app in beta, in the order the story should be told. */
export const nativeApps = apps.filter((a) => a.native?.status === 'testflight');

/** The app that is next in line for a native port, if any. */
export const nextNativeApp = apps.find((a) => a.native?.status === 'next');
