import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { getGalleryContent } from "@/content";

const gallery = getGalleryContent();

export const metadata: Metadata = {
  title: gallery.seo.title,
  description: gallery.seo.description,
};

export default function GalleryPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-medium">{gallery.title}</h1>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {gallery.items.map((item) => (
          <li key={item.id} className="rounded border border-neutral-200 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.alt} className="h-40 w-full object-cover" />
            {item.caption ? (
              <p className="mt-2 text-sm text-neutral-600">{item.caption}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </Container>
  );
}
