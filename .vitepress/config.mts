import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ru-RU",
  title: "iamlostshe blog",
  description: "Скромный девлог",
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    lastUpdated: {
      text: "Последнее изменение",
    },
    sidebar: [
      { text: "index.md", link: "/" },
      { text: "_ideas.md", link: "blog/_ideas" },

      {
        text: "white",
        items: [
          { text: "username-analitic.md", link: "blog/username-analitic" },
          { text: "hoster-test-domain.md", link: "blog/hoster-test-domain" },
          { text: "obsa-habr.md", link: "blog/obsa-habr" },
          { text: "no-smartphone.md", link: "blog/no-smartphone" },
          { text: "bars-api.md", link: "blog/bars-api" },
          { text: "unique-nick.md", link: "blog/unique-nick" },
          { text: "⚠️ edu-deck.md", link: "blog/edu-deck" },
        ],
      },

      {
        text: "grey",
        items: [
          { text: "autoreg.md", link: "blog/autoreg" },
          { text: "inboxium.md", link: "blog/inboxium" },
          { text: "wb-pars.md", link: "blog/wb-pars" },
          { text: "shop-card-audit.md", link: "blog/shop-card-audit" },
        ],
      },

      {
        text: "black",
        items: [
          { text: "tg-scam-bot.md", link: "blog/tg-scam-bot" },
          { text: "token-finder.md", link: "blog/token-finder" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/iamlostshe" },
      { icon: "telegram", link: "https://t.me/iamlostshe" },
    ],
  },
});
