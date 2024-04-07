import { DefaultTheme } from 'vitepress/theme'
import { getAnnouncements } from './utils'

const sidebar: DefaultTheme.SidebarMulti | DefaultTheme.Sidebar = [
  { text: '加入我们', link: '/join' },
  {
    text: '规则与公告',
    items: [
      { text: '服务器规则', link: '/rule' },
      { text: '公告', collapsed: true, items: getAnnouncements() }
    ]
  },
  { text: '了解我们', link: '/about' },
  { text: '充电相关', link: '/battery' }
]

export default sidebar
