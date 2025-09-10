import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iamlostshe blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        items: [
          { text: 'wb-pars.md', link: 'blog/wb-pars.md' },
          { text: 'barsapi.md', link: 'blog/barsapi.md' },
          // { text: 'autoreg.md', link: 'blog/autoreg.md' },
          { text: 'temp-mail.md', link: 'blog/temp-mail.md' },
          { text: 'tg-scam-bot.md', link: 'blog/tg-scam-bot.md' },
          { text: 'no-smartphone.md', link: 'blog/no-smartphone.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iamlostshe' },
      { icon: 'telegram', link: 'https://t.me/iamlostshe' }
    ]
  }
})
