import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProgramsHero() {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/programs-hero.jpg"
          alt="Children learning together in a bright classroom"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/50 to-foreground/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-8 lg:px-16">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Programs
            </p>
          </div>
          <h1 className="font-serif text-4xl text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Specialized Programs That Build{" "}
              <span className="text-primary">Readers</span>,{" "}
              <span className="text-primary">Learners</span>, and{" "}
              <span className="text-primary">Leaders</span>.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            We believe dyslexia support should go beyond reading. Our structured,
            proven methods are designed for how dyslexic brains learn.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 shadow-lg shadow-primary/20"
          >
            <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
              Book My Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
