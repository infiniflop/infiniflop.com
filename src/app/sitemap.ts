import type { MetadataRoute } from "next";
import { SITE_PATHS, absoluteUrl } from "@/lib/site";

// Every route is static, so the sitemap is too. URLs match each page's
// canonical exactly.
export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PATHS.map((path) => ({ url: absoluteUrl(path) }));
}
