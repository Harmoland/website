// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'

import HButton from '../components/HButton.vue'
import Layout from './Layout.vue'

import '../styles/style.scss'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from './fonts/HarmonyOS_Sans_SC.ttf?subsets'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HButton', HButton)
  }
} satisfies Theme
