export function IntroSection() {
  return (
    <section className="bg-card py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Decorative line */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-primary/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          <span className="text-balance">
            {"After 25+ Years, We Know Exactly What Dyslexic Brains Need."}
          </span>
        </h2>
        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {"We don\u2019t just teach reading\u2014we unlock brilliance."}
          </p>
          <p>
            {"Using proven Orton-Gillingham methods designed for dyslexic brains, we turn frustration into breakthrough moments\u2014where your child finally gets it, believes in themselves, and transforms from avoiding books to actually enjoying them."}
          </p>
          <p>
            {"No guessing. No worksheets. No waiting to see if they\u2019ll catch up."}
          </p>
          <p className="mx-auto max-w-2xl rounded-xl bg-accent/60 px-6 py-4 font-medium text-foreground">
            {"And we don\u2019t disappear when reading clicks. We stay\u2014supporting your child from their first breakthrough through high school and beyond."}
          </p>
        </div>
      </div>
    </section>
  )
}
