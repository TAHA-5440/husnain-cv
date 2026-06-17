'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { galleryImages } from '@/lib/content'

export function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative mx-auto max-w-7xl scroll-mt-24 px-2 py-24 sm:px-3">
      <Reveal>
        <SectionHeading
          eyebrow="Photography"
          title="Through the engineer's lens"
          description="Capturing the infrastructure and landscapes of energy — from solar farms to substations."
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {galleryImages.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(img.src)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={600}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/30" />
            </button>
          ))}
        </div>
      </Reveal>

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photo"
        >
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-3xl">
            <Image
              src={active}
              alt="Expanded gallery image"
              width={1200}
              height={900}
              className="h-auto max-h-[85vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  )
}
