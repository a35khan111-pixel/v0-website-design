import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Check } from "lucide-react"

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
              25+ years of specialized 1-on-1 dyslexia instruction, turning reading struggles into success stories.
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

      {/* New Intro Section - directly after hero */}
      <div className="bg-card py-8 lg:py-12">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Deep down, you know your child is capable of so much more. Much more confidence, much higher grades and much more happiness.
            </p>
            <p>
              {"But somewhere along the way, they stopped believing they could. You watched it happen \u2014 slowly, quietly. One failed attempt at a time. Now, homework and reading have become an arena of anxiety and frustration."}
            </p>
            <p>
              {"You\u2019ve tried everything \u2014 extra help, more encouragement, and even traditional tutoring. But nothing has worked well enough. Yet."}
            </p>
            <p>
              {"You are not alone. Thousands of parents have stood in this exact spot: exhausted, frustrated, and afraid of what comes next. But that story doesn\u2019t have to end here."}
            </p>
          </div>

          {/* Bullet Section */}
          <div className="mt-6">
            <h3 className="mb-4 font-serif text-lg text-foreground md:text-xl">
              You might be seeing things like:
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "Avoids reading or refuses to pick up a book",
                "Is bright but struggling to keep up",
                "Guesses words instead of reading them",
                "Has great ideas but can't get them on paper",
                "Is starting to say \"I can't do this\"",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing */}
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p className="font-medium text-foreground">
              {"If this feels familiar \u2014 you are in the right place."}
            </p>
            <p>
              {"For over 25 years, we\u2019ve helped children go from shutting down to reading with confidence most parents thought they\u2019d lost. We invite you to take the first step \u2014 explore our programs below or book a free consultation. Let\u2019s begin rewriting the story."}
            </p>
          </div>
        </div>
      </div>

      {/* Teal Banner */}
      <div className="bg-primary py-8 lg:py-10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-xl text-primary-foreground md:text-2xl lg:text-3xl">
            A Partnership Built for Every Milestone
          </p>
        </div>
      </div>
    </section>
  )
}
