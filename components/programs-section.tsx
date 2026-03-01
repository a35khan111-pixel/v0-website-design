import Image from "next/image"
import Link from "next/link"
import { BookOpen, GraduationCap, Heart, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Dyslexia Intervention",
    subtitle: "1-on-1 Tailored Sessions",
    description:
      "Reading might feel impossible right now, but it won\u2019t forever. As Orton-Gillingham trained practitioners, we teach the way your child\u2019s brain learns best. We untangle the frustration and build the logic they need to finally make reading click. This is where potential becomes performance.",
    image: "/images/tutor-session.jpg",
    imageAlt: "Tutor working one-on-one with a student",
    href: "/programs#dyslexia",
  },
  {
    icon: GraduationCap,
    title: "Advanced Academic Support for Learning Differences",
    subtitle: "Navigating Grade-Level Expectations",
    description:
      "Once reading clicks, the demands of school increase. We help students navigate complex curriculum by teaching them how to learn. By focusing on the gaps and building executive functioning, we turn school-day stress into classroom independence. This is real confidence for the long haul.",
    image: "/images/student-success.jpg",
    imageAlt: "Student celebrating academic success",
    href: "/programs#academic",
  },
  {
    icon: Heart,
    title: "Life Coaching for Students with Learning Differences",
    subtitle: "For Pre-Teens and Teens",
    description:
      "Success is about more than academics. We provide a safe space for students to develop emotional intelligence, navigate peer pressure, and build the self-advocacy skills they need to shape their own future. This is where they discover their own power.",
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
            Specialized Programs
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            <span className="text-balance">
              A Partnership Built for Every Milestone
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            We provide a continuous path from that first breakthrough to academic independence and beyond. We stay by your side to ensure the progress your child makes today becomes the foundation for their entire future.
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
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
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
