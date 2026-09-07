"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";

const faqs = [
  {
    question: "What can I expect from a Koral experience?",
    answer: "Small-group journeys shaped around local food, living heritage, and the people who make each place distinct.",
  },
  {
    question: "Are the experiences suitable for visitors new to Tulu Nadu?",
    answer: "Yes. Each experience is designed as a welcoming introduction, with enough context to help you look closer and feel at ease.",
  },
  {
    question: "How do I enquire or plan a visit?",
    answer: "Explore the offerings, choose what feels right, and reach out to us on WhatsApp for the latest details and availability.",
  },
];

export function Faqs() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <Section
      as="section"
      aria-labelledby="faqs-heading"
      className="bg-[var(--color-bg-surface)]"
    >
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-brand-primary)]">
            Before you arrive
          </p>
          <h2
            id="faqs-heading"
            className="mt-3 text-3xl font-serif font-medium text-[var(--color-text-primary)] sm:text-4xl"
          >
            FAQs
          </h2>
        </div>
        <div className="divide-y divide-[var(--color-border-subtle)] border-y border-[var(--color-border-subtle)]">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 text-left font-serif text-xl text-[var(--color-text-primary)]"
                aria-expanded={openQuestion === faq.question}
                onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
              >
                {faq.question}
                <span className={`font-sans text-2xl font-light text-[var(--color-brand-primary)] transition-transform duration-300 ${openQuestion === faq.question ? "rotate-45" : ""}`} aria-hidden="true">
                  +
                </span>
              </button>
              <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openQuestion === faq.question ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-2xl pt-3 pr-8 text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
