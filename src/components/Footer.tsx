export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 mt-16 border-t border-ink-900/10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-700">
          <p>&copy; {currentYear} Julian Wemmie</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/julianwemmie"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-forest-800 transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="text-clay-400">|</span>
            <a
              href="mailto:hello@julianwemmie.com"
              className="hover:text-forest-800 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
