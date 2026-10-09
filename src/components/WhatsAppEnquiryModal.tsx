"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  MessageSquare,
  Clock,
  CheckCircle2,
  Send,
  Copy,
  Check,
  Building,
  Phone,
  User,
  MapPin,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";

const CATEGORIES = [
  "Salon & Beauty",
  "Restaurant & Café",
  "Bakery & Cake Shop",
  "Supermarket & Grocery",
  "Fashion & Boutiques",
  "Clinics & Healthcare",
  "Real Estate & Property",
  "Toys & Gift Gallery",
  "Gym & Fitness",
  "Conventions & Events",
  "Printers & Signage",
  "Marble, Tile & Hardware",
  "Other Local Business"
];

const SERVICES = [
  { id: "reels", label: "9:16 AI Reels", desc: "Short-form video for Instagram & YouTube" },
  { id: "posters", label: "Branded Posters", desc: "Offer & festival creatives with your logo" },
  { id: "seo", label: "Local SEO Captions", desc: "Keywords to rank on 'near me' searches" },
  { id: "ai_employee", label: "Veyra AI Employee", desc: "Automate appointments, billing & retention" },
  { id: "website", label: "Brand Website", desc: "Fast website with WhatsApp booking" },
];

const BUDGET_OPTIONS = [
  { label: "₹999 / mo (Starter OS)", value: "Starter Plan (₹999/mo)" },
  { label: "₹2,499 / mo (Growth OS)", value: "Growth Plan (₹2,499/mo)" },
  { label: "₹5,999 / mo (15 AI Reels & Posters)", value: "Business 15 Studio (₹5,999/mo)" },
  { label: "₹8,999 / mo (20 AI Reels & Growth)", value: "Monthly 20 Studio (₹8,999/mo)" },
  { label: "Custom Scope / Enterprise", value: "Custom Enterprise Plan" },
];

export function WhatsAppEnquiryModal() {
  const { isWhatsAppOpen, closeWhatsAppEnquiry, whatsAppPrefill } = useOnboarding();

  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("Salon & Beauty");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "reels",
    "posters",
    "seo"
  ]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[2].value);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync prefill from context if passed
  useEffect(() => {
    if (whatsAppPrefill) {
      if (whatsAppPrefill.businessName) setBusinessName(whatsAppPrefill.businessName);
      if (whatsAppPrefill.category) setCategory(whatsAppPrefill.category);
      if (whatsAppPrefill.planName) setSelectedBudget(whatsAppPrefill.planName);
    }
  }, [whatsAppPrefill]);

  if (!isWhatsAppOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Generate WhatsApp formatted message
  const serviceLabels = selectedServices
    .map((id) => SERVICES.find((s) => s.id === id)?.label)
    .filter(Boolean)
    .join(", ");

  const generatedMessage = `Hello BizGalaxy Team! 👋
I would like to inquire for my business:

🏢 Business: ${businessName || "My Business"} (${category})
👤 Contact: ${ownerName || "Owner"} ${phoneNumber ? `(${phoneNumber})` : ""}
📍 City: ${city || "Local"}
🎯 Services Needed: ${serviceLabels || "Content & AI Operations"}
💰 Preferred Plan/Budget: ${selectedBudget}
${additionalNotes ? `📝 Note: ${additionalNotes}\n` : ""}
Looking forward to your recommendation within 3 hours!`;

  const handleSendWhatsApp = () => {
    // BizGalaxy support WhatsApp line (international format without +)
    const whatsappNumber = "919014285818";
    const encodedText = encodeURIComponent(generatedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeWhatsAppEnquiry}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#0c0a18] border border-purple-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Glow Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-400" />

        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                Reply on WhatsApp within 3 hours
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                <ShieldCheck className="w-3 h-3 text-purple-400" />
                No upfront payment
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Start a Project & WhatsApp Consultation
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Tell us about your business. We&apos;ll review your requirements and respond on WhatsApp with a tailored plan and reel scripts.
            </p>
          </div>

          <button
            onClick={closeWhatsAppEnquiry}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="px-6 sm:px-8 py-5 overflow-y-auto space-y-5">
          
          {/* Business Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Business / Brand Name *
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Royal Salon, 9 to 9 Store"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 focus:bg-white/[0.06] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Business Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 transition-all cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#141026] text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Your Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Owner / Manager"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                WhatsApp Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. 98765 43210"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                City / Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Kurnool, Hyderabad"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-400 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Services Selector */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-2">
              Services You Need (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES.map((srv) => {
                const isSelected = selectedServices.includes(srv.id);
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => toggleService(srv.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-purple-900/30 border-purple-400/60 shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                        : "bg-white/[0.02] border-white/5 hover:border-white/20 text-zinc-400"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center text-xs shrink-0 ${
                        isSelected
                          ? "bg-purple-500 text-white"
                          : "border border-zinc-600"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <div className={`text-xs font-bold ${isSelected ? "text-white" : "text-zinc-300"}`}>
                        {srv.label}
                      </div>
                      <div className="text-[11px] text-zinc-400 leading-snug mt-0.5">
                        {srv.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget / Plan Selector */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Plan Preference or Monthly Budget
            </label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#141026] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 transition-all cursor-pointer"
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#141026] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Additional Goals / Needs (Optional)
            </label>
            <textarea
              rows={2}
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="e.g. We want to promote our new festival offers and fill empty afternoon slots."
              className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-purple-400 transition-all resize-none"
            />
          </div>

          {/* WhatsApp Message Live Preview Box */}
          <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs">
            <div className="flex items-center justify-between text-emerald-400 font-mono text-[11px] mb-2 font-semibold">
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                Live WhatsApp Message Preview
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-zinc-400 hover:text-emerald-300 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="font-mono text-[11px] text-zinc-300 whitespace-pre-wrap bg-black/40 p-3 rounded-xl border border-white/5 leading-relaxed overflow-x-auto">
              {generatedMessage}
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 sm:px-8 py-4 bg-[#0a0815] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-zinc-400 flex items-center gap-1.5 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span>Opens WhatsApp directly with your message pre-filled.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={closeWhatsAppEnquiry}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-400/30 flex items-center justify-center gap-2 transition-all group"
            >
              <Send className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
              <span>Send on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
