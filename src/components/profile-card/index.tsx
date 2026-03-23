"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardData } from "@/types/card";
import ContactButton from "@/components/contact-button";
import SocialLinks from "@/components/social-links";

interface ProfileCardProps {
  card: CardData;
}

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.17 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

function generateInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function generateVCF(card: CardData): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${card.name}`,
    // N: field — structured as Last;First
    `N:${card.name.split(" ").slice(1).join(" ")};${card.name.split(" ")[0]};;;`,
    `TITLE:${card.role}`,
    `ORG:${card.company}`,
    `EMAIL;TYPE=INTERNET,PREF:${card.email}`,
    // KEY FIX: TEL needs TYPE=CELL or phones won't save it as a number
    `TEL;TYPE=CELL,VOICE:${card.phone}`,
    card.portfolio ? `URL:${card.portfolio}` : "",
    card.linkedin  ? `X-SOCIALPROFILE;TYPE=linkedin:${card.linkedin}` : "",
    card.github    ? `X-SOCIALPROFILE;TYPE=github:${card.github}` : "",
    card.twitter   ? `X-SOCIALPROFILE;TYPE=twitter:${card.twitter}` : "",
    `NOTE:${card.role} at ${card.company}`,
    "END:VCARD",
  ].filter(Boolean);

  return lines.join("\r\n") + "\r\n";
}

export default function ProfileCard({ card }: ProfileCardProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Push a duplicate history entry so the first Back press just stays here
    // instead of going to a blank /card or home page.
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  function handleDownloadVCF() {
    const vcf = generateVCF(card);
    const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${card.name.replace(/\s+/g, "_")}.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div
      className={`
        w-full max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden
        transition-all duration-500 ease-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="h-1.5 w-full bg-linear-to-r from-slate-800 via-slate-700 to-slate-900" />

      <div className="px-6 pt-8 pb-6 space-y-7">
        <div className="flex flex-col items-center gap-5">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
            {card.company}
          </p>
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 ring-4 ring-white shadow-lg">
              {card.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={card.avatar} alt={card.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white text-2xl font-semibold tracking-tight">
                  {generateInitials(card.name)}
                </div>
              )}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-semibold text-slate-900 tracking-tight">{card.name}</h1>
            <p className="text-sm text-slate-500 mt-1">{card.role}</p>
          </div>
        </div>

        <div className="border-t border-slate-100" />

        <div className="space-y-2.5">
          <ContactButton href={`mailto:${card.email}`} icon={<EmailIcon />} label="Send Email" sublabel={card.email} variant="primary" />
          <ContactButton href={`tel:${card.phone}`} icon={<PhoneIcon />} label="Call" sublabel={card.phone} />
          {card.portfolio && (
            <ContactButton href={card.portfolio} icon={<GlobeIcon />} label="Portfolio" sublabel={new URL(card.portfolio).hostname} external />
          )}
          {card.linkedin && (
            <ContactButton href={card.linkedin} icon={<LinkedInIcon />} label="LinkedIn" sublabel="View Profile" external />
          )}
        </div>

        <SocialLinks linkedin={card.linkedin} github={card.github} twitter={card.twitter} portfolio={card.portfolio} />

        <div className="border-t border-slate-100" />

        <button
          onClick={handleDownloadVCF}
          className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-all duration-200 group"
        >
          <span className="group-hover:scale-110 transition-transform duration-200">
            <DownloadIcon />
          </span>
          Save to Contacts
        </button>
      </div>
    </div>
  );
}