'use client'

import { ArrowUp, Code2, Link2, Mail, Zap } from 'lucide-react'
import { navLinks, profile } from '@/lib/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-2 py-12 sm:px-3">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2 font-heading font-bold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm tracking-tight">
                Husnain Ghaffar<span className="text-primary">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Electrical Engineer specializing in power systems, renewable energy, and grid
              modernization.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Link2 className="size-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Code2 className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="hidden font-mono text-xs sm:block">Built for power · designed for clarity</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp className="size-3.5" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
