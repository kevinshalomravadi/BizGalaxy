"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, MessageSquare, ShieldCheck, Check } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

export function FinalCTA() {
  const { openOnboarding } = useOnboarding();
  const [talkModalOpen, setTalkModalOpen] = useState(false);

  return (
    <section className="relative py-32 sm:py-44 overflow-hidden border-t border-purple-500/15">
      {/* Deep cosmic galaxy glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-purple-800/30 via-indigo-700/20 to-yellow-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glowing BizGalaxy Icon Mark with Planet Ring */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-yellow-400 p-[1.5px] shadow-[0_0_50px_rgba(139,92,246,0.6)] animate-pulse-gentle">
            <div className="w-full h-full bg-[#0a0717] rounded-[22px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute w-14 h-5 border border-yellow-300/60 rounded-[100%] rotate-[-25deg] shadow-[0_0_10px_rgba(250,204,21,0.6)]" />
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 shadow-[0_0_15px_rgba(139,92,246,0.9)]" />
            </div>
          </div>
        </div>

        {/* Heading (Exact match for prompt Section 12) */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Ready to Build Your <br />
          <span className="text-gradient-purple-gold">Business Universe?</span>
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-2xl text-zinc-300 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Join BizGalaxy and bring your business, customers and growth into one intelligent platform.
        </p>

        {/* 3 Buttons (Exact match for prompt Section 12) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-10">
          <button
            onClick={() => openOnboarding()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(168,85,247,0.8)] border border-purple-300/40 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Register Your Business</span>
            <ArrowRight className="w-5 h-5 text-purple-200" />
          </button>

          <a
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-purple-400/30 transition-all backdrop-blur-md"
          >
            <span>View Plans</span>
          </a>

          <button
            onClick={() => setTalkModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-purple-200 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-yellow-300" />
            <span>Talk to BizGalaxy</span>
          </button>
        </div>

        {/* Final Tagline */}
        <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
          “Your Business. Your Universe.”
        </p>

        {/* Talk Modal Simulation */}
        {talkModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-md bg-[#0e0a22] border border-purple-500/30 p-6 rounded-3xl text-left shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span>Talk to BizGalaxy Team</span>
                </div>
                <button
                  onClick={() => setTalkModalOpen(false)}
                  className="text-zinc-400 hover:text-white text-xs px-2 py-1 rounded"
                >
                  Close
                </button>
              </div>
              <p className="text-xs text-zinc-300">
                Our local commerce specialists are ready to tailor BizGalaxy and Veyra AI for your brand or multi-branch operations.
              </p>
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs text-purple-200">
                Direct phone: <strong className="text-white">+91 80 4123 4567</strong> <br />
                Direct email: <strong className="text-white">hello@bizgalaxy.io</strong>
              </div>
              <button
                onClick={() => {
                  setTalkModalOpen(false);
                  openOnboarding();
                }}
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs"
              >
                Or Start Self-Serve Registration
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
