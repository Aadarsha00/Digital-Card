"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CardData } from "@/types/card";
import { DownloadIcon, WhatsappLogoIcon } from "@phosphor-icons/react";

interface ProfileCardProps {
  card: CardData;
}

function generateInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

async function imageToBase64(url: string): Promise<string> {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(",")[1]);
    reader.readAsDataURL(blob);
  });
}

/* ── Sub-components ─────────────────────────────────────────── */

function ContactRow({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      title={`${label}: ${value}`}
      className="inline-flex items-center justify-center min-w-11 h-9 px-2 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 transition-colors duration-150"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        {icon}
      </svg>
    </a>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className="flex flex-col items-center gap-1 no-underline text-slate-400 hover:text-slate-600 transition-colors">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
      <span className="text-[10px] text-slate-400">{label}</span>
    </a>
  );
}

export default function ProfileCard({ card }: ProfileCardProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  async function handleDownloadVCF() {
    const res = await fetch("/api/vcf", {
      method: "POST",
      body: JSON.stringify(card),
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${card.name.replace(/\s+/g, "_")}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const whatsappMessage = encodeURIComponent(`Hi ${card.name}, I came across your digital card and would love to connect. Can we exchange contact details?`);
  const cleanPhone = card.phone.replace(/[^\d]/g, "");
  const exchangeHref = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${whatsappMessage}`
    : `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div
      className={`w-full max-w-sm mx-auto transition-all duration-500 ease-out  ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="w-full relative bg-white rounded-[26px] border border-[#172482] overflow-hidden shadow-lg">

        {/* ── Hero photo ── */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 2.6", background: "linear-gradient(135deg,#000139 0%,#172482 100%)" }}>
          {card.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={card.avatar}
              alt={card.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold bg-slate-700">
              {generateInitials(card.name)}
            </div>
          )}

          {/* Bottom vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/55 to-transparent" />

        </div>

        {/* ── Content ── */}
        <div className="px-4 pt-4 pb-6 space-y-4">
          <p className="m-0 text-5xl uppercase text-center font-extrabold text-black tracking-tight font-space-grotesk">
            {card.name}
          </p>
          <p className="mt-1 text-xs text-center text-black/70 font-semibold font-space-grotesk">
            {card.role} | {card.company}
          </p>
          {/* Bio */}
          {card.description && (
            <p className="text-[13px] leading-relaxed text-slate-500 font-space-grotesk text-center">{card.description}</p>
          )}

          {/* Contact pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ContactRow
              href={`mailto:${card.email}`}
              label="Email"
              value={card.email}
              icon={
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor" />
              }
            />
            <ContactRow
              href={`tel:${card.phone}`}
              label="Phone"
              value={card.phone}
              icon={
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
              }
            />
            {card.portfolio && (
              <ContactRow
                href={card.portfolio}
                label="Portfolio"
                value={card.portfolio.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                icon={
                  <path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" fill="currentColor" />
                }
              />
            )}
            {card.linkedin && (
              <ContactRow
                href={card.linkedin}
                label="LinkedIn"
                value={card.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "").replace(/\/$/, "")}
                icon={
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0L22.225 0Z" fill="currentColor" />
                }
              />
            )}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={handleDownloadVCF}
              className="flex-1 h-11 rounded-[14px] bg-[#E8261A] text-white text-[13px] font-semibold flex items-center justify-center gap-1.5 hover:bg-red-700 active:scale-[0.97] transition-all duration-150"
            >
              <DownloadIcon size={18} />
              Save contact
            </button>
            <a
              href={exchangeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-11 rounded-[14px] border border-green-500 text-green-600 bg-white text-[13px] font-semibold flex items-center justify-center gap-1.5 hover:bg-green-50 active:scale-[0.97] transition-all duration-150"
            >
              <WhatsappLogoIcon size={18} />
              Text on WhatsApp
            </a>
          </div>

          {/* Social row */}
          {(card.github || card.instagram) && (
            <div className="border-t border-slate-100 pt-4 flex justify-center gap-6">
              {card.github && (
                <SocialIcon href={card.github} label="GitHub">
                  <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" />
                </SocialIcon>
              )}
              {card.instagram && (
                <SocialIcon href={card.instagram} label="Instagram">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </SocialIcon>
              )}
            </div>
          )}
        </div>

      </div>
      </div>
  );  }
