import React from 'react';
import { UserCheck } from 'lucide-react';

// Hand-Drawn Sketch Loop SVG Component (Animates on hover, disappears on click)
function SketchLoopSVG() {
  return (
    <svg 
      className="absolute -top-1.5 -bottom-1.5 -left-2.5 -right-2.5 w-[calc(100%+20px)] h-[calc(100%+12px)] pointer-events-none overflow-visible"
      viewBox="0 0 120 40"
      fill="none"
      preserveAspectRatio="none"
    >
      <path 
        d="M 112 24 C 108 8, 28 5, 10 18 C 3 28, 22 36, 68 36 C 98 36, 114 30, 116 22" 
        stroke="#2196F3" 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
        style={{ strokeDasharray: 100 }}
        className="transition-all duration-500 ease-out [stroke-dashoffset:100] group-hover:[stroke-dashoffset:0] opacity-0 group-hover:opacity-100"
      />
    </svg>
  );
}

export default function Navbar() {
  const handleNavClick = (e, targetId) => {
    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }
    if (targetId) {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-transparent py-5 transition-all border-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
        
        {/* Brand Logo - Slightly Bigger & Bold */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, null)}
          className="inline-flex items-center group shrink-0 outline-none"
        >
          <span className="font-black text-2xl sm:text-3xl tracking-tight text-slate-950 font-sans">
            the<span className="text-[#2196F3]">prep</span>route
          </span>
        </a>

        {/* Free-Flowing Center Nav Links (Zero Box / Zero Border Wrapper) */}
        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10 text-sm sm:text-base font-black text-slate-800">
          
          <div className="relative group">
            <a 
              href="#loop" 
              onClick={(e) => handleNavClick(e, '#loop')}
              className="relative inline-block px-3 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>The Loop</span>
              <SketchLoopSVG />
            </a>
          </div>

          <div className="relative group">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, '#features')}
              className="relative inline-block px-3 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>Features</span>
              <SketchLoopSVG />
            </a>
          </div>

          <div className="relative group">
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="relative inline-block px-3 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>Pricing</span>
              <SketchLoopSVG />
            </a>
          </div>

          <div className="relative group">
            <a 
              href="#exams" 
              onClick={(e) => handleNavClick(e, '#exams')}
              className="relative inline-block px-3 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>Exam Offerings</span>
              <SketchLoopSVG />
            </a>
          </div>

          <div className="relative group">
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, '#faq')}
              className="relative inline-block px-3 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>FAQ</span>
              <SketchLoopSVG />
            </a>
          </div>

        </nav>

        {/* Right CTA Action Button - Slightly Bigger & Spaced */}
        <div className="flex items-center gap-4 shrink-0">
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="text-sm font-black text-slate-800 hover:text-[#2196F3] px-3 py-2 transition-colors hidden sm:block"
          >
            Pricing
          </a>
          <button 
            onClick={(e) => { e.currentTarget.blur(); alert('Opening Mentor Consultation Modal...'); }}
            className="flex items-center gap-2 bg-[#2196F3] hover:bg-[#1976D2] text-white font-black text-xs sm:text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-98"
          >
            <UserCheck className="w-4 h-4 stroke-[2.5]" />
            <span>Talk to IIM Mentor</span>
          </button>
        </div>

      </div>
    </div>
  );
}

