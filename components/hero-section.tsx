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
              <span>Online &amp; In-Person</span>
            </div>

            <h1 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-balance">
                {"Your Child CAN Read."}
              </span>
              <br />
              <span className="text-primary">
                {"They Just Learn Differently."}
              </span>
            </h1>

            {/* Third line - directly under headline */}
            <p className="-mt-1 text-lg font-medium text-foreground/70 sm:text-xl">
              {"We don\u2019t just teach \u2014 We Resolve."}
            </p>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Experts in empowering students who learn differently, delivering proven results for over 25 years.
            </p>

            {/* Star Rating - below the subhead */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">5.0</span>
              <span className="text-sm text-muted-foreground">· 22 Google Reviews</span>
            </div>

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

            {/* Stats Bar - reduced spacing with mt-1 */}
            <div className="mt-1 flex items-center justify-between rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border sm:justify-start sm:gap-8 sm:p-6">
              <div className="flex flex-col items-center">
                <span className="font-serif text-xl text-primary sm:text-2xl">25+ Years</span>
                <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">
                  Experience
                </span>
              </div>
              <div className="h-10 w-px bg-border sm:h-12" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-xl text-primary sm:text-2xl">773</span>
                <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">
                  Families Transformed
                </span>
              </div>
              <div className="h-10 w-px bg-border sm:h-12" />
              <div className="flex flex-col items-center">
                <span className="font-serif text-xl text-primary sm:text-2xl">Certified</span>
                <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">
                  Teachers
                </span>
              </div>
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

      {/* Intro Section - directly after hero */}
      <div className="bg-card py-10 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:max-w-none lg:px-16 xl:px-24">
          {/* Location + service statement for local & AI search */}
          <p className="mb-6 text-sm font-medium uppercase tracking-wide text-primary md:text-base">
            {"Serving families in Mississauga, Oakville, Brampton, and across Ontario \u2014 online and in person."}
          </p>

          <h2 className="mb-6 font-serif text-2xl leading-tight text-foreground md:text-3xl lg:text-4xl">
            {"Behind Every Struggling Reader is a Bright Child Waiting to Soar. We Don\u2019t Just Teach Reading \u2014 We Resolve the Struggle"}
          </h2>

          <div className="flex flex-col gap-4 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {"Your child is bright. You know it. But somewhere between the page and their brain, something got lost \u2014 and it\u2019s costing them their confidence, their joy, and their belief in themselves. But this story does not end here."}
            </p>
            <p>
              {"Imagine them picking up books willingly. Reading with accuracy. Spelling without dread. Walking into school with confidence, joy, and higher self-esteem. This is not a fantasy. This is what we make possible at Reading Resolved."}
            </p>
            <p>
              {"We are "}
              <strong className="text-foreground">Orton-Gillingham reading specialists</strong>
              {". Not a general tutoring centre. Not a one-size-fits-all approach. We specialize in students who learn differently \u2014 resolving everything that holds them back and helping them not just overcome dyslexia, but thrive far beyond it."}
            </p>
            <p>
              {"In 25 years, we have supported thousands of students and have not witnessed a single one who hasn\u2019t made significant gains within 1 to 2 years \u2014 including families who felt they had already tried everything else."}
            </p>
            <p>
              {"Our experts use structured, evidence-based approaches to help students understand how language actually works \u2014 building deep, permanent strength in decoding, spelling, and comprehension."}
            </p>
            <p>
              {"And when reading clicks \u2014 and it will \u2014 we don\u2019t stop there. A reading struggle is rarely just about reading. Long before the breakthrough, it chips away at a child\u2019s deep-rooted confidence, joy, and self-belief. That is why from day one, we address the whole child \u2014 not just the page. Through specialized academic and life coaching, we help them rebuild their self-esteem, master core life skills, and become the ideal versions of themselves."}
            </p>
            <p>
              <strong className="text-foreground">{"Your child CAN read"}</strong>
              {". They just needed the right instruction."}
            </p>
            <p className="font-medium text-foreground">
              {"The struggle ends here. The new story begins today."}
            </p>
          </div>

          {/* Transition into Programs */}
          <div className="mt-8">
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              {"Your child\u2019s turning point starts here. Discover the programs we\u2019ve designed to help your child master reading and own their future."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
