'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { navLinks, profile } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id], div[id="home"]')
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-3">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300',
            scrolled ? 'glass shadow-lg shadow-black/20' : 'border border-transparent',
          )}
        >
          <a href="#home" className="flex items-center gap-2 font-heading font-bold">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm tracking-tight">
              Husnain<span className="text-primary">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      'rounded-full px-3 py-2 text-sm transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:block">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open ? (
          <div className="glass mt-2 rounded-2xl p-2 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-xl px-4 py-3 text-sm transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href={profile.resumeUrl}
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  )
}
