import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Dyslexia Tutoring in Mississauga | Reading Resolved",
  description:
    "Mississauga's specialist dyslexia tutoring service. Certified Orton-Gillingham practitioners serving Mississauga, Oakville, Brampton, Milton and the GTA \u2014 online and in person.",
  alternates: {
    canonical: "/dyslexia-tutoring-mississauga",
  },
  openGraph: {
    title: "Dyslexia Tutoring in Mississauga | Reading Resolved",
    description:
      "Specialist dyslexia tutoring using the Orton-Gillingham Approach and Structured Word Inquiry. Online and in-person sessions across the GTA.",
    type: "website",
  },
}

const offerings = [
  "1-on-1 dyslexia intervention using the Orton-Gillingham Approach",
  "Structured Word Inquiry (SWI) for spelling and comprehension",
  "Structured math support for dyscalculia",
  "Academic coaching (Grades 3-12)",
  "Life coaching for pre-teens and teens",
]

export default function DyslexiaTutoringMississaugaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {"Mississauga \u00b7 Oakville \u00b7 Brampton \u00b7 Online"}
            </p>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h1 className="font-serif text-4xl text-background text-balance md:text-5xl lg:text-6xl">
            {"Dyslexia Tutoring in Mississauga \u2014 Reading Resolved"}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
            {"Reading Resolved is Mississauga\u2019s specialist dyslexia tutoring service, serving families in Mississauga, Oakville, Brampton, Milton, and across the GTA \u2014 online and in person."}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {"We are certified Orton-Gillingham practitioners with over 25 years of experience providing intensive, therapeutic instruction for students with dyslexia and learning differences."}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">
              What we offer
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-base leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {"We serve students from age 5 to adult. Online and in-person sessions available."}
            </p>
            <p className="font-medium text-foreground">
              {"In 25 years, we have not witnessed a single student who has not made significant gains within 1 to 2 years \u2014 including students who had already tried everything else."}
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-muted p-8 text-center">
            <p className="font-serif text-xl text-foreground md:text-2xl">
              Book a free consultation today
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-xl px-8 text-base shadow-lg shadow-primary/20">
                <Link href="/contact">
                  Contact Reading Resolved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-xl px-8 text-base border-primary text-primary hover:bg-primary/5">
                <a
                  href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book My Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
