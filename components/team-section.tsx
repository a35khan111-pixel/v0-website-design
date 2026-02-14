import Image from "next/image"
import { Award } from "lucide-react"

const founder = {
  name: "Sakina Khan",
  title: "Founder",
  credentials: [
    "Orton-Gillingham Certified",
    "Structured Word Inquiry Coach",
    "NLP Life Coach",
  ],
  image: "/images/sakina-portrait.jpg",
  bio: 'With over 25 years of transformative educational experience, Sakina Khan founded Reading Resolved from a profound belief that every student deserves to discover their innate abilities. Her holistic approach addresses both academic challenges and the emotional journey of learning, creating breakthroughs where traditional methods have fallen short. She still lights up when a student who once avoided reading asks, "Can we read longer today?"',
}

const teamMembers = [
  {
    name: "Shireen Saamir",
    initials: "SS",
    title: "Director of Structured Learning",
    credentials: [
      "Orton-Gillingham Certified",
      "ABNLP Master Practitioner",
      "20+ Years Experience",
    ],
    bio: "Shireen Saamir brings over 20 years of specialized education experience and deep personal understanding. Certified in Orton-Gillingham, Structured Math, Structured Word Inquiry, and as an ABNLP/TLTA Master Practitioner, Shireen creates personalized pathways that transform struggle into success.",
  },
  {
    name: "Samira Raza-Qureshi",
    initials: "SR",
    title: "Head of Educational Consulting",
    credentials: [
      "Curriculum Leader",
      "IEP Advocate",
      "20+ Years in Education",
    ],
    bio: "Drawing on more than two decades as a curriculum leader within the Peel District School Board, Samira knows exactly how schools work and how to make them work for your child. She specializes in academic coaching, IEP advocacy, strategic curriculum planning, and university admissions guidance.",
  },
  {
    name: "Tracey Bower",
    initials: "TB",
    title: "Lead Structured Literacy Specialist",
    credentials: [
      "M.Ed in Literacy",
      "OG-Certified",
      "31 Years Experience",
    ],
    bio: "With 31 years of classroom experience and specialized credentials including M.Ed in Literacy, OG-Certification, LETRS, EBLI, and Structured Word Inquiry, Tracey brings unmatched depth to dyslexia intervention. She has transformed countless struggling students into confident, thriving readers.",
  },
  {
    name: "Vangjelika",
    initials: "V",
    title: "Academic Coach",
    credentials: [
      "Ontario Certified Teacher",
      "Executive Functioning",
      "10+ Years Experience",
    ],
    bio: "As an Ontario Certified Teacher with over a decade of classroom experience, Vangjelika specializes in helping students develop executive functioning, strategic goal-setting, and the confidence to tackle challenging work. She creates an environment where academic risks feel safe and curiosity thrives.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-primary/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-5xl text-balance">
            Meet the Team Behind{" "}
            <span className="text-primary">Every Breakthrough</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A collective 100+ years of experience dedicated to one mission:
            helping your child discover their brilliance.
          </p>
        </div>

        {/* Founder - featured large card with image */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-border bg-card ring-2 ring-primary/20 transition-shadow hover:shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-auto min-h-[400px] overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Award className="h-3 w-3" />
                Founder
              </span>
              <h3 className="font-serif text-2xl text-card-foreground md:text-3xl">
                {founder.name}
              </h3>
              <p className="mt-1 text-lg font-medium text-primary">
                {founder.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {founder.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {cred}
                  </span>
                ))}
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                {founder.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Team members - text-based cards in a 2-column grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:border-primary/20"
            >
              <div className="flex items-start gap-5">
                {/* Monogram circle */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {member.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl text-card-foreground md:text-2xl">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-medium text-primary">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="mt-5 flex flex-wrap gap-2">
                {member.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-5 h-px w-full bg-border" />

              <p className="leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
