import { ArrowRight } from "lucide-react"

const comparisons = [
  {
    now: "Not eager to read and avoids picking up a book at all costs.",
    future: "Reading with joy and discovering the stories they used to avoid.",
  },
  {
    now: "Low self-confidence and starting to believe they \u201Ccan\u2019t do it.\u201D",
    future: "Confidence restored as they realize they have a brilliant mind.",
  },
  {
    now: "Spelling struggles that lead to tears and meltdowns.",
    future: "Spelling with ease using a logic-based system that works.",
  },
  {
    now: "Great ideas that get stuck and never make it onto the page.",
    future: "Writing with clarity and expressing big ideas with ease.",
  },
  {
    now: "Homework battles and needing help with every single word.",
    future: "Growing independence and the freedom to thrive on their own.",
  },
]

export function QualifierSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            <span className="text-balance">
              {"Now that you know where you want to see your child, let\u2019s make it a reality."}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"You are in the right place if you want your child\u2019s potential to be unlocked. We understand how exhausting it feels when nothing seems to work. Our expertise is in bridging the gap between potential and performance."}
          </p>
        </div>

        {/* Section Title */}
        <div className="mx-auto mt-12 flex max-w-4xl items-center justify-center gap-4">
          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-px w-12 bg-border" />
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest">
            <span className="text-muted-foreground">Where They Are Now</span>
            <ArrowRight className="h-4 w-4 text-primary" />
            <span className="text-primary">Where They Can Be</span>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-px w-12 bg-border" />
          </div>
        </div>

        {/* Comparison List */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid items-center gap-3 rounded-xl bg-card p-5 ring-1 ring-border md:grid-cols-[1fr_auto_1fr] md:gap-6"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.now}
              </p>
              <div className="hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 md:flex">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-primary" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {item.future}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
