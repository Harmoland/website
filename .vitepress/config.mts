import { defineConfig } from 'vitepress'

import mdEnhance from './mdEnhance/index'

import nav from './nav'
import sidebar from './sidebar'

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
    logo: '/logo.png',

    nav,
    sidebar,

    // editLink: {
    //   pattern: 'https://github.com/GraiaCommunity/Docs/edit/remake/docs/:path',
    //   text: '在 GitHub 上编辑此页'
    // },
    // socialLinks: [{ icon: 'github', link: 'https://github.com/GraiaCommunity/Docs' }],
    // footer: {
    //   // message: 'MIT License',
    //   copyright: 'Copyright © 2024 桦木原Harmoland'
    // },
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

  // transformHead({ assets }) {
  //   // adjust the regex accordingly to match your font
  //   const HarmonySansFile = assets.find(() => /HarmonyOS_Sans_SC\.woff2/)
  //   if (HarmonySansFile) {
  //     return [
  //       [
  //         'link',
  //         {
  //           rel: 'preload',
  //           href: HarmonySansFile,
  //           as: 'font',
  //           type: 'font/woff2',
  //           crossorigin: ''
  //         }
  //       ]
  //     ]
  //   }
  // },

  markdown: {
    theme: {
      light: 'min-light',
      dark: 'one-dark-pro'
    },
    lineNumbers: true,
    config: mdEnhance
  }
})
