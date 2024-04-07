import MarkdownIt from 'markdown-it'
import footnote_plugin from 'markdown-it-footnote'

import { containerPlugin } from './container'
import { tasklistPlugin } from './tasklist-mod'

export default (md: MarkdownIt) => {
  md.use(containerPlugin)
  md.use(tasklistPlugin)
  md.use(footnote_plugin)
}
