import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Route.";

  useEffect(() => {
    let timeoutId;
    
    if (!isDeleting && typedText === fullText) {
      // Pause at the end before deleting
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
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
    <div>
      {/* Hero Intro Header Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center bg-[#F7F7F7] px-6 sm:px-12 md:px-24 py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl relative z-10">
          <span className="inline-flex items-center gap-2 bg-[#E3F2FD] border border-[#90CAF9]/60 text-[#2196F3] text-xs font-extrabold px-4 py-1.5 rounded-full mb-6 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#2196F3]" />
            <span>Built by IIM Students • Designed for IPMAT 2026 Aspirants</span>
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-950 leading-[1.08] mb-6 flex flex-col items-center">
            <span>Because every</span>
            <span>Dream deserves a</span>
            <span className="text-[#2196F3] inline-flex items-center min-h-[1.2em]">
              {typedText}
              <span className="w-1.5 sm:w-2.5 h-[0.8em] bg-[#2196F3] ml-3 animate-pulse rounded-sm"></span>
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl mt-6 mb-10 max-w-3xl mx-auto leading-relaxed text-slate-600 font-medium">
            Go beyond just taking mock tests. Analyze your performance, revisit your mistakes, revise smarter, and learn from current IIM students—all in one platform.
          </p>

          <div className="flex flex-col items-center gap-3">
            <button 
              onClick={() => alert('Booking free 1:1 mentor session...')}
              className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold py-4 px-10 rounded-full text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-98"
            >
              Talk to an IIM mentor
            </button>
            <p className="text-xs sm:text-sm font-bold text-slate-500 flex items-center gap-1.5 mt-2">
              <ShieldCheck className="w-4 h-4 text-[#2196F3]" />
              <span>Book a Free 1:1 session with an IIM mentor</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
