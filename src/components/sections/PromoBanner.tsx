"use client";
import { Pulse } from "@phosphor-icons/react";
import { Button } from "../ui/button";

export function PromoBanner() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 pb-20">
      <div className="bg-pitch rounded-[28px] px-8 md:px-14 py-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center relative overflow-hidden promo-glow fade-up">
        {/* Decorative Icon */}
        <Pulse
          size={80}
          weight="fill"
          className="absolute -top-8 -right-8 text-lime-700/20 blur-[1px] pointer-events-none select-none hidden md:block"
        />

        {/* Left */}
        <div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.6rem)]  leading-[1.15] tracking-[-0.03em] mb-5">
            Keep your finger on
            <br />
            your <em className="not-italic text-lime">identity pulse.</em>
          </h2>
          <p className="text-black/50 text-[0.95rem] leading-relaxed max-w-105 mb-6">
            One link. Every platform. Saved by every contact. bitsfolio.page is
            the last digital card you'll ever need.
          </p>
          {/* Trusted by row */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-xs text-black/50 font-semibold tracking-wide">
              Trusted by:
            </span>
            <span className="text-black/70 text-xs font-bold">founders</span>
            <span className="text-black/70 text-xs font-bold">creators</span>
            <span className="text-black/70 text-xs font-bold">sales pros</span>
            <span className="text-black/70 text-xs font-bold">students</span>
            <span className="text-black/70 text-xs font-bold">and more</span>
          </div>
        </div>

        {/* Right — CTAs */}
        <div className="flex flex-row lg:flex-col gap-3 min-w-50">
          <Button className="text-base px-8 py-8 rounded-full bg-lime-500 hover:bg-lime-600 text-white font-space-grotesk uppercase font-bold shadow-lg border-0">
            Claim your page
          </Button>
          <Button
            variant="outline"
            className="text-base px-8 py-8 rounded-full border hover:border-lime-600 border-lime-500 hover:bg-lime-600 text-black hover:text-white font-space-grotesk uppercase font-bold shadow-lg "
          >
            See an example →
          </Button>
        </div>
      </div>
    </div>
  );
}
