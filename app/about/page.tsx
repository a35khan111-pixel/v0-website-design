import { AboutHero } from '@/components/about-hero'
import { StorySection } from '@/components/story-section'
import { TeamSection } from '@/components/team-section'
import { CTASection } from '@/components/cta-section'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <StorySection />
      <TeamSection />
      <CTASection />
    </main>
  )
}
