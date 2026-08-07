// "Citi projekti" cards on the home page.
//
// Project destinations and fallback images may vary by locale. The one-line
// description is a `roleKey` pointing into src/i18n/ui.ts. Together these types
// make adding both language versions a compile-time requirement.

import type { Locale } from "../i18n";
import type { UIKey } from "../i18n/ui";

export interface SideProject {
  href: Record<Locale, string>;
  title: string;
  roleKey: UIKey;
  /** Remote og:image URL, or a fallback fetched at build time. */
  imageUrl?: Record<Locale, string>;
  /** Page to scrape an og:image from when `imageUrl` is absent. */
  ogSource?: Record<Locale, string>;
  ogFallback?: Record<Locale, string>;
  /** Optional backdrop colour behind logo-style images. */
  frameBg?: string;
}

export const sideProjects: SideProject[] = [
  {
    href: {
      lv: "https://pasaulesture.lv/",
      en: "https://pasaulesture.lv/en/",
    },
    title: "Pasaules Tūre",
    roleKey: "home.project.pasaulesTure.role",
    ogSource: {
      lv: "https://pasaulesture.lv/",
      en: "https://pasaulesture.lv/en/",
    },
    ogFallback: {
      lv: "https://pasaulesture.lv/events/parize-dakara/og/og-image-lv.jpg",
      en: "https://pasaulesture.lv/events/parize-dakara/og/og-image-en.jpg",
    },
  },
];
