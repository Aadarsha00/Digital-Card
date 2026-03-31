"use client";

import { useState } from "react";
import { Pulse } from "@phosphor-icons/react";
import { SectionLabel, SectionTitle } from "@/components/ui/SectionHeading";

export function CtaSection() {
  const [handle, setHandle] = useState("");

  return (
    <div className="relative text-center px-5 py-24 max-w-[700px] mx-auto fade-up bg-pitch rounded-[28px] overflow-hidden">
      {/* Decorative Icon */}
      <Pulse
        size={70}
        weight="fill"
        className="absolute -top-8 -right-8 text-lime-700/20 blur-[1px] pointer-events-none select-none hidden md:block"
      />
      <SectionLabel className="text-lime-400/80 text-center">
        Free forever plan · No credit card
      </SectionLabel>
      <SectionTitle className="text-[clamp(2.2rem,4vw,3.4rem)] ">
        Your page is waiting.
        <br />
        Claim it now.
      </SectionTitle>
      <p className="text-black/60 text-[0.95rem] mt-4 leading-relaxed">
        Join thousands already using bitsfolio.page to share smarter, connect
        faster, and never lose a contact again.
      </p>

      {/* Claim row */}
      <div className="flex items-center bg-white/90 border-[1.5px] border-lime-400/40 rounded-full overflow-hidden max-w-[400px] mx-auto mt-9 shadow-lg">
        <span className="pl-5 text-sm text-lime-700 font-medium whitespace-nowrap">
          bitsfolio.page/
        </span>
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          placeholder="yourname"
          className="flex-1 border-none bg-transparent py-3.5 px-3 text-sm font-syne font-bold text-pitch placeholder-black/30 min-w-0"
        />
        <button className="bg-lime-500 hover:bg-lime-600 text-pitch border-none cursor-pointer px-5 py-3.5 font-syne font-bold text-sm transition-colors whitespace-nowrap">
          Claim →
        </button>
      </div>

      <p className="text-xs text-black/40 mt-3">
        Free · Takes 60 seconds · No credit card needed
      </p>

      {/* Trusted by row */}
    </div>
  );
}
