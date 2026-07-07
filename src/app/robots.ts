import type { MetadataRoute } from "next";

// Keep the whole site out of search engines.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
