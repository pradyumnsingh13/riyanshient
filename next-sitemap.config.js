/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.riyanshienterprises.co.in",
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ["/admin", "/login"],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      additionalSitemaps: [
        "https://www.riyanshienterprises.co.in/sitemap.xml",
      ],
    },
  }
  