import React, { useState } from 'react';
import { ChevronDown, ArrowRight, UserCheck } from 'lucide-react';

// Hand-Drawn Sketch Loop Component
function SketchLoopSVG({ isActive }) {
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
        strokeWidth="1.8" 
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
        style={{ strokeDasharray: 100 }}
        className={`transition-all duration-500 ease-out ${
          isActive 
            ? '[stroke-dashoffset:0] opacity-100' 
            : '[stroke-dashoffset:100] group-hover:[stroke-dashoffset:0] opacity-0 group-hover:opacity-100'
        }`}
      />
    </svg>
  );
}

export default function Navbar({ activeSection, onNavigate }) {
  return (
    <div className="sticky top-0 z-50 bg-[#F7F7F7]/90 backdrop-blur-md py-3 transition-all border-b border-slate-200/60">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="inline-flex items-center group shrink-0 outline-none">
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-950 font-sans">
            the<span className="text-[#2196F3]">prep</span>route
          </span>
        </a>

        {/* Center Nav Pills */}
        <div className="bg-white border border-[#D0E2F5]/90 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 shadow-[0_4px_20px_-4px_rgba(13,71,161,0.08)] hidden md:flex items-center justify-center gap-6 sm:gap-8">
          <nav className="flex items-center gap-6 text-xs font-semibold text-slate-700">
            <div className="relative group">
              <a href="#iims" className="relative inline-block px-2.5 py-1 font-extrabold text-slate-800 hover:text-[#2196F3] transition-colors">
                <span>Top IIMs</span>
                <SketchLoopSVG />
              </a>
            </div>

            <div className="relative group">
              <a href="#features" className="relative inline-block px-2.5 py-1 font-extrabold text-slate-800 hover:text-[#2196F3] transition-colors">
                <span>Features</span>
                <SketchLoopSVG />
              </a>
            </div>

            <div className="relative group">
              <a href="#exams" className="relative inline-block px-2.5 py-1 font-extrabold text-slate-800 hover:text-[#2196F3] transition-colors">
                <span>Exam Offerings</span>
                <SketchLoopSVG />
              </a>
            </div>

            <div className="relative group">
              <a href="#faq" className="relative inline-block px-2.5 py-1 font-extrabold text-slate-800 hover:text-[#2196F3] transition-colors">
                <span>FAQ</span>
                <SketchLoopSVG />
              </a>
            </div>
          </nav>
        </div>

        {/* Right CTA Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="/#pricing" 
            className="text-xs font-extrabold text-slate-700 hover:text-[#2196F3] px-3 py-2 transition-colors hidden sm:block"
          >
            Pricing
          </a>
          <button 
            onClick={() => alert('Opening Mentor Consultation Modal...')}
            className="flex items-center gap-2 bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-xs transition-all hover:scale-102 active:scale-98"
          >
            <UserCheck className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Talk to IIM Mentor</span>
          </button>
        </div>

      </div>
    </div>
  );
}
