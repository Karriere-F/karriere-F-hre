import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/*/candidate/",
        "/*/employer/",
        "/*/admin/",
        "/*/erp",
        "/*/connexion",
        "/*/login",
        "/*/anmelden",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
