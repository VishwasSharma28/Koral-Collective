"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getNavItems } from "@/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navItems = getNavItems();
  
  // Home page starts transparent, other pages are always "scrolled" style
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerActive = !isHome || isScrolled || mobileMenuOpen;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        headerActive 
          ? "bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] shadow-sm py-0"
          : "bg-[var(--color-brand-primary)] border-[var(--color-brand-primary)] py-2"
      )}
    >
      <Container size="full">
        <div className="flex h-20 items-center justify-between">
          {/* Official Logo */}
          <Link
            href="/"
            className="mr-auto flex-shrink-0 rounded-sm bg-[#f7f1e3]/90 px-2 py-1 hover:opacity-85 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
            aria-label="Koral Collective — home"
          >
            <Image
              src="/images/branding/koral-collective-logo-transparent.png"
              alt="The Koral Collective"
              width={120}
              height={120}
              className={cn(
                "h-[4.5rem] w-auto object-contain transition-all duration-300",
                !headerActive && "drop-shadow-md"
              )}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="ml-auto hidden md:block">
            <ul className="flex items-center gap-3 text-sm font-sans font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isWhatsApp = item.label === "Book via WhatsApp";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center rounded-sm border px-3 py-2 tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f3e8d2] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-brand-primary)]",
                        isWhatsApp
                          ? "border-[#f3e8d2] bg-[#f3e8d2] text-[var(--color-brand-primary)] hover:bg-[#f8f2d1]"
                          : isActive
                            ? "border-[#f3e8d2] bg-white/10 text-white"
                            : "border-white/45 text-white hover:border-[#f3e8d2] hover:bg-white/10"
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
              "inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 md:hidden",
              headerActive 
                ? "text-white hover:text-white hover:bg-white/10 focus:ring-[var(--color-brand-primary)]"
                : "text-white hover:bg-white/10 focus:ring-white"
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
          <nav id="mobile-menu" aria-label="Mobile main navigation" className="md:hidden py-4 border-t border-[var(--color-border-subtle)]">
            <ul className="flex flex-col space-y-3 px-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-3 py-2 text-base font-sans font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white hover:bg-white/10 hover:text-white"
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
