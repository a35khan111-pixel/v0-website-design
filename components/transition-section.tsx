import { Award, Users, Handshake } from "lucide-react"

export function TransitionSection() {
  return (
    <>
      {/* Transition Paragraph */}
      <section className="bg-card py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg text-left">
            <p>
              {"You can see the potential in your child. You\u2019ve always known it was there. You know the struggle you\u2019re seeing right now isn\u2019t the whole story."}
            </p>
            <p>
              {"What they need isn\u2019t more pressure. They need the right approach \u2014 from someone who truly understands how their brain learns."}
            </p>
            <p>
              {"That\u2019s where we come in."}
            </p>
            <p>
              {"We don\u2019t just teach reading \u2014 we unlock the brilliance that fuels academic success, deep self-trust and lasting confidence."}
            </p>
            <p>
              {"And we don\u2019t disappear once reading clicks. We stay beside your child through every milestone, until they don\u2019t just perform better \u2014 they see themselves differently."}
            </p>
            <p className="text-center font-semibold text-foreground text-xl md:text-2xl mt-4">
              {"This is where potential stops being a hope\u2026 and becomes their future."}
            </p>
          </div>
        </div>
      </section>

      {/* Visual Break Banner */}
      <section className="bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-serif text-2xl text-primary-foreground md:text-3xl lg:text-4xl">
            {"For 25 years, we\u2019ve helped struggling readers rediscover their confidence \u2014 and their future."}
          </p>
        </div>
      </section>

      {/* Why Families Choose Reading Resolved */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
          <h2 className="text-center font-serif text-3xl text-foreground md:text-4xl mb-12">
            Why Families Choose Reading Resolved
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Specialist Expertise */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Specialist Expertise
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Dyslexia and learning differences require specialized instruction. Our approach is grounded in structured literacy and decades of real-world experience.
              </p>
            </div>

            {/* Truly Personalized Support */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Truly Personalized Support
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"Every child learns differently. Our 1-on-1 sessions adapt to your child\u2019s specific learning profile, pace and needs."}
              </p>
            </div>

            {/* Long-Term Partnership */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Handshake className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                Long-Term Partnership
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"We don\u2019t disappear once reading improves. We stay with families through the academic and emotional milestones that follow."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
