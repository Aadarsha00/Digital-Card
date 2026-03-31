import { UserPlus, PencilSimple, LinkSimple, Handshake } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import type { ReactNode } from "react";

interface Step {
  num: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    num: "01",
    icon: <UserPlus size={20} weight="bold" />,
    title: "Sign up free",
    description:
      "Create your account in seconds. No credit card, no setup fees. Just your email and you're in.",
  },
  {
    num: "02",
    icon: <PencilSimple size={20} weight="bold" />,
    title: "Build your profile",
    description:
      "Add your name, photo, contact info, bio, and all your social & payment links. Takes about 3 minutes.",
  },
  {
    num: "03",
    icon: <LinkSimple size={20} weight="bold" />,
    title: "Get your URL",
    description: "Claim bitsfolio.page/you — your permanent digital identity link. Yours forever.",
    
  },
  {
    num: "04",
    icon: <Handshake size={20} weight="bold" />,
    title: "Share & connect",
    description:
      "Drop your link anywhere. Visitors tap, see your card, call, email, or save your contact — instantly.",
  },
];

function StepCard({ num, icon, title, description }: Step) {
  return (
    <div className="bg-white/[0.05] border border-white/[0.08] rounded-[20px] p-7 relative">
      <div className="font-syne font-extrabold text-5xl text-lime opacity-25 leading-none mb-4">
        {num}
      </div>
      <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center text-lime mb-4">
        {icon}
      </div>
      <h3 className="font-syne font-bold text-white text-base mb-2.5">{title}</h3>
      <p className="text-sm text-white/45 leading-relaxed">{description}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how" className="bg-pitch px-5 md:px-10 py-24 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-xs font-bold tracking-[0.12em] uppercase font-syne text-lime/70 mb-4">
          Simple by design
        </p>
        <h2 className="font-syne font-extrabold text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.12] tracking-[-0.04em] text-white max-w-[520px] mb-16">
          Live in 5 minutes.
          <br />
          Share forever.
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="fade-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <StepCard {...step} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button href="#" variant="lime" className="text-base px-9 py-4">
            Start for free — it's yours →
          </Button>
        </div>
      </div>
    </section>
  );
}
