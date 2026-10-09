"use client";

import React from "react";
import {
  UserPlus,
  SlidersHorizontal,
  Rocket,
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HowItWorks() {
  const { openOnboarding } = useOnboarding();

  const steps = [
    {
      num: "01",
      stepName: "REGISTER",
      title: "Create Your Account",
      desc: "Create your BizGalaxy account in under 60 seconds with your basic owner credentials.",
      icon: UserPlus,
      glow: "from-purple-500/20 to-indigo-500/10",
    },
    {
      num: "02",
      stepName: "SET UP",
      title: "Configure Details",
      desc: "Add your business, branches, staff, services/products, pricing and working hours.",
      icon: SlidersHorizontal,
      glow: "from-indigo-500/20 to-purple-500/10",
    },
    {
      num: "03",
      stepName: "LAUNCH",
      title: "Instant Storefront",
      desc: "BizGalaxy automatically creates your branded customer-facing digital business experience and QR code.",
      icon: Rocket,
      glow: "from-yellow-400/20 to-amber-500/10",
    },
    {
      num: "04",
      stepName: "GROW",
      title: "Scale With Veyra AI",
      desc: "Manage customers, bookings/orders, marketing campaigns and compounding growth with your AI employee.",
      icon: TrendingUp,
      glow: "from-emerald-400/20 to-teal-500/10",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background glow (stable) */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-purple-900/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Effortless 4-Step Journey
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              How BizGalaxy <span className="text-gradient-purple-gold">Works.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              From registration to an AI-powered business universe in minutes.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Timeline Grid with ScrollReveal (Stable, no card-float) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.num} delayMs={idx * 100}>
                <div
                  className="h-full glass-panel glass-panel-hover p-7 rounded-3xl flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Glowing subtle gradient background */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none`} />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold tracking-widest text-yellow-300 bg-yellow-400/10 border border-yellow-400/30 px-3 py-1 rounded-full">
                        STEP {item.num}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-bold">
                        {item.stepName}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:text-yellow-300 transition-all mb-5 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-purple-400 group-hover:text-yellow-300 transition-colors">
                    <span>Seamless flow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Visual Flow Bar (REGISTER → SET UP → LAUNCH → GROW) */}
        <ScrollReveal delayMs={200}>
          <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-purple-500/30 max-w-4xl mx-auto shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono font-bold">
              <span className="px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-400/40 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                REGISTER
              </span>
              <span className="text-yellow-300 animate-pulse text-base font-extrabold">→</span>
              
              <span className="px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-400/40 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                SET UP
              </span>
              <span className="text-yellow-300 animate-pulse text-base font-extrabold">→</span>
              
              <span className="px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-400/40 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                LAUNCH
              </span>
              <span className="text-yellow-300 animate-pulse text-base font-extrabold">→</span>
              
              <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-yellow-500 border border-yellow-300 text-white shadow-[0_0_25px_rgba(250,204,21,0.5)]">
                GROW WITH VEYRA AI
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Action Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => openOnboarding()}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_30px_rgba(139,92,246,0.5)] border border-purple-300/40 transition-all hover:scale-105"
          >
            <span>Register Your Business</span>
            <ArrowRight className="w-5 h-5 text-purple-200" />
          </button>
        </div>

      </div>
    </section>
  );
}
