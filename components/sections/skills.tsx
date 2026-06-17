'use client'

import { useReveal } from '@/hooks/use-reveal'
import { Reveal, SectionHeading } from '@/components/reveal'
import { skillCategories, tools } from '@/lib/content'

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="font-mono text-xs tabular-nums text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl scroll-mt-24 px-2 py-24 sm:px-3">
      <Reveal>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools, studies & systems expertise"
          description="A blend of power system analysis, renewable integration, protection, and automation."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal
            key={cat.category}
            delay={i * 70}
            className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <h3 className="font-heading text-base font-semibold">{cat.category}</h3>
            <div className="mt-5 space-y-4">
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Software tools */}
      <Reveal delay={120} className="mt-8">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Industry Software
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
