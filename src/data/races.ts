// Race results, by discipline.
//
// Locale-INVARIANT on purpose: every value here is a proper noun (event name) or
// a measurement ("42km · 2200m · 04:19:22"), none of which is translated. Both
// the Latvian and English achievements pages render this same array, so a new
// result is added once. Only the section headings and the intro prose are
// per-locale, and those live in src/i18n/ui.ts.
//
// `title` is the event, `description` is distance/elevation/time, `trailing` is
// the year. Medal emoji in the title mark a podium finish.

export interface RaceResult {
  title: string;
  description: string;
  trailing: string;
}

export const trailRunning: RaceResult[] = [
  {
    title: "Vilkaču maratons 🏆",
    description: "42km · 2200m · 04:19:22",
    trailing: "2026",
  },
  {
    title: "Siguldas kalnu maratons 🏆",
    description: "35km · 1400m · 03:23:37",
    trailing: "2025",
  },
];

export const roadRunning: RaceResult[] = [
  {
    title: "Kauņas maratons",
    description: "42.2km · 02:47:13",
    trailing: "2025",
  },
  {
    title: "Liepājas pusmaratons",
    description: "21.1km · 01:16:25",
    trailing: "2025",
  },
  {
    title: "Latvijas čempionāts 5km",
    description: "5km · 16:28",
    trailing: "2025",
  },
];

export const cycling: RaceResult[] = [
  {
    title: "The Transcontinental Race",
    description: "4060km · 38480m · 11d22h17m",
    trailing: "2024",
  },
  {
    title: "Ultra Gravel Latvija 🥈",
    description: "583km · 2764m · 24h41m",
    trailing: "2024",
  },
  {
    title: "Lame Maa 1500 🏆",
    description: "1603km · 2920m · 3d11h16m",
    trailing: "2022",
  },
  {
    title: "Hydra Epic",
    description: "1600km · 13650m · 8d9h26m",
    trailing: "2022",
  },
];
