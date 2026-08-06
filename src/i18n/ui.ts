// UI string dictionary. The Latvian entry is the source of truth for the SHAPE:
// every value below was moved verbatim out of src/site.config.ts, the page
// templates and the components, so the Latvian site reads exactly as before.
//
// TYPE SAFETY IS THE POINT. `UIKey` is derived from the Latvian object, and each
// other locale is checked with `satisfies Record<UIKey, string>` - so a missing
// key (or a typo'd extra one) is a BUILD ERROR, not a silently English-looking
// Latvian page. Add a key to `lv` first; the build then tells you what's missing.
//
// CONTENT POLICY (see CLAUDE.md): article prose is never AI-written. UI strings
// are the one carve-out Dāvis has granted: the English values below are
// machine-drafted translations of the Latvian originals, and Dāvis reviews
// every string before it is committed. The Latvian entry remains the source
// of truth for wording as well as shape.

import type { Locale } from "./index";

const lv = {
  // ---- Site identity & default metadata ----------------------------------
  "site.role": "Taku skrējējs, programmētājs",
  "site.tagline": "Taku skriešanas blogs",
  "meta.defaultDescription":
    "Par aktualitātēm, savu pieredzi un mācībām, kas var noderēt ikvienam.",

  // ---- Navigation (labels; the URLs come from ./routes.ts) ---------------
  "nav.blog": "Blogs",
  "nav.recs": "Iesaku",
  "nav.results": "Sasniegumi",
  "nav.newsletter": "Vēstkopa",

  // ---- Header -----------------------------------------------------------
  "header.avatarZoomLabel": "Palielināt profila attēlu",
  "header.avatarAlt": "Profila foto",
  "header.avatarLargeAlt": "Profila attēls, palielināts",
  "header.openMenu": "Atvērt izvēlni",
  "header.newsletterTooltip": "Vēstkopa",
  "header.newsletterBlurb": "Kopsavilkumi par jaunākajiem rakstiem",

  // ---- Footer -----------------------------------------------------------
  "footer.motto": "Uzdrīksties sev noticēt",

  // ---- Language switcher ---------------------------------------------------
  // switchLabel is the switcher group's aria-label. "Mājaslapas valoda" rather
  // than bare "Valoda" so screen-reader users can't confuse it with the
  // /iesaku "Valoda" filter (which is about the recommended item's language).
  // alsoAvailable is not wired to any surface yet - reserved for a future
  // "this article also exists in the other language" affordance.
  "lang.switchLabel": "Mājaslapas valoda",
  "lang.alsoAvailable": "Pieejams arī:",

  // ---- Home page --------------------------------------------------------
  "home.currentlyPreparing": "Šobrīd gatavojos",
  "home.intro":
    "Šī mājaslapa ir mans mēģinājums radīt vietu brīvi pieejamai un skrējējiem noderīgai informācijai, kas nav aprakta reklāmās vai paslēpta zem reģistrācijām un maksas abonementiem. Varu arī apsolīt, ka ikvienu rakstu būšu rakstījis un pārbaudījis es pats nevis kāds mākslīgā intelekta rīks.",
  "home.latestPost": "Jaunākais raksts",
  "home.recentPosts": "Pēdējie raksti",
  "home.sideProjects": "Citi projekti",
  "home.project.pasaulesTure.role": "Riteņbraukšanas pasākumi Latvijā (ar našķiem)",
  "home.project.noskrienZiemu.role": "Dalībnieku rezultātu salīdzināšana",

  // ---- Blog listing -----------------------------------------------------
  "blog.title": "Blogs",
  "blog.description":
    "Visi raksti par treniņiem, sacensību atskatiem un to, kā paņemt mācības no sporta pārējai dzīvei.",
  "blog.filterByTopic": "Filtrēt pēc tēmas",
  "blog.allTopics": "Visas tēmas",
  "blog.sortLabel": "Kārtot",
  "blog.sortNewest": "Jaunākie",
  "blog.sortOldest": "Vecākie",
  "blog.sortPopular": "Populārākie",
  "blog.empty": "Nav atrasts neviens raksts ar šo filtru.",

  // ---- Recommendations (/iesaku) ----------------------------------------
  // NOTE: `recs.itemLanguage.*` is the language of the RECOMMENDED ITEM, not the
  // site UI language. Keep it visually distinct from the language switcher.
  "recs.title": "Iesaku",
  "recs.description": "Cilvēki un saturs, kas mani iedvesmo.",
  "recs.intro": "Cilvēki un saturs, kas mani iedvesmo. Tiks papildināts.",
  "recs.filterByCategory": "Filtrēt pēc kategorijas",
  "recs.all": "Visi",
  "recs.languageLabel": "Valoda",
  "recs.allLanguages": "Visas valodas",
  "recs.itemLanguage.lv": "Latviski",
  "recs.itemLanguage.en": "Angliski",
  "recs.empty": "Nav atrasts neviens ieteikums ar šo filtru.",
  "recs.placeholderLabel": "Iesaku",

  // ---- Achievements (/sasniegumi) ---------------------------------------
  "results.title": "Sasniegumi",
  "results.description": "Sasniegumi par kuriem lepojos visvairāk",
  "results.intro":
    "Patiesībā vislielākais prieks man ir par paša izaugsmi līdz ar sportu nevis par kādu konkrētu sacensību. Ja es atskatos uz sevi pirms 5 gadiem, tad es ne pavisam neesmu tas pats cilvēks, un liela daļa pozitīvo pārmaiņu ir pateicoties sportam.",
  "results.intro2": "Protams, ir arī notikumi, kas iespiedušies atmiņā stiprāk kā citi, un tos tad arī šeit var aplūkot.",
  // One sentence wrapping two external links, so it can't be a single string.
  // A locale needing a different link ORDER should get its own fragment
  // component instead of reusing these three parts.
  "results.profilesNote.before": "Plašāks rezultātu saraksts atrodams manā ",
  "results.profilesNote.between": " un Latvijas vieglatlētikas savienības ",
  "results.profilesNote.after": " profilā.",
  "results.trailRunning": "Taku skriešana",
  "results.roadRunning": "Šosejas skriešana",
  "results.cycling": "Riteņbraukšana",
  // Heading anchor ids (`#taku-skriesana`). URL data, not prose - the Latvian
  // ones must not change, they are already linkable.
  "results.anchor.trailRunning": "taku-skriesana",
  "results.anchor.roadRunning": "sosejas-skriesana",
  "results.anchor.cycling": "ritenbrauksana",

  // ---- Newsletter form (reaches public/script.js via data-* attributes) ---
  "newsletter.subscribeButton": "Pierakstīties",
  "newsletter.submittingLabel": "Sūta…",
  "newsletter.unsubscribeNote": "No vēstkopas vari atteikties jebkurā brīdī",
  "newsletter.unsubscribeInfo":
    "Katrā vēstkopas e-pastā tiek pievienots links ar iespēju atteikties no turpmākām ziņām",
  "newsletter.pendingMessage": "Tev tika nosūtīts apstiprinājuma e-pasts",
  "newsletter.pendingHint": "Nesaņēmi? Pārbaudi arī spam mapi.",
  "newsletter.alreadyMessage": "Tu jau esi pierakstījies vēstkopai.",
  "newsletter.errorMessage": "Neizdevās pierakstīties. Mēģini vēlreiz nedaudz vēlāk.",
  "newsletter.rateLimitMessage":
    "Serverim klājas grūti. Lūdzu, pamēģini vēlreiz nedaudz vēlāk.",
  "newsletter.emailPlaceholder": "tavs@epasts.lv",
  "newsletter.formDescription":
    "Vēlies saņemt paziņojumus par jaunākajiem bloga rakstiem? Piesakies vēstkopai!",

  // ---- Newsletter page (/vestkopa) --------------------------------------
  "newsletter.pageTitle": "Vēstkopa",
  "newsletter.pageDescription":
    "Pievienojies Dāvja Pazara vēstkopai un saņem bloga rakstu kopsavilkumus e-pastā reizi dažās nedēļās.",
  "newsletter.pageHeading": "Pievienojies vēstkopai",

  // ---- Double opt-in landing pages (all noindex) -------------------------
  "newsletter.confirmed.title": "Pierakstīšanās noritēja veiksmīgi",
  "newsletter.confirmed.body":
    "Tava e-pasta adrese ir apstiprināta.\n Turpmāk saņemsi jaunāko rakstu kopsavilkumus.",
  "newsletter.confirmed.linkText": "Atpakaļ uz blogu",
  "newsletter.confirmed.metaDescription":
    "Tava pierakstīšanās Dāvja Pazara vēstkopai ir apstiprināta.",
  "newsletter.invalid.title": "Saite nederīga vai novecojusi",
  "newsletter.invalid.body":
    "Šo apstiprināšanas saiti neizdevās pārbaudīt - tā var būt novecojusi vai jau izmantota. Pieraksties vēlreiz, un mēs nosūtīsim jaunu saiti.",
  "newsletter.invalid.linkText": "Pierakstīties vēlreiz",
  "newsletter.invalid.metaDescription":
    "Šī apstiprināšanas saite ir nederīga vai novecojusi.",
  "newsletter.unsubscribed.title": "Esi atrakstījies",
  "newsletter.unsubscribed.body":
    "Tava e-pasta adrese ir izņemta no vēstkopas adresātu saraksta. Turpmāk vairs nesaņemsi e-pastus.",
  "newsletter.unsubscribed.linkText": "Atpakaļ uz blogu",
  "newsletter.unsubscribed.metaDescription": "Turpmāk vairs nesaņemsi e-pastus.",

  // ---- 404 --------------------------------------------------------------
  "notFound.body": "Šī lapa neeksistē vai ir pārvietota.",
  "notFound.backHome": "← Atpakaļ uz sākumu",
} as const;

/** Every valid dictionary key, derived from the Latvian entry. */
export type UIKey = keyof typeof lv;

const en = {
  "site.role": "Trail runner, programmer",
  "site.tagline": "A trail running blog",
  "meta.defaultDescription":
    "On what's current, my own experience, and lessons that can be useful to anyone.",

  // Nav labels must fit the open mobile menu's single row at the 360px floor:
  // with the open-menu pill padding the three labels get ~215px, and the
  // Latvian set already uses all of it. That is why "Iesaku" is "Picks" and
  // not "Recommendations" - the literal translation overflows the row. Keep
  // replacements short if rewording; the row must never wrap.
  "nav.blog": "Blog",
  "nav.recs": "Picks",
  "nav.results": "Achievements",
  "nav.newsletter": "Newsletter",

  "header.avatarZoomLabel": "Enlarge profile picture",
  "header.avatarAlt": "Profile photo",
  "header.avatarLargeAlt": "Profile picture, enlarged",
  "header.openMenu": "Open menu",
  "header.newsletterTooltip": "Newsletter",
  "header.newsletterBlurb": "Summaries of the latest articles",

  "footer.motto": "Dare to believe in yourself",

  "lang.switchLabel": "Site language",
  "lang.alsoAvailable": "Also available in:",

  "home.currentlyPreparing": "Currently preparing for",
  "home.intro":
    "This website is my attempt to create a place for freely accessible information useful to runners - not buried in ads or hidden behind registrations and paid subscriptions. I can also promise that every article here is written and checked by me, not by some artificial intelligence tool.",
  "home.latestPost": "Latest article",
  "home.recentPosts": "Recent articles",
  "home.sideProjects": "Other projects",
  "home.project.pasaulesTure.role": "Cycling events in Latvia (with treats)",
  "home.project.noskrienZiemu.role": "Comparing participants' results",

  "blog.title": "Blog",
  "blog.description":
    "All the articles about training, race recaps, and taking lessons from sport into the rest of life.",
  "blog.filterByTopic": "Filter by topic",
  "blog.allTopics": "All topics",
  "blog.sortLabel": "Sort",
  "blog.sortNewest": "Newest",
  "blog.sortOldest": "Oldest",
  "blog.sortPopular": "Most popular",
  "blog.empty": "No articles match this filter.",

  "recs.title": "Picks",
  "recs.description": "People and content that inspire me.",
  "recs.intro": "People and content that inspire me. More to come.",
  "recs.filterByCategory": "Filter by category",
  "recs.all": "All",
  "recs.languageLabel": "Language",
  "recs.allLanguages": "All languages",
  // Language names, not copy - safe to fill.
  "recs.itemLanguage.lv": "Latvian",
  "recs.itemLanguage.en": "English",
  "recs.empty": "No picks match this filter.",
  "recs.placeholderLabel": "Picks",

  "results.title": "Achievements",
  "results.description": "The achievements I am proudest of",
  "results.intro":
    "Honestly, what makes me happiest is my own growth alongside sport, not any particular race. If I look back at myself 5 years ago, I am not at all the same person, and a large share of the positive changes is thanks to sport.",
  "results.intro2":
    "Of course, some moments have pressed themselves into memory harder than others, and those are the ones collected here.",
  "results.profilesNote.before": "A fuller list of results can be found on my ",
  "results.profilesNote.between": " profile and on the Latvian Athletics Association's ",
  "results.profilesNote.after": " page.",
  "results.trailRunning": "Trail running",
  "results.roadRunning": "Road running",
  "results.cycling": "Cycling",
  // Anchor slugs are URL data, not copy - safe to fill.
  "results.anchor.trailRunning": "trail-running",
  "results.anchor.roadRunning": "road-running",
  "results.anchor.cycling": "cycling",

  "newsletter.subscribeButton": "Subscribe",
  "newsletter.submittingLabel": "Sending…",
  "newsletter.unsubscribeNote": "You can unsubscribe at any time",
  "newsletter.unsubscribeInfo":
    "Every newsletter email includes a link to opt out of future messages",
  "newsletter.pendingMessage": "A confirmation email is on its way to you",
  "newsletter.pendingHint": "Nothing there? Check your spam folder too.",
  "newsletter.alreadyMessage": "You are already subscribed to the newsletter.",
  "newsletter.errorMessage": "Subscribing failed. Try again in a little while.",
  "newsletter.rateLimitMessage":
    "The server is having a hard time. Please try again in a little while.",
  "newsletter.emailPlaceholder": "your@email.com",
  "newsletter.formDescription":
    "Want to hear about the latest blog articles? Join the newsletter!",

  "newsletter.pageTitle": "Newsletter",
  "newsletter.pageDescription":
    "Join the Dāvis Pazars newsletter and get blog article summaries by email every few weeks.",
  "newsletter.pageHeading": "Join the newsletter",

  "newsletter.confirmed.title": "Subscription confirmed",
  "newsletter.confirmed.body":
    "Your email address has been confirmed.\n From now on you'll receive summaries of the latest articles.",
  "newsletter.confirmed.linkText": "Back to the blog",
  "newsletter.confirmed.metaDescription":
    "Your subscription to the Dāvis Pazars newsletter is confirmed.",
  "newsletter.invalid.title": "Link invalid or expired",
  "newsletter.invalid.body":
    "This confirmation link could not be verified - it may have expired or already been used. Sign up again and we'll send you a new link.",
  "newsletter.invalid.linkText": "Sign up again",
  "newsletter.invalid.metaDescription":
    "This confirmation link is invalid or expired.",
  "newsletter.unsubscribed.title": "You are unsubscribed",
  "newsletter.unsubscribed.body":
    "Your email address has been removed from the newsletter's mailing list. You won't receive any more emails.",
  "newsletter.unsubscribed.linkText": "Back to the blog",
  "newsletter.unsubscribed.metaDescription": "You won't receive any more emails.",

  "notFound.body": "This page doesn't exist or has been moved.",
  "notFound.backHome": "← Back home",
} satisfies Record<UIKey, string>;

export const ui = { lv, en } satisfies Record<Locale, Record<UIKey, string>>;

/**
 * Translator factory, used in a component's frontmatter:
 *   const t = useTranslations(lang);
 *   <h1>{t("blog.title")}</h1>
 * An unknown key is a compile error, so typos surface at build time.
 */
export const useTranslations = (lang: Locale) => (key: UIKey): string => ui[lang][key];
