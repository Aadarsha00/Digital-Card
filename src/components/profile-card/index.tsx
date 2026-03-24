"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardData } from "@/types/card";
import ContactButton from "@/components/contact-button";
import SocialLinks from "@/components/social-links";
import { DownloadIcon, LinkedinLogoIcon, LinkIcon, MailboxIcon, PhoneCallIcon } from "@phosphor-icons/react";

interface ProfileCardProps {
  card: CardData;
}



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
    card.instagram   ? `X-SOCIALPROFILE;TYPE=instagram:${card.instagram}` : "",
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
                <img src={card.avatar} alt={card.name} className="w-full h-full object-cover object-top" />
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
          <ContactButton href={`mailto:${card.email}`} icon={<MailboxIcon />} label="Send Email" sublabel={card.email} variant="primary" />
          <ContactButton href={`tel:${card.phone}`} icon={<PhoneCallIcon />} label="Call" sublabel={card.phone} />
          {card.portfolio && (
            <ContactButton href={card.portfolio} icon={<LinkIcon />} label="Portfolio" sublabel={new URL(card.portfolio).hostname} external />
          )}
          {card.linkedin && (
            <ContactButton href={card.linkedin} icon={<LinkedinLogoIcon />} label="LinkedIn" sublabel="View Profile" external />
          )}
        </div>

        <SocialLinks  github={card.github} instagram={card.instagram} />

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