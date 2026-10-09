export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  subtitle: string;
  badge?: string;
  popular?: boolean;
  description: string;
  features: string[];
  cta: string;
}

export interface ContentStudioPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  subtitle: string;
  badge?: string;
  popular?: boolean;
  reelsCount: string;
  postersCount: string;
  description: string;
  features: string[];
  cta: string;
}

export interface AddOnService {
  name: string;
  price: string;
  desc: string;
  badge?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹999",
    period: "month",
    subtitle: "For small businesses digitizing their operations.",
    description: "Essential foundation to digitize customer appointments, sales, and your online presence.",
    popular: false,
    features: [
      "Digital business profile",
      "Customer website with WhatsApp booking",
      "Basic customer CRM & directory",
      "Services & product catalogue",
      "Booking & order management",
      "Custom QR code for counters",
      "Basic business performance telemetry",
    ],
    cta: "Start with Starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹2,499",
    period: "month",
    subtitle: "Most popular for thriving single or multi-service businesses.",
    badge: "Most Popular",
    popular: true,
    description: "Unlock full operations and your dedicated Veyra AI employee to accelerate customer retention.",
    features: [
      "Everything in Starter",
      "Veyra AI Autonomous Business Employee",
      "Staff & stylist scheduling",
      "Billing & POS register sync",
      "Smart customer loyalty & retention triggers",
      "Automated WhatsApp & SMS notifications",
      "Offers & seasonal promotions engine",
      "Advanced customer churn prediction",
      "Daily AI morning briefings",
    ],
    cta: "Start Growing",
  },
  {
    id: "business-pro",
    name: "Business Pro",
    price: "₹4,999",
    period: "month",
    subtitle: "For multi-branch & high-volume enterprises.",
    badge: "Enterprise Power",
    popular: false,
    description: "Maximum scale, deep inventory intelligence, and multi-location governance powered by AI.",
    features: [
      "Everything in Growth",
      "Multi-branch & franchise management",
      "Deep inventory & SKU auto-reordering",
      "Omnichannel marketing automation",
      "Predictive revenue & margin forecasting",
      "Custom AI employee rulebooks & workflows",
      "Priority 24/7 VIP support",
      "Role-based staff permissions & audit logs",
    ],
    cta: "Choose Pro",
  },
];

export const CONTENT_STUDIO_PLANS: ContentStudioPlan[] = [
  {
    id: "business-15",
    name: "Business 15",
    price: "₹5,999",
    period: "month",
    subtitle: "Ideal for local shops, cafes & clinics building regular social presence.",
    badge: "Starter Studio",
    popular: false,
    reelsCount: "15 AI Reels (9:16)",
    postersCount: "8 Branded Posters",
    description: "Complete monthly content rhythm with scripted reels, custom posters, and SEO local captions.",
    features: [
      "15 Scripted 9:16 AI Reels (Instagram & YouTube Shorts)",
      "8 Branded Offer & Festival Creative Posters",
      "Local SEO Captions & targeted #hashtags",
      "Custom logo watermark & brand colors",
      "Review & unlimited revisions included",
      "Direct publishing to your Instagram account",
      "WhatsApp reply within 3 hours guarantee",
    ],
    cta: "Select Business 15",
  },
  {
    id: "growth-20",
    name: "Monthly 20",
    price: "₹8,999",
    period: "month",
    subtitle: "For active businesses running weekly offers and festive promotions.",
    badge: "Best Value",
    popular: true,
    reelsCount: "20 AI Reels (9:16)",
    postersCount: "15 Branded Posters",
    description: "Higher video frequency, AI presenter voiceover, and full monthly content calendar.",
    features: [
      "20 High-Retention 9:16 AI Reels",
      "15 Branded Offer, Launch & Festival Posters",
      "AI Presenter / Realistic Voiceover included",
      "Full 30-Day Strategic Content Calendar",
      "Local Search Keyword Optimization (Google & IG)",
      "Direct Instagram publishing & scheduling",
      "WhatsApp customer booking funnel integrated",
      "Dedicated creative producer on WhatsApp",
    ],
    cta: "Select Monthly 20",
  },
  {
    id: "premium-30",
    name: "Premium 30",
    price: "₹14,999",
    period: "month",
    subtitle: "Near-daily content dominance for market leaders & high-end brands.",
    badge: "Market Leader",
    popular: false,
    reelsCount: "30 AI Reels (9:16)",
    postersCount: "25 Branded Posters",
    description: "Near-daily high-impact content, cinematic edits, multi-lingual audio and full brand elevation.",
    features: [
      "30 Near-Daily 9:16 AI Reels with cinematic edits",
      "25 Branded Story & Feed Posters",
      "Multi-lingual voiceovers (English, Hindi, Telugu, etc.)",
      "Same-day priority turnaround for urgent campaigns",
      "Custom Instagram Grid & Highlight curation",
      "Integrated website landing page & WhatsApp form",
      "Monthly growth report & analytics review",
      "Dedicated senior creative director",
    ],
    cta: "Select Premium 30",
  },
];

export const ADD_ON_SERVICES: AddOnService[] = [
  {
    name: "AI Presenter / Avatar",
    price: "₹1,999 / mo",
    desc: "Human-like AI presenter delivering your brand scripts with natural lip-sync.",
    badge: "High Conversion",
  },
  {
    name: "Custom Brand Website",
    price: "₹3,999 one-time",
    desc: "Lightning-fast modern website with integrated WhatsApp booking and SEO tags.",
    badge: "Popular",
  },
  {
    name: "Festival & Event Mega Pack",
    price: "₹1,499 / pack",
    desc: "10 festive posters and 3 holiday celebration reels customized with your store offers.",
  },
  {
    name: "Multi-Language Voiceovers",
    price: "₹1,499 / mo",
    desc: "Reach local customers in Telugu, Hindi, Tamil, Kannada, or regional dialects.",
  },
  {
    name: "Same-Day Emergency Delivery",
    price: "₹999 / request",
    desc: "Urgent flash sale or flash promotion delivered and published within 6 hours.",
  },
  {
    name: "Google Business & Local SEO Boost",
    price: "₹2,499 / mo",
    desc: "Google Maps optimization, local keyword ranking, and review generation system.",
  },
];

export const ENTERPRISE_CONTACT = {
  title: "Need a custom hybrid plan?",
  actionText: "Chat on WhatsApp (3-Hour Reply)",
  description: "Combine AI Employee Business OS + Monthly Content Studio with custom SLA and dedicated agency manager.",
};
