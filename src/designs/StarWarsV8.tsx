export default function StarWarsV8() {
  return (
    <div className="min-h-screen bg-black text-yellow-300 relative overflow-hidden font-serif">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-300 rounded-full"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 space-y-20">
        {/* Opening crawl effect */}
        <div
          className="text-center max-w-2xl space-y-8"
          style={{
            perspective: '1000px',
          }}
        >
          {/* Star Wars logo style */}
          <div className="space-y-4">
            <div className="text-yellow-300 text-sm font-bold uppercase tracking-widest">
              ~ EPISODE VII ~
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-yellow-300 leading-none tracking-tighter"
              style={{
                textShadow: '0 0 30px rgba(253, 230, 71, 0.5)',
                letterSpacing: '0.1em',
              }}
            >
              JULIAN
            </h1>
          </div>

          {/* Opening crawl */}
          <div
            className="space-y-6 text-center leading-relaxed max-w-2xl"
            style={{
              animation: 'crawl 30s infinite linear',
              transformStyle: 'preserve-3d',
            }}
          >
            <p className="text-lg md:text-xl font-light">
              An engineer of sustainable systems and digital gardens emerges from the Pacific Northwest...
            </p>
            <p className="text-base md:text-lg font-light opacity-90">
              Exploring the intersection of AI tools and developer experience, this software engineer seeks to build technology that serves the greater good.
            </p>
            <p className="text-base md:text-lg font-light opacity-80">
              With skills in systems thinking and a passion for permaculture, the quest to create meaningful tools continues...
            </p>
          </div>
        </div>

        {/* Holographic sections */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl w-full">
          {/* Skills block */}
          <div className="border-2 border-yellow-300 p-8 relative group hover:shadow-lg hover:shadow-yellow-300/50 transition-all"
            style={{
              boxShadow: '0 0 20px rgba(253, 230, 71, 0.2)',
            }}
          >
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-yellow-300" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-yellow-300" />
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Core Systems</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>» AI-assisted development</li>
              <li>» Systems thinking</li>
              <li>» Sustainable architecture</li>
            </ul>
          </div>

          {/* Languages block */}
          <div className="border-2 border-yellow-300 p-8 relative group hover:shadow-lg hover:shadow-yellow-300/50 transition-all"
            style={{
              boxShadow: '0 0 20px rgba(253, 230, 71, 0.2)',
            }}
          >
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-yellow-300" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-yellow-300" />
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Languages</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>» TypeScript</li>
              <li>» Rust</li>
              <li>» Python</li>
            </ul>
          </div>

          {/* Philosophy block */}
          <div className="border-2 border-yellow-300 p-8 relative group hover:shadow-lg hover:shadow-yellow-300/50 transition-all"
            style={{
              boxShadow: '0 0 20px rgba(253, 230, 71, 0.2)',
            }}
          >
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-yellow-300" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-yellow-300" />
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Philosophy</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>» Learning in public</li>
              <li>» Building for good</li>
              <li>» Digital gardens</li>
            </ul>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-8 flex-wrap justify-center">
          <a
            href="/blog/how-i-made-this-site-using-claude"
            className="px-8 py-4 border-2 border-yellow-300 text-yellow-300 uppercase font-bold tracking-widest hover:bg-yellow-300 hover:text-black transition-all"
            style={{
              boxShadow: '0 0 15px rgba(253, 230, 71, 0.3)',
            }}
          >
            → Read Essays
          </a>
          <a
            href="https://github.com/julianwemmie"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-yellow-300 text-yellow-300 uppercase font-bold tracking-widest hover:bg-yellow-300 hover:text-black transition-all"
            style={{
              boxShadow: '0 0 15px rgba(253, 230, 71, 0.3)',
            }}
          >
            → View Code
          </a>
        </div>

        {/* Location */}
        <div className="text-center space-y-2 border-t-2 border-yellow-300/30 pt-8">
          <p className="text-sm uppercase tracking-widest opacity-70">Current Station</p>
          <p className="text-2xl font-bold">Pacific Northwest Outpost</p>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes crawl {
          0% {
            opacity: 1;
            transform: perspective(800px) rotateX(80deg) translateY(300px) translateZ(0);
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: perspective(800px) rotateX(80deg) translateY(-150vh) translateZ(0);
          }
        }

        .font-serif {
          font-family: 'Georgia', serif;
        }
      `}</style>
    </div>
  )
}
