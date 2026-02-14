import { CheckCircle2 } from "lucide-react"

const signs = [
  "Avoids reading or gets frustrated with books",
  "Guesses at words instead of sounding them out",
  "Struggles with spelling despite studying hard",
  "Reads far below their grade level",
  "Has been told they\u2019ll \u201Ccatch up\u201D but hasn\u2019t",
  "Feels anxious or embarrassed about reading aloud",
]

export function QualifierSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Does this sound familiar?
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            <span className="text-balance">
              {"You Know Something Isn\u2019t Clicking"}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            If your child experiences any of these, they may benefit from
            specialized dyslexia support.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {signs.map((sign, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl bg-card px-5 py-4 ring-1 ring-border transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-foreground">{sign}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-base leading-relaxed text-muted-foreground">
          {"If you checked even one, your child isn\u2019t lazy or behind\u2014they just need someone who understands how their brain works."}
          {" "}
          <span className="font-medium text-foreground">
            {"That\u2019s exactly what we do."}
          </span>
        </p>
      </div>
    </section>
  )
}
