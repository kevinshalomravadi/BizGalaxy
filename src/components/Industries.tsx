"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Scissors,
  UtensilsCrossed,
  Cake,
  ShoppingBag,
  Store,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  Building2,
  Gift,
  Dumbbell,
  Printer,
  Layers,
  MessageSquare,
  Video,
  Search,
  Bot
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

interface IndustryData {
  id: string;
  name: string;
  image: string;
  icon: any;
  tag: string;
  description: string;
  features: string[];
  contentDeliverables: string[];
  localKeywords: string[];
  detailText: string;
  stats: string;
}

const INDUSTRIES: IndustryData[] = [
  {
    id: "salon",
    name: "Salon & Beauty",
    image: "/images/salon.jpg",
    icon: Scissors,
    tag: "AI Salon Employee",
    description: "Chairs, stylists, appointments, treatments & premium guest care.",
    features: [
      "Appointment Booking",
      "Stylist Scheduling",
      "Services & Packages",
      "Customer Directory & CRM",
      "Billing & Invoices",
      "Customer Website",
      "Google Reviews Sync",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "15 Scripted 9:16 Reels (Transformations & Hacks)",
      "10 Festive & Offer Creative Posters",
      "Weekday Flash Discount WhatsApp Broadcasts",
    ],
    localKeywords: ["hair salon near me", "best keratin treatment", "bridal makeup artist"],
    detailText: "Veyra monitors stylist chair downtime, automatically flags clients overdue for hair color or facial touch-ups, and schedules gentle re-engagement reminders to maximize revenue.",
    stats: "32% average booking lift via automated slot recovery",
  },
  {
    id: "restaurant",
    name: "Restaurant & Café",
    image: "/images/restaurant.jpg",
    icon: UtensilsCrossed,
    tag: "AI Restaurant Employee",
    description: "Dine-in tables, digital menus, kitchen display & repeat foodies.",
    features: [
      "Table Reservations",
      "Digital Menu & QR Code",
      "Kitchen Display System",
      "Quick POS & Billing",
      "Customer Loyalty Points",
      "Takeaway Ordering",
      "Inventory & Recipes",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "15 Cinematic 9:16 Food Reels (Chef specials & ambiance)",
      "Weekend Combo Offer Posters",
      "Google Maps Local Foodie Optimization",
    ],
    localKeywords: ["best cafe near me", "family restaurant in town", "rooftop dining"],
    detailText: "Veyra predicts peak dinner rushes, matches table turnaround speed, highlights chef specials on dynamic tabletop QR menus, and launches weekend tasting bundles.",
    stats: "18% ticket size increase with smart dish pairings",
  },
  {
    id: "bakery",
    name: "Bakery & Cake Shop",
    image: "/images/bakery.jpg",
    icon: Cake,
    tag: "AI Bakery Employee",
    description: "Celebration cakes, morning prep schedules & fresh counter bakes.",
    features: [
      "Custom Cake Orders",
      "Eggless/Specialty Catalog",
      "Daily Prep Schedule",
      "Counter Billing POS",
      "Pickup & Delivery Tracker",
      "Customer Birthday Alerts",
      "Inventory Management",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Unboxing & Cake Decorating 9:16 Reels",
      "Festival Sweets & Pastry Combo Posters",
      "Local SEO for custom celebration cakes",
    ],
    localKeywords: ["custom cakes near me", "best birthday bakery", "fresh pastries open now"],
    detailText: "Veyra schedules multi-tier cake orders, tracks baking batches, prevents 4:00 PM pastry surplus with automated afternoon discount broadcasts, and forecasts flour/butter orders.",
    stats: "85% reduction in daily end-of-day bread waste",
  },
  {
    id: "supermarket",
    name: "Supermarket & Grocery",
    image: "/images/retail.jpg",
    icon: ShoppingBag,
    tag: "AI Retail Employee",
    description: "High-speed barcode scanning, multi-SKU inventory & replenishment.",
    features: [
      "Barcode POS Billing",
      "Multi-SKU Inventory",
      "Perishable Expiry Alerts",
      "Supplier Purchase Orders",
      "Customer Loyalty Wallet",
      "Home Delivery WhatsApp",
      "Daily Revenue Analytics",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Weekly Grocery Deal Reels (Top 5 Essentials under ₹199)",
      "Monthly Ration Discount Creatives",
      "WhatsApp Daily Price Broadcasts",
    ],
    localKeywords: ["supermarket near me", "fresh grocery delivery", "best prices daily essentials"],
    detailText: "Veyra reads barcode scan velocity across hundreds of grocery SKUs, alerts on expiring perishables, and generates automated promotional combo deals.",
    stats: "Zero inventory write-downs from expired batches",
  },
  {
    id: "fashion",
    name: "Fashion & Boutiques",
    image: "/images/retail.jpg",
    icon: Store,
    tag: "AI Boutique Employee",
    description: "Apparel, ethnic sarees, designer wear & seasonal collections.",
    features: [
      "Apparel Size & Color Grid",
      "Trial Room Tag Tracker",
      "Online Catalog & WhatsApp Store",
      "VIP Client Lookbooks",
      "GST Billing & Barcodes",
      "Seasonal Stock Clearance",
      "Customer Measurements CRM",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Trending Saree Drape & Outfit 9:16 Reels",
      "Festive Collection Drop Posters",
      "Bridal Wear WhatsApp Consultation Link",
    ],
    localKeywords: ["designer boutique near me", "bridal silk sarees", "party wear dresses"],
    detailText: "Veyra tracks fast-moving designer silhouettes, matches customer style preferences, and automatically invites top VIP patrons when new seasonal drops arrive.",
    stats: "45% higher repeat purchases from loyal patrons",
  },
  {
    id: "clinic",
    name: "Clinics & Healthcare",
    image: "/images/salon.jpg",
    icon: Stethoscope,
    tag: "AI Clinic Employee",
    description: "Patient queues, doctor appointments, prescriptions & follow-ups.",
    features: [
      "Doctor Token & Queue System",
      "Appointment Scheduling",
      "Digital Prescription Records",
      "Automated Follow-up Alerts",
      "Lab Test Tracker",
      "Patient WhatsApp Reminders",
      "Billing & Consultation POS",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Doctor Health Tip & Awareness 9:16 Reels",
      "Preventive Checkup & Camp Posters",
      "Local Google Search Clinic Optimization",
    ],
    localKeywords: ["clinic near me", "best dentist in town", "pediatrician appointment"],
    detailText: "Veyra eliminates waiting room chaos with live token broadcasts, sends automated medication follow-up reminders, and boosts clinic reputational reviews.",
    stats: "40% reduction in patient waiting room delays",
  },
  {
    id: "realestate",
    name: "Real Estate & Property",
    image: "/images/retail.jpg",
    icon: Building2,
    tag: "AI Property Employee",
    description: "Plots, gated communities, commercial leasing & lead qualification.",
    features: [
      "Plot & Unit Inventory Map",
      "Lead CRM & Qualification",
      "Site Visit Scheduler",
      "Brochure WhatsApp Bot",
      "Payment Milestone Tracker",
      "RERA Compliant Quotes",
      "Agent Commission Sync",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Drone Walkthrough & Villa 9:16 Reels",
      "RERA Approved Plot Launch Creatives",
      "High-Intent Property Buyer Captions",
    ],
    localKeywords: ["plots for sale near me", "gated community villas", "commercial space for rent"],
    detailText: "Veyra immediately qualifies prospective buyers over WhatsApp, books free site visit cabs, and alerts property advisors on high-net-worth opportunities.",
    stats: "3x faster response time to incoming property leads",
  },
  {
    id: "gifts",
    name: "Toys & Gift Gallery",
    image: "/images/bakery.jpg",
    icon: Gift,
    tag: "AI Gift Shop Employee",
    description: "Surprise hampers, toys, novelty items & personalized gifts.",
    features: [
      "Custom Gifting Catalog",
      "Kids Toys Inventory",
      "Express Gift Wrapping POS",
      "Return Gift Bulk Orders",
      "Birthday & Anniversary CRM",
      "WhatsApp Catalog & Order",
      "Fast Barcode Billing",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Unboxing Viral Toys & Hamper Reels",
      "Return Gift Bulk Discount Posters",
      "Festival Gifting SEO Captions",
    ],
    localKeywords: ["gift gallery near me", "best toy shop", "customized birthday gifts"],
    detailText: "Veyra reminds customers 5 days before their friends' birthdays with customized gift suggestions and prepares express hampers ready for pickup.",
    stats: "28% revenue boost from automated birthday reminders",
  },
  {
    id: "fitness",
    name: "Gym & Fitness Studio",
    image: "/images/salon.jpg",
    icon: Dumbbell,
    tag: "AI Fitness Employee",
    description: "Memberships, trainer schedules, access control & nutrition plans.",
    features: [
      "Biometric / QR Access Sync",
      "Membership Expiry Alerts",
      "Trainer Class Booking",
      "Diet & Workout Plans",
      "POS for Supplements",
      "Automated Renewal Invoices",
      "Member Attendance Tracker",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Client Transformation & Workout Reels",
      "New Year / Summer Body Promo Posters",
      "Local Gym & Crossfit SEO Captions",
    ],
    localKeywords: ["gym near me", "best fitness center", "personal trainer in town"],
    detailText: "Veyra detects members who haven't visited in 10 days, triggers motivating check-in messages, and automates membership renewal invoices before expiration.",
    stats: "35% drop in monthly membership churn",
  },
  {
    id: "printing",
    name: "Printing & Signage",
    image: "/images/retail.jpg",
    icon: Printer,
    tag: "AI Print Shop Employee",
    description: "Flex banners, LED glow signs, corporate stationery & fast jobs.",
    features: [
      "Square-Foot Area Calculator",
      "Print Job Stage Tracker",
      "Design File Upload Portal",
      "Corporate Accounts & Credit",
      "Instant WhatsApp Estimates",
      "Material Inventory (Flex/Vinyl)",
      "Billing with GST Invoices",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Behind-the-scenes 3D Glow Sign Reels",
      "Business Card & Flex Banner Creatives",
      "Commercial Printing B2B Search Tags",
    ],
    localKeywords: ["digital printing near me", "LED glow signs", "flex banner printing"],
    detailText: "Veyra auto-calculates square footage quotes in seconds, notifies clients via WhatsApp when prints are dry and packed, and manages B2B monthly credit accounts.",
    stats: "50% faster estimate turnaround to clients",
  },
  {
    id: "events",
    name: "Conventions & Events",
    image: "/images/restaurant.jpg",
    icon: Sparkles,
    tag: "AI Event Venue Employee",
    description: "Banquet halls, convention centers, catering & party bookings.",
    features: [
      "Date Calendar & Hall Availability",
      "Seating & Layout Visualizer",
      "Catering Menu Package Quotes",
      "Stage & Lighting Add-ons",
      "Deposit & Advance Milestone POS",
      "WhatsApp Event Coordinator",
      "Vendor Directory & Checklist",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Luxury Stage & Lighting 9:16 Video Tours",
      "Wedding Season Package Posters",
      "Top Banquet Hall Search Rankings",
    ],
    localKeywords: ["convention hall near me", "best banquet for wedding", "party hall booking"],
    detailText: "Veyra prevents double-booking disputes, generates instant comprehensive wedding quotes, and coordinates with decorators and caterers automatically.",
    stats: "Zero booking conflicts with real-time date locking",
  },
  {
    id: "hardware",
    name: "Marble, Tile & Hardware",
    image: "/images/cafe.jpg",
    icon: Layers,
    tag: "AI Hardware Employee",
    description: "Granite slabs, sanitary ware, hardware tools & architecture.",
    features: [
      "Slab Square Footage Billing",
      "Batch & Lot Shade Matching",
      "Contractor & Mason Loyalty",
      "Transport & Loading Tracker",
      "Bulk Wholesale POS",
      "Customer Project Estimator",
      "GST Multi-tier Tax Invoicing",
      "Veyra AI Engine",
    ],
    contentDeliverables: [
      "Italian Marble Showroom Tour Reels",
      "Bathroom & Tile Remodel Posters",
      "Contractor Discount WhatsApp Alerts",
    ],
    localKeywords: ["marble showroom near me", "tiles and sanitary ware", "hardware store"],
    detailText: "Veyra calculates complex granite cutting wastage, tracks contractor commission payouts, and keeps high-value architectural leads warm until project closing.",
    stats: "22% lift in contractor repeat referrals",
  },
];

export function Industries() {
  const { openWhatsAppEnquiry } = useOnboarding();
  const [selectedId, setSelectedId] = useState<string>("salon");
  const [detailTab, setDetailTab] = useState<"operations" | "content">("operations");

  const currentActive = INDUSTRIES.find((b) => b.id === selectedId) || INDUSTRIES[0];

  return (
    <section id="businesses" className="relative py-28 sm:py-36 overflow-hidden bg-[#06040e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[650px] h-[650px] bg-purple-900/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Tailored for 12 Local Industries
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              One Platform. An AI Employee <br />
              <span className="text-gradient-purple-gold">Tailored for Every Business.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              Select your category to see what Veyra automates on your back-office and what viral reels, posters, and SEO content we create for you every month.
            </p>
          </div>
        </ScrollReveal>

        {/* 12 Business Types Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRIES.map((biz) => {
            const Icon = biz.icon;
            const isSelected = selectedId === biz.id;
            return (
              <button
                key={biz.id}
                onClick={() => setSelectedId(biz.id)}
                className={`relative rounded-2xl p-3.5 sm:p-4 text-left border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? "bg-[#181335] border-purple-400 shadow-[0_0_25px_rgba(139,92,246,0.4)] scale-[1.02]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                      : "bg-white/5 text-purple-300 group-hover:text-white"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                <div>
                  <h4 className={`text-xs sm:text-sm font-bold transition-colors ${
                    isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"
                  }`}>
                    {biz.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">
                    {biz.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Console with Tabs (Operations vs Monthly Content) */}
        <ScrollReveal delayMs={100}>
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-purple-400/30 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            
            {/* Header of Active Industry */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-emerald-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] shrink-0">
                  <currentActive.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-2xl font-black text-white">
                      {currentActive.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {currentActive.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1">
                    {currentActive.description}
                  </p>
                </div>
              </div>

              {/* Consultation Button */}
              <button
                onClick={() =>
                  openWhatsAppEnquiry({
                    category: currentActive.name,
                    businessName: `${currentActive.name} Store`,
                    service: "AI Employee & Content Studio",
                  })
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400/30 transition-all shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire for {currentActive.name} (3-Hr SLA)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sub Tabs: Operations vs Content Studio */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setDetailTab("operations")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  detailTab === "operations"
                    ? "bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                    : "bg-white/[0.03] text-zinc-400 border-white/5 hover:text-white"
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>AI Employee & Operations Stack</span>
              </button>

              <button
                onClick={() => setDetailTab("content")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  detailTab === "content"
                    ? "bg-emerald-600 text-white border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    : "bg-white/[0.03] text-zinc-400 border-white/5 hover:text-white"
                }`}
              >
                <Video className="w-4 h-4" />
                <span>Monthly Reels, Posters & Local SEO</span>
              </button>
            </div>

            {/* TAB 1: OPERATIONS */}
            {detailTab === "operations" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    Automated Business Features Included:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {currentActive.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-xs font-bold text-white">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-yellow-300 font-bold block mb-1">
                      Autonomous Intelligence
                    </span>
                    <p className="text-xs text-zinc-200 leading-relaxed">
                      {currentActive.detailText}
                    </p>
                  </div>

                  <div className="shrink-0 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold text-center">
                    {currentActive.stats}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CONTENT STUDIO */}
            {detailTab === "content" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Monthly Deliverables */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      Monthly Social Deliverables:
                    </h4>
                    <div className="space-y-2">
                      {currentActive.contentDeliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Targeted Keywords */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      High-Intent Local Search Keywords:
                    </h4>
                    <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                      <p className="text-zinc-400 text-[11px]">
                        When customers in your city search on Google or Instagram, your brand is positioned on top:
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {currentActive.localKeywords.map((kw, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono text-[11px]"
                          >
                            “{kw}”
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <span className="text-zinc-300">
                    Need a custom content package for your {currentActive.name.toLowerCase()}?
                  </span>
                  <button
                    onClick={() =>
                      openWhatsAppEnquiry({
                        category: currentActive.name,
                        service: "9:16 AI Reels & Posters",
                        planName: "Business 15 Studio (₹5,999/mo)",
                      })
                    }
                    className="font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 underline"
                  >
                    <span>Get sample reel scripts on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
