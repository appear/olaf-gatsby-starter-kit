export type Post = {
  id: string
  html: string
  excerpt: string
  frontmatter: {
    title: string
    category: string
    date: string
    draft: boolean
    thumbnail?: string
  }
}
