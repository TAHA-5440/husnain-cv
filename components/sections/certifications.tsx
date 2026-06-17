import { Award, Medal, Trophy, Users } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { achievements, certifications } from '@/lib/content'

const achievementIcons = [Trophy, Medal, Users]

export function CertificationsAchievements() {
  return (
    <section className="relative mx-auto max-w-7xl scroll-mt-24 px-2 py-24 sm:px-3">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionHeading eyebrow="Certifications" title="Credentials & training" />
          </Reveal>
          <div className="mt-8 space-y-4">
            {certifications.map((cert, i) => (
              <Reveal
                key={cert.title}
                delay={i * 70}
                className="glass flex items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium leading-snug">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <SectionHeading eyebrow="Achievements" title="Recognition & leadership" />
          </Reveal>
          <div className="mt-8 space-y-4">
            {achievements.map((item, i) => {
              const Icon = achievementIcons[i % achievementIcons.length]
              return (
                <Reveal
                  key={item.title}
                  delay={i * 70}
                  className="glass flex items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-medium leading-snug">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
