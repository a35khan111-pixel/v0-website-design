import { Button } from "@/components/ui/button"

export function StorySection() {
  return (
    <section id="story" className="py-14 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          {/* Section tag */}
          <div className="mb-12 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Story
            </span>
            <div className="h-px w-12 bg-primary/40" />
          </div>

          <h2 className="font-serif text-3xl text-center text-balance md:text-4xl lg:text-5xl">
            25 Years of Seeing Brilliance
            <br />
            <span className="text-primary">Where Others Saw Only Struggle</span>
          </h2>

          <div className="mt-16 flex flex-col gap-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {"It began in a Montessori classroom, with children who wouldn\u2019t approach the language section. Young kids who would gravitate toward every other material in the room but carefully avoid the one area where words lived. I could feel it \u2014 something kept them away. Not defiance. Not disinterest. Something deeper."}
            </p>

            {/* Pull quote */}
            <div className="my-4 rounded-xl border-l-4 border-primary bg-accent/50 px-6 py-5">
              <p className="font-serif text-xl text-foreground md:text-2xl">
                {"Fear. Shame. The quiet belief that \"I can\u2019t do this.\""}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {"Even with beautiful hands-on materials, some children still couldn\u2019t break through. It wasn\u2019t just about reading, writing, or spelling. It was about the heavy emotions wrapped around those tasks. That hurt turns into frustration. Frustration turns into avoidance. And before long, a bright, curious child begins to believe something that simply isn\u2019t true: \"I\u2019m not smart.\""}
            </p>

            <p className="text-center font-serif text-xl text-foreground md:text-2xl">
              I refused to let that be the end of their story.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {"I went looking for answers. What I found changed everything \u2014 when you combine the right methods with a deep understanding of how children actually learn, reading begins to make sense. Students who avoided books start picking them up. Children who believed they were \"bad at school\" start asking for harder challenges."}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {"So I founded Reading Resolved \u2014 not just to teach reading, but to support the whole child. The skill. The emotion. The confidence. And as our students grew, so did our support \u2014 from dyslexia intervention to academic tutoring to life coaching. Because children need more than academic help. They need someone who stays."}
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="text-base shadow-lg shadow-primary/20">
              <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">Book My Free Consultation</a>
            </Button>
          </div>

          {/* Our Belief Section */}
          <div className="mt-20 text-center">
            <h3 className="font-serif text-2xl text-foreground md:text-3xl mb-6">
              Our Belief
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {"Every child has brilliance within them. Sometimes it simply takes the right guidance, the right approach, and the right belief to bring it forward."}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {"And when one child discovers their brilliance, something powerful happens. Their confidence grows. Their curiosity returns. And their entire relationship with learning changes."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
