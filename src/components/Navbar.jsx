import React, { useState, useEffect } from 'react';
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

export default function Navbar({ onOpenMentorModal, onOpenAuthModal }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
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
    <div className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-out px-4 sm:px-8 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div 
        className={`mx-auto pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled 
            ? 'max-w-5xl rounded-full bg-white/55 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(33,150,243,0.12)] px-6 sm:px-8 py-2.5' 
            : 'max-w-[1440px] bg-transparent border-none px-4 sm:px-8 py-1'
        }`}
      >
        
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, null)}
          className="inline-flex items-center group shrink-0 outline-none"
        >
          <span className={`font-black tracking-tight text-slate-950 font-sans transition-all duration-300 ${isScrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'}`}>
            the<span className="text-[#2196F3]">prep</span>route
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className={`hidden md:flex items-center justify-center text-slate-800 transition-all duration-300 ${isScrolled ? 'gap-6 lg:gap-8 text-xs sm:text-sm font-extrabold' : 'gap-8 lg:gap-10 text-sm sm:text-base font-black'}`}>
          
          <div className="relative group">
            <a 
              href="#loop" 
              onClick={(e) => handleNavClick(e, '#loop')}
              className="relative inline-block px-2.5 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>The Loop</span>
              <SketchLoopSVG />
            </a>
          </div>

          <div className="relative group">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, '#features')}
              className="relative inline-block px-2.5 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>Features</span>
              <SketchLoopSVG />
            </a>
          </div>

          <div className="relative group">
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="relative inline-block px-2.5 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>Pricing</span>
              <SketchLoopSVG />
            </a>
          </div>

          <div className="relative group">
            <a 
              href="#faq" 
              onClick={(e) => handleNavClick(e, '#faq')}
              className="relative inline-block px-2.5 py-1 text-slate-800 hover:text-[#2196F3] transition-colors"
            >
              <span>FAQ</span>
              <SketchLoopSVG />
            </a>
          </div>

        </nav>

        {/* Right CTA Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => {
              if (onOpenAuthModal) onOpenAuthModal('login');
              else window.location.href = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5174';
            }}
            className={`hidden sm:inline-flex font-bold text-slate-700 hover:text-[#2196F3] transition-colors cursor-pointer ${
              isScrolled ? 'text-xs px-2 py-1' : 'text-xs sm:text-sm px-3 py-1.5'
            }`}
          >
            Sign In
          </button>

          <button 
            onClick={(e) => {
              e.currentTarget.blur();
              if (onOpenMentorModal) onOpenMentorModal();
            }}
            className={`flex items-center gap-2 bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-98 cursor-pointer ${
              isScrolled ? 'text-xs px-4 py-2' : 'text-xs sm:text-sm px-6 py-3'
            }`}
          >
            <UserCheck className={`${isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'} stroke-[2.5]`} />
            <span>Talk to IIM Mentor</span>
          </button>
        </div>

      </div>
    </div>
  );
}


