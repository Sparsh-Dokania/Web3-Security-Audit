"use client"

import { useEffect, useState } from "react"

interface StatCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  label: string
}

export function StatCounter({ end, duration = 2000, prefix = "", suffix = "", label }: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary md:text-5xl">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}