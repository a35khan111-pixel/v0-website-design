import { Ear, Search, Map } from "lucide-react"

export function ConsultationSection() {
  return (
    <section className="bg-muted/50 py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            What Happens in Your Free Consultation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Taking the first step can feel big. Our consultation is designed to give you clarity \u2014 not pressure."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Ear className="h-8 w-8" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Step 1
            </span>
            <h3 className="font-serif text-xl text-foreground mb-3">
              We Listen
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {"You tell us about your child, their struggles, and what you\u2019ve already tried. We take the time to understand the full picture."}
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Search className="h-8 w-8" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Step 2
            </span>
            <h3 className="font-serif text-xl text-foreground mb-3">
              We Identify the Gaps
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {"With 25+ years of experience, we quickly recognize the patterns that explain why reading hasn\u2019t clicked yet."}
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Map className="h-8 w-8" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Step 3
            </span>
            <h3 className="font-serif text-xl text-foreground mb-3">
              We Map the Path Forward
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {"You\u2019ll leave the call with clear guidance on what your child needs next."}
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          {"Many parents say this conversation alone lifts a huge weight off their shoulders. Even if we don\u2019t end up working together, you\u2019ll leave with clarity."}
        </p>
      </div>
    </section>
  )
}
