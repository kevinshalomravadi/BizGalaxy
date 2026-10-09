"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Play,
  Pause,
  ExternalLink,
  Instagram,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Eye,
  CheckCircle2,
  X,
  Volume2,
  Share2,
  Heart,
  Bot
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ClientBrand {
  id: string;
  name: string;
  category: string;
  type: "retail" | "fashion" | "services" | "salon_food";
  tagline: string;
  reelTitle: string;
  reelHook: string;
  reelScript: string;
  views: string;
  impactMetric: string;
  impactLabel: string;
  sampleHashtags: string[];
  gradient: string;
}

const BRANDS: ClientBrand[] = [
  {
    id: "9to9",
    name: "9 to 9 Dollar Store",
    category: "Retail Store",
    type: "retail",
    tagline: "Everything under one roof at factory prices",
    reelTitle: "3 Hidden Gems Under ₹99 You Didn't Know Existed",
    reelHook: "Stop buying expensive organizers until you see this ₹79 hack...",
    reelScript: "POV: You walked into 9 to 9 Dollar Store with ₹200 and left with your entire kitchen organized. Here are 3 viral home essentials restocked today!",
    views: "48.2k",
    impactMetric: "+38% Weekend Footfall",
    impactLabel: "Verified Store Analytics",
    sampleHashtags: ["#BudgetShopping", "#KitchenHacks", "#LocalStore", "#DollarStoreFinds"],
    gradient: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: "archies",
    name: "Archies Toys & Gift Gallery",
    category: "Toys & Gifting",
    type: "retail",
    tagline: "The happiness & surprise destination",
    reelTitle: "Top 5 Birthday Gift Hampers under ₹499",
    reelHook: "Running late for a birthday party? Archies has you covered in 5 minutes!",
    reelScript: "Unboxing our top-selling customised plush gift set. Comes with festive packaging and handwritten greeting cards ready in 10 minutes.",
    views: "62.4k",
    impactMetric: "120+ WhatsApp Orders",
    impactLabel: "Direct Customer Inquiries",
    sampleHashtags: ["#ArchiesGifts", "#BirthdayGifts", "#ToysStore", "#SurpriseGift"],
    gradient: "from-pink-500/20 to-rose-600/20",
  },
  {
    id: "laxons",
    name: "Laxons Baby World",
    category: "Kids & Infants",
    type: "retail",
    tagline: "Safe, premium & joyful baby gear",
    reelTitle: "Factory Sale: Strollers & Cot Walkthrough",
    reelHook: "New parents, here's how to save ₹4,000 on your first baby stroller...",
    reelScript: "Tested for 50kg, 1-hand folding, and orthopedic infant support. Walk into Laxons this weekend for our exclusive factory direct pricing!",
    views: "34.1k",
    impactMetric: "+44% Stroller Sales",
    impactLabel: "Weekly Inventory Velocity",
    sampleHashtags: ["#BabyWorld", "#BabyStroller", "#NewbornCare", "#Parenthood"],
    gradient: "from-sky-500/20 to-blue-600/20",
  },
  {
    id: "tanusri",
    name: "Tanusri Fashions",
    category: "Ethnic & Bridal Boutique",
    type: "fashion",
    tagline: "Handcrafted silks & designer party wear",
    reelTitle: "Pure Kanjeevaram Saree Drop — Limited Edition",
    reelHook: "The bridal collection everyone was waiting for has finally arrived...",
    reelScript: "Slow-motion drape of our hand-woven bridal gold border saree. Available in 6 royal festive palettes. Tap the WhatsApp link to reserve yours before stocks run out.",
    views: "91.5k",
    impactMetric: "45 Walk-ins in 48 Hours",
    impactLabel: "Store Footfall Spike",
    sampleHashtags: ["#BridalSaree", "#KanjeevaramSilk", "#BoutiqueFashion", "#WeddingWear"],
    gradient: "from-purple-500/20 to-fuchsia-600/20",
  },
  {
    id: "utsav",
    name: "Utsav Conventions",
    category: "Weddings & Conventions",
    type: "services",
    tagline: "Creating unforgettable grand celebrations",
    reelTitle: "360° Luxury Banquet & Stage Lighting Tour",
    reelHook: "Planning a 2026 wedding? Take a 20-second tour of your dream venue...",
    reelScript: "Centralized AC, 1,500 guest seating capacity, and dedicated bridal suites. Bookings for upcoming wedding season are now live on WhatsApp!",
    views: "55.7k",
    impactMetric: "18 High-Ticket Bookings",
    impactLabel: "Full Hall Reservations",
    sampleHashtags: ["#ConventionHall", "#WeddingVenue", "#GrandCelebration", "#BanquetHall"],
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    id: "syfulla",
    name: "Syfulla Real Estate",
    category: "Property & Lands",
    type: "services",
    tagline: "RERA approved gated villa communities",
    reelTitle: "Site Tour: 200 Sq Yard Prime Plots Ready to Construct",
    reelHook: "Why smart investors are securing plots in Highway Corridor this month...",
    reelScript: "40-ft blacktop roads, underground electricity, clubhouse access, and immediate registration. DM or WhatsApp for a free site visit cab.",
    views: "41.2k",
    impactMetric: "74 Verified Leads",
    impactLabel: "WhatsApp Inquiries",
    sampleHashtags: ["#RealEstate", "#PlotForSale", "#GatedCommunity", "#PropertyInvestment"],
    gradient: "from-indigo-500/20 to-violet-600/20",
  },
  {
    id: "apple_print",
    name: "Apple Digital Printers",
    category: "Printing & Signage",
    type: "services",
    tagline: "Ultra HD Flex, Glow Signs & Corporate Print",
    reelTitle: "Making a 3D LED Acrylic Glow Sign in 15 Seconds",
    reelHook: "Does your shopfront stand out at night? Watch this transformation...",
    reelScript: "Precision laser cut, weather-resistant acrylic, and energy-efficient Samsung LED modules. Elevate your brand signage in 24 hours.",
    views: "28.6k",
    impactMetric: "32 B2B Signage Deals",
    impactLabel: "New Business Clients",
    sampleHashtags: ["#LEDGlowSign", "#DigitalPrinting", "#SignageDesign", "#ShopBranding"],
    gradient: "from-cyan-500/20 to-blue-600/20",
  },
  {
    id: "royal_salon",
    name: "Royal Glow Salon & Spa",
    category: "Salon & Wellness",
    type: "salon_food",
    tagline: "Hair transformations & luxury skin therapy",
    reelTitle: "Frizzy Hair to Liquid Glass: Keratin Transformation",
    reelHook: "Watch this 3-hour hair transformation condensed into 15 seconds!",
    reelScript: "Say goodbye to humidity frizz. Royal Glow's botanical keratin infusion is currently 20% off for Tuesday & Wednesday bookings. Tap to claim!",
    views: "78.9k",
    impactMetric: "110+ New Appointments",
    impactLabel: "Recovered Downtime Slots",
    sampleHashtags: ["#KeratinTreatment", "#HairTransformation", "#SalonOffers", "#HairBotox"],
    gradient: "from-rose-500/20 to-pink-600/20",
  },
];

export function BrandShowcase() {
  const { openWhatsAppEnquiry } = useOnboarding();
  const [selectedBrand, setSelectedBrand] = useState<ClientBrand | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const filteredBrands =
    activeFilter === "all"
      ? BRANDS
      : BRANDS.filter((b) => b.type === activeFilter);

  return (
    <section id="brands" className="relative py-24 sm:py-32 border-b border-white/5 bg-[#080612]/70 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[400px] bg-purple-950/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Inspired by Digital Decodes "Brands we work with") */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Brands We Power
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Tap Any Brand to See the <br />
              <span className="text-gradient-purple-gold">AI Reels & Campaigns We Made.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              Real local businesses. Scripted, rendered, and published with AI to generate daily walk-ins and WhatsApp enquiries.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All Brands" },
            { id: "retail", label: "Retail & Gifts" },
            { id: "fashion", label: "Fashion & Boutiques" },
            { id: "services", label: "Real Estate & Events" },
            { id: "salon_food", label: "Salon & Wellness" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-400/40"
                  : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredBrands.map((brand, idx) => (
            <div
              key={brand.id}
              onClick={() => {
                setSelectedBrand(brand);
                setIsPlaying(true);
              }}
              className="group relative cursor-pointer rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:from-purple-900/20 hover:to-white/[0.03] border border-white/10 hover:border-purple-400/50 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(124,58,237,0.2)] flex flex-col justify-between"
            >
              {/* Badge + Arrow */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-purple-300 border border-white/10">
                    {brand.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-purple-500/20 flex items-center justify-center text-zinc-400 group-hover:text-purple-300 transition-colors">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                  “{brand.reelTitle}”
                </p>
              </div>

              {/* Metric Footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {brand.impactMetric}
                </span>
                <span className="text-zinc-500 font-mono text-[11px]">
                  {brand.views} views
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Quick CTA Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0e0a1f] to-emerald-950/40 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                Want high-retention AI reels and posters for your store?
              </p>
              <p className="text-xs text-zinc-400">
                Send your business details on WhatsApp and get sample reel concepts in 3 hours.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              openWhatsAppEnquiry({
                service: "9:16 AI Reels & Posters",
                planName: "Business 15 Studio (₹5,999/mo)",
              })
            }
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire on WhatsApp (3-Hour Reply)</span>
          </button>
        </div>
      </div>

      {/* Interactive Reel & Campaign Simulator Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            onClick={() => setSelectedBrand(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-3xl bg-[#0d0a1b] border border-purple-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    {selectedBrand.name}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {selectedBrand.category}
                    </span>
                  </h4>
                  <p className="text-xs text-zinc-400">
                    AI Scripted & Produced Reel Showcase
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedBrand(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Split into Vertical 9:16 Video Simulator + Campaign Breakdown */}
            <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 md:grid-cols-5 gap-6">
              
              {/* Vertical 9:16 Phone Mockup (2 cols) */}
              <div className="md:col-span-2 flex flex-col items-center">
                <div className="relative w-full max-w-[240px] aspect-[9/16] rounded-3xl bg-black border-2 border-zinc-700/80 shadow-[0_0_30px_rgba(139,92,246,0.3)] overflow-hidden flex flex-col justify-between p-3.5 group">
                  
                  {/* Background Animated Gradient / Video Mock */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${selectedBrand.gradient} opacity-80`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                  {/* Top Phone Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] text-white/80">
                    <span className="font-mono">Reels</span>
                    <div className="flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse text-purple-300" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Center Playback Indicator */}
                  <div className="relative z-10 my-auto text-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mx-auto shadow-lg hover:scale-105 transition-transform"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>
                    <p className="text-[10px] font-mono text-purple-300 mt-2 bg-black/40 px-2 py-0.5 rounded-full inline-block">
                      {isPlaying ? "AI Voiceover Streaming..." : "Paused"}
                    </p>
                  </div>

                  {/* Right Action Icons (Like IG Reel) */}
                  <div className="absolute right-3 bottom-16 flex flex-col items-center gap-3 z-10 text-white text-[10px]">
                    <div className="flex flex-col items-center">
                      <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      <span>{selectedBrand.views.replace("k", "k")}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MessageSquare className="w-4 h-4" />
                      <span>324</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="relative z-10 text-left">
                    <p className="text-[11px] font-bold text-white leading-tight drop-shadow">
                      @{selectedBrand.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
                    </p>
                    <p className="text-[10px] text-zinc-200 mt-1 line-clamp-2 drop-shadow">
                      {selectedBrand.reelHook}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[9px] text-purple-300 bg-purple-950/60 backdrop-blur px-2 py-1 rounded-md border border-purple-500/20">
                      <Bot className="w-3 h-3 text-yellow-300" />
                      <span>Scripted by Veyra AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Case Study, Script & Deliverables (3 cols) */}
              <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
                <div>
                  {/* Results Metric Banner */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-zinc-400">
                        {selectedBrand.impactLabel}
                      </div>
                      <div className="text-lg font-black text-emerald-400 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4" />
                        {selectedBrand.impactMetric}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono uppercase text-zinc-400">
                        Total Views
                      </div>
                      <div className="text-lg font-black text-purple-300">
                        {selectedBrand.views}
                      </div>
                    </div>
                  </div>

                  {/* Reel Hook & Angle */}
                  <div className="space-y-1.5 mb-3">
                    <span className="text-[11px] font-mono uppercase text-purple-300 font-semibold">
                      Hook & Angle
                    </span>
                    <p className="text-sm font-bold text-white">
                      “{selectedBrand.reelHook}”
                    </p>
                  </div>

                  {/* Script Produced */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 font-semibold">
                      AI Generated Voiceover Script
                    </span>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300 leading-relaxed font-sans">
                      {selectedBrand.reelScript}
                    </div>
                  </div>

                  {/* Targeted SEO Hashtags */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 font-semibold">
                      Search-Optimized Local Tags
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedBrand.sampleHashtags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    onClick={() => {
                      const brandName = selectedBrand.name;
                      const brandCat = selectedBrand.category;
                      setSelectedBrand(null);
                      openWhatsAppEnquiry({
                        businessName: brandName,
                        category: brandCat,
                        service: "9:16 AI Reels & Local SEO",
                        planName: "Business 15 Studio (₹5,999/mo)",
                      });
                    }}
                    className="w-full px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Similar Reels for My Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
