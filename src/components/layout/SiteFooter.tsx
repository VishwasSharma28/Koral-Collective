import Link from "next/link";

import { getNavItems, getSiteConfig } from "@/content";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const siteConfig = getSiteConfig();
  const navItems = getNavItems();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] py-12 text-sm text-[var(--color-text-muted)]">
      <Container size="wide">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-3 lg:col-span-2">
            <p className="font-serif text-base font-medium text-[var(--color-text-primary)]">
              {siteConfig.name}
            </p>
            <p className="max-w-sm text-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-medium text-[var(--color-text-primary)] mb-3 text-xs uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[var(--color-text-primary)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quiet Contact Presence */}
          <div>
            <p className="font-medium text-[var(--color-text-primary)] mb-3 text-xs uppercase tracking-wider">
              Connect
            </p>
            <p className="text-xs leading-relaxed">
              For direct enquiries about experiences or café offerings:
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 inline-block text-xs font-medium text-[var(--color-text-primary)] underline hover:opacity-80 transition-opacity"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border-subtle)] pt-6 text-xs text-center sm:text-left sm:flex sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Experiential Digital Presence</p>
        </div>
      </Container>
    </footer>
  );
}
