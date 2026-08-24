import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardList, BarChart2, BookOpen, Layers, PenTool, ArrowRight, Sparkles, 
  CheckCircle2, RotateCw, Clock, ChevronRight, ChevronLeft, Zap, TrendingUp, HelpCircle 
} from 'lucide-react';

const sampleFlashcards = [
  {
    question: "Quadratic Equation: Sum & Product of Roots for ax² + bx + c = 0?",
    answer: "Sum of Roots = -b/a  |  Product of Roots = c/a",
    category: "Higher Algebra"
  },
  {
    question: "Speed, Distance & Time: Average Speed for equal distances at speeds x and y?",
    answer: "Average Speed = (2xy) / (x + y)",
    category: "Arithmetic"
  },
  {
    question: "IPMAT Vocabulary: What does 'PERSPICACIOUS' mean?",
    answer: "Having a ready insight into and understanding of things; shrewd & insightful.",
    category: "Verbal Ability"
  }
];

export default function FeaturesSection() {
  // Interactive widget states
  const [selectedOption, setSelectedOption] = useState(1);
  const [isVaultFlipped, setIsVaultFlipped] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);

  return (
    <section 
      id="features"
      className="relative bg-[#F7F7F7] py-20 lg:py-32 px-6 sm:px-12 md:px-16 overflow-hidden border-t border-slate-200/80 text-slate-900" 
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2196F3]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-white border border-[#90CAF9]/60 text-[#2196F3] text-xs font-black uppercase px-4 py-1.5 rounded-full mb-4 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#2196F3]" />
            <span>MORE ENGAGEMENT, EVERY SINGLE DAY</span>
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 uppercase tracking-tight leading-tight">
            MORE <span className="text-[#2196F3]">ENGAGEMENT</span>, EVERY DAY.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
            Easily add participation into more areas of learning—helping everyone master topics, analyze performance, and revise error logs.
          </p>
        </div>

        {/* --- 5-CARD BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* ================= BENTO CARD 1: Topic-Wise Practice Tests (7 Cols) ================= */}
          <div className="md:col-span-12 lg:col-span-7 bg-white border border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(13,71,161,0.05)] hover:shadow-[0_20px_40px_rgba(33,150,243,0.14)] hover:border-[#2196F3] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/60 text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5" />
                  <span>500+ TOPIC DRILLS</span>
                </span>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">
                  ADAPTIVE LEVEL 3
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-950 mb-2 group-hover:text-[#2196F3] transition-colors">
                Topic-Wise Practice Tests
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                Target weak areas with 500+ granular topic drills across QA, LRDI, and Verbal Ability with adaptive difficulty benchmarks.
              </p>
            </div>

            {/* Interactive Drill Box Simulator */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-[#2196F3] bg-[#E3F2FD] px-2.5 py-0.5 rounded-md">
                  QA • Higher Algebra & Functions
                </span>
                <span className="text-[11px] font-bold text-slate-500">45 Questions Solved</span>
              </div>

              <p className="text-xs font-bold text-slate-800">
                Q: Find integral values of x satisfying <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono">x² - 7x + 12 &lt; 0</code>?
              </p>

              {/* Options Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 0, text: '(A) 1 Solution' },
                  { id: 1, text: '(B) 2 Solutions (x=3,4)' },
                  { id: 2, text: '(C) 3 Solutions' },
                  { id: 3, text: '(D) Infinite' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={`p-2.5 rounded-xl text-left font-bold border transition-all text-[11px] ${
                      selectedOption === opt.id 
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 shadow-2xs scale-[1.01]' 
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{opt.text}</span>
                      {selectedOption === opt.id && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </span>
                  </button>
                ))}
              </div>

              {/* Accuracy Benchmark Bar */}
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-500 text-[11px]">Topic Benchmark Accuracy</span>
                <span className="font-black text-[#2196F3]">88% Accuracy</span>
              </div>
              <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-[#2196F3] h-2 rounded-full" 
                  initial={{ width: 0 }}
                  whileInView={{ width: '88%' }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-black text-[#2196F3] pt-3 border-t border-slate-100 group-hover:underline">
              <span>Explore Topic-Wise Practice Tests</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* ================= BENTO CARD 2: Deep Performance Analytics (5 Cols) ================= */}
          <div className="md:col-span-12 lg:col-span-5 bg-white border border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(13,71,161,0.05)] hover:shadow-[0_20px_40px_rgba(33,150,243,0.14)] hover:border-[#2196F3] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/60 text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>AI SCORE TRAJECTORY</span>
                </span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> TOP 5%
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-950 mb-2 group-hover:text-[#2196F3] transition-colors">
                Deep Performance Analytics
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                Track your weekly score accuracy trajectory, progress velocity, and projected IPMAT rank in real-time.
              </p>
            </div>

            {/* Score Trajectory Graph */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">Projected IPMAT Score</span>
                  <span className="text-2xl font-black text-slate-950">265 <span className="text-xs text-slate-400 font-normal">/ 360</span></span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-black px-3 py-1 rounded-xl">
                  +14% Velocity
                </span>
              </div>

              {/* Animated SVG Curve Graph */}
              <div className="h-28 w-full relative flex items-end pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                  <defs>
                    <linearGradient id="bentoGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2196F3" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2196F3" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="M 0 65 Q 75 55, 150 35 T 300 10"
                    fill="none"
                    stroke="#2196F3"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0 65 Q 75 55, 150 35 T 300 10 L 300 80 L 0 80 Z"
                    fill="url(#bentoGrad)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />

                  <circle cx="0" cy="65" r="4" fill="#2196F3" />
                  <circle cx="100" cy="48" r="4" fill="#2196F3" />
                  <circle cx="200" cy="25" r="4" fill="#2196F3" />
                  <circle cx="300" cy="10" r="6" fill="#0D47A1" stroke="#fff" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex justify-between text-[10px] font-bold text-slate-400 pt-1 border-t border-slate-200">
                <span>W1 (180)</span>
                <span>W2 (210)</span>
                <span>W3 (240)</span>
                <span className="text-[#2196F3] font-black">W4 (265)</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-black text-[#2196F3] pt-3 border-t border-slate-100 group-hover:underline">
              <span>Explore Deep Performance Analytics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* ================= BENTO CARD 3: Mistake Bank Vault (4 Cols) ================= */}
          <div className="md:col-span-6 lg:col-span-4 bg-white border border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(13,71,161,0.05)] hover:shadow-[0_20px_40px_rgba(244,63,94,0.14)] hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-rose-100 text-rose-700 border border-rose-200 text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-rose-600" />
                  <span>ROSE PINK MISTAKE VAULT</span>
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 mb-2 group-hover:text-rose-600 transition-colors">
                Mistake Bank Vault
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                Revisit every incorrect answer automatically logged with AI-guided step-by-step resolution.
              </p>
            </div>

            {/* 3D Flippable Vault Card */}
            <motion.div
              onClick={() => setIsVaultFlipped(!isVaultFlipped)}
              className="w-full bg-rose-50 border-2 border-rose-300 rounded-2xl p-4 shadow-2xs cursor-pointer hover:border-rose-400 transition-all text-left relative my-auto"
              animate={{ rotateY: isVaultFlipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {!isVaultFlipped ? (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase bg-rose-200 text-rose-800 px-2 py-0.5 rounded-md">
                      14 Unresolved Mistakes
                    </span>
                    <span className="text-[10px] font-extrabold text-rose-600 flex items-center gap-1">
                      <RotateCw className="w-3 h-3" /> Flip Solution
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-rose-950 mb-1">
                    QA Log: Speed & Time Mistake #14
                  </h4>
                  <p className="text-[11px] text-rose-900 font-medium leading-relaxed">
                    "Train 200m platform in 20s. Forgot to add train length L."
                  </p>
                  <div className="mt-2 text-[10px] font-black text-rose-700 underline">
                    Tap to see AI Guided Correction ➔
                  </div>
                </div>
              ) : (
                <div style={{ transform: 'rotateY(180deg)' }}>
                  <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md block mb-1 w-fit">
                    ✓ AI Resolution
                  </span>
                  <p className="text-[11px] text-slate-800 font-bold leading-relaxed">
                    Distance = (L + 200m) = Speed × Time
                  </p>
                  <p className="text-[10px] text-slate-600 mt-1">
                    <code>L + 200 = 20 × 20 = 400m</code> ➔ <strong>L = 200m</strong>.
                  </p>
                  <div className="mt-1.5 text-[10px] font-black text-rose-700 underline">
                    Tap to flip back ➔
                  </div>
                </div>
              )}
            </motion.div>

            <div className="mt-6 flex items-center justify-between text-xs font-black text-rose-600 pt-3 border-t border-slate-100 group-hover:underline">
              <span>Explore Mistake Bank Vault</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* ================= BENTO CARD 4: Real Exam-Level Full Length Mocks (4 Cols) ================= */}
          <div className="md:col-span-6 lg:col-span-4 bg-white border border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(13,71,161,0.05)] hover:shadow-[0_20px_40px_rgba(33,150,243,0.14)] hover:border-[#2196F3] transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-[#E3F2FD] text-[#2196F3] border border-[#90CAF9]/60 text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                  <ClipboardList className="w-3.5 h-3.5" />
                  <span>IIM PATTERN MOCKS</span>
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 mb-2 group-hover:text-[#2196F3] transition-colors">
                Real Exam-Level Full Length Mocks
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                Experience exact NTA and IIM test interface, sectional timers, bookmarking, and nationwide percentile benchmarks.
              </p>
            </div>

            {/* Exam Interface Simulator Box */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 shadow-2xs space-y-3.5 my-auto">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-black text-slate-900">IPMAT Indore Mock #08</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                  <Clock className="w-3 h-3 text-[#2196F3]" />
                  <span>01:45:20</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-bold">Exam Pattern</span>
                  <span className="text-xs font-black text-slate-900">100% Latest Pattern</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-bold">Full Mocks</span>
                  <span className="text-xs font-black text-[#2196F3]">25 Full Mocks Ready</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-black text-[#2196F3] pt-3 border-t border-slate-100 group-hover:underline">
              <span>Explore Full Length Mocks</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* ================= BENTO CARD 5: Flashcards & Smart Revision Decks (4 Cols) ================= */}
          <div className="md:col-span-12 lg:col-span-4 bg-white border border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(13,71,161,0.05)] hover:shadow-[0_20px_40px_rgba(13,148,136,0.14)] hover:border-teal-400 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-teal-100 text-teal-700 border border-teal-200 text-[10px] font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  <span>TEAL MINT REVISION DECKS</span>
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-950 mb-2 group-hover:text-teal-700 transition-colors">
                Flashcards & Smart Revision Decks
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                Rapidly revise essential Quant formulas, Vocabulary flashcards, and shortcuts before exam day.
              </p>
            </div>

            {/* Interactive Flashcard Simulator Box */}
            <div className="bg-teal-50 border-2 border-teal-300 rounded-2xl p-4 shadow-2xs text-left my-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase bg-teal-200 text-teal-900 px-2 py-0.5 rounded">
                  {sampleFlashcards[flashcardIndex].category} • {flashcardIndex + 1}/{sampleFlashcards.length}
                </span>
                <span className="text-[10px] font-bold text-teal-700">320 Formula Cards</span>
              </div>

              {/* Card Question / Answer box */}
              <div 
                onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}
                className="bg-white border border-teal-200 rounded-xl p-3 my-2 cursor-pointer shadow-2xs hover:border-teal-400 transition-all min-h-[80px] flex flex-col justify-center"
              >
                {!isFlashcardFlipped ? (
                  <div>
                    <span className="text-[9px] font-black uppercase text-teal-600 block mb-0.5">Question (Tap to flip)</span>
                    <p className="text-xs font-black text-slate-900 leading-snug">
                      {sampleFlashcards[flashcardIndex].question}
                    </p>
                  </div>
                ) : (
                  <div>
                    <span className="text-[9px] font-black uppercase text-emerald-600 block mb-0.5">✓ Answer Formula</span>
                    <p className="text-xs font-black text-slate-900 leading-snug">
                      {sampleFlashcards[flashcardIndex].answer}
                    </p>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  onClick={() => {
                    setIsFlashcardFlipped(false);
                    setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : sampleFlashcards.length - 1));
                  }}
                  className="flex items-center gap-0.5 font-bold text-teal-800 hover:text-teal-950 text-[11px]"
                >
                  <ChevronLeft className="w-3.5 h-3.5" /> Prev
                </button>
                <span className="text-[9px] font-bold text-teal-700">Tap card to flip</span>
                <button
                  onClick={() => {
                    setIsFlashcardFlipped(false);
                    setFlashcardIndex((prev) => (prev < sampleFlashcards.length - 1 ? prev + 1 : 0));
                  }}
                  className="flex items-center gap-0.5 font-bold text-teal-800 hover:text-teal-950 text-[11px]"
                >
                  Next <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs font-black text-teal-700 pt-3 border-t border-slate-100 group-hover:underline">
              <span>Explore Smart Revision Decks</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => alert('Starting free trial or demo...')}
            className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-black text-xs sm:text-sm py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2.5"
          >
            <span>Get a Free Platform Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}




