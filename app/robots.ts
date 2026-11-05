// Generates robots.txt — tells crawlers where the sitemap is
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.nutricenterapp.com/sitemap.xml",
  };
}
