import {
  PRODUCT_NAME,
  PRODUCT_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PRODUCT_ID = `${SITE_URL}/#infiniview`;

/**
 * schema.org graph for the home page: the organization, the website it
 * publishes, and the product it builds. Only facts the page already states
 * are included (no ratings, prices or people), so nothing here is invented.
 * There are no articles or author pages yet, so no Article or Person nodes.
 */
export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
      description: "We build developer tools.",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
        width: 512,
        height: 512,
      },
      sameAs: [...SOCIAL_PROFILES],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "SoftwareApplication",
      "@id": PRODUCT_ID,
      name: PRODUCT_NAME,
      url: PRODUCT_URL,
      applicationCategory: "DeveloperApplication",
      description:
        "AI-powered code review and security testing that probes and stress-tests your code in cloud sandboxes.",
      author: { "@id": ORGANIZATION_ID },
    },
  ],
};
