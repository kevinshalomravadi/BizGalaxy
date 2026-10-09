import React from "react";
import {
  LineChart,
  Users2,
  Megaphone,
  CalendarCheck,
  TrendingUp,
  SunMedium,
  FileSpreadsheet,
  Cpu,
  ArrowUpRight
} from "lucide-react";

export function AIEmployeeCapabilities() {
  const capabilities = [
    {
      num: "01",
      title: "Business Intelligence",
      tagline: "Understand what is happening in your business.",
      desc: "Continuous monitoring of revenue, peak hours, service speed, and staff capacity across all branches.",
      icon: LineChart,
      highlight: "Real-time visibility",
    },
    {
      num: "02",
      title: "Customer Intelligence",
      tagline: "Understand customers, repeat visits, inactive customers and opportunities.",
      desc: "Tracks visit cadence, individual lifetime value, preferred services, and triggers timely re-engagement.",
      icon: Users2,
      highlight: "Retention engine",
    },
    {
      num: "03",
      title: "Marketing",
      tagline: "Create offers, captions, posters, campaigns and promotional ideas.",
      desc: "Drafts hyper-targeted WhatsApp broadcasts, Instagram stories, SMS reminders, and special seasonal promos.",
      icon: Megaphone,
      highlight: "Creative studio",
    },
    {
      num: "04",
      title: "Bookings & Orders",
      tagline: "Assist with appointments, customer requests and orders.",
      desc: "Streamlines scheduling slots, table turnover, online takeaway orders, and custom client requests seamlessly.",
      icon: CalendarCheck,
      highlight: "Zero double-booking",
    },
    {
      num: "05",
      title: "Growth Opportunities",
      tagline: "Identify opportunities to increase sales and customer retention.",
      desc: "Spots low-occupancy time slots, under-utilized staff hours, and suggests proven bundling strategies.",
      icon: TrendingUp,
      highlight: "Revenue discovery",
    },
    {
      num: "06",
      title: "Daily Business Assistant",
      tagline: "Give owners a simple daily summary of what matters.",
      desc: "Delivers a concise 2-minute morning briefing: bookings, staffing levels, urgent flags, and proposed actions.",
      icon: SunMedium,
      highlight: "Morning briefing",
    },
    {
      num: "07",
      title: "Reports",
      tagline: "Turn business data into understandable insights.",
      desc: "No complicated spreadsheets. Plain-English summaries showing exact margin trends and monthly performance.",
      icon: FileSpreadsheet,
      highlight: "Plain-language data",
    },
    {
      num: "08",
      title: "Automation",
      tagline: "Automate approved repetitive business tasks.",
      desc: "Hands-off follow-ups, birthday offers, inventory alerts, and post-visit review requests—once you click approve.",
      icon: Cpu,
      highlight: "Owner-controlled",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
            Full-Spectrum Digital Competence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            What Your <span className="text-gradient-purple-gold">AI Employee Can Do.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Engineered specifically for local commerce. Every capability connects directly into your operational workflow.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 group-hover:bg-purple-500/15 rounded-full blur-xl transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 group-hover:text-purple-200 group-hover:border-purple-400/40 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-purple-300 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 inline-block mb-2">
                    {item.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-purple-200/80 mb-3 leading-snug">
                    “{item.tagline}”
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 group-hover:text-purple-300 transition-colors">
                  <span>Explore feature</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
