// "Citi projekti" cards on the home page.
//
// The URL and the image are locale-invariant; the one-line description is not,
// so it is a `roleKey` pointing into src/i18n/ui.ts rather than a literal
// string. That means adding a project won't compile until its description
// exists in BOTH dictionaries - the type system, not a checklist, keeps the two
// languages in sync.

import type { UIKey } from "../i18n/ui";

export interface SideProject {
  href: string;
  title: string;
  roleKey: UIKey;
  /** Remote og:image URL, or a fallback fetched at build time. */
  imageUrl?: string;
  /** Page to scrape an og:image from when `imageUrl` is absent. */
  ogSource?: string;
  ogFallback?: string;
  /** Optional backdrop colour behind logo-style images. */
  frameBg?: string;
}

export const sideProjects: SideProject[] = [
  {
    href: "https://pasaulesture.lv/",
    title: "Pasaules Tūre",
    roleKey: "home.project.pasaulesTure.role",
    ogSource: "https://pasaulesture.lv/",
    ogFallback: "https://pasaulesture.lv/events/egipte-malta/og/og-image-lv.jpg",
  },
  {
    href: "https://noskrien-ziemu.pages.dev/",
    title: "noskrien-ziemu.pages.dev",
    roleKey: "home.project.noskrienZiemu.role",
    imageUrl: "https://noskrien-ziemu.pages.dev/og-image.png",
  },
];
