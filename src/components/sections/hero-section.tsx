"use client";

import { useState } from "react";

import { ArrowRightIcon } from "@phosphor-icons/react";
import Beams from "../Beams";

export const HeroSection = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username) return;
    window.location.href = `/card/${username}`;
  };

  return (
    <div className="relative min-h-screen bg-[#C9FF47] flex items-center justify-center font-satoshi overflow-x-hidden rounded-b-[2rem] shadow-xl ">
      {/* Beams background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none rounded-b-[2rem] overflow-hidden">
        <Beams
          beamNumber={13}
          lightColor="#C9FF47"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
        />
      </div>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-24 px-4 md:px-0 relative z-10">
        <h1
          className="font-syne font-black leading-[1.05] tracking-[-0.03em] text-white text-center"
          style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)" }}
        >
          One link.
          <br />
          All of <span className="text-[#cff947]">you</span>.
        </h1>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-sm text-center mt-6">
          Share your identity, socials, and contact in a single minimal page.{" "}
          <span className="text-white font-semibold">bitsfolio.page</span>
        </p>
        <form
          className="flex items-center gap-3 w-full max-w-md bg-white border-2 border-transparent rounded-full pl-6 py-4 shadow-md mt-10 mb-4 transition-all duration-200 focus-within:border-[#0A0A0A]/20 focus-within:shadow-2xl"
          onSubmit={handleSubmit}
        >
          <span className="text-[#A3A3A3] text-lg md:text-xl select-none flex items-center gap-1">
            bitsfolio.page/
          </span>
          <div className="relative flex-1">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="w-full bg-transparent outline-none border-none text-[#0A0A0A] text-lg md:text-xl font-semibold placeholder:text-[#0A0A0A]/30 tracking-wide px-2 pr-16 py-2"
              autoComplete="off"
              minLength={2}
              maxLength={32}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#C9FF47] text-[#0A0A0A] rounded-full flex items-center justify-center shadow-lg hover:bg-[#b6e96b] transition-colors"
              style={{ zIndex: 2 }}
            >
              <ArrowRightIcon size={28} />
            </button>
          </div>
        </form>
        <div className="text-xs text-white/50 mb-2 mt-2">
          Pick your unique username and get started instantly.
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[0.85rem] text-white/60 hover:text-white transition-colors no-underline w-fit group mt-2"
        >
          Find Out More
          <span
            className="w-5 h-5 border border-[#0A0A0A]/35 rounded-full flex items-center justify-center text-[0.7rem]"
            style={{ display: "inline-flex" }}
          >
            ↓
          </span>
        </a>
      </div>
    </div>
  );
};
