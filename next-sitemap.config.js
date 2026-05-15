/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://peptide.co.id",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/server-sitemap.xml", "/toko-peptida"],

  // Tune priority + changefreq per route
  transform: async (config, path) => {
    // Homepage: highest priority
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: "https://peptide.co.id", hreflang: "id" },
          { href: "https://peptide.co.id", hreflang: "id-ID" },
          { href: "https://peptide.co.id", hreflang: "x-default" },
        ],
      };
    }

    // Browse/index pages (high importance)
    if (path === "/peptida" || path === "/stacks" || path === "/toko-peptida") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: "https://peptide.co.id", hreflang: "id" },
          { href: "https://peptide.co.id", hreflang: "id-ID" },
          { href: "https://peptide.co.id", hreflang: "x-default" },
        ],
      };
    }

    // Individual peptide pages (main content)
    if (path.startsWith("/peptida/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: "https://peptide.co.id", hreflang: "id" },
          { href: "https://peptide.co.id", hreflang: "id-ID" },
          { href: "https://peptide.co.id", hreflang: "x-default" },
        ],
      };
    }

    // Stack pages
    if (path.startsWith("/stacks/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: "https://peptide.co.id", hreflang: "id" },
          { href: "https://peptide.co.id", hreflang: "id-ID" },
          { href: "https://peptide.co.id", hreflang: "x-default" },
        ],
      };
    }

    // Tools (calculator)
    if (path === "/kalkulator") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: "https://peptide.co.id", hreflang: "id" },
          { href: "https://peptide.co.id", hreflang: "id-ID" },
          { href: "https://peptide.co.id", hreflang: "x-default" },
        ],
      };
    }

    // Guides (panduan)
    if (path.startsWith("/panduan/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.75,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: "https://peptide.co.id", hreflang: "id" },
          { href: "https://peptide.co.id", hreflang: "id-ID" },
          { href: "https://peptide.co.id", hreflang: "x-default" },
        ],
      };
    }

    // Glossary
    if (path === "/kamus") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.75,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          { href: "https://peptide.co.id", hreflang: "id" },
          { href: "https://peptide.co.id", hreflang: "id-ID" },
          { href: "https://peptide.co.id", hreflang: "x-default" },
        ],
      };
    }

    // Info pages (lowest priority)
    return {
      loc: path,
      changefreq: "yearly",
      priority: 0.4,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: "https://peptide.co.id", hreflang: "id" },
        { href: "https://peptide.co.id", hreflang: "id-ID" },
      ],
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Be friendly to LLM crawlers (legitimate ones)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    additionalSitemaps: [],
  },
};
