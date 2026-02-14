import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by hundreds of families
              </span>
            </div>
            <h1 className="font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                {"Your Child Isn\u2019t Broken"}
              </span>
              <br />
              <span className="text-primary">
                {"They Just Learn Differently"}
              </span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              Specialized 1-on-1 dyslexia tutoring that finally makes reading
              click. Built on 25+ years of proven, research-based methods.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" asChild className="text-base shadow-lg shadow-primary/20">
                <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </div>

            {/* Mini Testimonial */}
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-card px-5 py-4 ring-1 ring-border">
              <span className="mt-0.5 text-2xl leading-none text-primary/60">{"\u201C"}</span>
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                Within 3 months, my daughter went from crying over homework to reading on her own.
                <span className="mt-1 block text-xs font-medium not-italic text-foreground/70">
                  -- Parent of a Grade 3 student
                </span>
              </p>
            </div>

            {/* Stats Bar */}
            <div className="mt-4 flex items-center gap-8 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl text-primary">25+</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Years
                </span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl text-primary">100s</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Families
                </span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-3xl text-primary">1:1</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sessions
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-child.jpg"
                alt="Happy child engaged in reading"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 animate-fade-in animation-delay-600 rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-lg">
              <p className="text-sm font-semibold">Orton-Gillingham Trained</p>
              <p className="text-xs opacity-80">Research-Based Methods</p>
            </div>
            {/* Decorative dot pattern */}
            <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-2xl bg-primary/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
