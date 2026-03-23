import React from "react";

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function ContactButton({
  href,
  icon,
  label,
  sublabel,
  variant = "secondary",
  external = false,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        group flex items-center gap-4 w-full h-14 px-5 rounded-2xl
        transition-all duration-200 ease-out select-none
        ${
          variant === "primary"
            ? "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 active:scale-[0.98]"
            : "bg-white text-slate-800 border border-slate-100 hover:bg-slate-50 hover:border-slate-200 active:scale-[0.98] shadow-sm"
        }
      `}
    >
      <span
        className={`shrink-0 w-9 h-9 flex items-center justify-center rounded-xl
        ${variant === "primary" ? "bg-white/10" : "bg-slate-100 group-hover:bg-slate-200 transition-colors duration-200"}`}
      >
        {icon}
      </span>
      <span className="flex flex-col min-w-0">
        <span className="text-sm font-medium leading-none">{label}</span>
        {sublabel && (
          <span
            className={`text-xs mt-1 truncate leading-none ${variant === "primary" ? "text-white/60" : "text-slate-400"}`}
          >
            {sublabel}
          </span>
        )}
      </span>
      <span className={`ml-auto shrink-0 opacity-40 group-hover:opacity-70 transition-opacity`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 12L10 8L6 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
