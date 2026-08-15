import Link from "next/link";

import { NAV_ITEMS } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-medium">
          Coral Collective
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-4 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
