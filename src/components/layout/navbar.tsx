"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavItems,
} from "@/components/ui/resizable-navbar";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Features", link: "/features" },
  { name: "Examples", link: "/examples" },
  { name: "Pricing", link: "/pricing" },
  { name: "Help", link: "/contact" },
];

export function NavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleBookCallButtonPress = () => {
    router.push("/contact");
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navLinks} />
        <div className="flex items-center gap-2">
          <NavbarButton
            onClick={handleBookCallButtonPress}
            className="rounded-full text-white dark:text-black"
            variant="primary"
          >
            Book a call
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navLinks.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-xl px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-foreground"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}

          <div className="mt-2 flex w-full flex-col gap-3">
            <NavbarButton
              onClick={handleBookCallButtonPress}
              variant="primary"
              className="w-full rounded-full"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
