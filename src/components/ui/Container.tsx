import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide" | "full";
};

const sizeClasses = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-full",
};

export function Container({ children, className, size = "wide" }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
