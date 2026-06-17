'use client'

import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const { ref, inView } = useReveal()
  const Component = Tag as 'div'
  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn('reveal', inView && 'in-view', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <div className="flex items-center gap-3 text-primary">
        <span className="h-px w-8 bg-primary" />
        <span className="font-mono text-xs uppercase tracking-[0.25em]">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
