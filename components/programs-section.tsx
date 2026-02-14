import Image from "next/image"
import Link from "next/link"
import { BookOpen, GraduationCap, Heart, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Specialized Dyslexia Support",
    subtitle: "1-on-1 Tailored Sessions",
    description:
      "Reading might feel impossible right now, but it won\u2019t forever. As Orton-Gillingham trained practitioners, we teach the way your child\u2019s brain learns best.",
    highlight:
      "This is where frustration transforms into confidence.",
    image: "/images/tutor-session.jpg",
    imageAlt: "Tutor working one-on-one with a student",
    href: "/programs#dyslexia",
  },
  {
    icon: GraduationCap,
    title: "Academic Tutoring",
    subtitle: "Grades 3\u201312",
    description:
      "Once reading clicks, new challenges may emerge. We help your child not just keep up, but excel with strategies for classroom independence.",
    highlight:
      "No more nightly homework battles\u2014just real confidence.",
    image: "/images/student-success.jpg",
    imageAlt: "Student celebrating academic success",
    href: "/programs#academic",
  },
  {
    icon: Heart,
    title: "Life Coaching",
    subtitle: "Pre-Teens & Teens",
    description:
      "We help students develop emotional intelligence, navigate peer pressure, and build self-advocacy skills to shape their own future.",
    highlight:
      "A safe space where they discover their own power.",
    image: "/images/life-coaching.jpg",
    imageAlt: "Coach having an encouraging conversation with a teenager",
    href: "/programs#coaching",
  },
]

export function ProgramsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Programs
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            <span className="text-balance">
              {"Your Child\u2019s Journey\u2014From Struggling Reader to Confident Learner"}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Most tutors stop when reading clicks. We don\u2019t. From dyslexia intervention to academic tutoring to life coaching\u2014we support your child at every stage."}
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
                <p className="text-sm font-medium italic text-foreground">
                  {program.highlight}
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
