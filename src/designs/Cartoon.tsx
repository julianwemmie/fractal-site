export default function Cartoon() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800 relative overflow-hidden">
      {/* Doodle elements background */}
      <div className="absolute top-10 right-20 w-24 h-24 border-4 border-dashed border-purple-400 rounded-full opacity-40" />
      <div className="absolute bottom-32 left-10 w-32 h-32 border-4 border-dashed border-blue-400 opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 border-4 border-pink-400 opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        {/* Header with decorative elements */}
        <div className="mb-16 space-y-4">
          <div className="inline-block">
            <h1 className="text-7xl md:text-8xl font-black text-blue-600 leading-none mb-2"
              style={{
                fontFamily: '"Comic Sans MS", "Trebuchet MS", cursive',
              }}
            >
              Hey!
            </h1>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-400" />
              <div className="w-6 h-6 rounded-full bg-pink-400" />
              <div className="w-6 h-6 rounded-full bg-blue-400" />
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-700 max-w-2xl">
            I'm Julian, a software engineer who gets weirdly excited about sustainable systems and digital gardens.
          </p>
        </div>

        {/* Main content with cartoon boxes */}
        <div className="space-y-12">
          {/* About section */}
          <div className="border-4 border-blue-400 p-8 bg-white relative"
            style={{
              boxShadow: '6px 6px 0px rgba(0,0,0,0.1)',
            }}
          >
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full" />
            <h2 className="text-3xl font-black text-blue-600 mb-4">So what's this about?</h2>
            <p className="text-lg leading-relaxed font-medium text-gray-700 mb-4">
              I build software. I think about systems. I tend gardens (real and digital). I'm obsessed with the idea that technology should make the world better, not worse.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              Currently exploring how AI tools can actually help us work better, thinking about permaculture in tech, and writing about it all here.
            </p>
          </div>

          {/* Skills section with doodles */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-purple-400 p-6 bg-purple-50 relative"
              style={{
                boxShadow: '4px 4px 0px rgba(0,0,0,0.08)',
              }}
            >
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-300 rounded-full" />
              <h3 className="text-2xl font-black text-purple-600 mb-4">Things I'm into</h3>
              <ul className="space-y-2 font-medium text-gray-700">
                <li>✨ AI-assisted development</li>
                <li>🌱 Systems thinking</li>
                <li>💻 TypeScript & Python</li>
                <li>🌍 Permaculture</li>
                <li>📝 Digital gardens</li>
              </ul>
            </div>

            <div className="border-4 border-pink-400 p-6 bg-pink-50 relative"
              style={{
                boxShadow: '4px 4px 0px rgba(0,0,0,0.08)',
              }}
            >
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-blue-400 rounded-full" />
              <h3 className="text-2xl font-black text-pink-600 mb-4">Where you can find me</h3>
              <div className="space-y-3">
                <a
                  href="/blog/how-i-made-this-site-using-claude"
                  className="block px-4 py-2 bg-white border-3 border-pink-400 text-pink-600 font-bold hover:bg-pink-100 transition-all text-center"
                  style={{
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                  }}
                >
                  → Reading my stuff
                </a>
                <a
                  href="https://github.com/julianwemmie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-white border-3 border-pink-400 text-pink-600 font-bold hover:bg-pink-100 transition-all text-center"
                  style={{
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
                  }}
                >
                  → Looking at code
                </a>
              </div>
            </div>
          </div>

          {/* Fun fact section */}
          <div className="border-4 border-dashed border-green-400 p-8 bg-green-50 relative"
            style={{
              boxShadow: '4px 4px 0px rgba(0,0,0,0.08)',
            }}
          >
            <div className="absolute -top-4 left-8 w-8 h-8 bg-green-400 rounded-full" />
            <h3 className="text-xl font-black text-green-600 mb-3">Random thing about me:</h3>
            <p className="text-lg font-medium text-gray-700">
              I genuinely believe that ideas compound over time, like compound interest but for your brain. Hence the "digital garden" thing. And yes, I have an actual garden too.
            </p>
          </div>

          {/* Interests grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-gray-800">Currently obsessed with:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Sustainable tech',
                'Learning publicly',
                'Building tools',
                'AI ethics',
                'Systems design',
                'Futures thinking',
              ].map((item) => (
                <div
                  key={item}
                  className="border-3 border-gray-800 p-4 bg-white font-bold text-center"
                  style={{
                    boxShadow: '3px 3px 0px rgba(0,0,0,0.1)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with doodles */}
        <div className="mt-16 pt-8 border-t-4 border-gray-400 text-center space-y-4">
          <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">
            Made with ❤️ in NYC
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-4 h-4 rounded-full bg-blue-400" />
            <div className="w-4 h-4 rounded-full bg-purple-400" />
            <div className="w-4 h-4 rounded-full bg-pink-400" />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');

        * {
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  )
}
