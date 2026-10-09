"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Lightbulb,
  Megaphone,
  BarChart3,
  Check,
  Bot,
  Activity
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

const LIVE_STAGES = [
  { text: "Analyzing business telemetry & salon schedule...", icon: Activity, tag: "Phase 1/4", status: "Scanning" },
  { text: "Opportunity detected: Tuesday 2:00 PM slot empty", icon: Lightbulb, tag: "Phase 2/4", status: "Identified" },
  { text: "Generating 20% Color Refresh targeted campaign...", icon: Sparkles, tag: "Phase 3/4", status: "Synthesizing" },
  { text: "Campaign ready for your 1-tap approval", icon: CheckCircle2, tag: "Phase 4/4", status: "Action Ready" },
];

export function AIEmployee() {
  const { openOnboarding } = useOnboarding();
  const [offerState, setOfferState] = useState<"initial" | "approved" | "dismissed">("initial");
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Subtle live stage progression
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % LIVE_STAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentStage = LIVE_STAGES[activeStageIndex];
  const StageIcon = currentStage.icon;

  const veyraCapabilities = [
    { title: "Understand Business Performance", desc: "Monitors daily revenue velocity, seat occupancy, and margin health.", icon: BarChart3 },
    { title: "Analyze Customers", desc: "Spots churn risks, high-value repeat spenders, and visit cadences.", icon: Users },
    { title: "Identify Opportunities", desc: "Detects slow weekday hours and underutilized staff capacity.", icon: Lightbulb },
    { title: "Create Offers", desc: "Formulates mathematically sound promotions that protect margins.", icon: Sparkles },
    { title: "Generate Marketing Content", desc: "Drafts WhatsApp broadcasts, SMS notices, and social announcements.", icon: Megaphone },
    { title: "Suggest Campaigns", desc: "Pushes targeted specials precisely when footfall needs boosting.", icon: TrendingUp },
    { title: "Improve Customer Retention", desc: "Re-engages guests who haven't returned within their normal cadence.", icon: ShieldCheck },
    { title: "Provide Business Insights", desc: "Delivers daily morning briefings in plain, actionable language.", icon: Bot },
  ];

  return (
    <section id="ai-employees" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-r from-purple-900/15 via-violet-600/10 to-indigo-900/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-xs font-semibold tracking-wider text-purple-200 uppercase">
                The AI Employee
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Meet <span className="text-gradient-purple-gold">Veyra.</span>
            </h2>
            <p className="mt-4 text-xl sm:text-2xl text-purple-200/90 font-medium">
              Your AI Business Employee.
            </p>
            <p className="mt-2 text-base text-zinc-400 max-w-2xl mx-auto">
              Not another chatbot. A digital employee built around your business that connects directly with your management system, spots opportunities, and works for your growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Live Activity Pipeline Banner */}
        <ScrollReveal delayMs={100}>
          <div className="max-w-3xl mx-auto mb-12 p-3 sm:p-4 rounded-2xl glass-panel border border-purple-500/30 shadow-[0_0_25px_rgba(139,92,246,0.15)] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/25 border border-purple-400/40 flex items-center justify-center text-yellow-300 shrink-0">
                <StageIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-yellow-300">
                    Live Autonomous Loop
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {currentStage.tag}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white transition-colors duration-300">
                  {currentStage.text}
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{currentStage.status}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Futuristic Veyra Interactive Stage (Stable, no floating) */}
        <ScrollReveal delayMs={150}>
          <div className="max-w-6xl mx-auto mb-20 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/25 via-indigo-600/25 to-yellow-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-purple-400/30 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Veyra Visual on Left (Stable, grounded) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden border-2 border-purple-400/40 shadow-[0_0_40px_rgba(139,92,246,0.5)] group">
                    <Image
                      src="/images/veyra.jpg"
                      alt="Veyra AI Business Employee"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090714] via-transparent to-transparent pointer-events-none" />
                    
                    {/* Status Badge */}
                    <div className="absolute bottom-4 left-4 right-4 glass-pill px-3 py-2 rounded-xl border border-purple-400/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold text-white">Veyra Operating</span>
                      </div>
                      <span className="text-[10px] font-mono text-purple-300">Continuous Analysis</span>
                    </div>
                  </div>
                </div>

                {/* Holographic Veyra Live Dashboard Card on Right */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                        <Bot className="w-5 h-5 text-yellow-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-white">Veyra</h3>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            AI Business Employee
                          </span>
                        </div>
                        <p className="text-xs text-emerald-400 flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Working for your business...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Live Analysis Status List */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                      Analyzing your business...
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-2.5 text-xs text-white">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Appointments</span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          Completed
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-2.5 text-xs text-white">
                          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>Customers</span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                          Analyzing
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-2.5 text-xs text-white">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span>Trends</span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                          Identified
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors">
                        <div className="flex items-center gap-2.5 text-xs text-white">
                          <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                          <span>Marketing</span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-yellow-300 bg-yellow-500/10 px-2 py-0.5 rounded">
                          Suggestion ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Suggested Campaign Action Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#161033] to-purple-900/30 border border-purple-400/40 shadow-[0_0_30px_rgba(139,92,246,0.25)] relative overflow-hidden">
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="p-2.5 rounded-xl bg-yellow-400/20 text-yellow-300 shrink-0">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-yellow-300 uppercase tracking-wide block">
                          Veyra detected an opportunity
                        </span>
                        <p className="text-xs text-zinc-300 mt-0.5">
                          Your weekday bookings are 23% lower than your weekend average.
                        </p>
                        <h4 className="text-sm sm:text-base font-bold text-white mt-2">
                          Suggested Campaign: Weekend offer 20% OFF on Hair Color
                        </h4>
                        <p className="text-xs text-purple-200 mt-0.5">
                          Target: Returning customers (42 eligible guests identified)
                        </p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                      {offerState === "initial" && (
                        <>
                          <button
                            onClick={() => setOfferState("approved")}
                            className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-purple-300/30 transition-all hover:scale-105"
                          >
                            Approve Offer
                          </button>
                          <button
                            onClick={() => setOfferState("dismissed")}
                            className="px-5 py-2.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                          >
                            Not Now
                          </button>
                        </>
                      )}

                      {offerState === "approved" && (
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-xl">
                          <Check className="w-4 h-4" />
                          <span>Campaign approved! Scheduled for automatic dispatch via WhatsApp & SMS.</span>
                        </div>
                      )}

                      {offerState === "dismissed" && (
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                          <span>Campaign postponed. Veyra will monitor future booking velocity.</span>
                          <button
                            onClick={() => setOfferState("initial")}
                            className="text-purple-300 underline text-xs"
                          >
                            Undo
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Veyra Operating Principles */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
                    {[
                      "Analyzes data",
                      "Finds opportunities",
                      "Recommends actions",
                      "Requires owner approval",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center gap-1.5 text-[11px] text-zinc-300"
                      >
                        <Check className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 8 Core Capabilities Grid */}
        <ScrollReveal delayMs={200}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What Veyra Does for Your Business
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Continuous, proactive business intelligence running quietly behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {veyraCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-purple-500/30 hover:bg-purple-950/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:text-yellow-300 transition-all mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-purple-200 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Section Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => openOnboarding("growth")}
            className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_30px_rgba(139,92,246,0.45)] border border-purple-300/30 transition-all hover:scale-105"
          >
            <span>Activate Veyra for Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
