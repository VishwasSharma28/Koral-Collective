import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-brand-primary)] text-[var(--color-text-inverse)] hover:opacity-90 active:scale-[0.98]",
  secondary:
    "bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)] hover:bg-[var(--color-border-subtle)]",
  outline:
    "border border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]",
  ghost:
    "text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium rounded-[var(--radius-sm)]",
  md: "px-4 py-2 text-sm font-medium rounded-[var(--radius-md)]",
  lg: "px-6 py-3 text-base font-medium rounded-[var(--radius-lg)]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const combinedClasses = cn(
    "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
