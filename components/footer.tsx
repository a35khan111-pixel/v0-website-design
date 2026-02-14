import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3 md:col-span-2">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Reading Resolved"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Specialized 1-on-1 dyslexia tutoring that finally makes reading
              click. Serving families for over 25 years.
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Mississauga, Ontario
            </div>
            <a href="tel:6476325801" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-3.5 w-3.5 text-primary" />
              (647) 632-5801
            </a>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:readingresolved@gmail.com"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 mt-1">
              <Link
                href="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/programs"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Programs
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Link
                href="/register"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Student Registration
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Programs
            </h4>
            <div className="flex flex-col gap-2.5 mt-1">
              <Link
                href="/programs#dyslexia"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Dyslexia Support
              </Link>
              <Link
                href="/programs#academic"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Academic Tutoring
              </Link>
              <Link
                href="/programs#coaching"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Life Coaching
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            {"© "}{new Date().getFullYear()}{" Reading Resolved. All rights reserved."}
          </p>
          <p className="text-xs text-muted-foreground">
            Mississauga, Ontario &middot; Online worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
