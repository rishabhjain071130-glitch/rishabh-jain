import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rishabhjain.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/static/", "/api/", "/private/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
