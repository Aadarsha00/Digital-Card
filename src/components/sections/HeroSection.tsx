import { Button } from "@/components/ui/Button";
import { ProfileCardMockup } from "@/components/ui/ProfileCardMockup";
import { QrIcon } from "@/components/ui/QrIcon";

export function HeroSection() {
  return (
    <section className="bg-off-white pt-0">
      <div className="min-h-screen pt-[140px] pb-20 px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pitch text-lime rounded-full px-4 py-1.5 text-[0.78rem] font-bold tracking-[0.08em] uppercase mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-dot" />
            Live · Your identity, one link
          </div>

          <h1 className="font-syne text-[clamp(2.8rem,5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.04em] mb-6">
            Your entire identity.{" "}
            <em className="not-italic bg-lime rounded-lg px-2.5 py-0.5 inline-block">
              One smart
            </em>{" "}
            link.
          </h1>

          <p className="text-[#555] text-base leading-relaxed max-w-[440px] mb-10">
            Stop sharing scattered contacts. bitsfolio.page turns your name, socials, and contact
            info into a single beautiful page — built for real connection, not just clicks.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#" variant="dark" className="text-base px-7 py-3.5">
              🪄 Claim your page
            </Button>
            <Button href="#how" variant="ghost" className="text-base px-7 py-3.5">
              See how it works
            </Button>
          </div>

          {/* URL Preview */}
          <div className="mt-10 bg-white border border-gray-light rounded-xl px-5 py-3.5 inline-flex items-center gap-2.5 text-sm">
            <div>
              <div className="text-muted text-[0.78rem] font-medium">Your shareable link</div>
              <div className="font-syne font-bold text-[0.95rem] text-pitch">
                bitsfolio.page/<span className="text-lime-dim">yourname</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — visual */}
        <div className="relative flex justify-center items-center py-10 lg:py-0">
          {/* Float badge 1 */}
          <div className="absolute top-0 right-0 sm:-top-5 sm:-right-8 bg-lime rounded-2xl px-4 py-3 font-syne font-extrabold text-2xl shadow-lg animate-float-1 z-10">
            2.4k+
            <small className="block text-[0.65rem] font-semibold opacity-60 tracking-[0.05em]">
              Cards shared
            </small>
          </div>

          <ProfileCardMockup />

          {/* Float badge 2 — QR */}
          <div className="absolute bottom-4 left-0 sm:-bottom-0 sm:-left-10 bg-white rounded-[14px] px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.10)] flex items-center gap-3 animate-float-2 z-10">
            <QrIcon size={40} />
            <div>
              <div className="font-syne font-bold text-[0.82rem]">Share via QR</div>
              <div className="text-[0.7rem] text-muted">Instant scan &amp; save</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
