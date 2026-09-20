import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { TeamAccordion } from "@/components/team/TeamAccordion";
import { getTeamContent } from "@/content";

const team = getTeamContent();

export const metadata: Metadata = {
  title: team.seo.title,
  description: team.seo.description,
};

export default function TeamPage() {
  return (
    <Container size="default" className="py-16 sm:py-24">
      <header className="max-w-4xl border-b border-[var(--color-border-strong)] pb-12 sm:pb-16">
        <h1 className="mt-4 text-5xl font-serif font-medium leading-none text-[var(--color-text-primary)] sm:text-7xl">
          {team.title}
        </h1>
        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
          {team.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </header>
      <TeamAccordion groups={team.groups} />
    </Container>
  );
}
