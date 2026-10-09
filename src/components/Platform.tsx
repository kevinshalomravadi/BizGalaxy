"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCheck,
  Package,
  GitBranch,
  Megaphone,
  Award,
  BarChart4,
  Bot,
  Settings,
  Search,
  TrendingUp,
  Star,
  Sparkles,
  Building2,
  ArrowRight
} from "lucide-react";
import { useOnboarding } from "@/context/OnboardingContext";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Platform() {
  const { openOnboarding } = useOnboarding();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [selectedBranch, setSelectedBranch] = useState("Hi-Tech Salon & Spa");
  const [quickActionAlert, setQuickActionAlert] = useState<string | null>(null);

  const sidebarLinks = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "customers", label: "Customers", icon: Users },
    { id: "staff", label: "Staff", icon: UserCheck },
    { id: "services", label: "Services", icon: Package },
    { id: "branches", label: "Branches", icon: GitBranch },
    { id: "marketing", label: "Marketing", icon: Megaphone },
    { id: "loyalty", label: "Loyalty", icon: Award },
    { id: "reports", label: "Reports", icon: BarChart4 },
    { id: "ai", label: "AI Assistant", icon: Bot, isAi: true },
  ];

  const popularServices = [
    { name: "Hair Cut & Style", count: "32 bookings", growth: "+32%", avatar: "💇‍♀️" },
    { name: "Hair Color", count: "28 bookings", growth: "+21%", avatar: "🎨" },
    { name: "Facial & Glow", count: "18 bookings", growth: "+14%", avatar: "✨" },
    { name: "Manicure & Pedicure", count: "16 bookings", growth: "+12%", avatar: "💅" },
  ];

  const upcomingAppointments = [
    { time: "10:30 AM", client: "Sneha Reddy", service: "Hair Cut & Style", status: "Confirmed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
    { time: "11:15 AM", client: "Anjali Rao", service: "Facial Care", status: "Confirmed", statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" },
    { time: "12:00 PM", client: "Ravi Teja", service: "Hair Color", status: "Pending", statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/30" },
  ];

  const handleAction = (name: string) => {
    setQuickActionAlert(`Triggered ${name} module in live simulation.`);
    setTimeout(() => setQuickActionAlert(null), 3000);
  };

  return (
    <section id="platform" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background glow (stable, non-floating) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] bg-indigo-950/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Unified Business OS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Everything Your Business Needs. <br />
              <span className="text-gradient-purple-gold">In One Place.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              Your Business. One Intelligent Platform. BizGalaxy unites daily operational management with autonomous AI intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* Real Interactive Dashboard UI (Matching Reference Image - Stable layout) */}
        <ScrollReveal delayMs={150}>
          <div className="relative max-w-6xl mx-auto">
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/25 via-indigo-600/25 to-yellow-500/15 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            <div className="relative rounded-3xl border border-purple-500/30 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden bg-[#070511] backdrop-blur-2xl">
              
              {/* Top Chrome / Window Frame */}
              <div className="px-6 py-3.5 bg-[#0a0718] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline">
                    bizgalaxy.io/console/live-business
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Sync • Veyra Active
                  </span>
                </div>
              </div>

              {/* Dashboard Container: Sidebar + Workspace */}
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
                
                {/* Left Sidebar */}
                <div className="lg:col-span-3 bg-[#090715] border-r border-white/10 p-5 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Brand in Sidebar */}
                    <div className="flex items-center gap-2.5 px-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center p-[1px]">
                        <div className="w-full h-full bg-[#0b0818] rounded-[7px] flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                        </div>
                      </div>
                      <span className="text-sm font-black tracking-wider text-white">
                        BIZ<span className="text-purple-400">GALAXY</span>
                      </span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-1">
                      {sidebarLinks.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeNav === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setActiveNav(item.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                              isActive
                                ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <Icon className={`w-4 h-4 ${isActive ? "text-yellow-300" : item.isAi ? "text-purple-300" : "text-zinc-400"}`} />
                              <span>{item.label}</span>
                            </div>
                            {item.isAi && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                                AI
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </nav>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all">
                      <Settings className="w-4 h-4 text-zinc-400" />
                      <span>Settings</span>
                    </button>
                  </div>
                </div>

                {/* Main Dashboard Canvas */}
                <div className="lg:col-span-9 p-5 sm:p-7 space-y-6 overflow-y-auto">
                  
                  {/* Top Header Bar inside Dashboard */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-sm">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                      <input
                        type="text"
                        placeholder="Search bookings, services, customers..."
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-purple-400 placeholder:text-zinc-500"
                      />
                    </div>

                    {/* Branch & User Profile */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-zinc-200">
                        <Building2 className="w-3.5 h-3.5 text-purple-400" />
                        <span className="font-semibold">{selectedBranch}</span>
                      </div>

                      <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-xs font-bold text-white border border-purple-300/40">
                          KS
                        </div>
                        <div className="hidden sm:block text-left">
                          <div className="text-xs font-bold text-white leading-none">Kevin Shalom</div>
                          <span className="text-[10px] text-zinc-400">Owner</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Welcome Greeting */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                      Good Morning, Kevin
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Here&apos;s what&apos;s happening with your business today.
                    </p>
                  </div>

                  {/* 4 Metric Cards (Stable, no floating) */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {/* Today's Appointments */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
                      <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                        <span>Today&apos;s Appointments</span>
                        <Calendar className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        18
                      </div>
                      <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        <span>+12%</span>
                      </div>
                    </div>

                    {/* New Customers */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
                      <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                        <span>New Customers</span>
                        <Users className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        7
                      </div>
                      <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        <span>+15%</span>
                      </div>
                    </div>

                    {/* Total Revenue */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-purple-500/30 bg-purple-950/20 hover:border-purple-400/50 shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all">
                      <div className="flex items-center justify-between text-xs text-purple-200 mb-1">
                        <span>Total Revenue</span>
                        <span className="text-xs text-yellow-300 font-bold">₹</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white">
                        ₹ 18,450
                      </div>
                      <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        <span>+24%</span>
                      </div>
                    </div>

                    {/* Customer Rating */}
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
                      <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                        <span>Customer Rating</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-1.5">
                        4.8
                        <span className="text-xs text-yellow-300 font-normal">★★★★★</span>
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-1">
                        (128 reviews)
                      </div>
                    </div>
                  </div>

                  {/* Main Content Grid: Bookings Chart + Popular Services + Veyra AI Box */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    
                    {/* Left Chart & Services (7 Cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      {/* Bookings Overview Chart */}
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                              Bookings Overview
                            </h4>
                            <span className="text-[11px] text-zinc-400">Weekly trajectory</span>
                          </div>
                          <span className="text-[11px] font-semibold text-purple-300 cursor-pointer hover:underline">
                            View All →
                          </span>
                        </div>

                        {/* SVG Curve Chart */}
                        <div className="h-32 w-full relative">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 350 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.45" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Gradient Fill under curve */}
                            <path
                              d="M 0,70 Q 50,85 100,50 T 200,40 T 280,20 T 350,30 L 350,100 L 0,100 Z"
                              fill="url(#chartGradient2)"
                            />
                            {/* Glowing line */}
                            <path
                              d="M 0,70 Q 50,85 100,50 T 200,40 T 280,20 T 350,30"
                              fill="none"
                              stroke="#a855f7"
                              strokeWidth="3"
                            />
                            {/* Data points */}
                            <circle cx="0" cy="70" r="3.5" fill="#facc15" />
                            <circle cx="100" cy="50" r="3.5" fill="#facc15" />
                            <circle cx="200" cy="40" r="3.5" fill="#facc15" />
                            <circle cx="280" cy="20" r="4.5" fill="#ffffff" stroke="#a855f7" strokeWidth="2" />
                            <circle cx="350" cy="30" r="3.5" fill="#facc15" />
                          </svg>

                          {/* Days axis */}
                          <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-3">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                          </div>
                        </div>
                      </div>

                      {/* Popular Services */}
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                            Popular Services
                          </h4>
                          <span className="text-[11px] font-semibold text-purple-300 cursor-pointer hover:underline">
                            View All →
                          </span>
                        </div>

                        <div className="space-y-2">
                          {popularServices.map((service, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors text-xs"
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="text-base">{service.avatar}</span>
                                <div>
                                  <div className="font-bold text-white">{service.name}</div>
                                  <div className="text-[10px] text-zinc-400">{service.count}</div>
                                </div>
                              </div>
                              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                {service.growth}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Veyra AI Card & Quick Actions (5 Cols) */}
                    <div className="lg:col-span-5 space-y-5">
                      
                      {/* Veyra AI Card (Stable, grounded) */}
                      <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-950/50 to-[#120d2b] border border-purple-400/40 shadow-[0_0_25px_rgba(139,92,246,0.25)] relative overflow-hidden">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-bold text-white">Veyra</h4>
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            </div>
                            <p className="text-xs text-purple-200">
                              Your AI Business Employee
                            </p>
                            <p className="text-[11px] text-zinc-400 mt-0.5">
                              Working for your growth.
                            </p>
                          </div>

                          {/* Mini 3D Avatar (Stable) */}
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-purple-300/40 shadow-[0_0_15px_rgba(139,92,246,0.4)] shrink-0">
                            <Image
                              src="/images/veyra.jpg"
                              alt="Veyra Avatar"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <button
                          onClick={() => openOnboarding()}
                          className="w-full mt-2 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.4)] flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02]"
                        >
                          <span>View Insights</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Quick Actions Grid */}
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                          Quick Actions
                        </h4>

                        <div className="grid grid-cols-2 gap-2.5">
                          <button
                            onClick={() => handleAction("Add Booking")}
                            className="p-3 rounded-xl bg-white/[0.03] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/40 text-left transition-all hover:-translate-y-0.5 group"
                          >
                            <Calendar className="w-4 h-4 text-purple-400 mb-1.5" />
                            <div className="text-xs font-bold text-white">Add Booking</div>
                            <span className="text-[10px] text-zinc-400">New appointment</span>
                          </button>

                          <button
                            onClick={() => handleAction("Add Customer")}
                            className="p-3 rounded-xl bg-white/[0.03] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/40 text-left transition-all hover:-translate-y-0.5 group"
                          >
                            <Users className="w-4 h-4 text-indigo-400 mb-1.5" />
                            <div className="text-xs font-bold text-white">Add Customer</div>
                            <span className="text-[10px] text-zinc-400">Create profile</span>
                          </button>

                          <button
                            onClick={() => handleAction("Reports")}
                            className="p-3 rounded-xl bg-white/[0.03] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/40 text-left transition-all hover:-translate-y-0.5 group"
                          >
                            <BarChart4 className="w-4 h-4 text-amber-400 mb-1.5" />
                            <div className="text-xs font-bold text-white">Reports</div>
                            <span className="text-[10px] text-zinc-400">Export analytics</span>
                          </button>

                          <button
                            onClick={() => handleAction("Add Service")}
                            className="p-3 rounded-xl bg-white/[0.03] hover:bg-purple-950/40 border border-white/5 hover:border-purple-500/40 text-left transition-all hover:-translate-y-0.5 group"
                          >
                            <Package className="w-4 h-4 text-emerald-400 mb-1.5" />
                            <div className="text-xs font-bold text-white">Add Service</div>
                            <span className="text-[10px] text-zinc-400">Price & duration</span>
                          </button>
                        </div>

                        {quickActionAlert && (
                          <div className="mt-3 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 text-center animate-in fade-in">
                            {quickActionAlert}
                          </div>
                        )}
                      </div>

                      {/* Upcoming Appointments List */}
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                            Upcoming Schedule
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-400">Today</span>
                        </div>

                        <div className="space-y-2">
                          {upcomingAppointments.map((app, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] text-xs hover:bg-white/[0.05] transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-mono text-zinc-400">{app.time}</span>
                                <div>
                                  <div className="font-bold text-white leading-tight">{app.client}</div>
                                  <div className="text-[10px] text-zinc-400">{app.service}</div>
                                </div>
                              </div>
                              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${app.statusColor}`}>
                                {app.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA for Dashboard Section */}
        <div className="text-center mt-12">
          <button
            onClick={() => openOnboarding()}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 shadow-[0_0_30px_rgba(139,92,246,0.45)] border border-purple-300/40 transition-all hover:scale-105"
          >
            <span>Launch Your Business Universe</span>
            <ArrowRight className="w-5 h-5 text-purple-200" />
          </button>
        </div>

      </div>
    </section>
  );
}
