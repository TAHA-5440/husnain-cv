import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { ExperienceTimeline } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { CertificationsAchievements } from '@/components/sections/certifications'
import { Gallery } from '@/components/sections/gallery'
import { Blog } from '@/components/sections/blog'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <CertificationsAchievements />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
