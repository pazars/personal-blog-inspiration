// The event shown in the homepage's "currently preparing for" section.
// Both the label and destination vary by locale, and Record<Locale, string>
// makes a missing language a type error.

import type { Locale } from "../i18n";

interface CurrentPreparation {
  title: Record<Locale, string>;
  href: Record<Locale, string>;
}

export const currentPreparation = {
  title: {
    lv: "SKM (LČ taku skriešanā)",
    en: "SKM (Latvian Trail Running Championship)",
  },
  href: {
    lv: "https://www.raid.lv/lv/",
    en: "https://www.raid.lv/en/",
  },
} satisfies CurrentPreparation;
