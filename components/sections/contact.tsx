'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle2, Download, Link2, Loader2, Mail, Send } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { profile } from '@/lib/content'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 px-2 py-24 sm:px-3">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build reliable power systems"
            description="Open to roles, collaborations, and consulting in power systems and renewable energy."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Email</span>
                <span className="block text-sm font-medium">{profile.email}</span>
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Link2 className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">LinkedIn</span>
                <span className="block text-sm font-medium">Connect with me</span>
              </span>
            </a>
            <a
              href={profile.resumeUrl}
              className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Download className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Resume</span>
                <span className="block text-sm font-medium">Download PDF</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>
                  Do not fill this out: <input name="bot-field" />
                </label>
              </p>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
                  <h3 className="font-heading text-xl font-semibold">Message sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="grid gap-4">
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
                      Something went wrong — please try again or email me directly.
                    </div>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="input-base"
                      />
                    </Field>
                    <Field label="Email" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="input-base"
                      />
                    </Field>
                  </div>
                  <Field label="Subject" htmlFor="subject">
                    <input
                      id="subject"
                      name="subject"
                      placeholder="How can I help?"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="input-base resize-none"
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="size-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
