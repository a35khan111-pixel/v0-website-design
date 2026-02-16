import { Button } from "@/components/ui/button"
import Link from "next/link"

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
              It began in a Montessori classroom -- with children who{" "}
              {"wouldn't"} approach the language section.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Young kids who would gravitate toward every other material in the
              room but carefully avoid the one area where words lived. I could
              feel it -- something kept them away. Not defiance. Not disinterest.
              Something deeper.
            </p>

            {/* Pull quote */}
            <div className="my-4 rounded-xl border-l-4 border-primary bg-accent/50 px-6 py-5">
              <p className="font-serif text-xl text-foreground md:text-2xl">
                Fear. Shame. The quiet belief that{" "}
                {'"I can\'t do this."'}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Even with {"Montessori's"} beautiful kinesthetic materials, some
              children still {"couldn't"} break through. And I realized: it{" "}
              {"wasn't"} just about the reading, writing, or spelling. It was
              about the heavy emotions wrapped around those tasks.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When {"you're"} not good at something -- especially something
              everyone else seems to do easily -- it hurts. That hurt turns into
              frustration. That frustration turns into avoidance. And before you
              know it, a bright, curious child has decided {"they're"}{" "}
              {'"not good at reading"'} or worse, {'"not smart."'}
            </p>

            <p className="text-center font-serif text-xl text-foreground md:text-2xl">
              I refused to let that be the end of their story.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              So I trained in Orton-Gillingham and Structured Word Inquiry -- and
              kept learning, kept refining, kept asking:{" "}
              <em className="text-foreground">
                What does this child actually need?
              </em>
            </p>

            <p className="text-muted-foreground leading-relaxed">
              And what I discovered changed everything:
            </p>

            <div className="my-4 rounded-2xl bg-primary px-8 py-8 text-primary-foreground md:px-10">
              <p className="text-lg font-medium leading-relaxed text-balance">
                When you combine proven methods like Orton-Gillingham with
                approaches that teach how English actually works -- and remove the
                emotional barriers -- reading transforms.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Suddenly, students who avoided reading for years are picking up
              books. Children who believed they were {'"bad at school"'} start
              asking for harder challenges. Parents who felt helpless watch their{" "}
              {"child's"} entire relationship with learning shift.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {"That's"} when I founded Reading Resolved -- not just to teach
              reading and spelling, but to address the whole child. The skill.
              The emotion. The self-belief.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              As our students grew, so did their needs. They needed help
              navigating school systems that {"didn't"} understand them. They
              needed study strategies designed for how they actually learn. They
              needed someone to equip them with the tools to build confidence,
              resilience, and unshakeable self-belief.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              So we expanded our support -- from dyslexia intervention to academic
              tutoring to life coaching -- because children need more than reading
              help. They need a partner who stays.
            </p>

            <p className="text-center font-serif text-xl text-primary md:text-2xl">
              Because when one child discovers their brilliance, entire families
              transform.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" className="text-base shadow-lg shadow-primary/20">
              <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">Book My Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
