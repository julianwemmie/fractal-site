import { useState } from 'react'
import SwissV2 from '../designs/SwissV2'
import SwissV3 from '../designs/SwissV3'
import GrungeV6 from '../designs/GrungeV6'
import EditorialV7 from '../designs/EditorialV7'
import StarWarsV8 from '../designs/StarWarsV8'
import CartoonV9 from '../designs/CartoonV9'
import MinimalV10 from '../designs/MinimalV10'

type DesignStyle = 'vibrant' | 'orange' | 'grunge' | 'editorial' | 'starwars' | 'cartoon' | 'minimal'

const DESIGNS: Record<DesignStyle, { name: string; component: React.ComponentType; description: string; accent: string }> = {
  vibrant: {
    name: 'Vibrant Blocks',
    component: SwissV2,
    description: 'Color blocking with diagonal composition',
    accent: 'from-red-600 to-orange-600'
  },
  orange: {
    name: 'Orange Pattern',
    component: SwissV3,
    description: 'Hatching patterns and bold shapes',
    accent: 'from-orange-500 to-red-600'
  },
  grunge: {
    name: 'Grunge',
    component: GrungeV6,
    description: 'Distressed, raw, high-contrast aesthetic',
    accent: 'from-gray-700 to-black'
  },
  editorial: {
    name: 'Editorial',
    component: EditorialV7,
    description: 'Bold typography, spacious layout, editorial',
    accent: 'from-black to-gray-800'
  },
  starwars: {
    name: 'Star Wars',
    component: StarWarsV8,
    description: 'Sci-fi futuristic, opening crawl, starfield',
    accent: 'from-yellow-300 to-yellow-400'
  },
  cartoon: {
    name: 'Cartoon',
    component: CartoonV9,
    description: 'Playful, hand-drawn, fun and friendly',
    accent: 'from-purple-400 to-pink-400'
  },
  minimal: {
    name: 'Minimal',
    component: MinimalV10,
    description: 'Absolute minimalism, whitespace, refined',
    accent: 'from-gray-900 to-black'
  }
}

export default function DesignShowcase() {
  const [activeDesign, setActiveDesign] = useState<DesignStyle>('vibrant')
  const [isOpen, setIsOpen] = useState(true)

  const CurrentComponent = DESIGNS[activeDesign].component

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Design Preview */}
      <div className="transition-opacity duration-500">
        <CurrentComponent />
      </div>

      {/* Floating Design Switcher */}
      <div
        className={`fixed top-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-white tracking-widest uppercase">
              Design Styles
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Style Buttons */}
          <div className="space-y-2">
            {(Object.entries(DESIGNS) as [DesignStyle, typeof DESIGNS[DesignStyle]][]).map(
              ([key, design]) => (
                <button
                  key={key}
                  onClick={() => setActiveDesign(key)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-200 group ${
                    activeDesign === key
                      ? 'bg-white/20 border border-white/40 backdrop-blur-md'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-br ${design.accent} transition-transform ${
                        activeDesign === key ? 'scale-125' : ''
                      }`}
                    />
                    <div>
                      <div className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">
                        {design.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{design.description}</div>
                    </div>
                  </div>
                </button>
              )
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-gray-400 leading-relaxed">
              Explore different design aesthetics for Julian's portfolio. Each style brings a unique perspective to the same content.
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-200 group"
          title="Show design styles"
        >
          <svg className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </button>
      )}
    </div>
  )
}
