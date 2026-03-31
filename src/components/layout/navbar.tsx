import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#usecases", label: "Use cases" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 bg-off-white/85 backdrop-blur-md border-b border-black/[0.06]">
      {/* Brand */}
      <div className="font-syne text-[1.15rem] font-extrabold tracking-[-0.03em] flex items-center gap-1.5">
        bits
        <span className="bg-lime text-pitch rounded-md px-[7px] py-[1px]">
          folio
        </span>
        .page
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-pitch text-sm font-medium opacity-65 hover:opacity-100 transition-opacity no-underline font-dm"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button
          href="#"
          variant="ghost"
          className="hidden sm:inline-flex py-2.5 px-5"
        >
          Log in
        </Button>
        <Button href="#" variant="dark" className="py-2.5 px-5">
          Claim your page →
        </Button>
      </div>
    </nav>
  );
}
