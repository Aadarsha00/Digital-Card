interface SocialLinksProps {
  linkedin?: string;
  github?: string;
  instagram?: string;
  portfolio?: string;
}

import { InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon, LinkIcon } from "@phosphor-icons/react";

export default function SocialLinks({ linkedin, github, instagram, portfolio }: SocialLinksProps) {
  const links = [
    { href: linkedin, icon: <LinkedinLogoIcon size={32} />, label: "LinkedIn" },
    { href: github, icon: <GithubLogoIcon size={32} />, label: "GitHub" },
    { href: instagram, icon: <InstagramLogoIcon size={32} />, label: "Instagram" },
    { href: portfolio, icon: <LinkIcon size={32} />, label: "Website" },
  ].filter((l) => l.href);

  if (links.length === 0) return null;

  return (
    <div className="flex items-center justify-center gap-3">
      {links.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-100 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 shadow-sm hover:shadow active:scale-95"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
