import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { FounderSection } from "@/components/founder-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ConsultationSection } from "@/components/consultation-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { StickyCTA } from "@/components/sticky-cta"

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProgramsSection />
        <FounderSection />
        <TestimonialsSection />
        <ConsultationSection />
        <PricingSection />
        <CTASection />
      </main>
      <StickyCTA />
    </>
  )
}
