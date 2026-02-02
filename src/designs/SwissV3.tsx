export default function SwissV3() {
  return (
    <div className="min-h-screen bg-orange-500 relative overflow-hidden">
      {/* Hatching pattern background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.1) 20px,
            rgba(0,0,0,0.1) 22px
          )`,
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.1) 20px,
            rgba(0,0,0,0.1) 22px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 h-screen flex flex-col justify-between py-16">
        {/* Header info */}
        <div className="space-y-4">
          <p className="text-sm font-bold text-black uppercase tracking-widest">Web Engineer</p>
          <p className="text-xs text-black/80">Pacific Northwest / 2024</p>
        </div>

        {/* Main title overlaid */}
        <div className="space-y-8">
          <div className="bg-black p-4 inline-block">
            <h1 className="text-7xl font-black text-orange-500 leading-none tracking-tighter">
              JULIAN
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-black mb-6">
              Building<br />Sustainable<br />Systems
            </h2>
            <p className="text-lg font-bold text-black/80 mb-8">
              Software engineer exploring AI tools and developer experience
            </p>
          </div>
        </div>

        {/* Bottom action grid */}
        <div className="grid grid-cols-3 gap-6">
          <a
            href="/blog"
            className="bg-black text-orange-500 p-6 hover:opacity-80 transition-opacity"
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-2">Read</p>
            <p className="text-2xl font-black">Essays</p>
          </a>

          <a
            href="https://github.com/julianwemmie"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-orange-500 p-6 hover:opacity-80 transition-opacity"
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-2">View</p>
            <p className="text-2xl font-black">Work</p>
          </a>

          <div className="bg-black/80 text-white p-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3">Focus</p>
            <p className="text-sm font-bold leading-tight">
              Sustainable<br />Systems &<br />Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
