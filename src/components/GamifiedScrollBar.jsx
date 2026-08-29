import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Trophy, 
  Target, 
  RotateCcw, 
  Sparkles, 
  Zap, 
  ChevronUp, 
  Flame, 
  Award,
  Compass
} from 'lucide-react';

const SECTIONS = [
  { id: 'hero', name: 'The Route', label: 'Aspirant', level: 1, xp: '50 XP', icon: Compass, color: '#2196F3' },
  { id: 'loop', name: '4-Step Loop', label: 'Strategist', level: 2, xp: '150 XP', icon: RotateCcw, color: '#00BCD4' },
  { id: 'features', name: 'Why Us / Arsenal', label: 'Tactician', level: 3, xp: '300 XP', icon: Zap, color: '#3F51B5' },
  { id: 'pricing', name: 'Launchpad Plans', label: 'Contender', level: 4, xp: '450 XP', icon: Target, color: '#FF9800' },
  { id: 'faq', name: 'IIM Conversion', label: 'IIM Convert', level: 5, xp: '600 XP', icon: Trophy, color: '#E91E63' }
];

export default function GamifiedScrollBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const trackRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Calculate scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);

      // Indicate active scrolling for flame/speed effects
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 250);

      // Section detection
      const scrollPosition = currentScroll + window.innerHeight * 0.35;
      let currentIdx = 0;

      SECTIONS.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentIdx = idx;
          }
        }
      });
      setActiveSectionIndex(currentIdx);

      // Celebration at 97%+
      if (progress >= 0.97 && !hasCelebrated) {
        setShowCelebration(true);
        setHasCelebrated(true);
        setTimeout(() => setShowCelebration(false), 5000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [hasCelebrated]);

  // Click & Drag navigation on the custom track
  const handleTrackClickOrDrag = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const clampedY = Math.max(0, Math.min(clickY, rect.height));
    const targetProgress = clampedY / rect.height;

    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: targetProgress * totalHeight,
      behavior: 'smooth'
    });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    handleTrackClickOrDrag(e);

    const handleMouseMove = (moveEvent) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const clickY = moveEvent.clientY - rect.top;
      const clampedY = Math.max(0, Math.min(clickY, rect.height));
      const targetProgress = clampedY / rect.height;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: targetProgress * totalHeight,
        behavior: 'auto'
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentSection = SECTIONS[activeSectionIndex] || SECTIONS[0];
  const percentInt = Math.round(scrollProgress * 100);

  return (
    <>
      {/* 1. TOP MINI PROGRESS BAR (Always visible thin gradient runner on top of page) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-100/50 z-[100] pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#64B5F6] via-[#2196F3] to-[#0D47A1] shadow-[0_0_10px_rgba(33,150,243,0.8)]"
          style={{ width: `${percentInt}%` }}
        />
      </div>

      {/* 2. FLOATING GAMIFIED ROUTE HUD (Right side) */}
      <aside 
        aria-label="Journey Progress Navigation"
        className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex items-center select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* EXPANDABLE QUEST DETAILS CARD (Hover & Active state) */}
        <AnimatePresence>
          {(isHovered || isDragging) && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mr-3 bg-white/95 backdrop-blur-xl border border-[#90CAF9]/60 rounded-2xl p-3.5 shadow-[0_12px_36px_rgba(13,71,161,0.12)] flex flex-col gap-2 min-w-[210px]"
            >
              {/* Header Status */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="p-1 rounded-md bg-[#E3F2FD] text-[#2196F3]">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                  </span>
                  <span className="text-[10px] font-black tracking-wider uppercase text-slate-400">
                    Prep Route Quest
                  </span>
                </div>
                <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-[#2196F3]/10 text-[#2196F3] font-mono">
                  {percentInt}%
                </span>
              </div>

              {/* Current Rank & XP */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900 flex items-center gap-1">
                    LVL {currentSection.level} • {currentSection.label}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    {currentSection.name}
                  </span>
                </div>
                <span className="text-[10px] font-black text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                  +{percentInt * 6} XP
                </span>
              </div>

              {/* Progress Bar inside card */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#64B5F6] to-[#2196F3] h-full rounded-full transition-all duration-300"
                  style={{ width: `${percentInt}%` }}
                />
              </div>

              {/* Quick Jump Checkpoints */}
              <div className="pt-1 flex flex-col gap-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-1">
                  Waypoints
                </span>
                <div className="flex flex-col gap-1 max-h-[140px] overflow-y-auto">
                  {SECTIONS.map((sec, idx) => {
                    const isPassed = activeSectionIndex >= idx;
                    const isCurrent = activeSectionIndex === idx;
                    const IconComponent = sec.icon;

                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full flex items-center justify-between px-2 py-1 rounded-lg text-left text-xs transition-all ${
                          isCurrent 
                            ? 'bg-[#E3F2FD] text-[#2196F3] font-bold' 
                            : isPassed 
                              ? 'text-slate-700 hover:bg-slate-50 font-medium' 
                              : 'text-slate-400 hover:bg-slate-50 font-normal'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#2196F3]' : isPassed ? 'text-slate-600' : 'text-slate-300'}`} />
                          <span className="text-[11px] truncate max-w-[110px]">{sec.name}</span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-400">L{sec.level}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Top Jump Helper */}
              {scrollProgress > 0.15 && (
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="mt-1 w-full py-1 text-[10px] font-black text-slate-500 hover:text-[#2196F3] bg-slate-50 hover:bg-[#E3F2FD] rounded-lg transition-colors flex items-center justify-center gap-1 border border-slate-100"
                >
                  <ChevronUp className="w-3 h-3" /> Jump to Top
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. THE GAMIFIED TRACK & ROCKET THUMB */}
        <div className="relative flex flex-col items-center py-2">
          
          {/* Main Track Capsule */}
          <div
            ref={trackRef}
            onClick={handleTrackClickOrDrag}
            onMouseDown={handleMouseDown}
            className={`relative w-3.5 sm:w-4 h-[240px] sm:h-[300px] rounded-full cursor-pointer transition-all duration-300 backdrop-blur-md flex flex-col justify-start items-center ${
              isHovered || isDragging 
                ? 'bg-white/90 border border-[#90CAF9] shadow-[0_8px_25px_rgba(33,150,243,0.2)]' 
                : 'bg-white/70 border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)]'
            }`}
          >
            {/* Background dashed route markings */}
            <div className="absolute inset-y-3 left-1/2 -translate-x-1/2 w-0.5 border-r border-dashed border-slate-200 pointer-events-none" />

            {/* Glowing Active Route Fill */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 sm:w-2.5 bg-gradient-to-b from-[#64B5F6] via-[#2196F3] to-[#0D47A1] rounded-full transition-all duration-75 shadow-[0_0_8px_rgba(33,150,243,0.5)]"
              style={{
                height: `${Math.max(scrollProgress * 100, 6)}%`,
              }}
            />

            {/* Checkpoint Nodes along the track */}
            {SECTIONS.map((sec, idx) => {
              const nodePercent = (idx / (SECTIONS.length - 1)) * 100;
              const isPassed = activeSectionIndex >= idx;
              const isCurrent = activeSectionIndex === idx;

              return (
                <div
                  key={sec.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSection(sec.id);
                  }}
                  className="absolute left-1/2 -translate-x-1/2 z-20 group cursor-pointer"
                  style={{ top: `calc(${nodePercent}% - 4px)` }}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isCurrent
                        ? 'bg-white border-2 border-[#2196F3] scale-125 shadow-[0_0_8px_rgba(33,150,243,0.8)]'
                        : isPassed
                          ? 'bg-[#2196F3] border border-white'
                          : 'bg-slate-300 border border-white'
                    }`}
                  />

                  {/* Micro tooltip on node hover */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap pointer-events-none shadow-md z-30">
                    <span>{sec.name}</span>
                    <span className="text-amber-300 font-mono">({sec.xp})</span>
                  </div>
                </div>
              );
            })}

            {/* GLIDING GAMIFIED THUMB / ROCKET AVATAR */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              style={{
                top: `calc(${scrollProgress * 92}%)`,
              }}
              animate={{
                scale: isScrolling || isDragging ? 1.15 : isHovered ? 1.1 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="relative flex items-center justify-center">
                {/* Thumb Outer Badge Ring */}
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-white border-2 border-[#2196F3] shadow-[0_2px_12px_rgba(33,150,243,0.4)] ${
                  isScrolling ? 'shadow-[0_0_18px_rgba(33,150,243,0.8)]' : ''
                }`}>
                  {percentInt >= 95 ? (
                    <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 animate-bounce" />
                  ) : (
                    <Rocket 
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2196F3] transition-transform duration-200 ${
                        isScrolling ? 'rotate-180 scale-110' : 'rotate-45'
                      }`} 
                    />
                  )}
                </div>

                {/* Jet Flame Particle when actively moving */}
                {isScrolling && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-amber-500 pointer-events-none"
                  >
                    <Flame className="w-3 h-3 animate-pulse" />
                  </motion.div>
                )}

                {/* Live Percentage Badge when not hovering card */}
                {!isHovered && !isDragging && (
                  <div className="absolute right-9 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-[#90CAF9]/80 text-[#2196F3] text-[9px] font-black px-1.5 py-0.5 rounded-full shadow-xs whitespace-nowrap font-mono pointer-events-none">
                    {percentInt}%
                  </div>
                )}
              </div>
            </motion.div>

          </div>

          {/* Bottom Milestone Indicator */}
          <div className="mt-2 text-[9px] font-black text-slate-400 font-mono tracking-tighter">
            {percentInt >= 100 ? 'MAX' : `LVL ${currentSection.level}`}
          </div>
        </div>
      </aside>

      {/* 4. LEVEL MAX / CELEBRATION TOAST */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#0D47A1] to-[#2196F3] text-white px-5 py-3.5 rounded-2xl shadow-[0_12px_40px_rgba(33,150,243,0.4)] border border-white/20 flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
              <Award className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-black tracking-wider uppercase text-sky-200">
                Quest Complete! 🎓
              </div>
              <div className="text-sm font-bold text-white">
                You've Explored the Whole Prep Route!
              </div>
            </div>
            <button
              onClick={() => setShowCelebration(false)}
              className="ml-2 text-white/60 hover:text-white text-xs font-black p-1"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
