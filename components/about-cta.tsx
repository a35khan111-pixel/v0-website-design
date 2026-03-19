import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="bg-card py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Mission Line */}
        <p className="mb-10 text-lg text-muted-foreground md:text-xl italic">
          {"Let\u2019s stop focusing on where a child is struggling and start building where they are going."}
        </p>

        {/* Decorative */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-primary/40" />
          <div className="h-2 w-2 rotate-45 bg-primary" />
          <div className="h-px w-16 bg-primary/40" />
        </div>

        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          The right support can change everything.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {"With the right instruction and encouragement, struggling readers become confident learners who believe in themselves again. And it all begins with one conversation."}
        </p>

        <div className="mt-10">
          <Button size="lg" asChild className="text-base shadow-lg shadow-primary/20">
            <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
              Book My Free Consultation
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
            (647) 632-5801
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
      </div>
    </section>
  )
}
