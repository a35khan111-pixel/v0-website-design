import { BookOpen, GraduationCap, Heart } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Dyslexia Support",
    subtitle: "Tailored 1-on-1 Sessions",
    description:
      "From avoiding books to reading with ease. Specialized Orton-Gillingham based intervention.",
    anchor: "#dyslexia",
  },
  {
    icon: GraduationCap,
    title: "Academic Tutoring",
    subtitle: "Grades 3-12",
    description:
      "Academic support and strategic guidance from core subjects to university admissions.",
    anchor: "#academic",
  },
  {
    icon: Heart,
    title: "Life Coaching",
    subtitle: "Pre-Teens & Teens",
    description:
      "Building confidence, emotional intelligence, and self-advocacy skills.",
    anchor: "#coaching",
  },
]

export function ProgramsOverview() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            <span className="text-balance">
              We believe dyslexia support should go beyond reading.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            At Reading Resolved, we provide structured, proven methods designed
            for how dyslexic brains learn -- supporting your child from their first
            reading breakthrough through academic independence and beyond.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Shaped by over 25 years of experience, our programs help children
            move from avoiding books to reading with confidence and self-belief.
          </p>
        </div>

        {/* Three program quick links */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <a
              key={program.title}
              href={program.anchor}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <program.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {program.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-card-foreground">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">{"\u2192"}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
