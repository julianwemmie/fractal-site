import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '../data/posts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPostBySlug(slug || '')

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-forest-800 mb-4">
          Post not found
        </h1>
        <p className="text-sage-500 mb-8">
          The post you're looking for doesn't exist.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-forest-800 hover:text-forest-600 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back to all posts
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
      {/* Back link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sage-500 hover:text-forest-800 transition-colors mb-8 animate-fade-in"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        All posts
      </Link>

      {/* Header */}
      <header className="mb-12 animate-fade-in-delay-1">
        <time className="text-sm text-sage-500">{post.date}</time>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-forest-800 mt-3 leading-tight">
          {post.title}
        </h1>
      </header>

      {/* Content */}
      <div className="prose animate-fade-in-delay-2">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-olive-400/30 animate-fade-in-delay-3">
        <p className="text-sage-500 text-sm">
          Thanks for reading! Feel free to{' '}
          <a
            href="mailto:hello@julianwemmie.com"
            className="text-forest-800 hover:underline"
          >
            reach out
          </a>{' '}
          if you have thoughts or questions.
        </p>
      </footer>
    </article>
  )
}
