'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Code2, ExternalLink, FileText } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { projectCategories, projects } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative scroll-mt-24 px-2 py-24 sm:px-3">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected engineering work"
            description="Power system studies, control systems, and electronics — with room to grow as new work is added."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm transition-colors',
                  active === cat
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-secondary/40 text-muted-foreground hover:text-foreground',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal
              as="article"
              key={project.slug}
              delay={i * 60}
              className="group glass flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 font-mono text-xs text-primary backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-base font-semibold leading-snug text-balance">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Technologies
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Key Results
                  </p>
                  <ul className="mt-2 space-y-1">
                    {project.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center gap-3 pt-5">
                  <a
                    href={project.githubUrl ?? '#'}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Code2 className="size-4" aria-hidden="true" />
                    Code
                  </a>
                  <a
                    href={project.reportUrl ?? '#'}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <FileText className="size-4" aria-hidden="true" />
                    Report
                  </a>
                  <ExternalLink className="ml-auto size-4 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
