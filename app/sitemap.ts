import type { MetadataRoute } from "next";
import { locales } from "@/libs/i18n/config";
import { SITE_URL } from "@/libs/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/${locale}/contact`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ]);
}
