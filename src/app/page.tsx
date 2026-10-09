import React from "react";
import { CosmicBackground } from "@/components/CosmicBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BusinessCategories } from "@/components/BusinessCategories";
import { BrandShowcase } from "@/components/BrandShowcase";
import { ProblemSection } from "@/components/ProblemSection";
import { AIEmployee } from "@/components/AIEmployee";
import { AIEmployeeSlider } from "@/components/AIEmployeeSlider";
import { AIEmployeeCapabilities } from "@/components/AIEmployeeCapabilities";
import { CreativeStudio } from "@/components/CreativeStudio";
import { Industries } from "@/components/Industries";
import { Platform } from "@/components/Platform";
import { CustomerWebsite } from "@/components/CustomerWebsite";
import { AIMarketingSection } from "@/components/AIMarketingSection";
import { GrowthLoop } from "@/components/GrowthLoop";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyBizGalaxy } from "@/components/WhyBizGalaxy";
import { FutureVision } from "@/components/FutureVision";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { OnboardingProvider } from "@/context/OnboardingContext";
import { RegisterModal } from "@/components/RegisterModal";
import { WhatsAppEnquiryModal } from "@/components/WhatsAppEnquiryModal";

export default function Home() {
  return (
    <OnboardingProvider>
      <div className="relative min-h-screen bg-[#06050b] text-[#f8fafc] overflow-x-hidden selection:bg-purple-600 selection:text-white">
        {/* Dynamic Cosmic Background */}
        <CosmicBackground />

        {/* Sticky Navigation */}
        <Navbar />

        <main className="relative z-10 flex flex-col">
          {/* Hero Section */}
          <Hero />

          {/* Quick Business Strip */}
          <BusinessCategories />

          {/* Live Brands Powered & AI Reel Showcase (Inspired by Digital Decodes) */}
          <BrandShowcase />

          {/* Problem Section */}
          <ProblemSection />

          {/* AI Employee Section (Meet Veyra) */}
          <AIEmployee />

          {/* Interactive AI Employee Scrolling Slider Showcase */}
          <AIEmployeeSlider />

          {/* AI Employee Capabilities */}
          <AIEmployeeCapabilities />

          {/* AI Creative & Content Studio: 9:16 Reels, Posters, Local SEO (Inspired by Digital Decodes) */}
          <CreativeStudio />

          {/* Built for Your Business / 12 Local Industries */}
          <Industries />

          {/* Owner Dashboard Preview & Business Platform */}
          <Platform />

          {/* Customer Website Engine */}
          <CustomerWebsite />

          {/* AI Marketing Section */}
          <AIMarketingSection />

          {/* Business Growth Loop (Cosmic Flywheel) */}
          <GrowthLoop />

          {/* How BizGalaxy Works (01 REGISTER -> 02 SET UP -> 03 LAUNCH -> 04 GROW) */}
          <HowItWorks />

          {/* Why BizGalaxy (Manage, Understand, Grow) */}
          <WhyBizGalaxy />

          {/* Future Vision */}
          <FutureVision />

          {/* Pricing (SaaS OS + Content Studio Plans & Add-ons) */}
          <Pricing />

          {/* FAQ */}
          <FAQ />

          {/* Final CTA */}
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modals */}
        <RegisterModal />
        <WhatsAppEnquiryModal />
      </div>
    </OnboardingProvider>
  );
}
