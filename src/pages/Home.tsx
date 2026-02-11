import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { blogPosts } from '../data/posts'

function GenerativeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const w = () => window.innerWidth
    const h = () => window.innerHeight

    const lines: { x: number; y: number; vx: number; vy: number; color: string; width: number; points: { x: number; y: number }[] }[] = []

    const colors = [
      'rgba(45, 74, 43, 0.07)',
      'rgba(45, 74, 43, 0.05)',
      'rgba(201, 166, 144, 0.09)',
      'rgba(201, 166, 144, 0.06)',
      'rgba(168, 184, 178, 0.07)',
    ]

    for (let i = 0; i < 50; i++) {
      lines.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 2 + 0.5,
        points: [],
      })
    }

    const noise = (x: number, y: number, t: number) => {
      return Math.sin(x * 0.005 + t) * Math.cos(y * 0.004 + t * 0.7) +
        Math.sin((x + y) * 0.003 + t * 0.5) * 0.5
    }

    let t = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, w(), h())
      t += 0.002

      for (const line of lines) {
        const angle = noise(line.x, line.y, t) * Math.PI * 2
        line.vx += Math.cos(angle) * 0.03
        line.vy += Math.sin(angle) * 0.03
        line.vx *= 0.98
        line.vy *= 0.98
        line.x += line.vx
        line.y += line.vy

        line.points.push({ x: line.x, y: line.y })
        if (line.points.length > 100) line.points.shift()

        if (line.x < -50) line.x = w() + 50
        if (line.x > w() + 50) line.x = -50
        if (line.y < -50) line.y = h() + 50
        if (line.y > h() + 50) line.y = -50

        if (line.points.length > 2) {
          ctx.beginPath()
          ctx.strokeStyle = line.color
          ctx.lineWidth = line.width
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'

          ctx.moveTo(line.points[0].x, line.points[0].y)
          for (let j = 1; j < line.points.length - 1; j++) {
            const xc = (line.points[j].x + line.points[j + 1].x) / 2
            const yc = (line.points[j].y + line.points[j + 1].y) / 2
            ctx.quadraticCurveTo(line.points[j].x, line.points[j].y, xc, yc)
          }
          ctx.stroke()
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ width: '100vw', height: '100vh', zIndex: 0 }}
    />
  )
}

export default function Home() {
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <>
      <GenerativeBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <div className="mb-20 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forest-800 leading-[0.95] mb-6">
            Julian Wemmie
          </h1>
          <p className="text-ink-700 text-lg max-w-xl leading-relaxed">
            Software engineer in New York. I build full-stack products, mostly around AI and automation. Previously at John Deere, now at Fractal.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-ink-900/10 mb-16 animate-fade-in-delay-1" />

        {/* Recent writing */}
        <div className="animate-fade-in-delay-1">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-serif text-2xl text-forest-800">Recent writing</h2>
            <Link
              to="/blog"
              className="font-mono text-xs tracking-widest uppercase text-ink-700 hover:text-forest-800 transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="space-y-0 border-t border-ink-900/10">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-5 border-b border-ink-900/10 hover:bg-forest-800/5 -mx-4 px-4 transition-colors duration-200"
              >
                <time className="font-mono text-sm text-ink-700 tabular-nums shrink-0 md:w-32">
                  {post.date}
                </time>
                <span className="font-serif text-lg text-forest-800 group-hover:text-forest-600 transition-colors duration-200">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
