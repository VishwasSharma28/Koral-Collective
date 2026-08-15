import Link from "next/link";

import { getAllOfferings } from "@/content";
import { Container } from "@/components/ui/Container";

export function OfferingSelector() {
  const offerings = getAllOfferings();

  return (
    <section aria-labelledby="offerings-heading">
      <Container className="py-8">
        <h2 id="offerings-heading" className="mb-4 text-xl font-medium">
          Offerings
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {offerings.map((offering) => (
            <li key={offering.id} className="rounded border border-neutral-200 p-4">
              <h3 className="font-medium">{offering.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{offering.shortDescription}</p>
              <Link
                href={`/offerings/${offering.slug}`}
                className="mt-4 inline-block text-sm underline"
              >
                View offering
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
