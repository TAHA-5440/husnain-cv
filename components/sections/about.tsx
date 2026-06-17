import { Reveal, SectionHeading } from '@/components/reveal'
import { Stats } from '@/components/sections/stats'
import { profile } from '@/lib/content'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-24 px-2 py-24 sm:px-3">
      <Reveal>
        <SectionHeading
          eyebrow="About Me"
          title="Engineering reliable, cleaner power systems"
        />
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5" delay={100}>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-justify leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
            >
              View Technical Skills →
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Work Experience →
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Quick Facts
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start justify-between text-sm">
                <span className="text-muted-foreground">Focus</span>
                <span className="font-medium text-right">Power Systems & Grid Studies</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-start justify-between text-sm">
                <span className="text-muted-foreground">Specialty</span>
                <span className="font-medium text-right">Renewable Integration</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-start justify-between text-sm">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">Lahore, Pakistan</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-start justify-between text-sm">
                <span className="text-muted-foreground">Status</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                  <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <Stats />
      </Reveal>
    </section>
  )
}
