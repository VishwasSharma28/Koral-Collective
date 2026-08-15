import Link from "next/link";

import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-medium">Page not found</h1>
      <p className="mt-4 text-neutral-600">The page you requested does not exist.</p>
      <Link href="/" className="mt-6 inline-block underline">
        Return to Home
      </Link>
    </Container>
  );
}
