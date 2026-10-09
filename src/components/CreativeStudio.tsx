"use client";

import React, { useState } from "react";
import {
  Video,
  Image as ImageIcon,
  Search,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Instagram,
  Globe,
  Layers,
  Bot,
  Zap,
  Tag,
  Share2
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

type StudioTab = "reels" | "posters" | "seo" | "process";

export function CreativeStudio() {
  const { openWhatsAppEnquiry } = useOnboarding();
  const [activeTab, setActiveTab] = useState<StudioTab>("reels");

  return (
    <section id="creative-studio" className="relative py-28 sm:py-36 overflow-hidden bg-[#070510]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-r from-purple-900/15 via-indigo-600/10 to-emerald-900/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Inspired by Digital Decodes "Everything needed to publish consistently") */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              AI Creative & Content Studio
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Everything Needed to <br />
              <span className="text-gradient-purple-gold">Publish & Grow Consistently.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              One platform handles planning, AI production, and copy so your social channels and Google search stay buzzing without consuming your time.
            </p>
          </div>
        </ScrollReveal>

        {/* Studio Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: "reels", label: "Short-Form Video (9:16)", icon: Video, badge: "Viral Reach" },
            { id: "posters", label: "Posters & Creatives", icon: ImageIcon, badge: "Custom Brand" },
            { id: "seo", label: "Search-Optimised Captions", icon: Search, badge: "Local SEO" },
            { id: "process", label: "How We Work (3 Steps)", icon: Clock, badge: "3-Hour SLA" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as StudioTab)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? "bg-[#16122d] text-white border-purple-400/60 shadow-[0_0_25px_rgba(139,92,246,0.35)]"
                    : "bg-white/[0.02] text-zinc-400 hover:text-white border-white/5 hover:border-white/15"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-purple-300" : "text-zinc-500"}`} />
                <span>{tab.label}</span>
                <span className={`hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isActive ? "bg-purple-500/20 text-purple-200" : "bg-white/5 text-zinc-500"
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="glass-panel rounded-3xl border border-purple-500/20 p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          
          {/* TAB 1: 9:16 AI REELS */}
          {activeTab === "reels" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold">
                  <Video className="w-3.5 h-3.5" />
                  Scripted 9:16 Video Production
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  High-Retention Reels Scripted & Rendered for Your Brand.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  We formulate scroll-stopping hooks, generate natural AI voiceovers, edit in dynamic captions, and sync trending audio. Every reel is sized 9:16, ready for Instagram Reels and YouTube Shorts.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Hook-Story-Offer formula designed to turn casual viewers into WhatsApp chats",
                    "Custom branding with your logo, shop location, and contact numbers",
                    "You review and approve every reel before it gets published",
                    "Direct publishing to your Instagram account included",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() =>
                      openWhatsAppEnquiry({
                        service: "9:16 AI Reels Studio",
                        planName: "Business 15 Studio (₹5,999/mo)",
                      })
                    }
                    className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 shadow-[0_0_25px_rgba(139,92,246,0.4)] flex items-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get 15 Monthly Reels on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-zinc-400 font-mono">From ₹5,999 / month</span>
                </div>
              </div>

              {/* Right Side: Reel Generator Interactive Preview */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono text-zinc-400 ml-2">Veyra Video Studio 9:16</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      Ready to Render
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-purple-300 font-bold">The Hook (0:00 - 0:03)</span>
                      <p className="text-white font-semibold mt-1">“Tired of waiting 45 minutes for a salon chair? Here is the secret to VIP walk-ins...”</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-indigo-300 font-bold">The Angle & Visual B-Roll (0:04 - 0:12)</span>
                      <p className="text-zinc-300 mt-1">Showcase stylist precision cutting, hair steam mist, and smooth transformation result.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] font-mono uppercase text-emerald-300 font-bold">The WhatsApp Call to Action (0:13 - 0:18)</span>
                      <p className="text-white font-semibold mt-1">“Tap the link in bio to book your slot on WhatsApp. Mention this reel for 15% off!”</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-purple-300 font-mono">
                      <Bot className="w-4 h-4 text-yellow-300" />
                      <span>AI Presenter Voice: Indian English (Warm & Engaging)</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">18 sec duration</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: POSTERS & CREATIVES */}
          {activeTab === "posters" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold">
                  <ImageIcon className="w-3.5 h-3.5" />
                  Feed, Story & Print Creatives
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Offer, Launch & Festival Creatives Sized for Every Platform.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Never miss Diwali, Eid, New Year, or weekend flash sales. We design striking creatives carrying your logo, offer details, and WhatsApp QR codes ready for Instagram Feed, WhatsApp Status, and printed counter standees.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[
                    { label: "Festival Creatives", count: "Diwali, Eid, Pongal, New Year" },
                    { label: "Flash Sales & Offers", count: "Weekend & mid-week specials" },
                    { label: "New Arrival Alerts", count: "Stock launch & menu drops" },
                    { label: "Customer Testimonials", count: "5-star Google review posters" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-xs font-bold text-white">{item.label}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{item.count}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() =>
                      openWhatsAppEnquiry({
                        service: "Branded Posters & Creatives",
                        planName: "Business 15 Studio (₹5,999/mo)",
                      })
                    }
                    className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire About Poster Packages</span>
                  </button>
                </div>
              </div>

              {/* Right Side: Creative Preview Mock */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-gradient-to-br from-[#1b1435] via-[#100d23] to-[#0c0919] border border-purple-500/30 p-6 shadow-2xl flex flex-col justify-between aspect-square max-w-md mx-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 font-bold">
                      FESTIVAL SPECIAL
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide">
                      YOUR STORE LOGO
                    </span>
                  </div>

                  <div className="my-auto text-center space-y-2 py-4">
                    <p className="text-xs uppercase tracking-widest text-purple-300 font-semibold">
                      This Weekend Only
                    </p>
                    <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      FLAT 25% OFF
                    </h4>
                    <p className="text-xs text-zinc-300 max-w-xs mx-auto">
                      On all bridal collections & gift hampers. Walk into our showroom or order on WhatsApp!
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs">
                    <div className="text-left">
                      <span className="text-[10px] text-zinc-400 block">Location: Main Road, Near Clock Tower</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        WhatsApp: +91 98765 43210
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                      <div className="w-full h-full bg-black rounded flex items-center justify-center text-[7px] text-white font-mono">
                        QR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SEARCH-OPTIMISED CAPTIONS & SEO */}
          {activeTab === "seo" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold">
                  <Search className="w-3.5 h-3.5" />
                  Local Search Intent Targeting
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Captions Written Around Words Your Customers Search For.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  When someone nearby searches &ldquo;best hair colorist near me&rdquo; or &ldquo;cake shop open now&rdquo;, your posts should appear. We research high-intent local keywords and craft copy that indexes on both Instagram and Google Search.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Targeted local keywords (city, neighborhood, and service specifics)",
                    "High-converting calls to action that open WhatsApp in 1 tap",
                    "Curated hashtag sets avoiding shadowbanned and spam tags",
                    "SEO captions formatted for readability and high engagement",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() =>
                      openWhatsAppEnquiry({
                        service: "Search-Optimised Captions & SEO",
                        planName: "Monthly 20 Studio (₹8,999/mo)",
                      })
                    }
                    className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-purple-600 hover:from-amber-500 hover:to-purple-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2 transition-all"
                  >
                    <Search className="w-4 h-4" />
                    <span>Get Local SEO Captions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Side: SEO & Caption Live Anatomy */}
              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-2xl bg-[#0d0a1b] border border-white/10 p-5 space-y-3 font-sans text-xs">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400 pb-2 border-b border-white/10">
                    <Search className="w-3.5 h-3.5" />
                    <span>Google & Instagram Search Keyword Anatomy</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Target Keyword In Title</span>
                    <p className="text-white font-bold text-sm mt-0.5">
                      Best Keratin Hair Treatment in Kurnool | Royal Glow Salon
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2 text-zinc-300 leading-relaxed">
                    <p>
                      Looking for salon-smooth hair that lasts 4+ months without damaging your curls? ✨
                    </p>
                    <p>
                      At Royal Glow, our certified specialists use formaldehyde-free botanical keratin treatments designed for Indian weather. 
                    </p>
                    <p className="text-emerald-400 font-semibold">
                      📲 Tap the WhatsApp button in bio to claim your 20% weekday discount!
                    </p>
                    <div className="pt-2 text-purple-300 font-mono text-[11px]">
                      #KurnoolSalon #HairTreatmentNearMe #KeratinSpecialist #BestSalonKurnool #HairCareOffers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: HOW WE WORK (3-STEP RHYTHM) */}
          {activeTab === "process" && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-mono uppercase text-purple-300 tracking-widest font-bold">
                  A Simple Monthly Rhythm
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  How We Work With You (Approval at Every Step)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2">
                  Zero hassle for busy business owners. We create, you tap approve, we publish.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: "STEP 01",
                    title: "Brief",
                    sla: "Reply in 3 hours",
                    desc: "Share your business details, target customers, and monthly goals on WhatsApp. We respond within 3 hours and recommend your exact content calendar.",
                    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
                  },
                  {
                    step: "STEP 02",
                    title: "AI Production",
                    sla: "3-5 days delivery",
                    desc: "We write your video scripts, generate realistic voiceovers, produce the 9:16 reels, design branded posters, and write local search captions.",
                    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
                  },
                  {
                    step: "STEP 03",
                    title: "Review & Publish",
                    sla: "Revisions included",
                    desc: "You review every single piece on WhatsApp. Revisions are unlimited and included. Once approved, we can publish directly to your Instagram account!",
                    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border font-bold ${item.badgeColor}`}>
                          {item.step}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-emerald-400" />
                          {item.sla}
                        </span>
                      </div>
                      <h4 className="text-xl font-black text-white group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs text-purple-400 font-semibold">
                      <span>Full WhatsApp Coordination</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => openWhatsAppEnquiry()}
                  className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 shadow-[0_0_25px_rgba(16,185,129,0.4)] inline-flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Your Monthly Content Plan on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
