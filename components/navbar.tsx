"use client"

import { useState, useEffect, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram, Facebook, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
]

/* Logo is memoized so it never re-renders when pathname changes */
const Logo = memo(function Logo() {
  return (
    <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.png"
        alt="Reading Resolved"
        className="h-10 w-auto sm:h-12"
        loading="eager"
        decoding="async"
      />
    </Link>
  )
})

const SocialLinks = memo(function SocialLinks({ className, iconSize = "h-4 w-4" }: { className?: string; iconSize?: string }) {
  return (
    <div className={className}>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="Instagram">
        <Instagram className={iconSize} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="Facebook">
        <Facebook className={iconSize} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="LinkedIn">
        <Linkedin className={iconSize} />
      </a>
      <a href="mailto:readingresolved@gmail.com" className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary" aria-label="Email">
        <Mail className={iconSize} />
      </a>
    </div>
  )
})

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
          <Button asChild className="ml-4">
            <Link href="/register">Student Registration</Link>
          </Button>
        </div>

        {/* Social Icons - Desktop */}
        <SocialLinks className="hidden items-center gap-3 lg:flex" />

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 rounded-lg p-2 text-foreground transition-colors hover:bg-accent md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border bg-background px-6 pb-6 pt-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-accent text-primary"
                    : "text-foreground hover:bg-accent/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link href="/register">Student Registration</Link>
            </Button>
            <SocialLinks
              className="mt-5 flex items-center gap-4 border-t border-border pt-5"
              iconSize="h-5 w-5"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
