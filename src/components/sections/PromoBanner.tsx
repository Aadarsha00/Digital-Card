import { Button } from "@/components/ui/Button";

export function PromoBanner() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 pb-20">
      <div className="bg-pitch rounded-[28px] px-8 md:px-14 py-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center relative overflow-hidden promo-glow fade-up">
        {/* Left */}
        <div>
          <h2 className="font-syne font-extrabold text-[clamp(1.8rem,3vw,2.6rem)] text-white leading-[1.15] tracking-[-0.03em] mb-5">
            Keep your finger on
            <br />
            your{" "}
            <em className="not-italic text-lime">identity pulse.</em>
          </h2>
          <p className="text-white/50 text-[0.95rem] leading-relaxed max-w-[420px]">
            One link. Every platform. Saved by every contact. bitsfolio.page is the last
            digital card you'll ever need.
          </p>
        </div>

        {/* Right — CTAs */}
        <div className="flex flex-row lg:flex-col gap-3 min-w-[200px]">
          <Button href="#" variant="lime" className="justify-center text-[0.95rem] px-6 py-4 flex-1 lg:flex-none">
            Claim your page
          </Button>
          <Button
            href="#"
            variant="ghost-white"
            className="justify-center text-[0.95rem] px-6 py-4 flex-1 lg:flex-none"
          >
            See an example →
          </Button>
        </div>
      </div>
    </div>
  );
}
