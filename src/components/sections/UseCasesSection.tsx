"use client";
import {
  Rocket,
  PaintBrush,
  Handshake,
  Briefcase,
  GraduationCap,
  ShoppingBag,
} from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionHeading";

interface UseCase {
  icon: ReactNode;
  title: string;
  description: string;
}

const USE_CASES: UseCase[] = [
  {
    icon: <Rocket size={28} weight="fill" className="text-lime-600" />,
    title: "Founders & Developers",
    description:
      "Replace your fragmented online presence with one link that shows who you are, what you've built, and how to reach you.",
  },
  {
    icon: <PaintBrush size={28} weight="fill" className="text-lime-600" />,
    title: "Freelancers & Creators",
    description:
      "Link your portfolio, social channels, and booking page — and let clients contact you or save your number in one tap.",
  },
  {
    icon: <Handshake size={28} weight="fill" className="text-lime-600" />,
    title: "Event & Conference Networking",
    description:
      "Show the QR code instead of handing out a card. Attendees scan, save your contact, and you stay in touch forever.",
  },
  {
    icon: <Briefcase size={28} weight="fill" className="text-lime-600" />,
    title: "Sales Professionals",
    description:
      "Drop your bitsfolio link in every email signature and WhatsApp message. Never chase someone to save your number again.",
  },
  {
    icon: <GraduationCap size={28} weight="fill" className="text-lime-600" />,
    title: "Students & Job Seekers",
    description:
      "Put it in your resume and email. Recruiters get your LinkedIn, portfolio, GitHub, and contact — instantly.",
  },
  {
    icon: <ShoppingBag size={28} weight="fill" className="text-lime-600" />,
    title: "Small Business Owners",
    description:
      "Connect your Instagram, website, eSewa, and phone number. Customers reach you the way they prefer, every time.",
  },
];

function UseCaseCard({ icon, title, description }: UseCase) {
  return (
    <div className="rounded-[20px] p-7 border-[1.5px] border-gray-light flex flex-col gap-3 transition-all duration-200 hover:border-lime-dim hover:-translate-y-0.5 group">
      <div className="mb-1">{icon}</div>
      <h3 className="font-syne font-bold text-base text-pitch">{title}</h3>
      <p className="text-sm text-[#666] leading-relaxed">{description}</p>
    </div>
  );
}

export function UseCasesSection() {
  return (
    <section id="usecases" className="px-5 md:px-10 pb-20 max-w-6xl mx-auto">
      <SectionLabel>Built for everyone</SectionLabel>
      <SectionTitle>Who uses bitsfolio?</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {USE_CASES.map((uc, i) => (
          <div
            key={uc.title}
            className="fade-up"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            <UseCaseCard {...uc} />
          </div>
        ))}
      </div>
    </section>
  );
}
