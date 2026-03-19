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

        <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg text-left">
          <p>
            {"If you\u2019ve found us, something brought you here \u2014 a parent\u2019s instinct that your child deserves more than what they\u2019re getting."}
          </p>
          <p>
            {"You\u2019ve been trying hard. But nothing has worked. Yet. And now you\u2019re exhausted, frustrated and afraid."}
          </p>
          <p>
            {"Afraid they\u2019re starting to believe they can\u2019t. Or worse \u2014 that they\u2019ve stopped trying."}
          </p>
          <p>
            {"Thousands of parents have sat exactly where you are. And then they discovered there was another way. One built for exactly how their child learns."}
          </p>
          <p>
            {"The breakthrough that turns a struggling child into one who is academically strong, deeply confident, and able to navigate life\u2019s choices on their own terms."}
          </p>
          <p>
            {"And right now \u2014 you are taking the first step. The one that unlocks everything."}
          </p>
          <p className="text-center font-semibold text-foreground text-xl md:text-2xl mt-4">
            {"Your child isn\u2019t the problem. The method they were taught with is."}
          </p>
        </div>
      </div>
    </section>
  )
}
