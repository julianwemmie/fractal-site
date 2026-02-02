export default function MinimalV10() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-32">
        <h1 className="text-3xl font-light tracking-tight leading-relaxed mb-16">
          Julian
        </h1>

        <div className="space-y-24">
          {/* About */}
          <div className="space-y-6">
            <h2 className="text-sm font-light tracking-widest uppercase opacity-50">
              About
            </h2>
            <p className="text-base font-light leading-relaxed opacity-80 max-w-xl">
              Software engineer. Building sustainable systems. Exploring the intersection of AI tools and developer experience.
            </p>
          </div>

          {/* Current work */}
          <div className="space-y-6">
            <h2 className="text-sm font-light tracking-widest uppercase opacity-50">
              Currently
            </h2>
            <p className="text-base font-light leading-relaxed opacity-80 max-w-xl">
              Learning in public. Building digital gardens. Thinking about systems that grow organically.
            </p>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            <h2 className="text-sm font-light tracking-widest uppercase opacity-50">
              Interested in
            </h2>
            <div className="text-base font-light opacity-80 max-w-xl space-y-1">
              <p>AI-assisted development</p>
              <p>Systems thinking</p>
              <p>Permaculture</p>
              <p>Rust</p>
              <p>Digital gardens</p>
              <p>Sustainable futures</p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6 pt-8 border-t border-black/10">
            <h2 className="text-sm font-light tracking-widest uppercase opacity-50">
              Links
            </h2>
            <div className="space-y-3">
              <a
                href="/blog/how-i-made-this-site-using-claude"
                className="block text-base font-light opacity-80 hover:opacity-100 transition-opacity"
              >
                Essays
              </a>
              <a
                href="https://github.com/julianwemmie"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-light opacity-80 hover:opacity-100 transition-opacity"
              >
                Code
              </a>
              <a
                href="#"
                className="block text-base font-light opacity-80 hover:opacity-100 transition-opacity"
              >
                Location: Pacific Northwest
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-32 border-t border-black/10">
        <p className="text-xs font-light opacity-50 tracking-widest">
          © 2024
        </p>
      </div>

      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </div>
  )
}
