'use client'

import Image from 'next/image'
import { ArrowDown, Code2, Download, FolderGit2, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/content'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/8 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-2 sm:px-3 md:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal in-view">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </div>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
            Electrical Engineer
            <span className="mt-2 block text-gradient">Power Systems · Renewable Energy</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
            {profile.subheading}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Code2 className="size-4 text-primary" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <span className="size-4 text-primary font-bold text-xs">in</span>
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <FolderGit2 className="size-4" aria-hidden="true" />
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="reveal in-view relative mx-auto w-full max-w-sm" style={{ animationDelay: '150ms' }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-transparent blur-2xl" aria-hidden="true" />
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
            <Image
              src="/HusnainGhaffar.jpeg"
              alt="Portrait of Husnain Ghaffar, Electrical Engineer"
              width={640}
              height={760}
              priority
              className="h-auto w-full rounded-[1.4rem] object-cover"
            />
          </div>

          {/* Floating stat card */}
          <div className="glass absolute -bottom-5 -left-5 hidden rounded-2xl px-4 py-3 sm:block">
            <p className="font-heading text-2xl font-bold text-primary">3+ yrs</p>
            <p className="text-xs text-muted-foreground">Power System Studies</p>
          </div>

          {/* Floating badge */}
          <div className="glass absolute -right-4 top-8 hidden rounded-xl px-3 py-2 sm:block">
            <p className="font-heading text-lg font-bold text-primary">Husnain Ghaffar</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
        Scroll to explore
      </a>
    </section>
  )
}
