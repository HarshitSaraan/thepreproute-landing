import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, UserCheck, Star, ArrowRight, CheckCircle, Video, Award } from 'lucide-react';
import AntigravityBackground from './AntigravityBackground';

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
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-transparent px-6 sm:px-12 md:px-24 pt-24 sm:pt-28 lg:pt-32 pb-20 relative">
      
      {/* Google Antigravity-Style Particle Vortex Background */}
      <AntigravityBackground />

      {/* Ambient Blue Hint Glows (Same as 'Why Us' section) */}
      <div className="absolute top-[30%] left-[60%] w-[600px] h-[600px] bg-[#2196F3]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-[#64B5F6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl relative z-10 flex flex-col items-center">
        
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
        <div className="flex flex-col items-center gap-3.5">
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

      </div>
    </section>
  );
}

