import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "iamlostshe blog",
  description: "скормный девлог",
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        items: [
          { text: 'index.md', link: '/' },
          { text: '---', link: '' },

          { text: 'obsa-habr.md', link: 'blog/obsa-habr' },
          { text: '_ideas.md', link: 'blog/_ideas' },
          { text: 'wb-pars.md', link: 'blog/wb-pars' },
          { text: 'barsapi.md', link: 'blog/barsapi' },
          // { text: 'autoreg.md', link: 'blog/autoreg' },
          { text: 'temp-mail.md', link: 'blog/temp-mail' },
          { text: 'tg-scam-bot.md', link: 'blog/tg-scam-bot' },
          { text: 'no-smartphone.md', link: 'blog/no-smartphone' },
          { text: 'shop-card-audit.md', link: 'blog/shop-card-audit' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iamlostshe' },
      { icon: 'telegram', link: 'https://t.me/iamlostshe' }
    ]
  }
})
