import type { MarkdownRenderer } from 'vitepress'
import { footnote } from '@mdit/plugin-footnote'
import { tasklist } from '@mdit/plugin-tasklist'

// import { createContainer } from '../plugins/container'

export default (md: MarkdownRenderer) => {
  md.use(footnote)
  md.use(tasklist)

  // md.use(container, 'interlink', createContainer(md, '相关链接'))
  // md.use(container, 'tsukkomi', createContainer(md, '吐槽'))
}
