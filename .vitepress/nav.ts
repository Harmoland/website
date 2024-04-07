import { DefaultTheme } from 'vitepress/theme'
import { getAnnouncements } from './utils'

const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '加入我们', link: '/join' },
  { text: '服务器规则', link: '/rule' },
  { text: '服务器公告', items: getAnnouncements().slice(0, 5) },
  { text: '了解我们', link: '/about' },
  { text: '充电相关', link: '/battery' }
]

export default nav
