import { beforeAll, describe, expect, it } from "vitest";
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIST = join(process.cwd(), "dist");
const englishHome = join(DIST, "en", "index.html");

beforeAll(() => {
  if (!existsSync(englishHome)) {
    execSync("npm run build", { stdio: "inherit" });
  }
}, 180_000);

describe("English build output", () => {
  it("uses the localized English profile role", () => {
    const html = readFileSync(englishHome, "utf8");
    expect(html).toContain("Trail runner, developer");
    expect(html).not.toContain("Trail runner, programmer");
  });

  it("points the English RSS channel at the English homepage", () => {
    const xml = readFileSync(join(DIST, "en", "rss.xml"), "utf8");
    expect(xml).toContain("<link>https://davispazars.lv/en/</link>");
  });

  it("replaces English signup forms with the shared Substack notice", () => {
    const html = readFileSync(join(DIST, "en", "newsletter", "index.html"), "utf8");
    expect(html).toContain("The newsletter isn't available in English yet.");
    expect(html.match(/subscribe to my Substack/g)).toHaveLength(2);
    expect(html).toContain('href="https://substack.com/@davispazars"');
    expect(html).not.toContain("data-js-newsletter-submit");
    expect(html).not.toContain("You can unsubscribe at any time");
  });

  it("keeps reciprocal translated section links in the page metadata", () => {
    const english = readFileSync(join(DIST, "en", "achievements", "index.html"), "utf8");
    const latvian = readFileSync(join(DIST, "sasniegumi", "index.html"), "utf8");

    expect(english).toContain(
      '<link rel="alternate" hreflang="lv" href="https://davispazars.lv/sasniegumi/">',
    );
    expect(latvian).toContain(
      '<link rel="alternate" hreflang="en" href="https://davispazars.lv/en/achievements/">',
    );
    expect(english).toContain("Vilkaču maratons");
    expect(english).not.toContain("Werewolf Marathon");
  });

  it("renders the localized current preparation event and destination", () => {
    const english = readFileSync(join(DIST, "en", "index.html"), "utf8");
    const latvian = readFileSync(join(DIST, "index.html"), "utf8");

    expect(english).toContain("SKM (Latvian Trail Running Championship)");
    expect(english).toContain('href="https://www.raid.lv/en/"');
    expect(latvian).toContain("SKM (LČ taku skriešanā)");
    expect(latvian).toContain('href="https://www.raid.lv/lv/"');
  });

  it("renders only the localized Pasaules Tūre project card", () => {
    const english = readFileSync(join(DIST, "en", "index.html"), "utf8");
    const latvian = readFileSync(join(DIST, "index.html"), "utf8");

    expect(english).toContain('href="https://pasaulesture.lv/en/"');
    expect(english).toContain("Gravel cycling events in Latvia (with snacks)");
    expect(english).toContain('class="content-grid -equal -single-column"');
    expect(latvian).toContain('href="https://pasaulesture.lv/"');
    expect(latvian).toContain("Gravel riteņbraukšanas pasākumi Latvijā (ar našķiem)");
    expect(latvian).toContain('class="content-grid -equal -single-column"');
    expect(english).not.toContain("noskrien-ziemu");
    expect(latvian).not.toContain("noskrien-ziemu");
  });
});
