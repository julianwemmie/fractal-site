export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        {/* Bio section */}
        <div className="md:col-span-3 order-2 md:order-1">
          <h1 className="font-serif text-4xl md:text-5xl text-forest-800 mb-8 animate-fade-in">
            Hello, I'm Julian
          </h1>

          <div className="space-y-5 text-forest-800/85 animate-fade-in-delay-1">
            <p className="text-lg leading-relaxed">
              I'm a software engineer who believes technology should help us
              build a more sustainable and connected world. Currently exploring
              the intersection of AI tools and developer experience.
            </p>

            <p className="leading-relaxed">
              When I'm not writing code, you'll find me tending to my small
              garden, experimenting with fermentation projects, or getting lost
              in a good science fiction novel. I'm drawn to systems that grow
              organically and ideas that compound over time.
            </p>

            <p className="leading-relaxed">
              This site is my digital garden&mdash;a place to share thoughts,
              projects, and the occasional tutorial. I believe in learning in
              public and building tools that matter.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-delay-2">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-800 text-ivory-100 rounded-full text-sm font-medium hover:bg-forest-700 transition-colors duration-200"
            >
              Read my writing
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://github.com/julianwemmie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-forest-800/30 text-forest-800 rounded-full text-sm font-medium hover:border-forest-800 hover:bg-forest-800/5 transition-all duration-200"
            >
              View my work
            </a>
          </div>
        </div>

        {/* Photo section */}
        <div className="md:col-span-2 order-1 md:order-2 animate-fade-in-delay-1">
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-gradient-to-br from-olive-300/40 to-sage-300/30 rounded-[2rem] rotate-3 transform" />

            {/* Profile image placeholder */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-sage-400 to-forest-700">
              {/* Placeholder pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-ivory-100/30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              {/* Subtle grain texture overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </div>

          {/* Caption */}
          <p className="mt-4 text-center text-sm text-sage-500 italic">
            Somewhere in the Pacific Northwest
          </p>
        </div>
      </div>

      {/* Current interests section */}
      <div className="mt-20 pt-16 border-t border-olive-400/30 animate-fade-in-delay-3">
        <h2 className="font-serif text-2xl text-forest-800 mb-6">
          Currently interested in
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            'AI-assisted development',
            'Systems thinking',
            'Permaculture',
            'Rust',
            'Digital gardens',
            'Solarpunk futures',
          ].map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 bg-olive-300/30 text-forest-800/80 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
