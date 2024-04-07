import fs from 'fs'

export function getAnnouncements() {
  const files = fs.readdirSync('./announcements')
  files.sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))

  const announcements = files.map((file) => {
    return {
      text: file.replace('.md', ''),
      link: `/announcements/${file.replace('.md', '')}`
    }
  })
  return announcements
}
