import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "../site.config";
import { toIsoDate } from "../utils/date";

// RSS feed of the blog at /rss.xml, built from the posts collection (summaries
// only, not full bodies — the feed points readers at the site). Discovered by
// feed readers via the <link rel="alternate"> in BaseLayout.astro. Items link
// to /blogs/<date>/<slug>/, the same URL scheme getStaticPaths builds in
// src/pages/blogs/[...slug].astro.
export async function GET(context: APIContext) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: `${site.name} — ${site.tagline}`,
    description: site.blogDescription,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blogs/${toIsoDate(post.data.date)}/${post.data.slug}/`,
    })),
    customData: `<language>lv</language>`,
  });
}
