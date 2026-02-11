import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { blogPosts } from '../data/posts'

export function GenerativeBackground() {
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

    const lines: { x: number; y: number; vx: number; vy: number; color: string; width: number; phase: number; curl: number; oscillate: number; points: { x: number; y: number }[] }[] = []

    const colors = [
      'rgba(45, 74, 43, 0.10)',
      'rgba(45, 74, 43, 0.08)',
      'rgba(201, 166, 144, 0.12)',
      'rgba(201, 166, 144, 0.09)',
      'rgba(168, 184, 178, 0.10)',
    ]

    for (let i = 0; i < 20; i++) {
      lines.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: Math.random() * 1.5 + 0.5,
        phase: Math.random() * Math.PI * 2,
        curl: (Math.random() < 0.5 ? -1 : 1) * (0.002 + Math.random() * 0.003),
        oscillate: 0.2 + Math.random() * 0.3,
        points: [],
      })
    }

    const noise = (x: number, y: number, t: number, phase: number) => {
      return Math.sin(x * 0.002 + t + phase) * Math.cos(y * 0.0015 + t * 0.7) +
        Math.sin((x + y) * 0.001 + t * 0.5) * 0.5 +
        Math.sin(x * 0.003 - y * 0.002 + t * 1.3 + phase) * 0.4 +
        Math.cos(x * 0.001 + y * 0.003 + t * 0.9) * 0.3
    }

    let t = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, w(), h())
      ctx.save()
      ctx.translate(-window.scrollX, -window.scrollY)
      t += 0.001

      for (const line of lines) {
        const angle = noise(line.x, line.y, t, line.phase) * Math.PI * 2
        line.vx += Math.cos(angle) * 0.008
        line.vy += Math.sin(angle) * 0.008
        // Gentle perpendicular curl for broad sweeping curves
        const speed = Math.sqrt(line.vx * line.vx + line.vy * line.vy)
        if (speed > 0.01) {
          const perpX = -line.vy / speed
          const perpY = line.vx / speed
          const curlStrength = line.curl + Math.sin(t * 2 + line.phase) * line.oscillate * 0.003
          line.vx += perpX * curlStrength
          line.vy += perpY * curlStrength
        }
        line.vx *= 0.998
        line.vy *= 0.998
        line.x += line.vx
        line.y += line.vy

        line.points.push({ x: line.x, y: line.y })
        if (line.points.length > 350) line.points.shift()

        if (line.x < -50 || line.x > w() + 50 || line.y < -50 || line.y > h() + 50) {
          line.x = line.x < -50 ? w() + 50 : line.x > w() + 50 ? -50 : line.x
          line.y = line.y < -50 ? h() + 50 : line.y > h() + 50 ? -50 : line.y
          line.points.push(null as any)
        }

        if (line.points.length > 2) {
          const len = line.points.length
          const fadeIn = Math.min(len, 60)
          const fadeOut = Math.min(len, 60)
          const baseAlpha = parseFloat(line.color.match(/[\d.]+\)$/)![0])

          for (let j = 1; j < len - 1; j++) {
            const prev = line.points[j - 1]
            const curr = line.points[j]
            const next = line.points[j + 1]
            if (!prev || !curr || !next) continue

            let alpha = 1
            if (j < fadeIn) alpha = j / fadeIn
            if (j > len - 1 - fadeOut) alpha = Math.min(alpha, (len - 1 - j) / fadeOut)

            ctx.beginPath()
            ctx.strokeStyle = line.color.replace(/[\d.]+\)$/, (alpha * baseAlpha) + ')')
            ctx.lineWidth = line.width
            ctx.lineCap = 'round'
            ctx.lineJoin = 'round'

            const xc = (curr.x + next.x) / 2
            const yc = (curr.y + next.y) / 2
            ctx.moveTo((prev.x + curr.x) / 2, (prev.y + curr.y) / 2)
            ctx.quadraticCurveTo(curr.x, curr.y, xc, yc)
            ctx.stroke()
          }
        }
      }

      ctx.restore()
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
