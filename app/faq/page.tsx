import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FaqAccordion } from "@/components/faq-accordion"
import { faqs } from "@/lib/faq-data"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Reading Resolved",
  description:
    "Answers to common questions about Reading Resolved's dyslexia tutoring, Orton-Gillingham instruction, sessions, progress tracking, pricing, and how we work with families.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="bg-foreground py-14 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Answers for Parents
              </p>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="font-serif text-4xl text-background text-balance md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
              {"Everything you\u2019re wondering about how we work, what to expect, and how we help your child resolve the struggle."}
            </p>
          </div>
        </section>

        {/* Accordion */}
        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <h2 className="font-serif text-3xl text-foreground text-balance md:text-4xl">
              Still have questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {"Book a free consultation and we\u2019ll answer everything specific to your child."}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-xl px-8 text-base shadow-lg shadow-primary/20">
                <a
                  href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book My Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-xl px-8 text-base border-primary text-primary hover:bg-primary/5">
                <Link href="/contact">Send Us a Message</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
