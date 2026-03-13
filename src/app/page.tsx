import { Header } from "@/components/Header";
import { SalesBanner } from "@/components/SalesBanner";
import { StickySalesCTA } from "@/components/StickySalesCTA";
import { SellaroWidget } from "@/components/SellaroWidget";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { PerformanceChart } from "@/components/PerformanceChart";
import { PortfolioChart } from "@/components/PortfolioChart";
import { MentorsSection } from "@/components/MentorsSection";
import { StrategiesSection } from "@/components/StrategiesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { InvestSection } from "@/components/InvestSection";
import { AppsSection } from "@/components/AppsSection";
import { PricingSection } from "@/components/PricingSection";
import { CommunityCards } from "@/components/CommunityCards";
import { DownloadCTA } from "@/components/DownloadCTA";

export default function Home() {
  return (
    <>
      <Header />
      <SalesBanner />
      <main>
        <Hero />
        <FeatureCards />
        <PerformanceChart />
        <PortfolioChart />
        <MentorsSection />
        <StrategiesSection />
        <CommunitySection />
        <InvestSection />
        <AppsSection />
        <PricingSection />
        <CommunityCards />
        <DownloadCTA />
      </main>
      <StickySalesCTA />
      <SellaroWidget />
      <Footer />
    </>
  );
}
