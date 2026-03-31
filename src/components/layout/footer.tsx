import {
  XLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";

const FOOTER_LINKS = {
  Product: ["Features", "How it works", "Pricing", "Changelog"],
  Company: ["About", "Ctrl Bits", "Privacy", "Terms"],
};

const SOCIAL_ICONS = [
  { Icon: XLogo, label: "X / Twitter" },
  { Icon: LinkedinLogo, label: "LinkedIn" },
  { Icon: GithubLogo, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-pitch text-white pt-16 pb-10 px-5 md:px-10 mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand column */}
          <div>
            <div className="font-syne text-xl font-extrabold mb-3">
              bits
              <span className="bg-lime text-pitch rounded-md px-[7px] py-[1px] mx-0.5">
                folio
              </span>
              .page
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[260px]">
              Your digital identity. One link. Built for real contact exchange —
              not just clicks.
            </p>
            <div className="flex gap-2.5 mt-6">
              {SOCIAL_ICONS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.08] flex items-center justify-center text-white hover:bg-lime hover:text-pitch transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-syne font-bold text-xs tracking-[0.06em] uppercase text-white/35 mb-4">
                {heading}
              </h4>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/65 text-sm mb-2.5 hover:text-lime transition-colors no-underline"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-syne font-bold text-xs tracking-[0.06em] uppercase text-white/35 mb-4">
              Stay updated
            </h4>
            <div className="flex mt-1">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.07] border border-white/10 border-r-0 rounded-l-xl px-3.5 py-2.5 text-white text-sm placeholder-white/30 font-dm"
              />
              <button className="bg-lime text-pitch border-none rounded-r-xl px-3.5 py-2.5 cursor-pointer font-bold text-sm hover:bg-lime-dim transition-colors">
                →
              </button>
            </div>
            <p className="text-xs text-white/30 mt-2.5">
              No spam. Just product news.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-7 flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.82rem] text-white/30">
          <span>© 2025 bitsfolio.page — a Ctrl Bits product</span>
          <span>Made with ⚡ in Nepal</span>
        </div>
      </div>
    </footer>
  );
}
