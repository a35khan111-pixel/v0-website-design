import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { FounderSection } from "@/components/founder-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ConsultationSection } from "@/components/consultation-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { StickyCTA } from "@/components/sticky-cta"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Reading Resolved",
  description:
    "Specialist dyslexia tutoring using the Orton-Gillingham Approach and Structured Word Inquiry. Serving Mississauga, Oakville, Brampton and across Ontario online and in person.",
  url: "https://www.readingresolved.com",
  telephone: "+16476325801",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["Mississauga", "Oakville", "Brampton", "Milton", "Ontario"],
  serviceType: [
    "Dyslexia Tutoring",
    "Orton-Gillingham Instruction",
    "Structured Literacy",
    "Reading Intervention",
  ],
  priceRange: "$$",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
