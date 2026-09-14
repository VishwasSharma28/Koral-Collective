import Link from "next/link";

import { getSiteConfig } from "@/content";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const siteConfig = getSiteConfig();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.phoneE164}`;

  return (
    <footer className="border-t border-[#4c3027] bg-[#211713] py-14 text-sm text-[#cdbda5]">
      <Container size="wide">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_1fr]">
          <div className="space-y-4">
            <p className="font-serif text-3xl font-medium text-[#f3e8d2]">
              {siteConfig.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-[#bca993]">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#e2b477]">
              Quick links
            </p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="transition-colors hover:text-[#f3e8d2]">Home</Link></li>
              <li><Link href="/offerings" className="transition-colors hover:text-[#f3e8d2]">Offerings</Link></li>
              <li><Link href="/team" className="transition-colors hover:text-[#f3e8d2]">Team</Link></li>
              <li><Link href="/#faqs" className="transition-colors hover:text-[#f3e8d2]">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#e2b477]">
              Connect
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm transition-colors hover:text-[#f3e8d2]"
            >
              WhatsApp
            </a>
            {siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="mt-3 block text-sm transition-colors hover:text-[#f3e8d2]"
              >
                {siteConfig.contact.phone}
              </a>
            )}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-3 block text-sm transition-colors hover:text-[#f3e8d2]"
            >
              Email
            </a>
            {siteConfig.contact.instagram && (
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm transition-colors hover:text-[#f3e8d2]"
              >
                Instagram
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[#54372c] pt-6 text-xs text-[#806f61] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Experiential digital presence</p>
        </div>
      </Container>
    </footer>
  );
}
