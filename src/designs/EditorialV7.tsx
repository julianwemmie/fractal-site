export default function EditorialV7() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header section */}
      <div className="bg-gray-100 px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-black leading-tight mb-8 tracking-tight">
            Julian<br />
            Software<br />
            Engineer
          </h1>
          <p className="text-xl font-light max-w-2xl leading-relaxed text-gray-700">
            Building sustainable systems and exploring the intersection of AI tools, developer experience, and human connection.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        {/* Section 1 */}
        <div className="mb-24">
          <div className="flex gap-12 items-start mb-12">
            <div className="text-9xl md:text-10xl font-black text-gray-200 leading-none flex-shrink-0">
              1
            </div>
            <div className="flex-1 pt-4">
              <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
                About
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 ml-0 md:ml-32">
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600">
                Who I Am
              </h3>
              <p className="text-base leading-relaxed font-light">
                Software engineer with a passion for building sustainable systems. Interested in systems thinking, permaculture, and exploring new technologies like Rust.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600">
                What Drives Me
              </h3>
              <p className="text-base leading-relaxed font-light">
                Technology should help us build a more sustainable and connected world. I'm drawn to systems that grow organically and ideas that compound over time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600">
                Current Focus
              </h3>
              <p className="text-base leading-relaxed font-light">
                Exploring the intersection of AI tools and developer experience. Learning in public and building tools that matter. Digital gardens and sustainable futures.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 - Interests */}
        <div className="mb-24">
          <div className="flex gap-12 items-start mb-12">
            <div className="text-9xl md:text-10xl font-black text-gray-200 leading-none flex-shrink-0">
              2
            </div>
            <div className="flex-1 pt-4">
              <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
                Interests
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 ml-0 md:ml-32">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 mb-3">
                  Technology
                </h3>
                <ul className="space-y-2 text-base leading-relaxed font-light">
                  <li>• AI-assisted development</li>
                  <li>• Systems thinking</li>
                  <li>• Rust programming</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 mb-3">
                  Practice
                </h3>
                <ul className="space-y-2 text-base leading-relaxed font-light">
                  <li>• Digital gardens</li>
                  <li>• Learning in public</li>
                  <li>• Building tools</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 mb-3">
                  Philosophy
                </h3>
                <ul className="space-y-2 text-base leading-relaxed font-light">
                  <li>• Permaculture</li>
                  <li>• Solarpunk futures</li>
                  <li>• Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Work & Links */}
        <div className="mb-24">
          <div className="flex gap-12 items-start mb-12">
            <div className="text-9xl md:text-10xl font-black text-gray-200 leading-none flex-shrink-0">
              3
            </div>
            <div className="flex-1 pt-4">
              <h2 className="text-5xl md:text-6xl font-black mb-12 leading-tight">
                Work
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 ml-0 md:ml-32">
            <a
              href="/blog"
              className="group space-y-4 cursor-pointer"
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors">
                → Writing
              </h3>
              <p className="text-base leading-relaxed font-light group-hover:opacity-70 transition-opacity">
                Essays, tutorials, and thoughts on software engineering and sustainable systems.
              </p>
            </a>

            <a
              href="https://github.com/julianwemmie"
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-4 cursor-pointer"
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors">
                → Code
              </h3>
              <p className="text-base leading-relaxed font-light group-hover:opacity-70 transition-opacity">
                Open source projects and contributions on GitHub. Building tools and exploring new technologies.
              </p>
            </a>

            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-600">
                Location
              </h3>
              <p className="text-base leading-relaxed font-light">
                Based in the Pacific Northwest, currently exploring remote opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 px-8 md:px-16 py-16 mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-600 font-light">
            © 2024 Julian Wemmie. Editorial design inspired by contemporary portfolio aesthetics.
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sohne:wght@400;600;700;800;900&display=swap');

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </div>
  )
}
