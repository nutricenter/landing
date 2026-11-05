// Generates sitemap.xml at /sitemap.xml — crawled by search engines
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // lastModified de blog usa la fecha del post más reciente
  const latestPost = posts[0];
  const blogLastModified = latestPost ? new Date(latestPost.date) : new Date("2026-08-07");

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: SITE_URL, lastModified: new Date("2026-08-12"), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: blogLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contacto`, lastModified: new Date("2026-08-07"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/privacidad`, lastModified: new Date("2026-08-08"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terminos`, lastModified: new Date("2026-08-08"), changeFrequency: "yearly", priority: 0.3 },
    ...postEntries,
  ];
}
