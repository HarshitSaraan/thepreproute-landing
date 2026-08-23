import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-[#F7F7F7] px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-4">
            Simple, Transparent <span className="text-[#2196F3]">Pricing</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium">
            Start for free and upgrade when you are ready to crack IPMAT.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto justify-center items-stretch">
          
          {/* Free Plan */}
          <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-slate-950">₹0</span>
            </div>
            <p className="text-sm text-slate-500 mb-8 font-medium">Perfect for exploring the platform and trying out basic features.</p>
            
            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0" />
                <span className="text-sm font-semibold text-slate-700">1 Free Full-Length Mock</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0" />
                <span className="text-sm font-semibold text-slate-700">Daily Practice Questions (Limited)</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
                <span className="text-sm font-medium text-slate-400">Deep Performance Analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" />
                <span className="text-sm font-medium text-slate-400">Mistake Bank Vault</span>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-xl font-bold text-[#2196F3] bg-[#E3F2FD] hover:bg-[#D0E2F5] transition-colors">
              Start for Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="flex-1 bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#2196F3] text-white text-xs font-black uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Pro IPMAT</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-black text-white">₹4000</span>
              <span className="text-slate-400 font-medium">/ year</span>
            </div>
            <p className="text-sm text-slate-400 mb-8 font-medium">Everything you need to confidently crack IPMAT & join an IIM.</p>
            
            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0" />
                <span className="text-sm font-semibold text-slate-200">25+ NTA-Pattern Full Mocks</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Unlimited Topic-wise Tests</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0" />
                <span className="text-sm font-semibold text-slate-200">AI Deep Performance Analytics</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Automated Mistake Bank Vault</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2196F3] shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Smart Flashcard Decks</span>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#2196F3] hover:bg-[#1976D2] transition-colors shadow-lg">
              Get Pro Access
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
