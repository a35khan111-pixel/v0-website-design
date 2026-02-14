import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden lg:min-h-[700px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Child writing confidently"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="max-w-2xl animate-fade-in">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </span>
          </div>
          <h1 className="font-serif text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
            Every Child Who Feels{" "}
            <span className="text-primary">
              {"They're \"Not Smart Enough\""}
            </span>
          </h1>
          <p className="mt-6 text-2xl font-medium text-balance text-muted-foreground md:text-3xl">
            Deserves Someone Who Sees Their Brilliance
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-base shadow-lg shadow-primary/20">
              <Link href="#story">
                Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link href="#team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
