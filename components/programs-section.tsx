import Image from "next/image"
import Link from "next/link"
import { BookOpen, GraduationCap, Heart, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Dyslexia Intervention",
    subtitle: "1-on-1 Tailored Sessions",
    description:
      "Your child hasn't been failing. The approach has.\n\nUsing Orton-Gillingham and structured literacy, we teach exactly how the dyslexic brain learns \u2014 building the logic, confidence and skills that finally make reading click.\n\nAnd when reading clicks, everything changes.\n\nSchool becomes easier. Confidence returns. And your child begins to see themselves differently.",
    image: "/images/tutor-session.jpg",
    imageAlt: "Tutor working one-on-one with a student",
    href: "/programs#dyslexia",
  },
  {
    icon: GraduationCap,
    title: "Academic Support & Independence",
    subtitle: "Grades 3-12",
    description:
      "Reading success is only the beginning.\n\nAs students move through school, the workload increases and expectations rise. Many bright students with learning differences fall behind not because they lack intelligence \u2014 but because they were never taught how to learn.\n\nWe close academic gaps, build executive functioning and teach the strategies that create true independence.\n\nThis is where students stop surviving school \u2014 and start owning it.",
    image: "/images/student-success.jpg",
    imageAlt: "Student celebrating academic success",
    href: "/programs#academic",
  },
  {
    icon: Heart,
    title: "Life Coaching for Students with Learning Differences",
    subtitle: "For Pre-Teens, Teens and Young Adults",
    description:
      "For many students with learning differences, the hardest battle isn't academic. It's internal.\n\nYears of struggle can quietly shape how they see themselves.\n\nThrough 1-on-1 coaching, we help students rebuild confidence, develop emotional resilience and learn how to advocate for themselves in school and in life.\n\nThey learn to handle pressure, trust their voice and move forward with clarity.\n\nBecause the goal isn't just academic success. It's raising a young person who believes in their own potential.",
    image: "/images/life-coaching.jpg",
    imageAlt: "Coach having an encouraging conversation with a teenager",
    href: "/programs#coaching",
  },
]

export function ProgramsSection() {
  return (
    <section className="bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Programs
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            <span className="text-balance">
              A Partnership Built for Every Milestone
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"We provide a continuous path from that first breakthrough to academic independence and beyond. We stay by your side to ensure the progress your child makes today becomes the foundation for their entire future."}
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <program.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-card-foreground">
                      {program.title}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-primary">
                      {program.subtitle}
                    </p>
                  </div>
                </div>
                <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  {program.description}
                </div>
                <div className="mt-auto flex items-center gap-2 pt-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
