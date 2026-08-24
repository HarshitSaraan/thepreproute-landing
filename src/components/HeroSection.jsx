import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, UserCheck, Star, ArrowRight, CheckCircle, Video, Award } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Route.";

  useEffect(() => {
    let timeoutId;
    
    if (!isDeleting && typedText === fullText) {
      // Pause at the end before deleting
      timeoutId = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText === '') {
      // Pause before typing again
      timeoutId = setTimeout(() => setIsDeleting(false), 600);
    } else {
      // Type or delete characters
      timeoutId = setTimeout(() => {
        const nextText = isDeleting 
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1);
        setTypedText(nextText);
      }, isDeleting ? 80 : 150);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting]);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-transparent px-6 sm:px-12 md:px-24 pt-12 pb-20 relative overflow-hidden">
      
      {/* Background Radial Glow - Centered lower down so top header canvas is pure solid #F7F7F7 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2196F3]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl relative z-10 flex flex-col items-center">
        
        {/* Top Pill Tag */}
        <span className="inline-flex items-center gap-2 bg-white border border-[#D0E2F5] text-[#2196F3] text-xs font-black px-4 py-2 rounded-full mb-8 shadow-[0_2px_10px_rgba(33,150,243,0.12)] hover:border-[#90CAF9] transition-all">
          <Sparkles className="w-4 h-4 text-[#2196F3] animate-pulse" />
          <span>BUILT BY IIM STUDENTS • DESIGNED FOR IPMAT 2026</span>
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-950 leading-[1.06] mb-6 flex flex-col items-center">
          <span>Because every</span>
          <span>Dream deserves a</span>
          <span className="text-[#2196F3] inline-flex items-center min-h-[1.2em]">
            {typedText}
            <span className="w-1.5 sm:w-2.5 h-[0.8em] bg-[#2196F3] ml-3 animate-pulse rounded-sm"></span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl mt-4 mb-10 max-w-3xl mx-auto leading-relaxed text-slate-600 font-medium">
          Go beyond just taking mock tests. Analyze your performance, revisit your mistakes, revise smarter, and learn from current IIM students—all in one platform.
        </p>

        {/* Primary CTA & Subtext */}
        <div className="flex flex-col items-center gap-3.5 mb-14">
          <button 
            onClick={() => alert('Booking free 1:1 mentor strategy call with IIM Student...')}
            className="group relative bg-[#2196F3] hover:bg-[#1976D2] text-white font-black py-4 px-10 rounded-full text-base sm:text-lg transition-all shadow-[0_10px_25px_-5px_rgba(33,150,243,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(33,150,243,0.5)] hover:scale-105 active:scale-98 flex items-center gap-3"
          >
            <UserCheck className="w-5 h-5 stroke-[2.5]" />
            <span>Talk to an IIM Mentor</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs sm:text-sm font-bold text-slate-500 flex items-center gap-2 mt-1">
            <ShieldCheck className="w-4.5 h-4.5 text-[#2196F3]" />
            <span>Book a Free 1:1 session with an IIM mentor</span>
          </p>
        </div>

        {/* Stealth AI Inspired Interactive Mentor Showcase Card */}
        <div className="w-full max-w-3xl bg-white border border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(13,71,161,0.08)] relative hover:border-[#90CAF9] transition-all text-left">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              {/* Mentor Avatar Group */}
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#2196F3] text-white flex items-center justify-center font-black text-xs">
                  IIM
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#0D47A1] text-white flex items-center justify-center font-black text-xs">
                  IND
                </div>
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-[#10B981] text-white flex items-center justify-center font-black text-xs">
                  ROH
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">1:1 IIM Student Mentorship</h3>
                  <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Live Mentors Available
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Direct guidance from IPMAT toppers now studying at IIM Indore & Rohtak</p>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-[#E3F2FD] px-3 py-1.5 rounded-xl border border-[#90CAF9]/50">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs font-black text-slate-900">4.9/5</span>
              <span className="text-[11px] font-bold text-slate-500 ml-1">(500+ Aspirants Guided)</span>
            </div>
          </div>

          {/* Grid Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="bg-[#F8FAFC] border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E3F2FD] text-[#2196F3] flex items-center justify-center shrink-0">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">1:1 Video Calls</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Personalized attempt strategy & timing drill</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E3F2FD] text-[#2196F3] flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">Sectional Blueprint</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Identify weak QA/VA topics with top rankers</p>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E3F2FD] text-[#2196F3] flex items-center justify-center shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900">Free Session</h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">First 1:1 strategy session is 100% complimentary</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
