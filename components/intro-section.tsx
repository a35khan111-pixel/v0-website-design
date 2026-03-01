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
            With 25+ years of experience, we have mastered the art of unlocking the dyslexic brain.
          </span>
        </h2>
        <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {"Our approach isn\u2019t about following a script. It\u2019s about finding the gaps, pulling the right threads, and untangling the frustration that has been holding them back."}
          </p>
          <p>
            {"Using proven methods like Orton-Gillingham and other structured literacy approaches, we turn your vision for your child into a living reality."}
          </p>
        </div>
      </div>
    </section>
  )
}
