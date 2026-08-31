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

export type NativeStatus =
  | 'testflight'
  | 'internal-testflight'
  | 'pre-release'
  | 'review-blocked'
  | 'rework'
  | 'development'
  | 'next';

export const NATIVE_STATUS_LABELS: Record<NativeStatus, string> = {
  testflight: 'TestFlight beta',
  'internal-testflight': 'Internal TestFlight',
  'pre-release': 'Pre-release build',
  'review-blocked': 'Release blocked after review',
  rework: 'Withdrawn for rework',
  development: 'In development',
  next: 'In the works',
};

export interface NativeHighlight {
  icon: IconKey;
  title: string;
  body: string;
}

/** One widget the app installs, as it appears in the widget gallery. */
export interface WidgetSpec {
  /** The gallery display name, verbatim from the `Widget`'s configuration. */
  name: string;
  /** The gallery description, verbatim. */
  body: string;
  /** Human-readable families, e.g. 'Small', 'Medium', 'Lock Screen'. */
  sizes: string[];
}

/** The Apple Watch story, for apps that ship a watchOS target. */
export interface WatchApp {
  /** One line for the section head. */
  thesis: string;
  /** What you can do on the wrist. */
  points: string[];
  /** Complications offered, and on which families. */
  complications: { name: string; families: string }[];
  minOS: string;
}

/** The native iOS story for an app. Every highlight below is backed by current
 *  executable source; `status` carries the product's release maturity. */
export interface Native {
  status: NativeStatus;
  /** Device frame used by the shared home and /ios showcases. */
  showcase?: 'phone' | 'tablet';
  /** One line on why this app is worth having natively. */
  thesis: string;
  /** A paragraph of context for the /ios page. */
  intro: string;
  highlights: NativeHighlight[];
  /** Frameworks and platform tech, rendered as chips. */
  tech: string[];
  minOS: string;
  devices: string;
  /** Home Screen / Lock Screen widgets the app installs. */
  widgets?: WidgetSpec[];
  /** The watchOS companion, if there is one. */
  watch?: WatchApp;
}

/** A retired web predecessor and its native successor. Rendered as a standing
 *  notice so nobody looks for a browser login that no longer exists. */
export interface Sunset {
  /** Short label, e.g. 'Web app retired'. */
  label: string;
  /** The full notice. */
  body: string;
  /** Where the work continues. */
  successor: string;
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
  bundleId?: string;
  hasPage: boolean;
  /** Public app-specific policy and help routes, when available. */
  privacyPath?: string;
  supportPath?: string;
  /** Shared studio terms covering this product. */
  termsPath: string;
  platforms: Platforms;
  mockup: Mockup;
  native?: Native;
  /** Set when a retired web predecessor needs a standing migration notice. */
  sunset?: Sunset;
}

/** Minimal metadata retained for legal and historical routes after an app leaves
 *  the public catalogue. */
export interface RetiredApp {
  slug: string;
  name: string;
  successorSlug: string;
  successorName: string;
}

export const COMPANY = {
  name: 'Nintek',
  domain: 'nintek.com',
  email: 'hello@nintek.com',
  privacyEmail: 'privacy@nintek.com',
  tagline: 'Small, thoughtful software for everyday life.',
};

export const TERMS_PATH = '/terms';

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
        'Shared records are defined once and decoded the same way in each app and its extensions. Nothing drifts between surfaces.',
    },
    {
      icon: 'widget' as IconKey,
      title: 'Widgets share the source',
      body:
        'Snapshots are written to a shared App Group, so widgets and Live Activities render real data without a network call, a login, or a private copy of the theme that quietly goes stale.',
    },
    {
      icon: 'gauge' as IconKey,
      title: 'Scheduling moved on device',
      body:
        'The spaced-repetition scheduler was ported to Swift and unit-tested against the original. Study planning that once needed a round trip is now instant.',
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
      'Weight, doses, glucose, labs and well-being on a GLP-1 journey — read together, not in four separate places. The native build automatically imports approved Apple Health data when the app opens or returns, supports iPhone, iPad and Apple Watch, and needs no account.',
    quiet: 'iOS-first draft 1.0 (31), assigned only to internal TestFlight. No public App Store listing or announced price.',
    icon: 'drop',
    bundleId: 'com.nintek.tare',
    hasPage: true,
    privacyPath: '/tare/privacy',
    supportPath: '/tare/support',
    termsPath: TERMS_PATH,
    platforms: { web: false, ios: true },
    mockup: {
      title: 'This Month',
      subtitle: 'Trend · weight, doses & glucose',
      chip: 'Simulator capture · fictional data',
      live: 'Build 31',
    },
    native: {
      status: 'internal-testflight',
      thesis:
        'The longest history in the catalogue, carried by the phone, the wrist and the Home Screen — with no account behind any of it.',
      intro:
        'Tare is the app that gets opened every day, and the one carrying the most history, so the native version was built to hold that history without asking for an account at all. The retired web app used Microsoft sign-in; the native app keeps everything in SwiftData on the device and syncs through your own private iCloud database. After you opt in, it imports approved Apple Health data whenever the app opens or returns, while a manual Sync now control stays available. It also adds widgets, a dose-day Live Activity, Apple Watch logging, Siri, Face ID and local reminders. A compatible backup created before retirement remains a migration path into the native store.',
      highlights: [
        {
          icon: 'cloud',
          title: 'No account, and nothing to sign into',
          body:
            'The retired web app needed a Microsoft login. This one has no sign-in screen at all. Your history lives on the phone and syncs through your own private iCloud database, so there is no native server holding a copy and no password to lose. With no iCloud it degrades to a local store and says so, rather than refusing to launch.',
        },
        {
          icon: 'heart',
          title: 'Two-way Apple Health sync',
          body:
            'After you opt in, Tare checks Health whenever the app opens or returns. Weight, glucose and dietary water flow both directions; sleep and steps are read only. For weight and glucose, what you typed always wins — Health fills days you left blank and never overwrites a figure you entered yourself. Water works differently: Tare writes what you log to Health, then re-totals the day\u2019s figure from Health so it reflects every source contributing to it.',
        },
        {
          icon: 'apple',
          title: 'An Apple Watch app you can log from',
          body:
            'Glucose, weight, dose and mood, entered with the Digital Crown. Entries queue on the wrist and are delivered even if the phone is asleep or out of range — and the watch tells you how many are still waiting rather than pretending they landed.',
        },
        {
          icon: 'widget',
          title: 'Five widgets and a Live Activity',
          body:
            'Next Dose, Glucose, Weight, Food Photo and a full Dashboard — on the Home Screen, the Lock Screen and in StandBy. On injection day a Live Activity counts down in the Dynamic Island. Every figure is marked privacy-sensitive, so it blurs when the phone is locked.',
        },
        {
          icon: 'sparkle',
          title: 'An analyst that stays switched off',
          body:
            'Nine AI features — the doctor report, "Tare\u2019s Take", lab-PDF import, meal photos, and a chat that can question your own numbers — all sit behind one switch that is off until you turn it on. Ask it anything and it writes SQL that runs on the phone: the model gets the answer, never the database.',
        },
        {
          icon: 'bell',
          title: 'Reminders that actually arrive',
          body:
            'Injection day, hydration, a weekly digest and a monthly report, all scheduled by the phone itself. The web app used a timer that only fired if the tab was still open — over a week, essentially never. No notification server, and nothing behind them trying to win back your attention.',
        },
        {
          icon: 'lock',
          title: 'Shut behind Face ID',
          body:
            'An optional lock on launch that takes Face ID or your passcode, never biometrics alone, so a bad match can never strand you outside your own medication history. The locked app is never even built, and the app switcher preview is covered too.',
        },
        {
          icon: 'package',
          title: 'Bring the whole history with you',
          body:
            'Open a compatible backup created before the web app retired — all sixteen tables land in one pass. A safety copy of whatever is already on the phone is written first, without being asked, and the app keeps fourteen rolling daily backups on device.',
        },
      ],
      tech: [
        'SwiftUI', 'SwiftData', 'CloudKit', 'HealthKit', 'WidgetKit', 'ActivityKit',
        'watchOS', 'WatchConnectivity', 'App Intents', 'VisionKit', 'Face ID',
        'App Attest', 'User Notifications',
      ],
      minOS: 'iOS 17',
      devices: 'iPhone, iPad and Apple Watch',
      widgets: [
        {
          name: 'Next Dose',
          body: 'Days until your next injection.',
          sizes: ['Small', 'Medium', 'Lock Screen'],
        },
        {
          name: 'Glucose',
          body: 'Your latest reading, and whether it is in band.',
          sizes: ['Small', 'Medium', 'Lock Screen'],
        },
        {
          name: 'Weight',
          body: 'Your latest weight, and progress toward your goal.',
          sizes: ['Small', 'Medium', 'Lock Screen'],
        },
        {
          name: 'Tare Dashboard',
          body: 'Dose, weight, glucose and estimated A1C in one card.',
          sizes: ['Medium', 'Large'],
        },
        {
          name: 'Food Photo',
          body: 'Jump straight to logging a meal from a photo.',
          sizes: ['Small'],
        },
      ],
      watch: {
        thesis:
          'The same three readings the phone opens on, in the same colours — and four things you can log without reaching for it.',
        points: [
          'Next dose, glucose and weight on the wrist, each with its own sparkline.',
          'Quick Log takes glucose, weight, dose and mood on the Digital Crown.',
          'Entries queue and are guaranteed delivery — they survive a reboot and wake the phone in the background.',
          'The countdown is recomputed on the watch, so it is never a stale string left over from Tuesday.',
          'Out of range it says how many entries are still waiting, because "logged" and "the phone has it" are different promises.',
        ],
        complications: [
          { name: 'Next Dose', families: 'Circular, Corner, Inline, Rectangular' },
          { name: 'Glucose', families: 'Circular, Corner, Inline, Rectangular' },
        ],
        minOS: 'watchOS 10',
      },
    },
    sunset: {
      label: 'The web app is retired',
      body:
        'Tare no longer has a supported browser interface or web sign-in. Production web traffic is relay-only for optional native AI features: there is no installable PWA, offline web mode, or browser background-reminder claim. The legacy web database remains isolated while final native migration and deletion validation completes; it is not connected to the native store and is not represented as already deleted.',
      successor: 'Tare for iPhone, iPad and Apple Watch',
    },
  },
  {
    slug: 'shopkeep',
    name: 'ShopKeep',
    category: 'For Makers & Workshops',
    tagline: 'Every tool on the register.',
    headline: { lead: 'Every tool numbered.', em: 'Every move accounted for.' },
    description:
      'A numbered register for the whole shop, with Apple or Microsoft sign-in, account-scoped photos and documents, and permanent in-app account deletion. One readout says what is out, what is in service and what the shelf is worth.',
    quiet: 'Build 35 is attached and VALID, but there is no public listing, acquisition link, or authorized price.',
    icon: 'hammer',
    bundleId: 'com.nintek.shopkeep',
    hasPage: true,
    privacyPath: '/shopkeep/privacy',
    supportPath: '/shopkeep/support',
    termsPath: TERMS_PATH,
    platforms: { web: true, ios: true },
    mockup: {
      title: 'Release evidence',
      subtitle: 'Canonical build 35 identity',
      chip: 'Attached · VALID',
      live: 'Private',
    },
    native: {
      status: 'pre-release',
      thesis:
        'The whole register in your pocket, the readout on your Home Screen, and a camera instead of a keyboard.',
      intro:
        'ShopKeep 2.0.1 (35) is a valid attached private build for iPhone and iPad. The native client adds camera-first scanning, widgets and Siri, while Apple and Microsoft sign-in reach separate account-backed workspaces. Photos and documents load only through authenticated private-media requests, and Account & Data can permanently delete only the selected provider workspace after server confirmation.',
      highlights: [
        {
          icon: 'scan',
          title: 'Live barcode scanning',
          body:
            'VisionKit reads QR plus nine barcode formats — EAN-13 and EAN-8, UPC-E, Code 128, 39 and 93, Aztec, DataMatrix and PDF417 — straight off the box, with a haptic tap the moment it lands. The code goes into inventory search, which matches barcodes and SKUs as readily as it matches a name, brand, model or category.',
        },
        {
          icon: 'tag',
          title: 'QR-code your drawers',
          body:
            'Print a label, stick it on a drawer, scan it. Location and sub-location get filed in one motion instead of two dropdowns.',
        },
        {
          icon: 'widget',
          title: 'The readout on your Home Screen',
          body:
            'Inventory Stats carries the total and the needs-attention count at small size, and four tiles at medium. Workshop Overview goes large with the stats, the tools you added last and a category bar. Needs Attention runs as a Lock Screen and StandBy accessory. All of them read from a stored snapshot, so nothing waits on the network to draw.',
        },
        {
          icon: 'sparkle',
          title: 'Straight to the scanner',
          body:
            '“Scan a Tool” is an App Shortcut, so Siri and Spotlight open the camera without a single tap on the way. Tapping a widget follows a shopkeep:// link to the right tab and, where it matters, to the exact filtered list — everything needing attention, or a search already run.',
        },
        {
          icon: 'chart',
          title: 'Reports you can drill into',
          body:
            'Swift Charts renders yearly spend, cumulative investment, monthly and quarterly breakdowns, behind a real filter bar — top N brands, a year range, a brand picker and category chips — and every mark is tappable all the way down to the individual tool.',
        },
        {
          icon: 'package',
          title: 'The register, maintained',
          body:
            'Categories and locations are editable in place, deleted tools go to a restorable trash, and manuals, receipts and warranty documents attach to the tool record itself.',
        },
        {
          icon: 'lock',
          title: 'Private media stays behind the account',
          body:
            'Tool photos and documents are fetched through authenticated, account-scoped routes and held only in nonpersistent client caches. Raw storage paths are not public product links.',
        },
        {
          icon: 'layers',
          title: 'Native iOS inventory canon',
          body:
            'Semantic system surfaces, restrained SF typography, continuous containers, and one selectable interaction accent replace the retired web palette and toolpath-arrow identity.',
        },
        {
          icon: 'apple',
          title: 'Apple or Microsoft — and a way out',
          body:
            'Use Sign in with Apple or Microsoft. The providers create separate ShopKeep accounts, and Account & Data can permanently delete the selected account and its inventory after the server confirms removal.',
        },
      ],
      tech: [
        'SwiftUI', 'VisionKit', 'WidgetKit', 'App Intents', 'Swift Charts',
        'Sign in with Apple', 'MSAL', 'Authenticated private media',
      ],
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
      'The Cairn web workspace is online and account-backed. CairnNative is a separate local-first app with private iCloud sync and no shared progress; version 3.0 is not publicly available after App Review rejected the combined submission.',
    quiet: 'No public App Store listing. The $14.99 Full Exam Library IAP remains in review.',
    icon: 'layers',
    bundleId: 'com.nintek.cairn',
    hasPage: true,
    privacyPath: '/cairn/privacy',
    supportPath: '/cairn/support',
    termsPath: TERMS_PATH,
    platforms: { web: true, ios: true },
    /* The home-page frame is browser chrome, so it shows the web dashboard.
       Courses are iOS-only and must not be advertised on a web surface. */
    mockup: {
      title: 'Study sheet',
      subtitle: 'Certification tiers, resumed where you stopped',
      chip: '54 tracks · 5,300+ questions',
      live: 'Studying',
    },
    native: {
      status: 'review-blocked',
      thesis:
        'No account or Nintek backend — study locally, with optional private iCloud sync between Apple devices.',
      intro:
        'Cairn is fully standalone: there is no sign-in, Nintek server or app-authored network call. Progress stays local and can sync only through your private Apple iCloud database; it never syncs with the web app. The current build includes bundled exam and course material, but rights and attribution remediation is still pending integration before the rejected release can be resubmitted.',
      highlights: [
        {
          icon: 'book',
          title: 'Eight offline curricula in the current build',
          body:
            'The native build contains eight bundled learning curricula. Their rights, attribution and asset provenance are under active remediation and must be integrated before App Store resubmission.',
        },
        {
          icon: 'ruler',
          title: 'Designed for iPad, not stretched to it',
          body:
            'Navigation moves into the title bar, grids resolve to two columns, and reading surfaces hold a measured line length instead of running the full width of the display. The column widths are tuned per size class, down to the 11-inch iPad in portrait.',
        },
        {
          icon: 'cloud',
          title: 'Private iCloud sync, not web sync',
          body:
            'Your progress lives locally and may follow you between Apple devices through your private iCloud database. The web app uses a separate Azure store; the two progress histories never connect.',
        },
        {
          icon: 'package',
          title: 'Everything, offline',
          body:
            'Question banks, flashcards, study guides, glossaries and whole course curricula are bundled into the app. Nothing to download, nothing to wait for, nothing that breaks when the signal drops.',
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
      devices: 'iPad and iPhone',
    },
  },
  {
    slug: 'workshop',
    name: 'Workshop',
    category: 'Woodworking & Projects',
    tagline: 'Keep the whole build connected.',
    headline: { lead: 'Keep the whole build', em: 'connected.' },
    description:
      'Workshop keeps woodworking plans, dimensions, materials, cuts, shopping, build notes, and finish records together in one online, account-backed web workspace.',
    quiet: 'Open the supported web client at workshop.nintek.com, or explore the read-only demo before signing in.',
    icon: 'package',
    hasPage: true,
    privacyPath: '/workshop/privacy',
    supportPath: '/workshop/support',
    termsPath: TERMS_PATH,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'Workshop',
      subtitle: 'Project companion',
      chip: 'Current Living Plan Table',
      live: 'Current web capture',
    },
  },
  {
    slug: 'cortex',
    name: 'Cortex',
    category: 'Games · iPhone',
    tagline: 'Eight native games. No Nintek backend.',
    headline: { lead: 'Eight games, one hub.', em: 'Built for iOS.' },
    description:
      'A native games hub for iPhone: Sudoku, Sumweave, Word Search, Letter Sprint, Wordfoundry, Grid Blast, Pixel Flow and Neon Drop, with optional Game Center and no Nintek account or backend.',
    quiet: 'Build 1.1 (21) is internal TestFlight, not external or public; there is no App Store listing.',
    icon: 'gamepad',
    bundleId: 'com.nintek.cortex',
    hasPage: true,
    privacyPath: '/cortex/privacy',
    supportPath: '/cortex/support',
    termsPath: TERMS_PATH,
    platforms: { web: false, ios: true },
    mockup: {
      title: 'Cortex',
      subtitle: 'Eight games · Game Center',
      chip: 'Eight games · one native hub',
      live: 'No Nintek backend',
    },
    native: {
      status: 'internal-testflight',
      thesis: 'Eight native games, optional Game Center, and no Nintek backend.',
      intro:
        'Cortex 1.1 (21) is a valid, attached internal TestFlight build for iPhone. Eight distinct word, number, logic and arcade games share one native home, with optional Game Center and no Nintek account or backend service sitting between you and a game. External beta and public App Store availability are not established.',
      highlights: [
        {
          icon: 'grid',
          title: 'Eight games in one hub',
          body:
            'Sudoku, Sumweave, Word Search, Letter Sprint, Wordfoundry, Grid Blast, Pixel Flow and Neon Drop — each with its own home and play style.',
        },
        {
          icon: 'trophy',
          title: 'Optional Game Center',
          body:
            'When you use it, Apple Game Center connects scores and achievements to the gaming profile you already control. Cortex remains playable without it.',
        },
        {
          icon: 'star',
          title: 'Pixel Flow',
          body:
            'A conveyor-belt colour matcher where every board resolves into pixel art. Its 505-board campaign uses verified first-party and owner-generated sources, and the generator keeps every level solvable.',
        },
        {
          icon: 'gamepad',
          title: 'Neon Drop',
          body:
            'A falling-block game done properly — SRS rotation with wall kicks, a seven-bag randomiser, T-spins, combos and back-to-back scoring. Core Haptics gives every lock and line clear its own texture.',
        },
        {
          icon: 'package',
          title: 'Grid Blast',
          body:
            'A tactile block puzzle that rewards a clean board, thoughtful placement and one more carefully judged move.',
        },
        {
          icon: 'cloud',
          title: 'No Nintek backend',
          body:
            'The games and detailed statistics run on the device. There is no Cortex account, Nintek API, analytics service or first-party sync backend.',
        },
        {
          icon: 'widget',
          title: 'Widgets to pull you back in',
          body:
            'Quick Launch drops you straight into a game from the Home Screen. Stats shows your totals and how close you are to the next achievement.',
        },
      ],
      tech: ['SwiftUI', 'GameKit', 'Core Haptics', 'WidgetKit'],
      minOS: 'iOS 18',
      devices: 'iPhone',
    },
  },
  {
    slug: 'sortie',
    name: 'Sortie',
    category: 'Games · iPhone',
    tagline: 'Build the line. Take the map.',
    headline: { lead: 'Draw the supply line.', em: 'Watch the front move.' },
    description:
      'A tactical conquest campaign for iPhone. Link keeps into permanent supply lines, route reinforcements around terrain, and take 1,500 levels across 15 distinct biomes.',
    quiet: 'Build 13 is in internal TestFlight, not public. Local saves, optional Game Center, no account or backend.',
    icon: 'gamepad',
    bundleId: 'com.nintek.sortie',
    hasPage: true,
    privacyPath: '/sortie/privacy',
    supportPath: '/sortie/support',
    termsPath: TERMS_PATH,
    platforms: { web: false, ios: true },
    mockup: {
      title: 'Sortie',
      subtitle: 'Tactical conquest · 1,500 levels',
      chip: 'Permanent supply lines',
      live: 'Pre-release build',
    },
    native: {
      status: 'internal-testflight',
      showcase: 'phone',
      thesis: 'A 1,500-level supply-line campaign with local saves and optional Game Center.',
      intro:
        'Sortie rebuilds City War as a standalone Godot strategy game for iPhone. Every route is a lasting commitment: link one keep to another and it keeps sending troops until you cut or redirect the line. The current campaign spans 1,500 levels and 15 biomes, saves entirely on device, and keeps Game Center optional.',
      highlights: [
        {
          icon: 'share',
          title: 'Supply lines that stay drawn',
          body:
            'A route is not a one-off command. It keeps sending troops, turning each match into a network you build, reinforce, reroute, and cut under pressure.',
        },
        {
          icon: 'layers',
          title: '1,500 levels across 15 biomes',
          body:
            'The current campaign moves through meadow, tundra, coast, storm, crystal, and ten other terrain sets, with one hundred levels assigned to each biome.',
        },
        {
          icon: 'ruler',
          title: 'Terrain is the rule set',
          body:
            'Routes are tested against every obstacle on the board. There is no hidden edge graph: a clear line is a usable line, and the landscape decides the plan.',
        },
        {
          icon: 'gauge',
          title: 'Keeps become a relay network',
          body:
            'Growing a keep unlocks more lanes. A full keep forwards its surplus through the chain, so a quiet rear position can feed the entire front.',
        },
        {
          icon: 'lock',
          title: 'Progress stays on the device',
          body:
            'Campaign progress, records, wins, settings, and best times are written to a local JSON save. There is no Nintek account or sync backend.',
        },
        {
          icon: 'trophy',
          title: 'Game Center is optional',
          body:
            'Achievements report through Game Center when it is available. Authentication never sits between the player and the campaign.',
        },
      ],
      tech: ['Godot 4', 'Game Center', 'Local JSON saves'],
      minOS: 'iOS 14',
      devices: 'iPhone',
    },
  },
  {
    slug: 'salvo',
    name: 'Salvo',
    category: 'Games · iPad',
    tagline: 'Hold the line in Age of Siege.',
    headline: { lead: 'Build the defense.', em: 'Hold the first era.' },
    description:
      'An unreleased portrait-iPad tower-defense build with 16 synchronized Age of Siege operations, three difficulty settings, local progress, and a separate endless mode.',
    quiet: 'Build 4 is attached and VALID, but wider campaign content and release approval remain blocked.',
    icon: 'gamepad',
    bundleId: 'com.nintek.salvo',
    hasPage: true,
    privacyPath: '/salvo/privacy',
    supportPath: '/salvo/support',
    termsPath: TERMS_PATH,
    platforms: { web: false, ios: true },
    mockup: {
      title: 'Salvo',
      subtitle: 'Five-era tower defense',
      chip: '16 Age of Siege operations',
      live: 'Unreleased',
    },
    native: {
      status: 'development',
      showcase: 'tablet',
      thesis: 'An unreleased portrait iPad build centered on readable tactical choices.',
      intro:
        'Salvo turns Puzzlebox Tower Defense into a standalone Godot game built specifically for portrait iPad play. Version 1.0.0 (4) contains 16 synchronized Age of Siege operations, three difficulty settings, a separate endless mode, and local progress. The wider five-era campaign remains blocked, and Game Center is excluded from v1.',
      highlights: [
        {
          icon: 'grid',
          title: 'Sixteen current operations',
          body:
            'The executable campaign and manifest currently ship 16 synchronized maps. The wider five-era campaign remains active development, not a finished content claim.',
        },
        {
          icon: 'layers',
          title: 'A five-era framework',
          body:
            'Siege is the current playable era. Wastes, Modern, Future, and Xeno define the wider art and campaign direction but are not shipped v1 content.',
        },
        {
          icon: 'ruler',
          title: 'Built for portrait iPad',
          body:
            'The tactical board, command bar, tower deck, and touch targets are composed for one portrait canvas rather than stretched from a phone or browser layout.',
        },
        {
          icon: 'gauge',
          title: 'Campaign and local endless mode',
          body:
            'Three difficulties sit alongside a separate endless run whose highest completed wave stays on the device.',
        },
        {
          icon: 'lock',
          title: 'Local progress comes first',
          body:
            'Results commit to a versioned on-device save. The current local game remains usable without an account or network.',
        },
        {
          icon: 'trophy',
          title: 'No Game Center in v1',
          body:
            'The player export excludes Game Center entirely: no achievements, leaderboards, ranked scores, authentication, or retry ledger.',
        },
      ],
      tech: ['Godot 4', 'Local JSON saves'],
      minOS: 'iOS 15',
      devices: 'iPad only',
    },
  },
  {
    slug: 'tabloom',
    name: 'Tabloom',
    category: 'Notes & Writing',
    tagline: 'Notebooks that grow with your thinking.',
    headline: { lead: 'Capture the spark.', em: 'Find it again later.' },
    description:
      'Nested notebooks with rich text, tags, archive and instant search — plus explicit, read-only offline downloads in the installable web app.',
    quiet: 'Offline copies live in identity-scoped IndexedDB; editing waits for a complete reconnect refresh.',
    icon: 'book',
    bundleId: 'com.nintek.tabloom',
    hasPage: true,
    privacyPath: '/tabloom/privacy',
    supportPath: '/tabloom/support',
    termsPath: TERMS_PATH,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'Tabloom workspace',
      subtitle: 'Library · pages · editor',
      chip: 'Deterministic fictional fixture',
      live: 'Current UI',
    },
  },
  {
    slug: 'pulsewire',
    name: 'PulseWire',
    category: 'News & Reading',
    tagline: 'The signal, not the noise.',
    headline: { lead: 'Developing stories.', em: 'Evidence in view.' },
    description:
      'A story-intelligence reader with a private Microsoft Entra owner workspace, a separate 24-hour read-only demo, evidence-linked stories, and explicit offline Saved snapshots.',
    quiet: 'PostgreSQL + pgvector, Azure AI Foundry, and explicit offline Saved snapshots.',
    icon: 'news',
    bundleId: 'com.nintek.pulsewire',
    hasPage: true,
    privacyPath: '/pulsewire/privacy',
    supportPath: '/pulsewire/support',
    termsPath: TERMS_PATH,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'Today’s Edition',
      subtitle: 'Stories · evidence · chronology',
      chip: 'Controlled fictional fixture',
      live: 'No owner data',
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
    termsPath: TERMS_PATH,
    platforms: { web: true, ios: false },
    mockup: {
      title: 'At a Glance',
      subtitle: 'Home · garden · maintenance',
      chip: 'Next task · Furnace filter',
      live: 'Home',
    },
  },
];

export const retiredApps: RetiredApp[] = [
  {
    slug: 'puzzlebox',
    name: 'Puzzlebox',
    successorSlug: 'cortex',
    successorName: 'Cortex',
  },
];

export function getApp(slug: string): App | undefined {
  return apps.find((a) => a.slug === slug);
}

export function getRetiredApp(slug: string): RetiredApp | undefined {
  return retiredApps.find((app) => app.slug === slug);
}

/** Current native iOS projects, in the order the story should be told. */
export const nativeApps = apps.filter(
  (a) => a.platforms.ios && a.native && a.native.status !== 'next',
);

/** The app that is next in line for a native port, if any. */
export const nextNativeApp = apps.find((a) => a.native?.status === 'next');
