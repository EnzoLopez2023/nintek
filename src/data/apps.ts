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
  /** Home Screen / Lock Screen widgets the app installs. */
  widgets?: WidgetSpec[];
  /** The watchOS companion, if there is one. */
  watch?: WatchApp;
}

/** A web app that is being retired in favour of its native successor. Rendered
 *  as a standing notice so nobody starts a migration they'd have to redo. */
export interface Sunset {
  /** Short label, e.g. 'Web app winding down'. */
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
  bundleId: string;
  hasPage: boolean;
  platforms: Platforms;
  mockup: Mockup;
  native?: Native;
  /** Set when the web app is being retired in favour of the native one. */
  sunset?: Sunset;
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
      'Weight, doses, glucose, labs and well-being on a GLP-1 journey — read together, not in four separate places. Native on iPhone, iPad and Apple Watch, with two-way Apple Health sync, widgets, a dose-day Live Activity, and an AI analyst that answers questions about any of it without your records leaving the device.',
    quiet: 'Now native on iPhone, iPad and Apple Watch — with no account at all.',
    icon: 'drop',
    bundleId: 'com.nintek.tare',
    hasPage: true,
    platforms: { web: true, ios: true },
    mockup: {
      title: 'This Month',
      subtitle: 'Trend · weight, doses & glucose',
      chip: 'Logged · 242.1 lb',
      live: 'On track',
    },
    native: {
      status: 'testflight',
      thesis:
        'The longest history in the catalogue, carried by the phone, the wrist and the Home Screen — with no account behind any of it.',
      intro:
        'Tare is the app that gets opened every day, and the one carrying the most history, so the native version was built to hold that history without asking for an account at all. Where the web app signs into Microsoft, this one keeps everything in SwiftData on the device and syncs through your own private iCloud database. Then it does the things a browser tab simply cannot: widgets on the Home Screen and Lock Screen, a Live Activity that counts down injection day, an Apple Watch app you can log from, two-way Apple Health sync, Siri, Face ID, and reminders that fire whether or not anything is open. Moving across is a single file — export a backup on the web, open it on the phone, and every weight, dose, glucose reading, lab result and photo arrives intact.',
      highlights: [
        {
          icon: 'cloud',
          title: 'No account, and nothing to sign into',
          body:
            'The web app needs a Microsoft login. This one has no sign-in screen at all. Your history lives on the phone and syncs through your own private iCloud database, so there is no server holding a copy and no password to lose. With no iCloud it degrades to a local store and says so, rather than refusing to launch.',
        },
        {
          icon: 'heart',
          title: 'Two-way Apple Health sync',
          body:
            'Weight and glucose flow both directions; sleep and steps are read only, because Tare has no business claiming to be the source of a night\u2019s sleep. What you typed always wins — Health fills the days you left blank and never overwrites a figure you entered yourself.',
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
            'Export a backup from the web app and open it here — all sixteen tables land in one pass. A safety copy of whatever is already on the phone is written first, without being asked, so a restore can always be undone. After that it keeps rolling daily backups on device.',
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
      label: 'The web app is winding down',
      body:
        'Tare on the web is in maintenance. Every new feature — widgets, the Apple Watch app, Apple Health, Live Activities, Siri, Face ID, offline charts — is being built on iPhone only, and the browser version will be retired once the migration is done. Nothing is stranded: the native app reads the web app\u2019s backup file directly, and its calculations are held to numerical parity with the originals by an automated test suite, so moving across is lossless rather than merely close.',
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
      'A tool library in the machinist’s sense — a numbered register of the whole shop, every tool carrying its own address, specs, location and wear state. One readout says what is out, what is in service and what the shelf is worth.',
    quiet: 'Built as the machine control it is, not as a workshop scrapbook.',
    icon: 'hammer',
    bundleId: 'com.nintek.shopkeep',
    hasPage: true,
    platforms: { web: true, ios: true },
    mockup: {
      title: 'Shop status',
      subtitle: 'Tool library · LIB.01',
      chip: 'Receipt imported · 3 tools on the register',
      live: 'Live',
    },
    native: {
      status: 'testflight',
      thesis:
        'The whole register in your pocket, the readout on your Home Screen, and a camera instead of a keyboard.',
      intro:
        'ShopKeep and its native counterpart are the same instrument on two screens — a pale enamel cabinet, one inset graphite readout per screen, and status drawn as the move a tool is making. What the phone adds is the shop floor: a camera that reads the barcode off the box, widgets that carry the readout onto the Home Screen, and Siri going straight to the scanner.',
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
            'Categories and locations are editable in place, so the taxonomy is yours rather than a fixed list. Deleted tools go to a trash you can restore from. Manuals, receipts and warranty documents attach to the tool record itself.',
        },
        {
          icon: 'layers',
          title: 'Eight palettes, one structure',
          body:
            'Tool Library is the default and the identity — the machine control panel the app is built as. ShopKeep, GitHub, Fox, IC Orange PPL, Monochrome, Noctis Azureus and Notionish are inherited skins you can switch to in Settings. Only the token values change; the structure never does.',
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
      'Fifty-four Microsoft certification tracks with practice, flashcards, study guides and timed papers. The iOS app adds eight complete Microsoft curricula and runs with no account and no network at all.',
    quiet: 'No account, no server, no network calls. On iPad it is a two-column app, not a stretched phone.',
    icon: 'layers',
    bundleId: 'com.nintek.cairn',
    hasPage: true,
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
      status: 'testflight',
      thesis:
        'No account, no network, no excuses — the entire library lives on your device.',
      intro:
        'Cairn was the first port, and it went furthest. There is no sign-in, no server and no sync service: your progress lives in your own iCloud account, and every question, flashcard, study guide and lesson ships inside the app. iOS is now where Cairn is developed first — the courses below exist here and nowhere else — and the iPad layout was designed alongside the iPhone one rather than after it.',
      highlights: [
        {
          icon: 'book',
          title: 'Eight full curricula, iOS only',
          body:
            "Microsoft's free courses — AI, Generative AI, Machine Learning, Data Science, Web Development, AI Agents, IoT and MCP for Beginners — mirrored word for word across 219 lessons, with every image, lab, notebook and quiz. No certification required, and no link ever leaves the app to read the material.",
        },
        {
          icon: 'ruler',
          title: 'Designed for iPad, not stretched to it',
          body:
            'Navigation moves into the title bar, grids resolve to two columns, and reading surfaces hold a measured line length instead of running the full width of the display. The column widths are tuned per size class, down to the 11-inch iPad in portrait.',
        },
        {
          icon: 'cloud',
          title: 'No login. Ever.',
          body:
            'Your progress lives in your private iCloud database and follows you to every Apple device you own. There is no sign-up form, no password to lose, and no server holding your study history.',
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
    tagline: 'Read your shop like a departure board.',
    headline: { lead: 'Every build,', em: 'on the board.' },
    description:
      'A woodworking shop record read like a Solari departure board. Plan the cut, carry the shopping list, log the build, and keep every dimension and finish note with the project that produced it.',
    quiet: 'Seven complete starter builds mean a new shop never opens to an empty board.',
    icon: 'package',
    bundleId: 'com.nintek.workshop',
    hasPage: true,
    platforms: { web: true, ios: true },
    mockup: {
      title: 'Shop Board',
      subtitle: 'Every build, at a glance',
      chip: 'Cut plan optimised · 96% yield',
      live: 'In progress',
    },
    native: {
      status: 'testflight',
      thesis:
        'The whole build record leaves the desk: plans, parts, materials, progress, and the next cut all stay in reach.',
      intro:
        'Workshop is free, native, and built for the place the work actually happens. New accounts begin with four complete woodworking projects and three Shaper projects, each carrying an original plan drawing, instructions, cut list, and materials. From there, the optimiser runs on device, the cut list follows you to the Lock Screen, and the full shop opens into a purpose-built iPad workspace instead of a stretched phone view.',
      highlights: [
        {
          icon: 'package',
          title: 'A first board, not an empty state',
          body:
            'Four woodworking builds and three Shaper projects arrive ready to explore, with original technical drawings, real parts, materials, costs, and numbered instructions. They are useful examples, not placeholder cards.',
        },
        {
          icon: 'gauge',
          title: 'Cut plans computed on device',
          body:
            'The guillotine packing optimiser is a direct Swift port of the web algorithm, unit-tested against the original. It accounts for stock dimensions, kerf, rotation, yield, and offcuts in your hand, then exports the result.',
        },
        {
          icon: 'lock',
          title: 'The checklist lives where you work',
          body:
            'Cut-list and shopping Live Activities stay on the Lock Screen and in the Dynamic Island. Home Screen, Lock Screen, and StandBy widgets keep the active build and the next purchase visible without opening the app.',
        },
        {
          icon: 'check',
          title: 'One shopping run for every build',
          body:
            'Materials from every active project roll into one list, grouped by build with quantities and estimated cost. Check items off in the aisle, print the list, or keep it moving from a widget.',
        },
        {
          icon: 'scan',
          title: 'Camera, Pencil, and Live Text',
          body:
            'Read a fraction from a tape measure, select dimensions from an existing project photo, sketch directly on iPad with Apple Pencil, or share a link or image into Workshop from another app.',
        },
        {
          icon: 'ruler',
          title: 'Readable your way',
          body:
            'Five text sizes, five signal-lamp colors, light and dark appearances, VoiceOver descriptions, larger controls, and support for Reduce Motion and Reduce Transparency keep the board legible in more shops.',
        },
        {
          icon: 'search',
          title: 'Part of the system, not a tab',
          body:
            'Spotlight finds projects, Siri opens the dashboard or shopping list, Handoff passes a build between devices, finish reminders watch the recoat window, and Swift Charts reveals where the time and material budget went.',
        },
        {
          icon: 'user',
          title: 'Sign in, export, or leave',
          body:
            'Use Sign in with Apple or Microsoft, export a portable JSON project summary, and permanently delete every Workshop project, photo, list, and account record from inside the app.',
        },
      ],
      tech: [
        'SwiftUI',
        'WidgetKit',
        'ActivityKit',
        'App Intents',
        'VisionKit',
        'PencilKit',
        'Swift Charts',
        'Core Spotlight',
        'BackgroundTasks',
        'Journaling Suggestions',
      ],
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
