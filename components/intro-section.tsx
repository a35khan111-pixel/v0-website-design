export function IntroSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Decorative line */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-primary/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <h2 className="font-serif text-3xl text-foreground md:text-4xl">
          <span className="text-balance">
            {"You\u2019ve Tried Everything. Nothing\u2019s Worked."}
          </span>
        </h2>
        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {"Everyone says \"they\u2019ll catch up\"\u2014but you know your child needs real help now."}
          </p>
          <p>
            {"For 25+ years, we\u2019ve worked with families just like yours, helping children with dyslexia go from avoiding books to reading with confidence."}
          </p>
          <p>
            {"We use proven methods designed for how dyslexic brains learn\u2014not guessing, not worksheets, not hoping they\u2019ll outgrow it."}
          </p>
          <p className="mx-auto max-w-2xl rounded-xl bg-accent/60 px-6 py-4 font-medium text-foreground">
            {"And we don\u2019t disappear when your child reaches grade level. We stay\u2014until reading clicks, confidence returns, and your child knows they are capable."}
          </p>
        </div>
      </div>
    </section>
  )
}
