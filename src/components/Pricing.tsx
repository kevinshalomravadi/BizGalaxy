"use client";

import React, { useState } from "react";
import {
  Check,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Video,
  Bot,
  Layers,
  Clock,
  Plus
} from "lucide-react";
import {
  PRICING_PLANS,
  CONTENT_STUDIO_PLANS,
  ADD_ON_SERVICES,
  ENTERPRISE_CONTACT
} from "@/data/pricingData";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Pricing() {
  const { openOnboarding, openWhatsAppEnquiry } = useOnboarding();
  const [pricingCategory, setPricingCategory] = useState<"platform" | "content">("platform");
  const [showAddOns, setShowAddOns] = useState(false);

  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden bg-[#06050d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-purple-900/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 backdrop-blur-md text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Transparent Investment
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Choose the Plan That Fits <br />
              <span className="text-gradient-purple-gold">Your Business Growth.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              Start with our autonomous AI Business OS or subscribe to our AI Content Studio for monthly reels, posters & local SEO.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Category Toggle */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center gap-1.5">
            <button
              onClick={() => setPricingCategory("platform")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                pricingCategory === "platform"
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-purple-400/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>AI Business OS (SaaS)</span>
            </button>

            <button
              onClick={() => setPricingCategory("content")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                pricingCategory === "content"
                  ? "bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Video className="w-4 h-4" />
              <span>AI Content Studio (Reels & Posters)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200">
                New
              </span>
            </button>
          </div>
        </div>

        {/* 3 PRICING CARDS: PLATFORM OS */}
        {pricingCategory === "platform" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
            {PRICING_PLANS.map((plan, index) => {
              const isPopular = plan.popular;
              return (
                <ScrollReveal key={plan.id} delayMs={index * 80}>
                  <div
                    className={`h-full glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative group ${
                      isPopular
                        ? "border-purple-400/60 bg-[#120e2b]/85 shadow-[0_0_40px_rgba(139,92,246,0.35)] scale-100 lg:-translate-y-2 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(139,92,246,0.5)]"
                        : "border-white/10 hover:border-purple-400/40 bg-[#0c0919]/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(124,58,237,0.25)]"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-yellow-400 text-[10px] font-black tracking-widest text-white uppercase shadow-[0_0_20px_rgba(139,92,246,0.6)] flex items-center gap-1.5 z-10">
                        <Sparkles className="w-3 h-3 text-yellow-200" />
                        <span>{plan.badge || "Most Popular"}</span>
                      </div>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-black text-white tracking-wide group-hover:text-purple-200 transition-colors">
                          {plan.name}
                        </h3>
                        {!isPopular && plan.badge && (
                          <span className="text-[10px] font-mono text-zinc-400 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs font-medium text-purple-200/90 mb-6">
                        {plan.subtitle}
                      </p>

                      <div className="py-4 px-5 rounded-2xl bg-white/[0.03] border border-white/5 mb-6 group-hover:border-purple-500/30 group-hover:bg-purple-950/20 transition-all duration-300">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl sm:text-4xl font-black text-white">
                            {plan.price}
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">
                            / {plan.period}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-400 mt-1 block">
                          {plan.description}
                        </span>
                      </div>

                      <div className="space-y-3 mb-8">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                          Included capabilities:
                        </span>
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 group-hover:text-zinc-200 transition-colors">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10 pt-4">
                      <button
                        onClick={() => openOnboarding(plan.id)}
                        className={`w-full py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                          isPopular
                            ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 text-white shadow-[0_0_30px_rgba(139,92,246,0.5)] border border-purple-300/40 hover:scale-[1.02] active:scale-[0.98]"
                            : "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-purple-400/30"
                        }`}
                      >
                        <span>{plan.cta}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {/* 3 PRICING CARDS: CONTENT & REELS STUDIO */}
        {pricingCategory === "content" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-stretch">
            {CONTENT_STUDIO_PLANS.map((plan, index) => {
              const isPopular = plan.popular;
              return (
                <ScrollReveal key={plan.id} delayMs={index * 80}>
                  <div
                    className={`h-full glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative group ${
                      isPopular
                        ? "border-emerald-400/60 bg-[#0d1c16]/85 shadow-[0_0_40px_rgba(16,185,129,0.3)] scale-100 lg:-translate-y-2 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(16,185,129,0.45)]"
                        : "border-white/10 hover:border-emerald-400/40 bg-[#0c0919]/60 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(16,185,129,0.2)]"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-yellow-400 text-[10px] font-black tracking-widest text-white uppercase shadow-[0_0_20px_rgba(16,185,129,0.6)] flex items-center gap-1.5 z-10">
                        <Sparkles className="w-3 h-3 text-yellow-200" />
                        <span>{plan.badge}</span>
                      </div>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-black text-white tracking-wide group-hover:text-emerald-200 transition-colors">
                          {plan.name}
                        </h3>
                        {!isPopular && plan.badge && (
                          <span className="text-[10px] font-mono text-zinc-400 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs font-medium text-emerald-200/90 mb-4">
                        {plan.subtitle}
                      </p>

                      {/* Deliverables Highlights Badge */}
                      <div className="flex items-center gap-2 mb-6">
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-bold">
                          {plan.reelsCount}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 font-mono text-[11px] font-bold">
                          {plan.postersCount}
                        </span>
                      </div>

                      <div className="py-4 px-5 rounded-2xl bg-white/[0.03] border border-white/5 mb-6 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20 transition-all duration-300">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl sm:text-4xl font-black text-white">
                            {plan.price}
                          </span>
                          <span className="text-xs text-zinc-400 font-mono">
                            / {plan.period}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-400 mt-1 block">
                          {plan.description}
                        </span>
                      </div>

                      <div className="space-y-3 mb-8">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                          Monthly Content Deliverables:
                        </span>
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 group-hover:text-zinc-200 transition-colors">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative z-10 pt-4">
                      <button
                        onClick={() =>
                          openWhatsAppEnquiry({
                            planName: `${plan.name} (${plan.price}/mo)`,
                            service: "9:16 AI Reels & Posters",
                          })
                        }
                        className={`w-full py-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                          isPopular
                            ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-300/40 hover:scale-[1.02] active:scale-[0.98]"
                            : "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-emerald-400/30"
                        }`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire on WhatsApp (3-Hr SLA)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}

        {/* Add-on Services Toggle & Grid (Inspired by Digital Decodes "See add-ons") */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-6">
            <button
              onClick={() => setShowAddOns(!showAddOns)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400/40 text-xs font-bold text-zinc-300 hover:text-white transition-all"
            >
              <span>{showAddOns ? "Hide Add-On Services" : "Need Extra Posters, Presenter or Faster Delivery? See Add-Ons"}</span>
              <Plus className={`w-3.5 h-3.5 transition-transform ${showAddOns ? "rotate-45" : ""}`} />
            </button>
          </div>

          {showAddOns && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ADD_ON_SERVICES.map((addon, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-xs font-bold text-white">{addon.name}</h4>
                      {addon.badge && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {addon.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-zinc-400">{addon.desc}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-emerald-400">{addon.price}</span>
                    <button
                      onClick={() =>
                        openWhatsAppEnquiry({
                          service: `Add-on: ${addon.name}`,
                        })
                      }
                      className="text-purple-300 hover:text-white font-semibold text-[11px] flex items-center gap-1"
                    >
                      <span>Add</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* WhatsApp 3-Hour Response Guarantee Banner */}
        <ScrollReveal delayMs={120}>
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0e0a1f] to-emerald-950/40 border border-purple-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
                <Clock className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  3-Hour WhatsApp Response Guarantee
                </h4>
                <p className="text-xs text-zinc-400">
                  {ENTERPRISE_CONTACT.description} No payment taken on this site until scope is approved.
                </p>
              </div>
            </div>

            <button
              onClick={() => openWhatsAppEnquiry()}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all shrink-0 hover:scale-105 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Security guarantee note */}
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldCheck className="w-4 h-4 text-purple-400" />
          <span>All plans include SOC-2 standard data isolation, unlimited revisions, and dedicated account manager.</span>
        </div>

      </div>
    </section>
  );
}
