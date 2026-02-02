import { useEffect, useState } from 'react'
import DesignWheel from './DesignWheel'
import SwissV2 from '../designs/SwissV2'
import SwissV3 from '../designs/SwissV3'
import GrungeV6 from '../designs/GrungeV6'
import EditorialV7 from '../designs/EditorialV7'
import StarWarsV8 from '../designs/StarWarsV8'
import CartoonV9 from '../designs/CartoonV9'
import MinimalV10 from '../designs/MinimalV10'

type DesignKey = 'Vibrant' | 'Orange' | 'Grunge' | 'Editorial' | 'StarWars' | 'Cartoon' | 'Minimal'

const DESIGNS: Record<DesignKey, React.ComponentType> = {
  Vibrant: SwissV2,
  Orange: SwissV3,
  Grunge: GrungeV6,
  Editorial: EditorialV7,
  StarWars: StarWarsV8,
  Cartoon: CartoonV9,
  Minimal: MinimalV10,
}

const DESIGN_KEYS: DesignKey[] = ['Vibrant', 'Orange', 'Grunge', 'Editorial', 'StarWars', 'Cartoon', 'Minimal']

export default function RandomDesignSelector() {
  const [selectedDesign, setSelectedDesign] = useState<DesignKey>('Vibrant')
  const [isSpinning, setIsSpinning] = useState(true)
  const [showDesign, setShowDesign] = useState(false)

  useEffect(() => {
    // Pick a random design on mount
    const randomDesign = DESIGN_KEYS[Math.floor(Math.random() * DESIGN_KEYS.length)]
    setSelectedDesign(randomDesign)
  }, [])

  const handleSpinComplete = () => {
    setIsSpinning(false)
    // After a brief pause, show the design
    setTimeout(() => {
      setShowDesign(true)
    }, 500)
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
    </>
  )
}
