import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Heart, ArrowRight, Check } from "lucide-react"

const plans = [
  {
    icon: BookOpen,
    name: "Dyslexia Intervention",
    duration: "45-minute sessions",
    price: "$70",
    unit: "per session",
    features: [
      "Personalized learning profile",
      "Phonemic awareness & phonics",
      "Fluency & spelling focus",
      "Online or in-person",
    ],
  },
  {
    icon: GraduationCap,
    name: "Academic Support",
    duration: "45-minute sessions",
    price: "$70",
    unit: "per session",
    features: [
      "All core subjects covered",
      "Study skills & executive functioning",
      "Test prep & essay coaching",
      "University admissions support",
    ],
  },
  {
    icon: Heart,
    name: "Life Coaching",
    duration: "60-minute sessions",
    price: "$125",
    unit: "per session",
    features: [
      "Confidence & goal-setting",
      "Peer pressure navigation",
      "Self-advocacy development",
      "Online or in-person",
    ],
  },
]

export function PricingSection() {
  return (
    <section className="bg-foreground py-14 text-background lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Simple Pricing
          </p>
          <h2 className="mt-3 font-serif text-3xl text-background md:text-4xl">
            One Simple Investment.
          </h2>
          <p className="mt-2 font-serif text-2xl text-primary md:text-3xl">
            A Lifetime of Impact.
          </p>
          <p className="mt-4 text-base leading-relaxed text-background/60">
            {"No hidden fees. No complicated tiers. Most families invest in two sessions per week. The average student stays with us for 12+ months \u2014 and the results last a lifetime."}
          </p>
        </div>

        {/* Progress Line */}
        <p className="mb-8 text-center text-base text-background/70 md:text-lg">
          Most families begin seeing meaningful progress within the first few months.
        </p>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 bg-background/10 text-background ring-1 ring-background/20"
            >
              <div className="flex items-center gap-3">
                <plan.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                  {plan.duration}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-4xl">{plan.price}</span>
                <span className="text-sm text-background/50">
                  {plan.unit}
                </span>
              </div>

              {/* Feature List */}
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-sm text-background/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
                    Book My Free Consultation
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-background/30 text-background hover:bg-background/10"
                >
                  <Link href="/contact">
                    Send Us a Message
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
