import Image from "next/image"

export function FounderSection() {
  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/5]">
              <Image
                src="/images/sakina-portrait.jpg"
                alt="Sakina Khan, Founder of Reading Resolved"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
          </div>

          {/* Letter */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  A Letter From Our Founder
                </p>
              </div>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Dear Parents,
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {"You\u2019re here because you believe your child is capable of more\u2014and you\u2019re absolutely right. They are."}
              </p>
              <p>
                {"For 25 years, I\u2019ve helped families transform what felt impossible into \"We did it!\" moments. As a specialist in dyslexia and learning differences, I started Reading Resolved because I saw too many brilliant children losing their confidence in a system not designed for them."}
              </p>
              <p>
                {"We provide more than lessons\u2014we provide a specialist-led journey that stays with your child from their first breakthrough to the day they truly believe in themselves."}
              </p>
              <p className="rounded-xl bg-accent/50 px-5 py-4 font-medium text-foreground">
                {"You\u2019ve found the right place. Let\u2019s help your child discover what they\u2019re capable of\u2014together."}
              </p>
            </div>

            <div className="mt-2 border-t border-border pt-6">
              <p className="text-base text-muted-foreground">
                With warmth and dedication,
              </p>
              <p className="mt-2 font-serif text-2xl italic text-primary">
                Sakina Khan
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Founder, Reading Resolved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
