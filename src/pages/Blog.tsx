import { Link } from 'react-router-dom'
import { blogPosts } from '../data/posts'

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="mb-12 animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl text-forest-800 mb-4">
          Writing
        </h1>
        <p className="text-ink-700 text-lg max-w-2xl">
          Thoughts on technology, sustainability, and building things that last.
        </p>
      </div>

      <div className="space-y-1">
        {blogPosts.map((post, index) => (
          <article
            key={post.slug}
            className="animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 0.1}s`, opacity: 0 }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group block py-6 -mx-4 px-4 rounded-xl hover:bg-forest-800/5 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <time className="text-sm text-ink-700 tabular-nums shrink-0 md:w-28 font-mono">
                  {post.date}
                </time>
                <div className="flex-1">
                  <h2 className="font-serif text-xl md:text-2xl text-forest-800 group-hover:text-forest-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-ink-700 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <svg
                  className="hidden md:block w-5 h-5 text-stone-500 group-hover:text-forest-800 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {blogPosts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-ink-700">No posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
