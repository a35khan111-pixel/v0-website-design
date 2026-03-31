"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "The moment that brought me to tears: my daughter wrote her own birthday party agenda and for the first time, I could actually read it. Ten months later, she is reading with 95% accuracy.",
    author: "Susan W.",
  },
  {
    quote:
      "With your guidance and support, my son's dream of going to university for engineering has become a reality. He will be beginning Water Resource Engineering at the University of Guelph this fall.",
    author: "Julia P.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const next = () => {
    setDirection("right")
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection("left")
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const testimonial = testimonials[current]

  return (
    <section className="bg-background py-10 lg:py-14">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Success Stories
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Real Families. Real Results. Real Future.
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
          <Quote className="absolute right-8 top-8 h-20 w-20 text-primary/5 md:right-12 md:top-10" />

          <div
            key={current}
            className="animate-fade-in"
          >
            {/* 5-Star Rating - Gold */}
            <div className="mb-6 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="border-l-2 border-primary/40 pl-5">
              <p className="text-lg italic leading-relaxed text-foreground/90 md:text-xl">
                {"\u201C"}{testimonial.quote}{"\u201D"}
              </p>
            </blockquote>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-serif text-lg italic text-foreground">
                {testimonial.author}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? "right" : "left")
                    setCurrent(i)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
                className="h-10 w-10 rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
                className="h-10 w-10 rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="mt-5 text-center">
          <Button variant="outline" size="lg" asChild className="text-base">
            <Link href="/success-stories">
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
