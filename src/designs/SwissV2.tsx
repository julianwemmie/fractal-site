export default function SwissV2() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Geometric color blocks background */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-purple-700" />
      <div className="absolute top-0 left-1/3 w-1/3 h-1/2 bg-pink-500" />
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-red-700" />
      <div className="absolute top-1/2 left-1/3 w-1/3 h-1/2 bg-yellow-400" />
      <div className="absolute left-2/3 top-0 w-1/3 h-full bg-green-600" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-screen flex flex-col justify-between py-16">
        {/* Top section */}
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-8xl font-black text-white leading-tight mb-4">
              JULIAN
            </h1>
            <p className="text-white text-lg font-bold">Digital Gardener & Engineer</p>
          </div>
          <div className="bg-white/95 p-6 self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-black mb-3">Location</p>
            <p className="text-lg font-bold text-black">Pacific NW</p>
          </div>
        </div>

        {/* Middle - Info blocks */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/90 p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-black mb-4">About</p>
            <p className="text-sm text-black leading-relaxed">
              Software engineer exploring AI and sustainable systems. Learning in public, building tools that matter.
            </p>
          </div>

          <div className="bg-black/80 text-white p-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-4">Links</p>
            <div className="space-y-2">
              <a href="/blog/how-i-made-this-site-using-claude" className="block font-bold hover:opacity-70">
                → Essays
              </a>
              <a href="https://github.com/julianwemmie" target="_blank" rel="noopener noreferrer" className="block font-bold hover:opacity-70">
                → Code
              </a>
            </div>
          </div>
        </div>

        {/* Bottom - Interests */}
        <div className="grid grid-cols-3 gap-4">
          {['Permaculture', 'Rust', 'Systems', 'AI', 'Gardens', 'Solarpunk'].map((item) => (
            <div key={item} className="bg-black/70 text-white p-4">
              <p className="text-sm font-bold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
