/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://peptide.co.id",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
