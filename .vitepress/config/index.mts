import { defineConfig } from 'vitepress'

import mdPlugin from './plugins'
import nav from './nav'
import sidebar from './sidebars'
import viteConfig from './vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',

  title: 'Harmoland',
  description: '一个小众的原版服务器',

  lastUpdated: true,
  cleanUrls: true,

  head: [['link', { rel: 'shortcut icon', href: '/favicon.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.webp',

    nav,
    sidebar,

    editLink: {
      pattern: 'https://github.com/Harmoland/webiste/edit/remake/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Harmoland/webiste' }],
    footer: {
      // message: 'MIT License',
      copyright: 'Copyright © 2024 桦木原Harmoland'
    },
    outline: {
      level: [2, 3],
      label: '本页大纲'
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '黑暗模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部 ▲'
  },

  vite: viteConfig,

  markdown: {
    theme: {
      light: 'min-light',
      dark: 'one-dark-pro'
    },
    image: {
      lazyLoading: true
    },
    lineNumbers: true,
    config: mdPlugin
  },

  transformHead({ assets }) {
    // adjust the regex accordingly to match your font
    const HarmonySansFile = assets.find(() => /.+\.woff2/)
    if (HarmonySansFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: HarmonySansFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }
  }
})
