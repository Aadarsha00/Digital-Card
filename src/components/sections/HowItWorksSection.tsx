"use client";
import {
  UserPlus,
  PencilSimple,
  LinkSimple,
  Handshake,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@phosphor-icons/react";

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
    description:
      "Claim bitsfolio.page/you — your permanent digital identity link. Yours forever.",
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
    <div className="flex flex-col gap-2 px-0 py-2 md:px-2 md:py-4 bg-transparent">
      <p className="font-space-grotesk font-extrabold text-5xl  leading-none mb-2">
        {num}
      </p>
      <div className="w-10 h-10 flex items-center justify-center text-lime-500 mb-2">
        {icon}
      </div>
      <h3 className="font-syne font-bold text-lime-600 text-base mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how" className="bg-pitch px-5 md:px-10 py-24 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-xs font-bold tracking-[0.12em] uppercase  mb-4">
          Simple by design
        </p>
        <h2 className="font-syne font-extrabold text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.12] tracking-[-0.04em]  max-w-130 mb-16">
          Live in 5 minutes.
          <br />
          Share <span className="text-lime-500">forever.</span>
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
          <Button className="text-base px-8 py-8 rounded-full bg-lime-500 hover:bg-lime-600 text-white font-space-grotesk uppercase font-bold shadow-lg border-0">
            Claim yours now{" "}
            <ArrowRightIcon size={16} weight="regular" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
