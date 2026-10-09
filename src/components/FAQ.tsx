"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

export function FAQ() {
  const { openWhatsAppEnquiry } = useOnboarding();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is BizGalaxy?",
      a: "BizGalaxy is an intelligent business operating platform and AI employee layer designed specifically for local businesses. It combines core business operations (point of sale, appointments, orders, inventory, and customer management) with a dedicated AI employee (Veyra) and an in-house AI Content Marketing Studio (Reels, posters, local SEO captions).",
    },
    {
      q: "How does the AI Content & Reels Studio work?",
      a: "Our studio plans, scripts, and produces 15 to 30 high-retention 9:16 reels, branded offer posters, and search-optimised captions every month. We handle the writing, voiceovers, dynamic captions, and hashtag research. You review every piece on WhatsApp before it is published, and we can upload directly to your Instagram account.",
    },
    {
      q: "What is a search-optimised caption (Local SEO)?",
      a: "A search-optimised caption is written around high-intent words your customers search for on Google and Instagram, such as 'salon near me' or 'custom cake shop open now', with targeted local hashtags. This ensures your posts don't just appear to existing followers, but attract brand-new walk-ins from nearby neighborhoods.",
    },
    {
      q: "What is an AI Employee (Veyra)?",
      a: "An AI Employee is a digital team member tailored to your industry. Unlike passive tools that require you to formulate every query, Veyra continuously monitors appointments, capacity, customer return rates, and inventory velocity to present structured daily briefings and revenue recommendations.",
    },
    {
      q: "Can I review and request revisions before anything goes live?",
      a: "Yes, 100%. Revisions are completely included in all plans. You approve every reel, poster, caption, discount code, and customer broadcast on WhatsApp before anything goes live.",
    },
    {
      q: "How fast do you respond to enquiries?",
      a: "We guarantee a response on WhatsApp within 3 hours during business hours. When you submit your business details, our team evaluates your local category and replies with sample reel hooks and a tailored plan.",
    },
    {
      q: "How does payment work? Is payment taken on this website?",
      a: "No payment is taken on this website. Once we agree on the scope, plan, or add-ons over WhatsApp, official payment details and invoice receipts are shared securely via WhatsApp or email.",
    },
    {
      q: "Can you design a custom website for my brand?",
      a: "Yes. BizGalaxy automatically generates an elegant, high-conversion customer website with built-in WhatsApp booking and order buttons. We also offer bespoke custom landing pages as an add-on service.",
    },
    {
      q: "Can I manage multiple branches or franchises?",
      a: "Yes. BizGalaxy has native multi-branch support. Owners can toggle between individual location cockpits or view aggregated company-wide performance, inventory distribution, and staff scheduling from one central dashboard.",
    },
    {
      q: "Is my customer data secure?",
      a: "Yes. Your business data is encrypted in transit and at rest using bank-grade SSL and AES-256 protocols. Your customer phone numbers and records are never sold or shared.",
    },
  ];

  return (
    <section id="faq" className="relative py-28 sm:py-36 overflow-hidden bg-[#06040c]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-purple-950/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            Answers & Clarifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-gradient-purple-gold">Questions.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Everything you need to know about our AI Employee, Content Studio, and 3-hour WhatsApp onboarding.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.q}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-purple-300 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-purple-600/30 text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Have a specific question about your store?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Message us on WhatsApp. Our founders reply within 3 hours.
            </p>
          </div>
          <button
            onClick={() => openWhatsAppEnquiry()}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-2 shrink-0 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
