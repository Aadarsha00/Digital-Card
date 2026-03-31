import {
  IdentificationCard,
  Link,
  ShareNetwork,
  FloppyDisk,
  Lightning,
  ChartBar,
} from "@phosphor-icons/react/dist/ssr";
import { SectionLabel, SectionTitle, SectionSub } from "@/components/ui/SectionHeading";
import { type ReactNode } from "react";
import clsx from "clsx";

type CardVariant = "default" | "accent" | "lime";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  linkLabel: string;
  variant: CardVariant;
}

const FEATURES: Feature[] = [
  {
    icon: <IdentificationCard size={22} weight="fill" />,
    title: "Digital Contact Card",
    description:
      "Name, photo, bio, phone, email, location — all in a modern web-native card that anyone can save to their phone instantly.",
    linkLabel: "Learn more →",
    variant: "default",
  },
  {
    icon: <Link size={22} weight="bold" />,
    title: "Link Aggregation",
    description:
      "Instagram, LinkedIn, GitHub, your portfolio, payment links — all in one clean, mobile-optimized hub. No more bio juggling.",
    linkLabel: "Learn more →",
    variant: "accent",
  },
  {
    icon: <ShareNetwork size={22} weight="fill" />,
    title: "One-Tap Sharing",
    description:
      "Share via URL, QR code, or NFC tap. Works everywhere — events, calls, email signatures, or a simple copy-paste.",
    linkLabel: "Learn more →",
    variant: "default",
  },
  {
    icon: <FloppyDisk size={22} weight="fill" />,
    title: "Contact Saving",
    description:
      "Visitors save your contact directly to their phone — no form fills, no friction. One tap and you're in their address book.",
    linkLabel: "Learn more →",
    variant: "lime",
  },
  {
    icon: <Lightning size={22} weight="fill" />,
    title: "Instant Load",
    description:
      "Zero clutter, mobile-first, sub-second load. Open → Understand → Act within seconds. Designed for real-world speed.",
    linkLabel: "Learn more →",
    variant: "default",
  },
  {
    icon: <ChartBar size={22} weight="fill" />,
    title: "Analytics (Coming Soon)",
    description:
      "See who's viewing your page, which links get clicked, and where your connections are coming from. Your micro-CRM.",
    linkLabel: "Join waitlist →",
    variant: "default",
  },
];

interface FeatureCardProps extends Feature {}

function FeatureCard({ icon, title, description, linkLabel, variant }: FeatureCardProps) {
  const wrapperCls = clsx(
    "rounded-[20px] p-8 border transition-all duration-200 hover:-translate-y-1",
    {
      "bg-white border-black/[0.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]":
        variant === "default",
      "bg-pitch text-white border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]":
        variant === "accent",
      "bg-lime text-pitch border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]":
        variant === "lime",
    }
  );

  const iconBg = clsx("w-12 h-12 rounded-[14px] flex items-center justify-center mb-5", {
    "bg-lime": variant === "default",
    "bg-lime/[0.12]": variant === "accent",
    "bg-black/10": variant === "lime",
  });

  const descCls = clsx("text-sm leading-relaxed opacity-65", {
    "text-white": variant === "accent",
  });

  const linkCls = clsx(
    "inline-flex items-center gap-1.5 mt-5 text-[0.82rem] font-bold font-syne opacity-75",
    {
      "text-pitch": variant === "default" || variant === "lime",
      "text-lime opacity-100": variant === "accent",
    }
  );

  return (
    <div className={wrapperCls}>
      <div className={iconBg}>{icon}</div>
      <h3 className="font-syne font-bold text-[1.05rem] mb-2.5">{title}</h3>
      <p className={descCls}>{description}</p>
      <a href="#" className={linkCls}>
        {linkLabel}
      </a>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="pt-20 pb-10">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end max-w-6xl mx-auto mb-14 px-5 md:px-10 fade-up">
        <div>
          <SectionLabel>What you get</SectionLabel>
          <SectionTitle>
            Everything to share
            <br />
            your identity in seconds
          </SectionTitle>
        </div>
        <SectionSub>
          bitsfolio.page isn't just a link-in-bio. It's a full contact exchange system designed
          for the way real networking happens.
        </SectionSub>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10 max-w-6xl mx-auto">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className="fade-up"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
}
