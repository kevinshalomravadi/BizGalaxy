"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface WhatsAppPrefill {
  businessName?: string;
  category?: string;
  service?: string;
  planName?: string;
}

interface OnboardingContextType {
  isOpen: boolean;
  selectedPlanId: string;
  openOnboarding: (planId?: string) => void;
  closeOnboarding: () => void;
  
  // WhatsApp Enquiry Flow
  isWhatsAppOpen: boolean;
  whatsAppPrefill: WhatsAppPrefill | null;
  openWhatsAppEnquiry: (prefill?: WhatsAppPrefill) => void;
  closeWhatsAppEnquiry: () => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");
  
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppPrefill, setWhatsAppPrefill] = useState<WhatsAppPrefill | null>(null);

  const openOnboarding = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setIsOpen(true);
  };

  const closeOnboarding = () => {
    setIsOpen(false);
  };

  const openWhatsAppEnquiry = (prefill?: WhatsAppPrefill) => {
    if (prefill) {
      setWhatsAppPrefill(prefill);
    } else {
      setWhatsAppPrefill(null);
    }
    setIsWhatsAppOpen(true);
  };

  const closeWhatsAppEnquiry = () => {
    setIsWhatsAppOpen(false);
    setWhatsAppPrefill(null);
  };

  return (
    <OnboardingContext.Provider
      value={{
        isOpen,
        selectedPlanId,
        openOnboarding,
        closeOnboarding,
        isWhatsAppOpen,
        whatsAppPrefill,
        openWhatsAppEnquiry,
        closeWhatsAppEnquiry,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
