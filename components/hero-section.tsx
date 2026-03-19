import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Mobile Hero Image - visible only on small screens */}
      <div className="relative aspect-[16/10] w-full lg:hidden">
        <Image
  src="/images/hero-child.jpg"
  alt="Tutor working one-on-one with a child"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        {/* Mobile floating badge */}
        <div className="absolute bottom-4 left-4 rounded-lg bg-primary px-4 py-2.5 text-primary-foreground shadow-lg">
          <p className="text-xs font-semibold">Orton-Gillingham</p>
          <p className="text-[10px] opacity-80">Dyslexia Specialists</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col gap-5 animate-fade-in">
            {/* Badge Line */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Orton-Gillingham</span>
              <span className="text-primary">·</span>
              <span>Dyslexia Specialists</span>
              <span className="text-primary">·</span>
              <span>Trusted by Hundreds of Families</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-balance">
                {"Your Child Isn\u2019t Broken."}
              </span>
              <br />
              <span className="text-primary">
                {"They Just Learn Differently."}
              </span>
            </h1>

            {/* Star Rating - under headline */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">5.0</span>
              <span className="text-sm text-muted-foreground">· 22 Google Reviews</span>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              25+ years of specialized 1-on-1 dyslexia instruction, turning frustration into confidence.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild className="text-base shadow-lg shadow-primary/20">
                <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
                  Book My Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base border-primary text-primary hover:bg-primary/5">
                <Link href="/contact">Send Us a Message</Link>
              </Button>
            </div>

            {/* Micro Trust Line */}
            <p className="text-sm text-muted-foreground">
              Free consultation · No pressure · Just clarity
            </p>

            {/* Stats Bar */}
            <div className="mt-2 flex items-center justify-between rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border sm:justify-start sm:gap-8 sm:p-6">
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl text-primary sm:text-3xl">25+</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Years Experience
                </span>
              </div>
              <div className="h-10 w-px bg-border sm:h-12" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl text-primary sm:text-3xl">100s</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Families Transformed
                </span>
              </div>
              <div className="h-10 w-px bg-border sm:h-12" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl text-primary sm:text-3xl">1:1</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                  Always
                </span>
              </div>
            </div>

            {/* Mini Testimonial */}
            <div className="mt-2 flex items-start gap-3 rounded-xl bg-card px-5 py-4 ring-1 ring-border">
              <span className="mt-0.5 text-2xl leading-none text-primary/60">{"\u201C"}</span>
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                Within 3 months, my daughter went from crying over homework to reading on her own.
                <span className="mt-1 block text-xs font-medium not-italic text-foreground/70">
                  Raluca M., Parent of Grade 3 Student
                </span>
              </p>
            </div>
          </div>

          {/* Desktop Image - hidden on mobile */}
          <div className="relative hidden animate-fade-in animation-delay-200 lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-child.jpg"
                alt="Tutor working one-on-one with a child"
                fill
                sizes="50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 animate-fade-in animation-delay-600 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-lg">
              <p className="text-sm font-semibold">Orton-Gillingham</p>
              <p className="text-xs opacity-80">Dyslexia Specialists</p>
            </div>
            {/* Decorative dot pattern */}
            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-2xl bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
