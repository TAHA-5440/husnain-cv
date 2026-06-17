import { Briefcase, GraduationCap } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { experiences } from '@/lib/content'

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-2 py-24 sm:px-3"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="A track record across utility & industry"
          description="From transformer manufacturing to utility-scale design and distribution studies."
        />
      </Reveal>

      <div className="relative mt-12 pl-8 sm:pl-10">
        {/* Vertical line */}
        <div
          className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[13px]"
          aria-hidden="true"
        />

        <ol className="space-y-8">
          {experiences.map((exp, i) => {
            const Icon = exp.type === 'Internship' ? GraduationCap : Briefcase
            return (
              <Reveal
                as="li"
                key={exp.company}
                delay={i * 80}
                className="relative"
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-8 top-5 z-10 flex size-6 -translate-x-[1px] items-center justify-center rounded-full border-2 border-primary bg-background sm:-left-10"
                  aria-hidden="true"
                >
                  <Icon className="size-3 text-primary" />
                </span>

                <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">
                      <Icon className="size-3.5 text-primary" aria-hidden="true" />
                      {exp.type}
                    </span>
                    <span className="font-mono text-xs text-primary">{exp.period}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
