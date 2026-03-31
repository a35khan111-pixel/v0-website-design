import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Heart } from "lucide-react"

interface ProgramDetailProps {
  id: string
  label: string
  title: string
  subtitle: string
  intro: string[]
  highlightText?: string
  whatChildReceives: string[]
  parentWin: {
    title: string
    text: string
  }
  image: string
  imageAlt: string
  reversed?: boolean
  bgClass?: string
}

export function ProgramDetail({
  id,
  label,
  title,
  subtitle,
  intro,
  highlightText,
  whatChildReceives,
  parentWin,
  image,
  imageAlt,
  reversed = false,
  bgClass = "",
}: ProgramDetailProps) {
  return (
    <section id={id} className={`py-14 lg:py-20 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-8 text-center lg:mb-10">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-primary/40" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {label}
            </p>
            <div className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            <span className="text-balance">{title}</span>
          </h2>
          <p className="mt-2 font-serif text-xl italic text-primary">
            {subtitle}
          </p>
        </div>

        {/* Content Grid - 50/50 split */}
        <div
          className={`flex flex-col gap-8 lg:flex-row lg:gap-12 ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image - 50% width on desktop, full width on mobile */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl shadow-lg lg:min-h-full">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content - 50% width on desktop */}
          <div className="w-full lg:w-1/2">
            {/* Intro paragraphs */}
            <div className="flex flex-col gap-4">
              {intro.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlight callout */}
            {highlightText && (
              <div className="my-8 rounded-xl border-l-4 border-primary bg-accent/50 px-6 py-5">
                <p className="text-base font-medium leading-relaxed text-accent-foreground">
                  {highlightText}
                </p>
              </div>
            )}

            {/* What Your Child Receives */}
            <div className="mt-8">
              <h3 className="font-serif text-xl text-foreground">
                What Your Child Receives
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {whatChildReceives.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Parent Win */}
            <div className="mt-10 rounded-xl bg-primary/5 p-6 ring-1 ring-primary/10">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                <h4 className="font-serif text-lg text-foreground">
                  {parentWin.title}
                </h4>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {parentWin.text}
              </p>
            </div>

            {/* CTA - Dual Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
                  Book My Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/5">
                <Link href="/contact">Send Us a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
