import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Decorative */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-primary/40" />
          <div className="h-2 w-2 rotate-45 bg-primary" />
          <div className="h-px w-16 bg-primary/40" />
        </div>

        <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">
            Ready to transform frustration into confidence?
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg italic leading-relaxed text-muted-foreground">
          {"Let\u2019s start your child\u2019s journey with a specialist who understands exactly what they need."}
        </p>

        <div className="mt-10">
          <Button size="lg" asChild className="text-base shadow-lg shadow-primary/20">
            <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
              Book Your Free Specialist Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="tel:6476325801"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Phone className="h-3.5 w-3.5 text-primary" />
            </span>
            Call/Text: (647) 632-5801
          </a>
          <a
            href="mailto:readingresolved@gmail.com"
            className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Mail className="h-3.5 w-3.5 text-primary" />
            </span>
            readingresolved@gmail.com
          </a>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-foreground px-8 py-10 text-background md:px-12">
          <h3 className="font-serif text-2xl text-background md:text-3xl">
            <span className="text-balance">
              25 Years. Hundreds of Families. One Mission.
            </span>
          </h3>
          <p className="mt-4 text-base leading-relaxed text-background/70 md:text-lg">
            Turn every struggling reader into a confident learner who steps into
            their power.
          </p>
        </div>
      </div>
    </section>
  )
}
