import React from 'react';
import { CheckCircle2, XCircle, Sparkles, UserCheck } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#F7F7F7] px-6 sm:px-12 md:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-[#E3F2FD] border border-[#90CAF9]/60 text-[#2196F3] text-xs font-black uppercase px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2196F3]" />
            <span>TRANSPARENT INVESTMENT IN YOUR FUTURE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Simple, Transparent <span className="text-[#2196F3]">Pricing</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Start for free and upgrade when you are ready to crack IPMAT with IIM student guidance.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto justify-center items-stretch">
          
          {/* Basic Free Plan */}
          <div className="flex-1 bg-white border border-[#D0E2F5] rounded-3xl p-8 shadow-[0_10px_30px_rgba(13,71,161,0.05)] flex flex-col relative hover:border-[#90CAF9] transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-extrabold text-slate-900">Basic Aspirant</h3>
              <span className="bg-slate-100 text-slate-600 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">Free</span>
            </div>
            
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-black text-slate-950">₹0</span>
              <span className="text-slate-500 font-bold text-sm">/ forever</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-8 font-medium leading-relaxed">Perfect for exploring the platform and testing out baseline mocks.</p>
            
            <div className="space-y-4 mb-8 flex-1 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">1 Free Full-Length Indore Mock</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">Daily Topic Drills (10/day)</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-400">Deep Performance Analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-400">Automated Mistake Bank Vault</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-400">1:1 IIM Mentor Strategy Session</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Starting free basic access...')}
              className="w-full py-4 px-6 rounded-2xl font-black text-[#2196F3] bg-[#E3F2FD] hover:bg-[#D0E2F5] transition-all text-xs sm:text-sm"
            >
              Start for Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 bg-gradient-to-b from-white via-white to-[#F0F7FF] border-2 border-[#2196F3] rounded-3xl p-8 shadow-[0_20px_50px_rgba(33,150,243,0.15)] flex flex-col relative transform md:-translate-y-4 hover:shadow-[0_25px_60px_rgba(33,150,243,0.22)] transition-all">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#2196F3] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MOST POPULAR CHOICE</span>
              </span>
            </div>
            
            <div className="flex items-center justify-between mb-2 mt-2">
              <h3 className="text-xl font-extrabold text-slate-950">Pro IPMAT 2026</h3>
              <span className="bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/60 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">All-Access</span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-black text-slate-950">₹4,000</span>
              <span className="text-slate-500 font-bold text-sm">/ year</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-8 font-medium leading-relaxed">Everything you need to crack IPMAT Indore, Rohtak, JIPMAT & secure your IIM seat.</p>
            
            <div className="space-y-4 mb-8 flex-1 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">25+ Latest NTA/IIM Full Mocks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">500+ Adaptive Topic Practice Drills</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">AI Deep Performance & Percentile Analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">Automated Rose Pink Mistake Bank Vault</span>
              </div>
              <div className="flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-black text-emerald-700">1:1 Strategy Calls with IIM Students</span>
              </div>
            </div>

            <button 
              onClick={() => alert('Proceeding to Pro IPMAT access...')}
              className="w-full py-4 px-6 rounded-2xl font-black text-white bg-[#2196F3] hover:bg-[#1976D2] transition-all shadow-lg hover:shadow-xl hover:scale-102 text-xs sm:text-sm"
            >
              Get Pro All-Access Pass
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}


