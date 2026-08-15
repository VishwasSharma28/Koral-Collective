import { OfferingSelector } from "@/components/home/OfferingSelector";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section aria-label="Hero placeholder" className="border-b border-neutral-200 bg-neutral-100">
        <Container className="py-16">
          <p className="text-sm uppercase tracking-wide text-neutral-500">Hero placeholder</p>
          <h1 className="mt-2 text-3xl font-medium">{siteConfig.name}</h1>
          <p className="mt-4 max-w-2xl text-neutral-600">{siteConfig.tagline}</p>
        </Container>
      </section>
      <OfferingSelector />
    </>
  );
}
