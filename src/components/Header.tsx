import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="py-6 md:py-8 border-b border-ink-900/10">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-3"
        >
          <svg
            className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16 4C16 4 8 8 6 16C4 24 8 28 16 28C16 28 16 20 16 16C16 12 20 8 28 6C24 4 20 4 16 4Z"
              className="fill-forest-800"
            />
            <path
              d="M16 16C16 20 16 28 16 28C24 28 28 24 26 16C24 8 16 4 16 4C16 4 16 12 16 16Z"
              className="fill-stone-500/60"
            />
            <path
              d="M16 28C16 28 16 20 16 16"
              className="stroke-clay-500"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-serif text-xl text-forest-800 tracking-tight">
            Julian Wemmie
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm tracking-wide transition-colors duration-200 ${
              isActive('/') && location.pathname === '/'
                ? 'text-forest-800 font-medium'
                : 'text-ink-700 hover:text-forest-800'
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`text-sm tracking-wide transition-colors duration-200 ${
              isActive('/blog')
                ? 'text-forest-800 font-medium'
                : 'text-ink-700 hover:text-forest-800'
            }`}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
