import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { getTeamContent } from "@/content";

const team = getTeamContent();

export const metadata: Metadata = {
  title: team.seo.title,
  description: team.seo.description,
};

export default function TeamPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-medium">{team.title}</h1>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {team.members.map((member) => (
          <li key={member.id} className="rounded border border-neutral-200 p-4">
            <h2 className="font-medium">{member.name}</h2>
            <p className="text-sm text-neutral-500">{member.role}</p>
            <p className="mt-2 text-sm text-neutral-600">{member.bio}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
