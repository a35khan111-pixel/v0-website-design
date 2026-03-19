const comparisons = [
  {
    now: "Avoids reading, won't pick up a book",
    future: "Reads with joy and confidence",
  },
  {
    now: "Tries hard but gets overwhelmed and gives up",
    future: "Reads with ease, calm and growing independence",
  },
  {
    now: "Low self-confidence, starting to believe they \"can't do it\"",
    future: "Maintains self-belief and trust in themselves",
  },
  {
    now: "Struggles with spelling, avoids, guesses or gives up",
    future: "Spells with ease, logic and independence",
  },
  {
    now: "Has brilliant ideas but freezes when it's time to write",
    future: "Writes with clarity, organization and expression",
  },
  {
    now: "Guesses words or sounds out slowly and inaccurately",
    future: "Reads with accuracy, fluency and growing independence",
  },
  {
    now: "Feels different from everyone else, withdrawn and struggles with confidence",
    future: "Navigates life with confidence and a strong sense of self",
  },
  {
    now: "Avoids challenges, scared of failing",
    future: "Embraces challenges, believes in themselves and lives life on their own terms",
  },
]

export function QualifierSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        {/* Bridge Line */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <p className="text-lg font-semibold text-foreground md:text-xl">
            No more waiting. Let's start unlocking what has always been there.
          </p>
        </div>

        {/* Table Heading */}
        <h2 className="text-center font-serif text-2xl text-foreground md:text-3xl lg:text-4xl mb-8">
          From Struggle to Strength: The Difference We Make
        </h2>

        {/* Table Headers - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-4 mb-4 max-w-4xl mx-auto">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Where They Are Now
            </span>
          </div>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Where They Can Be
            </span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-4xl flex flex-col gap-3">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid gap-2 md:grid-cols-2 md:gap-4"
            >
              {/* Left - Where They Are Now (grey chiclet) */}
              <div className="rounded-xl bg-muted/70 px-5 py-4">
                {/* Mobile label */}
                <span className="md:hidden text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                  Where They Are Now
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.now}
                </p>
              </div>
              {/* Right - Where They Can Be (teal chiclet) */}
              <div className="rounded-xl bg-primary px-5 py-4">
                {/* Mobile label */}
                <span className="md:hidden text-xs font-semibold uppercase tracking-wider text-primary-foreground/70 block mb-2">
                  Where They Can Be
                </span>
                <p className="text-sm leading-relaxed text-primary-foreground font-medium">
                  {item.future}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
