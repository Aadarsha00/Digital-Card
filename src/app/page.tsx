import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { CtaSection } from "@/components/sections/CtaSection";
import { FadeUpInit } from "@/components/ui/FadeUpInit";

export default function Home() {
  return (
    <>
      <Navbar />
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
