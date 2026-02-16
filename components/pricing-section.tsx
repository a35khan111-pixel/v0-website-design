import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Heart, ArrowRight, Check } from "lucide-react"

const plans = [
  {
    icon: BookOpen,
    name: "Dyslexia Support",
    duration: "45 min sessions",
    price: "$70",
    unit: "per session",
    description: "1-on-1 Orton-Gillingham based sessions tailored to your child\u2019s unique learning needs.",
    features: [
      "Personalized learning profile",
      "Phonemic awareness & phonics",
      "Fluency & spelling focus",
      "Online or in-person",
    ],
  },
  {
    icon: GraduationCap,
    name: "Academic Tutoring",
    duration: "45 min sessions",
    price: "$70",
    unit: "per session",
    description: "Subject-specific tutoring for grades 3\u201312 with strategies for classroom independence.",
    features: [
      "All core subjects covered",
      "Study skills & executive functioning",
      "Test prep & essay coaching",
      "University admissions support",
    ],
    featured: true,
  },
  {
    icon: Heart,
    name: "Life Coaching",
    duration: "60 min sessions",
    price: "$95",
    unit: "per session",
    description: "Build emotional intelligence, self-advocacy, and confidence for pre-teens and teens.",
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
            {"No hidden fees. No complicated tiers. Choose the support your child needs\u2014or grow with us through all three."}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-primary text-primary-foreground ring-2 ring-primary shadow-2xl shadow-primary/20"
                  : "bg-background/10 text-background ring-1 ring-background/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-background px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <plan.icon className={`h-5 w-5 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
                  {plan.duration}
                </span>
              </div>
              <h3 className="mt-4 font-serif text-xl">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-4xl">{plan.price}</span>
                <span className={`text-sm ${plan.featured ? "text-primary-foreground/70" : "text-background/50"}`}>
                  {plan.unit}
                </span>
              </div>
              <p className={`mt-4 text-sm leading-relaxed ${plan.featured ? "text-primary-foreground/85" : "text-background/60"}`}>
                {plan.description}
              </p>

              {/* Feature List */}
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      plan.featured ? "bg-primary-foreground/20" : "bg-primary/20"
                    }`}>
                      <Check className={`h-3 w-3 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                    </span>
                    <span className={`text-sm ${plan.featured ? "text-primary-foreground/90" : "text-background/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`mt-8 w-full ${
                  plan.featured
                    ? "bg-background text-foreground hover:bg-background/90 shadow-lg"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <a href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs" target="_blank" rel="noopener noreferrer">
                  Book My Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
