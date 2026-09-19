"use client";

import { useState } from "react";

import type { TeamGroup } from "@/content/types";

type TeamAccordionProps = {
  groups: TeamGroup[];
};

/**
 * Team member portraits hosted on Cloudinary.
 *
 * We map by name so the existing content data does not need
 * to be modified just to add the images.
 */
const teamImages: Record<string, string> = {
  "Shreyas Kolpe":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793460/Shreyas.jpg",

  "Sharvani Bhat":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793430/Sharvani.jpg.jpg",

  "Sriram K":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793425/Sriram.png",

  "Vishwas Sharma":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793425/Vishwas.jpg",

  "Shridhar Bhat":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793424/Shridhar.jpg",

  "Murugeshi T":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793424/Murugeshi_bnw.jpg",

  "Thushar Yadav":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793424/Thushar_1.jpg",

  // Handles the spelling if the content file uses "Tushar".
  "Tushar Yadav":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1789390215/WhatsApp_Image_2026-09-14_at_12.56.40_PM.jpg",

  "Shravya Hegde":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793422/Shravya.jpg.jpg",

  "Nitesh S Anchan":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793422/Nitesh.png",

  "Raisah Dilkush":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793422/Raisah.jpg",

  "Meghna Rohit Amin":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793422/Meghna.png",

  "Aparna Ashokan":
    "https://res.cloudinary.com/ev7y5xh0/image/upload/v1788793422/Aparna.jpg"
};

export function TeamAccordion({ groups }: TeamAccordionProps) {
  const memberIds = groups.flatMap((group) =>
    group.members.map((member) => member.id),
  );

  const [openMembers, setOpenMembers] = useState<string[]>([]);

  const toggleMember = (memberId: string) => {
    setOpenMembers((current) =>
      current.includes(memberId)
        ? current.filter((id) => id !== memberId)
        : [...current, memberId],
    );
  };

  const setAllOpen = (shouldOpen: boolean) => {
    setOpenMembers(shouldOpen ? memberIds : []);
  };

  return (
    <section aria-labelledby="team-heading" className="mt-20">
      {/* Section heading */}
      <div className="flex items-end justify-between gap-6 border-b border-[var(--color-border-strong)] pb-4">
        <h2
          id="team-heading"
          className="text-3xl font-serif font-medium text-[var(--color-text-primary)] sm:text-4xl"
        >
          The team
        </h2>

        <div className="flex gap-4 text-xs font-medium tracking-[0.14em] text-[var(--color-text-muted)]">
          <button
            type="button"
            onClick={() => setAllOpen(true)}
            className="underline underline-offset-4 hover:text-[var(--color-brand-primary)]"
          >
            Expand all
          </button>

          <button
            type="button"
            onClick={() => setAllOpen(false)}
            className="underline underline-offset-4 hover:text-[var(--color-brand-primary)]"
          >
            Collapse all
          </button>
        </div>
      </div>

      {/* Team groups */}
      {groups.map((group) => (
        <div
          key={group.title}
          className="grid border-b border-[var(--color-border-subtle)] lg:grid-cols-[minmax(9rem,0.35fr)_1fr]"
        >
          {/* Group label */}
          <div className="pt-8 lg:pr-8">
            <h3 className="text-xs font-medium tracking-[0.18em] text-[var(--color-brand-primary)]">
              {group.title}
            </h3>
          </div>

          {/* Members */}
          <div>
            {group.members.map((member) => {
              const isOpen = openMembers.includes(member.id);
              const imageUrl = teamImages[member.name];

              return (
                <article
                  key={member.id}
                  className="border-b border-[var(--color-border-subtle)] last:border-b-0"
                >
                  {/* Member header */}
                  <div className="flex items-center justify-between gap-6 py-5 sm:py-6">
                    <h4 className="font-serif text-2xl text-[var(--color-text-primary)] sm:text-3xl">
                      {member.name}
                    </h4>

                    <button
                      type="button"
                      onClick={() => toggleMember(member.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${member.id}-profile`}
                      aria-label={`${isOpen ? "Collapse" : "Expand"} profile for ${member.name}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-2xl font-light leading-none text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-text-inverse)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2"
                    >
                      {isOpen ? "×" : "+"}
                    </button>
                  </div>

                  {/* Member profile */}
                  <div
                    id={`${member.id}-profile`}
                    hidden={!isOpen}
                    className="pb-8"
                  >
                    <div className="grid gap-8 lg:grid-cols-[1fr_15rem] lg:gap-12">
                      {/* Bio */}
                      <div className="max-w-2xl">
                        <p className="text-sm font-medium text-[var(--color-brand-primary)] sm:text-base">
                          {member.role}
                        </p>

                        {member.details ? (
                          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                            {member.details}
                          </p>
                        ) : null}

                        <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                          {member.bio}
                        </p>
                      </div>

                      {/* Portrait */}
                      <div className="relative aspect-[4/5] min-h-56 overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)]">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={`${member.name} portrait`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full items-end p-4">
                            <span className="text-[10px] tracking-[0.16em] text-[var(--color-text-subtle)]">
                              Portrait to come
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}