import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function BrandStory() {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#c8b98f] sm:aspect-[1600/582] sm:min-h-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/tulunadu-landscape.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-contain sm:object-center"
          priority
        />
      </div>

      <Container size="default" className="pointer-events-none absolute inset-0 z-10 flex items-center">
        <div
          className="max-w-[34rem] px-2 py-10 text-[#2e211b] opacity-100 sm:ml-[6%] sm:py-12"
          style={{ textShadow: "0 1px 2px rgba(243, 232, 210, 0.7)" }}
        >
          <h2
            id="brand-story-heading"
            className="text-2xl font-serif font-medium leading-[1.08] text-[#2e211b] sm:text-4xl lg:text-5xl"
          >
            Walk the textures of Tulunadu threaded through time
          </h2>
          <div className="my-5 h-px w-20 bg-[var(--color-accent)] sm:my-6" />
          <div className="max-w-lg space-y-4 text-sm font-sans font-normal leading-[1.45] text-[#2e211b] sm:text-base sm:leading-relaxed">
            <p>
              Sheltered at the foot of the Western Ghats and battered by sea and rain, Tulunadu endures in the collective memory of its people and in the stories still told. Its cultural life is animated by traditions unlike any others. To those who are willing to travel in unhurried grace, Tulunadu unravels its aura, living cultures, cuisines, and heritage.
            </p>
            <p>
              The koral collective invites you to experience a Tulunadu rarely seen, through curated walking tours led by historians, archaeologists, anthropologists, architects, and social scientists. You cannot help but return with forgotten secrets of the land and the stories whispered by the trees to the sea in a language older than memory.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
