// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import Layout from './Layout.vue'

import HButton from '../components/HButton.vue'

import { css } from './fonts/HarmonyOS_Sans_SC.ttf?subsets'
import '../styles/style.scss'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('HButton', HButton)
  }
} satisfies Theme
