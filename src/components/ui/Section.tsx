import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  containerClassName?: string;
  containerSize?: "narrow" | "default" | "wide" | "full";
  id?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

export function Section({
  children,
  as: Component = "section",
  className,
  containerClassName,
  containerSize = "wide",
  id,
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={cn("py-12 sm:py-16 lg:py-20", className)}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
}
