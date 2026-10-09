"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Building2,
  User,
  Mail,
  Phone,
  Lock,
  MapPin,
  Layers,
  Upload,
  FileText,
  Scissors,
  UtensilsCrossed,
  Cake,
  CupSoda,
  ShoppingBag,
  Store,
  HelpCircle,
  Rocket
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { PRICING_PLANS } from "@/data/pricingData";

const BUSINESS_TYPES = [
  { id: "salon", label: "Salon & Beauty", icon: Scissors },
  { id: "restaurant", label: "Restaurant & Café", icon: UtensilsCrossed },
  { id: "bakery", label: "Bakery & Cake Shop", icon: Cake },
  { id: "juice", label: "Juice Shop", icon: CupSoda },
  { id: "supermarket", label: "Supermarket", icon: ShoppingBag },
  { id: "retail", label: "Retail Store", icon: Store },
  { id: "other", label: "Other", icon: HelpCircle },
];

export function RegisterModal() {
  const { isOpen, selectedPlanId, closeOnboarding } = useOnboarding();
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Account
    ownerName: "",
    email: "",
    phoneNumber: "",
    password: "",

    // Step 2: Business
    businessName: "",
    businessType: "Salon & Beauty",
    city: "",
    state: "",
    numberOfBranches: "1",
    businessPhone: "",
    businessLogo: "",
    businessDescription: "",

    // Step 3: Plan
    selectedPlan: selectedPlanId || "growth",
  });

  // Sync selected plan if passed from context
  useEffect(() => {
    if (selectedPlanId) {
      setFormData((prev) => ({ ...prev, selectedPlan: selectedPlanId }));
    }
  }, [selectedPlanId]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeOnboarding();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnboarding]);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find((p) => p.id === formData.selectedPlan) || PRICING_PLANS[1];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleComplete = () => {
    closeOnboarding();
    // Smooth scroll to the live platform dashboard
    const dashboardElement = document.getElementById("platform");
    if (dashboardElement) {
      dashboardElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in"
        onClick={closeOnboarding}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0b0818]/95 border border-purple-500/30 rounded-3xl shadow-[0_0_60px_rgba(139,92,246,0.35)] overflow-hidden z-10 backdrop-blur-2xl my-auto animate-in zoom-in-95 duration-200">
        {/* Glowing cosmic accent line at top */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-yellow-400 to-indigo-600" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                BizGalaxy Onboarding
              </span>
              <h3 className="text-base font-bold text-white">
                Register Your Business
              </h3>
            </div>
          </div>

          <button
            onClick={closeOnboarding}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        <div className="px-6 sm:px-8 pt-5 pb-2">
          <div className="grid grid-cols-4 gap-2">
            {[
              { num: 1, label: "Account" },
              { num: 2, label: "Business" },
              { num: 3, label: "Plan" },
              { num: 4, label: "Launch" },
            ].map((step) => {
              const isPast = currentStep > step.num;
              const isCurrent = currentStep === step.num;
              return (
                <div key={step.num} className="flex flex-col gap-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isPast || isCurrent
                        ? "bg-gradient-to-r from-purple-500 to-yellow-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        : "bg-white/10"
                    }`}
                  />
                  <span
                    className={`text-[11px] font-mono font-medium ${
                      isCurrent
                        ? "text-purple-300 font-bold"
                        : isPast
                        ? "text-zinc-400"
                        : "text-zinc-600"
                    }`}
                  >
                    0{step.num}. {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Account Setup */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h4 className="text-xl font-extrabold text-white mb-1">
                  Create Your BizGalaxy Account
                </h4>
                <p className="text-xs text-zinc-400">
                  Begin your journey into an intelligent, AI-powered business universe.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Owner Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <input
                      type="text"
                      placeholder="e.g. Kevin Shalom"
                      value={formData.ownerName}
                      onChange={(e) =>
                        setFormData({ ...formData, ownerName: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <input
                      type="email"
                      placeholder="kevin@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-zinc-500"
                    />
                  </div>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Minimum 8 characters with letters and numbers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Business Information */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h4 className="text-xl font-extrabold text-white mb-1">
                  Tell Us About Your Business
                </h4>
                <p className="text-xs text-zinc-400">
                  BizGalaxy and Veyra configure your industry workflows automatically.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Business Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <input
                      type="text"
                      placeholder="e.g. Hi-Tech Salon & Spa"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Business Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {BUSINESS_TYPES.map((bt) => {
                      const Icon = bt.icon;
                      const isSelected = formData.businessType === bt.label;
                      return (
                        <button
                          type="button"
                          key={bt.id}
                          onClick={() =>
                            setFormData({ ...formData, businessType: bt.label })
                          }
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all text-left ${
                            isSelected
                              ? "bg-purple-600/30 border-purple-400 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                              : "bg-white/[0.03] border-white/10 text-zinc-300 hover:border-purple-500/30 hover:bg-white/[0.05]"
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-yellow-300" : "text-purple-400"}`} />
                          <span className="truncate">{bt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      City
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                      <input
                        type="text"
                        placeholder="e.g. Bangalore"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 placeholder:text-zinc-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Karnataka"
                      value={formData.state}
                      onChange={(e) =>
                        setFormData({ ...formData, state: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Number of Branches
                    </label>
                    <div className="relative">
                      <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                      <select
                        value={formData.numberOfBranches}
                        onChange={(e) =>
                          setFormData({ ...formData, numberOfBranches: e.target.value })
                        }
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#141028] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400"
                      >
                        <option value="1">1 Branch (Single location)</option>
                        <option value="2-3">2 - 3 Branches</option>
                        <option value="4-10">4 - 10 Branches</option>
                        <option value="10+">10+ Multi-location chain</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Business Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                      <input
                        type="tel"
                        placeholder="+91 80 4123 4567"
                        value={formData.businessPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, businessPhone: e.target.value })
                        }
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Business Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of your services, specialty, or menu..."
                    value={formData.businessDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, businessDescription: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-400 placeholder:text-zinc-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Choose Plan */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h4 className="text-xl font-extrabold text-white mb-1">
                  Choose Your BizGalaxy Plan
                </h4>
                <p className="text-xs text-zinc-400">
                  Select the plan that matches your current scale. Upgrade or change anytime.
                </p>
              </div>

              <div className="space-y-3">
                {PRICING_PLANS.map((plan) => {
                  const isSelected = formData.selectedPlan === plan.id;
                  return (
                    <div
                      key={plan.id}
                      onClick={() =>
                        setFormData({ ...formData, selectedPlan: plan.id })
                      }
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative ${
                        isSelected
                          ? "bg-purple-950/40 border-purple-400 shadow-[0_0_25px_rgba(139,92,246,0.35)]"
                          : "bg-white/[0.02] border-white/10 hover:border-purple-500/30 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="text-base font-bold text-white">
                              {plan.name}
                            </h5>
                            {plan.badge && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                                {plan.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-400 mb-2">
                            {plan.subtitle}
                          </p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-zinc-300">
                            {plan.features.slice(0, 4).map((f, i) => (
                              <span key={i} className="flex items-center gap-1">
                                <Check className="w-3 h-3 text-emerald-400" />
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-xl font-black text-white">
                            {plan.price}
                          </div>
                          <span className="text-[11px] text-zinc-500 font-mono">
                            /{plan.period}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-full border mt-2 ml-auto flex items-center justify-center transition-all ${
                              isSelected
                                ? "bg-purple-500 border-purple-300 text-white"
                                : "border-white/20"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Ready to Launch */}
          {currentStep === 4 && (
            <div className="text-center py-4 space-y-6 animate-in fade-in duration-200">
              <div className="relative mx-auto w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-yellow-400 p-[2px] shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                <div className="w-full h-full bg-[#0a0717] rounded-[22px] flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-yellow-300 animate-bounce" />
                </div>
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full inline-block mb-3">
                  Account Initialized & Synced
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                  You&apos;re Ready to Launch
                </h4>
                <p className="mt-2 text-sm text-zinc-300 max-w-md mx-auto">
                  Welcome to BizGalaxy. Your business universe is ready to launch.
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-purple-500/30 text-left space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-zinc-400">Business Name:</span>
                  <span className="font-bold text-white">
                    {formData.businessName || "Hi-Tech Salon & Spa"}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <span className="text-zinc-400">Business Type:</span>
                  <span className="font-semibold text-purple-300">
                    {formData.businessType}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Selected Plan:</span>
                  <span className="font-bold text-yellow-300">
                    {currentPlan.name} ({currentPlan.price}/{currentPlan.period})
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/25 max-w-md mx-auto text-xs text-purple-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-300 shrink-0" />
                <span>
                  Veyra AI is preparing your initial operational dashboard and live customer website engine.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 sm:px-8 border-t border-white/10 bg-[#070512]">
          {currentStep > 1 && currentStep < 4 ? (
            <button
              onClick={handleBack}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400/30 transition-all hover:scale-105"
            >
              <span>{currentStep === 3 ? "Review & Confirm" : "Continue"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-yellow-500 hover:from-purple-500 hover:to-yellow-400 shadow-[0_0_30px_rgba(139,92,246,0.6)] border border-yellow-300/40 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4 text-yellow-200" />
              <span>Enter My Dashboard</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
