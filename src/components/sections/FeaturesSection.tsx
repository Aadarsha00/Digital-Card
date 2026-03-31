import {
  IdentificationCard,
  Link,
  ShareNetwork,
  FloppyDisk,
  Lightning,
  ChartBar,
} from "@phosphor-icons/react/dist/ssr";
import {
  SectionLabel,
  SectionTitle,
  SectionSub,
} from "@/components/ui/SectionHeading";
import { JSX, type ReactNode } from "react";
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

function FeatureCard({
  title,
  description,
  linkLabel,
}: FeatureCardProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 px-2 py-8 md:px-6 md:py-12 bg-transparent">
      <h2 className="font-syne font-bold text-lg md:text-xl text-lime-700 uppercase mb-1">
        {title}
      </h2>
      <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-1">
        {description}
      </div>
      <div>
        <a
          href="#"
          className="text-lime-700 font-semibold text-sm md:text-base underline underline-offset-2 hover:text-lime-900 transition-colors"
        >
          {linkLabel}
        </a>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative pt-24 pb-16 bg-linear-to-b from-[#f7ffe7] via-[#fafff0] to-white/80"
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-lime/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime/10 rounded-full blur-2xl opacity-50" />
      </div>
      {/* Header */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-end max-w-6xl mx-auto mb-16 px-5 md:px-10 fade-up">
        <div>
          <SectionLabel className="text-lime-700">What you get</SectionLabel>
          <SectionTitle>
            Everything to share
            <br />
            your identity in seconds
          </SectionTitle>
        </div>
        <SectionSub>
          bitsfolio.page isn't just a link-in-bio. It's a full contact exchange
          system designed for the way real networking happens.
        </SectionSub>
      </div>

      {/* Grid with both horizontal and vertical dashed dividers, no card UI */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t-2 border-l-2 border-dashed border-lime-200 px-0 md:px-0 max-w-6xl mx-auto">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className="fade-up flex flex-col h-full border-b-2 border-r-2 border-dashed border-lime-200 bg-transparent"
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
}
