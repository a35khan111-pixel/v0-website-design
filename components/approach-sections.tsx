import { Check } from "lucide-react"

const ogPrinciples = [
  {
    title: "Explicit and Direct",
    text: "Clear, structured instruction with no guesswork",
  },
  {
    title: "Multisensory",
    text: "Lessons incorporate visual, auditory, tactile, and kinesthetic techniques",
  },
  {
    title: "Systematic and Sequential",
    text: "Builds on previously learned concepts, progressing step by step",
  },
  {
    title: "Cumulative",
    text: "Revisits earlier concepts to confirm understanding is retained",
  },
  {
    title: "Diagnostic",
    text: "Continuously identifies each student\u2019s specific learning gaps",
  },
  {
    title: "Prescriptive",
    text: "Instruction is tailored precisely to bridge those gaps",
  },
  {
    title: "Flexible",
    text: "Adjusted in real time based on each student\u2019s needs and performance",
  },
]

export function ApproachSections() {
  return (
    <>
      {/* The Orton-Gillingham Approach */}
      <section className="bg-muted/50 py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-16">
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Our Approach
              </p>
              <div className="h-px w-8 bg-primary/40" />
            </div>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              <span className="text-balance">The Orton-Gillingham Approach</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {"The Orton-Gillingham Approach has delivered exceptional results for struggling readers for almost 100 years. It was developed specifically for individuals with dyslexia and language-based learning differences, but it works effectively for any struggling or developing reader."}
            </p>
            <p className="font-medium text-foreground">Its core strength lies in being:</p>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {ogPrinciples.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">{item.title}:</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"The Orton-Gillingham Approach is not a program or a method. It is a powerful, flexible tool \u2014 and in the hands of our trained and experienced specialists, students receive the intensive, one-on-one remediation they need to reach grade level fluency, even after other programs have not worked."}
          </p>
        </div>
      </section>

      {/* Structured Word Inquiry */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-16">
          <div className="mb-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Our Approach
              </p>
              <div className="h-px w-8 bg-primary/40" />
            </div>
            <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
              <span className="text-balance">Structured Word Inquiry (SWI)</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {"For many students, sounding out words and memorizing spelling rules simply does not work. Their brain needs more. More understanding, more order, more morphemic instruction."}
            </p>
            <p>
              {"The good news is that the English language is a deeply logical, well-ordered system built on meaning, structure, and history. When students are taught how language actually works, rather than just told to memorize it, something shifts. Reading and spelling stop feeling like guesswork and start feeling like discovery."}
            </p>
            <p>
              {"That is exactly what Structured Word Inquiry does. Meaning, structure, and word history come together to explain exactly why words are spelled the way they are \u2014 and once a student understands this, spelling becomes a skill, not a struggle."}
            </p>
            <p className="font-medium text-foreground">
              {"Our only goal is your child\u2019s success. That is why we use only the most powerful, evidence-based approaches."}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
