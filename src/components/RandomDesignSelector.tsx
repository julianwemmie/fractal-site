import { useEffect, useState } from 'react'
import DesignWheel from './DesignWheel'
import Vibrant from '../designs/Vibrant'
import Orange from '../designs/Orange'
import Grunge from '../designs/Grunge'
import Editorial from '../designs/Editorial'
import StarWars from '../designs/StarWars'
import Cartoon from '../designs/Cartoon'
import Minimal from '../designs/Minimal'

type DesignKey = 'Vibrant' | 'Orange' | 'Grunge' | 'Editorial' | 'StarWars' | 'Cartoon' | 'Minimal'

const DESIGNS: Record<DesignKey, React.ComponentType> = {
  Vibrant,
  Orange,
  Grunge,
  Editorial,
  StarWars,
  Cartoon,
  Minimal,
}

const DESIGN_KEYS: DesignKey[] = ['Vibrant', 'Orange', 'Grunge', 'Editorial', 'StarWars', 'Cartoon', 'Minimal']

const DESIGN_COLORS: Record<DesignKey, string> = {
  Vibrant: 'bg-red-500',
  Orange: 'bg-orange-500',
  Grunge: 'bg-gray-600',
  Editorial: 'bg-gray-900',
  StarWars: 'bg-yellow-400',
  Cartoon: 'bg-purple-400',
  Minimal: 'bg-gray-100 border border-gray-300',
}

const STORAGE_KEY = 'unseenDesigns'

function getNextDesign(): DesignKey {
  // Get unseen designs from localStorage
  let unseen: DesignKey[]
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    unseen = stored ? JSON.parse(stored) : [...DESIGN_KEYS]
    // Validate that stored values are valid design keys
    unseen = unseen.filter(d => DESIGN_KEYS.includes(d))
    if (unseen.length === 0) {
      unseen = [...DESIGN_KEYS]
    }
  } catch {
    unseen = [...DESIGN_KEYS]
  }

  // Pick a random design from unseen list
  const randomIndex = Math.floor(Math.random() * unseen.length)
  const selected = unseen[randomIndex]

  // Remove selected from unseen list
  unseen.splice(randomIndex, 1)

  // If list is now empty, reset for next cycle
  if (unseen.length === 0) {
    unseen = [...DESIGN_KEYS]
  }

  // Save updated list
  localStorage.setItem(STORAGE_KEY, JSON.stringify(unseen))

  return selected
}

export default function RandomDesignSelector() {
  const [selectedDesign, setSelectedDesign] = useState<DesignKey>(() => getNextDesign())
  const [isSpinning, setIsSpinning] = useState(true)
  const [showDesign, setShowDesign] = useState(false)
  const [debugOpen, setDebugOpen] = useState(false)

  // Keyboard shortcut: Press 'D' to toggle debug panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'd' || e.key === 'D') {
        // Don't trigger if user is typing in an input
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
        setDebugOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSpinComplete = () => {
    setIsSpinning(false)
    // After a brief pause, show the design
    setTimeout(() => {
      setShowDesign(true)
    }, 500)
  }

  const handleDebugSelect = (design: DesignKey) => {
    setSelectedDesign(design)
    setIsSpinning(false)
    setShowDesign(true)
  }

  const CurrentDesign = DESIGNS[selectedDesign]

  return (
    <>
      {/* Spinning wheel overlay */}
      {!showDesign && (
        <DesignWheel
          isSpinning={isSpinning}
          selectedDesign={selectedDesign}
          onSpinComplete={handleSpinComplete}
        />
      )}

      {/* Selected design with fade-in */}
      <div className={`transition-opacity duration-1000 ${showDesign ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <CurrentDesign />
      </div>

      {/* Debug Overlay */}
      <div className="fixed bottom-4 left-4 z-[100]">
        {/* Toggle Button */}
        <button
          onClick={() => setDebugOpen(prev => !prev)}
          className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
            debugOpen
              ? 'bg-red-500 text-white rotate-45'
              : 'bg-black/80 text-white hover:bg-black'
          }`}
          title="Toggle debug panel (D)"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>

        {/* Debug Panel */}
        {debugOpen && (
          <div className="absolute bottom-12 left-0 bg-black/90 backdrop-blur-sm rounded-lg shadow-2xl p-3 min-w-[180px]">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 px-1">
              Switch Design
            </div>
            <div className="space-y-1">
              {DESIGN_KEYS.map((design) => (
                <button
                  key={design}
                  onClick={() => handleDebugSelect(design)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-left text-sm transition-colors ${
                    selectedDesign === design
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full flex-shrink-0 ${DESIGN_COLORS[design]}`} />
                  <span>{design}</span>
                  {selectedDesign === design && (
                    <span className="ml-auto text-xs text-green-400">active</span>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-white/10 text-xs text-gray-500 px-1">
              Press <kbd className="px-1 py-0.5 bg-white/10 rounded">D</kbd> to toggle
            </div>
          </div>
        )}
      </div>
    </>
  )
}
