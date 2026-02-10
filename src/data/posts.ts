import { Buffer } from 'buffer'
import matter from 'gray-matter'

// Polyfill Buffer for gray-matter in browser
declare global {
  interface Window {
    Buffer: typeof Buffer
  }
}

if (typeof window !== 'undefined') {
  (window as Window & typeof globalThis).Buffer = Buffer
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

interface ParsedPost extends BlogPost {
  rawDate: string
}

// Import all markdown files from content/posts
const postFiles = import.meta.glob<string>('/content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

// Parse markdown files and extract frontmatter
function parsePost(filename: string, rawContent: string): ParsedPost {
  const slug = filename.replace('/content/posts/', '').replace('.md', '')
  const { data, content } = matter(rawContent)

  // Store raw date for sorting
  // gray-matter auto-parses YAML dates into Date objects
  const dateObj = data.date instanceof Date ? data.date : new Date(data.date)
  const rawDate = dateObj.toISOString().split('T')[0]

  // Format date for display
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

  return {
    slug,
    title: data.title || 'Untitled',
    date: formattedDate,
    rawDate,
    excerpt: data.excerpt || '',
    content: content.trim(),
  }
}

// Parse all posts and sort by date (newest first)
export const blogPosts: BlogPost[] = Object.entries(postFiles)
  .map(([filename, content]) => parsePost(filename, content))
  .sort((a, b) => b.rawDate.localeCompare(a.rawDate))
  .map(({ rawDate: _, ...post }) => post)

// Helper to get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
