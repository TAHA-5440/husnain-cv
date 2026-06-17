'use client'

import { useEffect, useRef, useState } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { stats } from '@/lib/content'

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useReveal<HTMLSpanElement>()
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const duration = 1400
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading text-4xl font-bold text-primary sm:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
        >
          <CountUp value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
