import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
}

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

function readPostFile(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return undefined

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = remark().use(html).processSync(content).toString()

  const dateValue =
    data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? '')

  return {
    slug,
    title: String(data.title ?? ''),
    excerpt: String(data.excerpt ?? ''),
    content: processed,
    date: dateValue,
    author: String(data.author ?? ''),
  }
}

export async function getPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) return []

  const slugs = fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''))

  const posts = slugs
    .map((slug) => readPostFile(slug))
    .filter((p): p is Post => Boolean(p))

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return readPostFile(slug)
}
