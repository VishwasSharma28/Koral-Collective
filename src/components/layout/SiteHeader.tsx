"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getNavItems } from "@/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = getNavItems();
  const isHome = pathname === "/";

  return (
    <header 
      className={cn(
        "fixed left-0 right-0 top-0 z-50",
        isHome ? "bg-transparent" : "bg-[var(--color-bg-base)]",
      )}
    >
      <Container size="full">
        <div className="flex min-h-20 items-center justify-between gap-4 py-1">
          {/* Official Logo */}
          <Link
            href="/"
            className="flex min-w-0 flex-shrink flex-col items-start rounded-sm px-1 py-0.5 transition-opacity hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
            aria-label="Koral Collective — home"
          >
            <Image
              src="/images/branding/koral-collective-logo-transparent.png"
              alt="The Koral Collective"
              width={120}
              height={120}
              className="h-16 w-auto object-contain sm:h-[4.5rem]"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="ml-auto hidden md:block">
            <ul className="flex items-center gap-7 text-base font-sans font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isWhatsApp = item.label === "Book via WhatsApp";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center border-b border-transparent py-1 tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#022e01] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f1e3]",
                        isWhatsApp
                          ? "border-[#022e01] text-[#022e01] hover:border-[#022e01]"
                          : isActive
                            ? "border-[#022e01] text-[#022e01]"
                            : "text-[#022e01] hover:border-[#022e01]/60"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2 text-[#022e01] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#022e01] md:hidden",
              "hover:bg-[#022e01]/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav id="mobile-menu" aria-label="Mobile main navigation" className="border-t border-[#022e01]/20 py-3 md:hidden">
            <ul className="flex flex-col space-y-1 px-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-sans font-medium text-[#022e01] transition-colors",
                        isActive
                          ? "bg-[#022e01]/10"
                          : "hover:bg-[#022e01]/10"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
