import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Suiprophet Docs",
  description:
    "Canonical documentation for the Rulebook, Oracle, and Court layers of Suiprophet.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/mark.svg",
    nav: [
      { text: "Overview", link: "/product-overview" },
      { text: "Rulebook", link: "/rulebook" },
      { text: "Oracle", link: "/oracle" },
      { text: "Court", link: "/court" },
    ],
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Home", link: "/" },
          { text: "Product Overview", link: "/product-overview" },
          { text: "Rulebook", link: "/rulebook" },
          { text: "Oracle", link: "/oracle" },
          { text: "Court", link: "/court" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/densmirnov/suiprophet-docs" },
    ],
    footer: {
      message: "Built with VitePress. Published on GitHub Pages.",
      copyright: "Copyright © 2026 Suiprophet",
    },
  },
});
