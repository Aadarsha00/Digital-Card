import { Footer } from "@/components/layout/footer";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { CtaSection } from "@/components/sections/CtaSection";
import { FadeUpInit } from "@/components/ui/FadeUpInit";
import { HeroSection } from "@/components/sections/hero-section";
import { NavigationMenu } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ComparisonSection />
        <UseCasesSection />
        <PromoBanner />
        <CtaSection />
      </main>
      <Footer />
      <FadeUpInit />
    </>
  );
}
