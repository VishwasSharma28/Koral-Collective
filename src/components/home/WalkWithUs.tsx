import { getSiteConfig } from "@/content";
import { Section } from "@/components/ui/Section";
import { buildWhatsAppUrl } from "@/features/contact/lib/buildWhatsAppUrl";

function QrVisual() {
  const cells = [
    "111111100101101111111",
    "100000101110101000001",
    "101110100010101011101",
    "101110101111101011101",
    "101110100101101011101",
    "100000101010101000001",
    "111111101010101111111",
    "000000001111100000000",
    "101101110010111011010",
    "011011001111000110101",
    "110100111001101001110",
    "001111010110011110001",
    "111001101011101001111",
    "000000001101100000000",
    "111111101011101111111",
    "100000101100101000001",
    "101110101011101011101",
    "101110100110001011101",
    "101110101101101011101",
    "100000101011101000001",
    "111111101101101111111",
  ];

  return (
    <svg viewBox="0 0 21 21" className="h-full w-full" role="img" aria-label="QR code for Koral Collective WhatsApp">
      <rect width="21" height="21" fill="#f3e8d2" />
      {cells.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "1" ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#2e211b" /> : null
        )
      )}
    </svg>
  );
}

export function WalkWithUs() {
  const siteConfig = getSiteConfig();
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contact.whatsapp.phoneE164,
    siteConfig.contact.whatsapp.defaultMessage,
  );

  return (
    <Section
      as="section"
      aria-labelledby="walk-with-us-heading"
      className="border-b border-[#4c3027] bg-[var(--color-brand-primary)] text-[var(--color-text-inverse)]"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#e2b477]">
            Make a beginning
          </p>
          <h2
            id="walk-with-us-heading"
            className="mt-4 text-5xl font-serif font-medium uppercase leading-none text-[#f3e8d2] sm:text-7xl"
          >
            Walk with us
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#ecd9bd] sm:text-lg">
            Connect with Koral Collective to enquire, plan a visit, or find the experience that fits your pace.
          </p>
          <a href={whatsappUrl} className="mt-8 inline-flex border-b border-[#e2b477] pb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#f3e8d2] transition-colors hover:text-[#e2b477]">
            Enquire on WhatsApp →
          </a>
        </div>
        <a href={whatsappUrl} className="group mx-auto block w-full max-w-xs border border-[#d7ae78]/60 bg-[#3b2721] p-5 shadow-[12px_12px_0_#5f302b] transition-transform hover:-translate-y-1 sm:p-7" aria-label="Connect with Koral Collective on WhatsApp">
          <div className="flex items-start justify-between text-[#f3e8d2]">
            <span className="font-serif text-2xl">Walk with us</span>
            <span className="text-xl text-[#e2b477] transition-transform group-hover:translate-x-1">↗</span>
          </div>
          <div className="mx-auto mt-6 aspect-square w-44 bg-[#f3e8d2] p-3 sm:w-52">
            <QrVisual />
          </div>
          <p className="mt-5 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-[#d8c09e]">
            Scan to start a conversation
          </p>
        </a>
      </div>
    </Section>
  );
}
