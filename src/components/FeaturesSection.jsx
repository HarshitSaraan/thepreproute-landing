import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, BarChart2, BookOpen, Layers, PenTool, ArrowRight, Sparkles, Target } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Topic-Wise Practice Tests',
    desc: 'Target weak areas with 500+ granular topic drills across QA, LRDI, and Verbal Ability with adaptive difficulty benchmarks.',
    icon: <PenTool className="w-5 h-5 mr-3 shrink-0 text-[#2196F3]" />,
    accent: '#2196F3',
    badge: '500+ TOPIC DRILLS',
    mockup: {
      type: 'topic',
      heading: 'QA - Higher Algebra & Functions',
      stat1: '45 Questions Solved',
      stat2: '88% Accuracy',
      tag: 'Adaptive Level 3'
    }
  },
  {
    id: 2,
    title: 'Deep Performance Analytics',
    desc: 'Track your weekly score accuracy trajectory, progress velocity, time-per-question, and projected IPMAT score in real-time.',
    icon: <BarChart2 className="w-5 h-5 mr-3 shrink-0 text-[#2196F3]" />,
    accent: '#2196F3',
    badge: 'AI SCORE TRAJECTORY',
    mockup: {
      type: 'analytics',
      heading: 'Weekly Accuracy Trajectory',
      stat1: 'Projected Score: 265 / 360',
      stat2: '+14% Progress Velocity',
      tag: 'Top 5% National Rank'
    }
  },
  {
    id: 3,
    title: 'Mistake Bank Vault',
    desc: 'Revisit every incorrect answer automatically logged in your personal mistake vault with AI-guided step-by-step resolution.',
    icon: <BookOpen className="w-5 h-5 mr-3 shrink-0 text-rose-500" />,
    accent: '#F43F5E',
    badge: 'ROSE PINK MISTAKE VAULT',
    badgeStyle: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    mockup: {
      type: 'mistake',
      heading: 'Personalized Mistake Bank',
      stat1: '14 Unresolved Mistakes',
      stat2: 'QA Log: Speed & Time Error',
      tag: 'Auto-Saved for Revision'
    }
  },
  {
    id: 4,
    title: 'Real Exam-Level Full Length Mocks',
    desc: 'Experience exact NTA and IIM test interface, sectional timers, bookmarking, and nationwide percentile benchmarks.',
    icon: <ClipboardList className="w-5 h-5 mr-3 shrink-0 text-[#2196F3]" />,
    accent: '#2196F3',
    badge: 'IIM PATTERN MOCKS',
    mockup: {
      type: 'mocks',
      heading: 'IPMAT Indore Full-Length Mock #08',
      stat1: '100% Latest Exam Pattern',
      stat2: '25 Full Mocks Available',
      tag: 'Live Percentile Rank'
    }
  },
  {
    id: 5,
    title: 'Flashcards & Smart Revision Decks',
    desc: 'Rapidly revise essential Quant formulas, Vocabulary flashcards, and shortcuts before exam day.',
    icon: <Layers className="w-5 h-5 mr-3 shrink-0 text-teal-400" />,
    accent: '#0D9488',
    badge: 'TEAL MINT REVISION DECKS',
    badgeStyle: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    mockup: {
      type: 'flashcard',
      heading: 'Quant Formula Flashcards',
      stat1: '320 Formula Cards',
      stat2: 'Vocab Flash Deck Active',
      tag: '5-Min Daily Drill'
    }
  }
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleSelect = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <section 
      id="features"
      className="relative bg-slate-950 py-20 lg:py-32 overflow-hidden" 
    >
      <div className="flex flex-col justify-center items-center px-6 sm:px-12 md:px-24">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-[#2196F3] text-xs font-black uppercase px-3 py-1 rounded-full mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MORE ENGAGEMENT, EVERY SINGLE DAY</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            MORE <span className="text-[#2196F3]">ENGAGEMENT</span>, EVERY DAY.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            Easily add participation into more areas of learning—helping everyone master topics, analyze performance, and revise error logs.
          </p>
        </div>

        {/* 2-Column Interactive Grid */}
        <div 
          className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center gap-8 lg:gap-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left Side: Features List Selector */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-3">
              {features.map((feature, idx) => {
                const isActive = activeIndex === idx;
                const isMistake = feature.id === 3;
                const isFlashcard = feature.id === 5;

                let borderStyle = 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-900/80';
                if (isActive) {
                  if (isMistake) borderStyle = 'border-rose-500/50 bg-rose-500/10 text-rose-50 shadow-lg shadow-rose-900/20 translate-x-2';
                  else if (isFlashcard) borderStyle = 'border-teal-500/50 bg-teal-500/10 text-teal-50 shadow-lg shadow-teal-900/20 translate-x-2';
                  else borderStyle = 'border-[#2196F3]/50 bg-[#2196F3]/10 text-white shadow-lg shadow-[#2196F3]/20 translate-x-2';
                }

                return (
                  <div
                    key={feature.id}
                    onClick={() => handleSelect(idx)}
                    className={`flex flex-col p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${borderStyle}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center font-extrabold text-sm sm:text-base">
                        {feature.icon}
                        <span>{feature.title}</span>
                      </div>
                      {isActive && (
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          feature.badgeStyle || 'bg-[#2196F3]/20 text-[#90CAF9] border border-[#2196F3]/30'
                        }`}>
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    {isActive && (
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-3 leading-relaxed animate-in fade-in">
                        {feature.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <button 
                onClick={() => alert('Starting free trial or demo...')}
                className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold text-xs sm:text-sm py-4 px-8 rounded-full shadow-md transition-all hover:scale-105"
              >
                Get a Demo
              </button>
            </div>
          </div>

          {/* Right Side: Interactive Mockup Card Preview Display */}
          <div className="w-full lg:w-1/2 h-[420px] relative bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 overflow-hidden shadow-2xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={features[activeIndex].id}
                className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between bg-slate-900"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {(() => {
                  const feature = features[activeIndex];
                  const isMistake = feature.id === 3;
                  const isFlashcard = feature.id === 5;

                  return (
                    <>
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                            feature.badgeStyle || 'bg-slate-800 text-[#2196F3] border border-slate-700'
                          }`}>
                            {feature.mockup.tag}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            Feature {activeIndex + 1} / {features.length}
                          </span>
                        </div>

                        <h3 className="text-2xl font-black text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>

                      <div className={`rounded-2xl p-5 border shadow-inner transition-all ${
                        isMistake 
                          ? 'bg-rose-950/30 border-rose-900/50 text-rose-50' 
                          : isFlashcard 
                          ? 'bg-teal-950/30 border-teal-900/50 text-teal-50' 
                          : 'bg-slate-800/50 border-slate-700 text-slate-100'
                      }`}>
                        <h4 className="text-sm font-extrabold mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-[#2196F3]" />
                          <span>{feature.mockup.heading}</span>
                        </h4>

                        <div className="grid grid-cols-2 gap-3 text-xs font-bold">
                          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                            <span className="text-[10px] text-slate-500 block mb-0.5">Stat Highlight</span>
                            <span className="text-sm font-black text-white">{feature.mockup.stat1}</span>
                          </div>

                          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                            <span className="text-[10px] text-slate-500 block mb-0.5">Benchmark</span>
                            <span className="text-sm font-black text-[#2196F3]">{feature.mockup.stat2}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs font-extrabold text-[#2196F3] pt-2 border-t border-slate-800">
                        <span>Explore {feature.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
