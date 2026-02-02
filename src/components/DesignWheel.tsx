import { useEffect, useState } from 'react'

const DESIGN_NAMES = [
  'Vibrant',
  'Orange',
  'Grunge',
  'Editorial',
  'StarWars',
  'Cartoon',
  'Minimal'
]

interface DesignWheelProps {
  isSpinning: boolean
  selectedDesign: string
  onSpinComplete?: () => void
}

export default function DesignWheel({ isSpinning, selectedDesign, onSpinComplete }: DesignWheelProps) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!isSpinning) return

    let animationFrameId: number
    let currentRotation = 0
    const spinDuration = 2000 // 2 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / spinDuration, 1)

      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)

      // Total rotation: multiple full rotations - land on selected design
      const selectedIndex = DESIGN_NAMES.indexOf(selectedDesign)
      const segmentAngle = 360 / DESIGN_NAMES.length
      const finalRotation = 360 * 5 - (selectedIndex * segmentAngle)

      currentRotation = finalRotation * easeOut
      setRotation(currentRotation)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else if (onSpinComplete) {
        onSpinComplete()
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isSpinning, selectedDesign, onSpinComplete])

  const createPieSlice = (index: number) => {
    const sliceAngle = 360 / DESIGN_NAMES.length
    // Center each segment, so segment 0 is centered at the top (-90 degrees)
    const startAngle = (index * sliceAngle - 90 - sliceAngle / 2) * (Math.PI / 180)
    const endAngle = ((index + 1) * sliceAngle - 90 - sliceAngle / 2) * (Math.PI / 180)
    const radius = 150

    const x1 = 160 + radius * Math.cos(startAngle)
    const y1 = 160 + radius * Math.sin(startAngle)
    const x2 = 160 + radius * Math.cos(endAngle)
    const y2 = 160 + radius * Math.sin(endAngle)

    const largeArc = sliceAngle > 180 ? 1 : 0

    return [
      `M 160 160`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ')
  }

  const colors = [
    '#ef4444',
    '#f97316',
    '#475569',
    '#1e293b',
    '#eab308',
    '#a855f7',
    '#0f172a',
  ]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-40">
      {/* Glow effect background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Wheel container */}
      <div className="relative">
        {/* Outer ring glow */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20" style={{ width: '320px', height: '320px' }} />

        {/* SVG Spinning wheel */}
        <svg
          width="320"
          height="320"
          viewBox="0 0 320 320"
          className="relative"
          style={{
            transform: `rotate(${rotation}deg)`,
            filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3))',
          }}
        >
          {/* Create pie slices */}
          {DESIGN_NAMES.map((name, index) => (
            <path
              key={name}
              d={createPieSlice(index)}
              fill={colors[index]}
              stroke="#1e293b"
              strokeWidth="2"
            />
          ))}

          {/* Text labels - spin with the wheel */}
          {DESIGN_NAMES.map((name, index) => {
            const sliceAngle = 360 / DESIGN_NAMES.length
            const labelAngle = index * sliceAngle - 90
            const labelRadius = 115
            const labelRad = (labelAngle * Math.PI) / 180
            const x = 160 + labelRadius * Math.cos(labelRad)
            const y = 160 + labelRadius * Math.sin(labelRad)

            return (
              <text
                key={`text-${name}`}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="select-none"
                fill="white"
                fontSize="11"
                fontWeight="bold"
                style={{
                  transform: `rotate(${labelAngle + 90}deg)`,
                  transformOrigin: `${x}px ${y}px`,
                  pointerEvents: 'none',
                }}
              >
                {name}
              </text>
            )
          })}

          {/* Center circle */}
          <circle cx="160" cy="160" r="40" fill="#0f172a" stroke="#60a5fa" strokeWidth="3" />
          <circle cx="160" cy="160" r="6" fill="#60a5fa" />
        </svg>

        {/* Pointer at top */}
        <div className="absolute left-1/2 -top-4 w-6 h-8 bg-blue-400 rounded-b-md shadow-lg z-20 -translate-x-1/2" />
      </div>

      {/* Text */}
      <div className="absolute bottom-20 text-center">
        <p className="text-slate-300 text-lg font-semibold mb-2">
          {isSpinning ? 'Choosing your design...' : `Loading ${selectedDesign}...`}
        </p>
        <div className="flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
