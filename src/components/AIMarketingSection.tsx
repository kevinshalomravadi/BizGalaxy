"use client";

import React, { useState } from "react";
import {
  Bot,
  Sparkles,
  CheckCircle2,
  XCircle,
  Instagram,
  MessageSquare,
  Users,
  ShieldCheck,
  Send,
  Zap,
  ArrowRight
} from "lucide-react";

export function AIMarketingSection() {
  const [offerState, setOfferState] = useState<"initial" | "generated" | "approved">("initial");

  return (
    <section id="ai-marketing" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background ambient nebula */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[450px] bg-purple-900/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            Proactive Growth Engine
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Your AI Employee <br />
            <span className="text-gradient-purple-gold">Doesn&apos;t Wait for You to Ask.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Traditional software sits idle until you open it. Veyra continuously reads your bookings, inventory, and customer activity to formulate timely revenue initiatives—always waiting for your approval.
          </p>
        </div>

        {/* Interactive Futuristic Activity Console */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-panel rounded-3xl border border-purple-500/30 p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
            
            {/* Veyra Dialogue Header */}
            <div className="flex items-center gap-3.5 pb-6 border-b border-white/10 mb-6">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                <div className="w-full h-full bg-[#0c0919] rounded-[11px] flex items-center justify-center">
                  <Bot className="w-6 h-6 text-purple-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-wide">VEYRA</span>
                  <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    Proactive Trigger
                  </span>
                </div>
                <span className="text-xs text-zinc-400">Continuous business telemetry analysis</span>
              </div>
            </div>

            {/* Conversational Bubble */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 space-y-2">
              <p className="text-sm sm:text-base text-zinc-200">
                “I noticed Saturday appointments are filling 40% faster than usual, but Sunday evening has 6 unreserved premium slots.”
              </p>
              <p className="text-sm sm:text-base font-semibold text-purple-300">
                “Would you like me to prepare a weekend flash promotion for your approval?”
              </p>
            </div>

            {/* Interactive Action Area */}
            {offerState === "initial" && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setOfferState("generated")}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-purple-300/30 transition-all flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-yellow-300" />
                  <span>Create Offer</span>
                </button>
                <button
                  onClick={() => setOfferState("initial")}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-400 hover:text-white bg-white/[0.03] border border-white/10 transition-all"
                >
                  Not Now
                </button>
              </div>
            )}

            {/* Generated Campaign Review State */}
            {offerState !== "initial" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/30">
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span>Offer campaign generated across 4 touchpoints:</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                    offerState === "approved"
                      ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                      : "bg-amber-500/20 text-amber-300 border-amber-500/30 animate-pulse"
                  }`}>
                    {offerState === "approved" ? "Status: Approved & Live" : "Status: Waiting for Approval"}
                  </span>
                </div>

                {/* 4 Multi-Channel Artifact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: Instagram Story */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-pink-400">
                      <Instagram className="w-4 h-4" />
                      <span>Instagram Story & Feed</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-snug">
                      High-res cosmic visual generated with headline: <span className="text-white font-medium">“Sunday Glow Exclusive: Complimentary botanical scalp treatment with any haircut.”</span>
                    </p>
                    <span className="text-[10px] text-zinc-500">Target: Local 5-mile followers</span>
                  </div>

                  {/* Card 2: WhatsApp Message */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct Concierge</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-snug">
                      “Hi Sarah, Veyra here from Aura Luxe. We reserved a rare Sunday 5:30 PM slot for you with 15% VIP appreciation credit.”
                    </p>
                    <span className="text-[10px] text-zinc-500">Personalized with past stylist history</span>
                  </div>

                  {/* Card 3: Customer Segment */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                      <Users className="w-4 h-4" />
                      <span>Precision Segment</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-snug">
                      Filtered: <span className="text-white font-medium">42 VIP guests</span> who haven&apos;t booked in the last 45 days and typically visit on weekends.
                    </p>
                    <span className="text-[10px] text-zinc-500">Zero spam • High response probability</span>
                  </div>

                  {/* Card 4: Forecast Lift */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Zap className="w-4 h-4" />
                      <span>Expected Business Yield</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-snug">
                      Estimated recovery: <span className="text-emerald-400 font-bold">+$540 to +$720</span> in incremental weekend revenue. 100% chair utilization.
                    </p>
                    <span className="text-[10px] text-zinc-500">Tracked in real-time on dashboard</span>
                  </div>
                </div>

                {/* Sensitive Action Approval Bar */}
                <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {offerState === "approved"
                        ? "Campaign successfully queued and dispatched."
                        : "Owner authorization required. Nothing is sent without your explicit click."}
                    </span>
                  </div>

                  {offerState === "generated" ? (
                    <button
                      onClick={() => setOfferState("approved")}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approve Campaign</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setOfferState("initial")}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium text-zinc-400 hover:text-white bg-white/5 border border-white/10"
                    >
                      Reset Demo
                    </button>
                  )}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
