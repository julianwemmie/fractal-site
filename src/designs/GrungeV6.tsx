export default function GrungeV6() {
  return (
    <div className="min-h-screen bg-gray-200 relative overflow-hidden font-mono">
      {/* Grainy noise texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 space-y-8">
        {/* Header with distressed title */}
        <div className="space-y-4">
          <div className="border-4 border-black p-6 bg-white">
            <h1
              className="text-6xl font-black text-black leading-none tracking-tight mb-2"
              style={{
                textShadow: '2px 2px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(0,0,0,0.1)',
                letterSpacing: '0.05em',
              }}
            >
              JULIAN
            </h1>
            <p className="text-sm font-bold text-black uppercase tracking-widest">
              &gt; software engineer // digital gardener
            </p>
          </div>

          {/* Distressed text blocks */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-4 border-black p-4 bg-black text-white">
              <p className="text-xs font-bold uppercase tracking-widest mb-2">Location</p>
              <p className="text-lg font-black">PACIFIC NW</p>
            </div>
            <div className="border-4 border-black p-4 bg-white">
              <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">Year</p>
              <p className="text-lg font-black text-black">2024</p>
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* Left column - Bio */}
          <div className="col-span-2 space-y-4">
            {/* Section with border */}
            <div className="border-4 border-black p-6 bg-white">
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">
                // ABOUT
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-black font-bold">
                <p>
                  Software engineer building sustainable systems. Exploring AI, systems thinking, and the intersection of technology with human experience.
                </p>
                <p>
                  Learning in public. Building tools that matter. Currently pushing pixels and shipping code.
                </p>
              </div>
            </div>

            {/* Interests grid */}
            <div className="border-4 border-black p-4 bg-black">
              <p className="text-xs font-black text-white uppercase tracking-widest mb-4">// INTERESTS</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'AI-assisted dev',
                  'Systems design',
                  'Permaculture',
                  'Rust',
                  'Digital gardens',
                  'Solarpunk',
                ].map((item) => (
                  <div
                    key={item}
                    className="border-2 border-white bg-white text-black p-2"
                  >
                    <p className="text-xs font-black uppercase tracking-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Navigation and info */}
          <div className="space-y-4">
            {/* Pixelated accent block */}
            <div className="border-4 border-black bg-black p-4">
              <div className="w-full h-32 bg-white grid grid-cols-4 gap-0.5 p-2">
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    className={`${i % 3 === 0 ? 'bg-black' : 'bg-white'} border border-black`}
                  />
                ))}
              </div>
            </div>

            {/* Action links */}
            <a
              href="/blog"
              className="block border-4 border-black bg-white p-4 hover:bg-black hover:text-white transition-colors group"
            >
              <p className="text-xs font-black text-black group-hover:text-white uppercase tracking-widest mb-2">
                → ESSAYS
              </p>
              <p className="text-lg font-black text-black group-hover:text-white uppercase">Read</p>
            </a>

            <a
              href="https://github.com/julianwemmie"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-4 border-black bg-black text-white p-4 hover:bg-white hover:text-black transition-colors group"
            >
              <p className="text-xs font-black text-white group-hover:text-black uppercase tracking-widest mb-2">
                → CODE
              </p>
              <p className="text-lg font-black text-white group-hover:text-black uppercase">Work</p>
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-4 border-black p-6 bg-white space-y-4">
          <h3 className="text-xl font-black text-black uppercase tracking-tight">// PHILOSOPHY</h3>
          <div className="grid grid-cols-3 gap-4 text-sm font-bold text-black">
            <div className="border-2 border-black p-3 bg-gray-300">
              <p className="font-black mb-1">BUILD</p>
              <p className="text-xs">Sustainable systems</p>
            </div>
            <div className="border-2 border-black p-3 bg-gray-300">
              <p className="font-black mb-1">LEARN</p>
              <p className="text-xs">In public, always</p>
            </div>
            <div className="border-2 border-black p-3 bg-gray-300">
              <p className="font-black mb-1">GROW</p>
              <p className="text-xs">Ideas compound</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black pt-4 text-center text-xs font-bold text-black uppercase tracking-widest">
          <p>© 2024 JULIAN WEMMIE / GRUNGE AESTHETIC / RAW & INTENTIONAL</p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');

        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Distressed effect */
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
      `}</style>
    </div>
  )
}
