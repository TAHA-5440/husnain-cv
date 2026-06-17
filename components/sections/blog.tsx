import { ArrowRight, PenLine } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { blogPosts } from '@/lib/content'

export function Blog() {
  return (
    <section id="blog" className="relative mx-auto max-w-7xl scroll-mt-24 px-2 py-24 sm:px-3">
      <div className="glass rounded-3xl px-8 py-12 md:px-12">
        <Reveal>
          <div className="flex items-center gap-3 text-primary">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15">
              <PenLine className="size-5" aria-hidden="true" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em]">Blog</span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Technical writing — coming soon
          </h2>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            I&apos;m working on in-depth articles covering power system studies, renewable energy
            integration, and grid modernization. Check back soon.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-3">
            {blogPosts.map((post) => (
              <span
                key={post.title}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground"
              >
                <span className="size-1.5 rounded-full bg-primary/60" />
                {post.category}
              </span>
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            Follow on LinkedIn for updates
            <ArrowRight className="size-4 text-primary" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/husnainghaffar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              linkedin.com/in/husnainghaffar
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
