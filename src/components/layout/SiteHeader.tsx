"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getNavItems, getSiteConfig } from "@/content";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navItems = getNavItems();
  const siteConfig = getSiteConfig();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]/95 backdrop-blur-sm">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-serif tracking-tight font-medium text-[var(--color-text-primary)] hover:opacity-80 transition-opacity"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-colors hover:text-[var(--color-text-primary)] py-2 border-b-2",
                        isActive
                          ? "border-[var(--color-brand-primary)] text-[var(--color-text-primary)]"
                          : "border-transparent text-[var(--color-text-muted)]"
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
            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)] md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2"
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
                        "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-muted)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text-primary)]"
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
