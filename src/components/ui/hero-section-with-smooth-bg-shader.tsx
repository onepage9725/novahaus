"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState, useRef } from "react"

interface SmoothBgShaderProps {
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  className?: string
  children?: React.ReactNode
  veilOpacity?: string
}

export function SmoothBgShader({
  colors = ["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  children,
  veilOpacity = "bg-white/40",
}: SmoothBgShaderProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        })
      }
    }
    update()
    
    // Slight delay to ensure layout is calculated fully
    const timeoutId = setTimeout(update, 100)
    
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("resize", update)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full z-0">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div className={`absolute inset-0 pointer-events-none ${veilOpacity}`} />
          </>
        )}
      </div>
      
      <div className="relative z-10 w-full h-full h-fit">
        {children}
      </div>
    </section>
  )
}