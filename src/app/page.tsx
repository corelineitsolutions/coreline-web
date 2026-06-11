import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechStack } from "@/components/home/TechStack";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CombinedFAQCTA } from "@/components/home/CombinedFAQCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://corelineitsolutions.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <TrustSection />
      <ServicesSection />
      <TechStack />
      <PortfolioSection />
      <WhyChooseUs />
      <Testimonials />
      <CombinedFAQCTA />
    </>
  );
}
