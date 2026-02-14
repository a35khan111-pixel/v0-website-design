"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    title: "We Finally Saw Reading Click.",
    quote:
      "After trying multiple tutors without improvement, we found Sakina. Within 4 months, my dyslexic daughter went from resisting reading to voluntarily picking up books.",
    body: "The moment that brought me to tears: Two months after starting, my daughter wrote her own birthday party agenda\u2014and for the first time, I could actually read what she\u2019d written. Then she picked up a birthday card and read it perfectly. My husband and I were in awe. Ten months later: She\u2019s reading book descriptions with 95% accuracy. Before Sakina, she would have maybe read 20% of that, if at all.",
    closing:
      "Sakina is warm, welcoming, and makes my daughter feel comfortable to move at her own pace. Anyone would be lucky to have her as their tutor.",
    author: "Susan W.",
  },
  {
    title: "From Avoiding Books to Finishing Her First Chapter Book.",
    quote:
      "When our 8-year-old\u2019s younger brother (two grades below her) started approaching the same reading level, we knew she needed specialized help.",
    body: "She could only read very simple books meant for younger children. She couldn\u2019t remember how to read simple words even after seeing them multiple times. Fast forward one year (2 hours per week with Sakina): Our daughter just finished reading her first chapter book\u2014over 100 pages\u2014voluntarily!",
    closing:
      "When I asked my daughter what makes Mrs. Sakina different from other teachers, she said: \u201CMrs. Sakina makes it fun, she tells jokes, and helps me a lot.\u201D",
    author: "Judith Versloot, PhD",
  },
  {
    title: "From Avoiding Textbooks to Choosing University",
    quote:
      "Our college-age son avoided reading textbooks. He\u2019d use a \u2018hunt and peck\u2019 method to find answers instead of actually reading.",
    body: "Mild ADHD runs in the family, and heavier reading assignments overwhelmed him. Sakina works incredibly well with young adults and aspiring professionals. She keeps the work fun while staying on task and getting results.",
    closing:
      "The transformation: My son looks forward to working with Sakina. There are fewer complaints about school. And most surprisingly? He recently decided to attend University after earning his Associate\u2019s Degree. I give credit to Sakina for helping him develop this new confidence.",
    author: "Karen, USA",
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
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
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
            className={direction === "right" ? "animate-fade-in" : "animate-fade-in"}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Success Story {current + 1}
              </span>
            </div>

            <h3 className="font-serif text-xl text-card-foreground md:text-2xl">
              {testimonial.title}
            </h3>

            <blockquote className="mt-6 border-l-2 border-primary/40 pl-5">
              <p className="italic leading-relaxed text-primary/90">
                {testimonial.quote}
              </p>
            </blockquote>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              {testimonial.body}
            </p>

            <p className="mt-4 leading-relaxed text-muted-foreground">
              {testimonial.closing}
            </p>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-serif text-lg italic text-foreground">
                {"— "}{testimonial.author}
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
      </div>
    </section>
  )
}
