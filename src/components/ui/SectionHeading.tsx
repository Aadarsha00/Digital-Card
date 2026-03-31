import { type ReactNode } from "react";
import clsx from "clsx";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={clsx(
        "text-xs font-bold tracking-[0.12em] uppercase font-syne mb-4",
        className ?? "text-muted"
      )}
    >
      {children}
    </p>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={clsx(
        "text-[clamp(2rem,3.5vw,2.8rem)] font-extrabold leading-[1.12] tracking-[-0.04em] mb-5 font-syne",
        className
      )}
    >
      {children}
    </h2>
  );
}

interface SectionSubProps {
  children: ReactNode;
  className?: string;
}

export function SectionSub({ children, className }: SectionSubProps) {
  return (
    <p className={clsx("text-base text-[#555] leading-relaxed max-w-[480px]", className)}>
      {children}
    </p>
  );
}
