import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MinusCircle, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Star,
  Check,
  Loader2
} from 'lucide-react';
import pricingService from '../api/services/pricingService';

export default function PricingSection({ onOpenAuthModal }) {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPricing() {
      try {
        setLoading(true);
        const res = await pricingService.getPlans({});
        if (res.data?.data) {
          setPlans(res.data.data);
        } else if (Array.isArray(res.data)) {
          setPlans(res.data);
        }
      } catch (err) {
        console.warn('Could not fetch dynamic plans, using fallback pricing:', err);
      } finally {
        setLoading(false);
      }
    }

    loadPricing();
  }, []);

  const handlePlanClick = (planName) => {
    const token = localStorage.getItem('token');
    const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5174';
    if (token) {
      window.location.href = `${dashboardUrl}/#token=${encodeURIComponent(token)}&redirect=pricing`;
    } else if (onOpenAuthModal) {
      onOpenAuthModal('register');
    } else {
      window.location.href = `${dashboardUrl}/#pricing`;
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-transparent px-6 sm:px-12 md:px-16 relative overflow-hidden">
      
      {/* Ambient Blue Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#2196F3]/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#90CAF9]/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight mb-4"
          >
            Simple, Transparent <span className="text-[#2196F3]">Pricing</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Start for free and upgrade when you are ready to crack IPMAT with IIM student guidance.
          </motion.p>
        </div>

        {/* 2-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* 1. FREE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#D0E2F5] rounded-[2rem] p-8 sm:p-10 shadow-[0_10px_30px_rgba(13,71,161,0.04)] flex flex-col justify-between hover:border-[#90CAF9] hover:shadow-[0_20px_40px_rgba(33,150,243,0.08)] transition-all duration-300 relative"
          >
            <div>
              {/* Header */}
              <div className="text-center mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Free
                </span>
                <div className="text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-6">
                  ₹0
                </div>
              </div>

              {/* Mocks Highlight Box */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs font-semibold text-slate-700 space-y-1.5 mb-6 text-left">
                <div>1 Full-Length IPMAT Indore Mock</div>
                <div>Baseline Diagnostic Performance Report</div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3.5 mb-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Daily Practice (10/day)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Basic Formula & Vocab Flashcards</span>
                </div>

                <div className="flex items-center gap-3">
                  <MinusCircle className="w-5 h-5 text-slate-300 shrink-0" />
                  <span className="text-sm font-semibold text-slate-400">Pyp (Previous Year Papers)</span>
                </div>

                <div className="flex items-center gap-3">
                  <MinusCircle className="w-5 h-5 text-slate-300 shrink-0" />
                  <span className="text-sm font-semibold text-slate-400">Sectional</span>
                </div>

                <div className="flex items-center gap-3">
                  <MinusCircle className="w-5 h-5 text-slate-300 shrink-0" />
                  <span className="text-sm font-semibold text-slate-400">Topicwise</span>
                </div>

                <div className="flex items-center gap-3">
                  <MinusCircle className="w-5 h-5 text-slate-300 shrink-0" />
                  <span className="text-sm font-semibold text-slate-400">Community</span>
                </div>

                <div className="flex items-center gap-3">
                  <MinusCircle className="w-5 h-5 text-slate-300 shrink-0" />
                  <span className="text-sm font-semibold text-slate-400">Interview Prep</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button 
                onClick={() => handlePlanClick('Free')}
                className="w-full py-4 rounded-2xl font-black text-[#2196F3] bg-[#E3F2FD] hover:bg-[#D0E2F5] text-sm transition-all shadow-xs active:scale-98 cursor-pointer"
              >
                Get Started Free
              </button>
            </div>
          </motion.div>

          {/* 2. PRO CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border-2 border-[#2196F3] rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_60px_rgba(33,150,243,0.18)] flex flex-col justify-between relative transform md:-translate-y-2 hover:shadow-[0_25px_70px_rgba(33,150,243,0.25)] transition-all duration-300"
          >
            {/* Top Pill Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-[#2196F3] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-6 rounded-full shadow-md flex items-center gap-1.5">
                <span>MOST POPULAR</span>
              </span>
            </div>

            <div>
              {/* Header */}
              <div className="text-center mt-2 mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  PRO ALL-ACCESS
                </span>
                <div className="text-4xl sm:text-5xl font-black text-slate-950 mt-1 mb-6">
                  {plans && plans[0]?.price ? `₹${plans[0].price}` : '₹3,999'}
                </div>
              </div>

              {/* Mocks Highlight Box */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs font-semibold text-slate-700 space-y-1.5 mb-6 text-left">
                <div>15 mocks each — IPMAT Indore, JIPMAT</div>
                <div>5 mocks each — IIM B DBE, NPAT, SET</div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3.5 mb-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Pyp (Previous Year Papers)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Sectional Mocks</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Topicwise Practice</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Unlimited Daily Practice</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Study Squad & Community</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">1:1 Mentorship Access</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-4 border-t border-slate-100">
              <button 
                onClick={() => handlePlanClick('Pro')}
                className="w-full py-4 rounded-2xl font-black text-white bg-[#2196F3] hover:bg-[#1976D2] text-sm transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </motion.div>

        </div>

        {/* Trust Badges */}
        <div className="mt-14 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>7-Day Money-Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#2196F3]" />
            <span>Instant Dashboard Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500" />
            <span>IIM Student Curated</span>
          </div>
        </div>

      </div>
    </section>
  );
}
