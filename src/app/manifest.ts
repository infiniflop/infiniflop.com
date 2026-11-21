import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, THEME_COLOR } from "@/lib/site";

// The site is a marketing page, not an installable app, so it keeps the
// regular browser display mode. The manifest supplies names, icons and colours.
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: SITE_NAME,
    short_name: "Infiniflop",
    description: SITE_DESCRIPTION,
    lang: "en",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: THEME_COLOR.dark,
    theme_color: THEME_COLOR.dark,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      // Full-bleed artwork with the mark well inside the safe zone.
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
