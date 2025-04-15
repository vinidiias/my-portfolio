"use client"

import React, { useRef, useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"

interface LoopingContainerProps {
  children: React.ReactNode
  speed?: number
  gap?: number
  direction?: "ltr" | "rtl"
  className?: string
}

export default function LoopingContainer({
  children,
  speed = 20,
  gap = 20,
  direction = "ltr",
  className = "",
}: LoopingContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)
  const [duplicates, setDuplicates] = useState(1)
  const controls = useAnimationControls()

  // Calculate how many duplicates we need to fill the container
  useEffect(() => {
    if (!containerRef.current) return

    const calculateWidths = () => {
      const container = containerRef.current
      if (!container) return

      const containerWidth = container.offsetWidth
      const contentWidth = container.scrollWidth

      // Calculate how many duplicates we need to ensure continuous looping
      // We need at least enough to fill the container twice
      const duplicatesNeeded = Math.max(2, Math.ceil((containerWidth * 2) / contentWidth))

      setContainerWidth(containerWidth)
      setContentWidth(contentWidth)
      setDuplicates(duplicatesNeeded)
    }

    calculateWidths()

    // Recalculate on resize
    window.addEventListener("resize", calculateWidths)
    return () => window.removeEventListener("resize", calculateWidths)
  }, [children])

  // Start the animation
  useEffect(() => {
    if (contentWidth === 0) return

    const directionMultiplier = direction === "rtl" ? -1 : 1
    const distance = contentWidth * directionMultiplier

    controls.start({
      x: -distance,
      transition: {
        duration: contentWidth / speed,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    })
  }, [contentWidth, speed, direction, controls])

  // Create an array of duplicated children
  const duplicatedChildren = Array(duplicates)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="flex" style={{ gap: `${gap}px` }}>
        {React.Children.map(children, (child, childIndex) => (
          <div key={childIndex}>{child}</div>
        ))}
      </div>
    ))

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div className="flex" style={{ gap: `${gap}px` }} animate={controls}>
        {duplicatedChildren}
      </motion.div>
    </div>
  )
}
