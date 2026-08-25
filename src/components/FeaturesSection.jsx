import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardList, BarChart2, BookOpen, Layers, PenTool, ArrowRight, Sparkles, 
  CheckCircle2, RotateCw, Clock, ChevronRight, ChevronLeft, Zap, TrendingUp, HelpCircle, MousePointer
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
  const sectionRef = useRef(null);
  
  // Step State: 0 (Card 1 top), 1 (Card 1 swiped), 2 (Card 2 swiped), 3 (Card 3 swiped), 4 (Card 4 swiped, Card 5 base)
  const [step, setStep] = useState(0);
  const isCooldown = useRef(false);

  // Intercept wheel scroll to step through cards when section is focused
  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      // Section focused when header is near top of viewport
      const inView = rect.top <= 140 && rect.bottom >= window.innerHeight / 2;

      if (inView) {
        // If scrolling down and we haven't finished all card swipes
        if (e.deltaY > 0 && step < 4) {
          if (e.cancelable) e.preventDefault();
          if (isCooldown.current) return;
          isCooldown.current = true;
          setStep((prev) => Math.min(prev + 1, 4));
          setTimeout(() => { isCooldown.current = false; }, 350);
        } 
        // If scrolling up and we are not back at Card 1
        else if (e.deltaY < 0 && step > 0) {
          if (e.cancelable) e.preventDefault();
          if (isCooldown.current) return;
          isCooldown.current = true;
          setStep((prev) => Math.max(prev - 1, 0));
          setTimeout(() => { isCooldown.current = false; }, 350);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [step]);

  // Widget states
  const [selectedOption, setSelectedOption] = useState(1);
  const [isVaultFlipped, setIsVaultFlipped] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="relative bg-transparent border-t border-slate-200/80 text-slate-900 py-16 sm:py-24 px-6 sm:px-12 md:px-16 min-h-screen flex flex-col justify-center items-center"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2196F3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
            MORE <span className="text-[#2196F3]">ENGAGEMENT</span>, EVERY DAY.
          </h2>
          
          {/* Scroll & Control Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-700 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-2xs">
              <MousePointer className="w-4 h-4 text-[#2196F3] animate-bounce" />
              <span>
                {step < 4 ? `Scroll mouse down to swipe top card (${step + 1}/5)` : '✓ All 5 cards swiped'}
              </span>
            </div>

            {/* Clickable Step Dots & Navigation */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full p-1 shadow-2xs">
              <button
                onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
                disabled={step === 0}
                className="p-1.5 rounded-full text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-1.5 px-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      step === i ? 'bg-[#2196F3] w-6' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
                disabled={step === 4}
                className="p-1.5 rounded-full text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* STACKED DECK CONTAINER */}
        <div className="relative w-full max-w-3xl mx-auto h-[460px] flex items-center justify-center my-4">
          
          {/* CARD 1 (Top Front Stack Card - zIndex: 50 - Solid #FFFFFF - Swipes RIGHT) */}
          <motion.div 
            style={{ zIndex: 50 }}
            animate={{ 
              x: step >= 1 ? 950 : 0, 
              rotate: step >= 1 ? 25 : 0, 
              opacity: step >= 1 ? 0 : 1 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-white border-2 border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(13,71,161,0.12)] flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase text-[#2196F3] bg-[#E3F2FD] px-3 py-1 rounded-full">
                  Feature 1 of 5
                </span>
                <span className="text-xs font-extrabold text-slate-400">Card #01</span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">Topic-Wise Practice Tests</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Target weak areas with 500+ granular topic drills across QA, LRDI, and Verbal Ability with adaptive difficulty benchmarks.
              </p>
              
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-[#2196F3] bg-[#E3F2FD] px-2 py-0.5 rounded text-[10px]">
                    QA • Higher Algebra
                  </span>
                  <span className="font-bold text-slate-500 text-[10px]">45 Questions Solved</span>
                </div>
                <p className="font-bold text-slate-800 text-xs">
                  Q: Find integral values of x satisfying <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono">x² - 7x + 12 &lt; 0</code>?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 0, text: '(A) 1 Solution' },
                    { id: 1, text: '(B) 2 Solutions (x=3,4)' },
                    { id: 2, text: '(C) 3 Solutions' },
                    { id: 3, text: '(D) Infinite' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedOption(opt.id)}
                      className={`p-2 rounded-xl text-left font-bold border transition-all text-[11px] ${
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
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-black text-[#2196F3] pt-3 border-t border-slate-100">
              <span>Scroll down on mouse wheel to swipe top card ➔</span>
              <button 
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 bg-[#E3F2FD] hover:bg-[#BBDEFB] px-3 py-1 rounded-full transition-colors"
              >
                <span>Swipe Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* CARD 2 (Stack Card 2 - zIndex: 40 - Solid #FFFFFF - Swipes LEFT) */}
          <motion.div 
            style={{ zIndex: 40 }}
            animate={{ 
              x: step >= 2 ? -950 : 0, 
              rotate: step >= 2 ? -25 : 0, 
              opacity: step >= 2 ? 0 : 1 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-white border-2 border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(13,71,161,0.12)] flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase text-[#2196F3] bg-[#E3F2FD] px-3 py-1 rounded-full">
                  Feature 2 of 5
                </span>
                <span className="text-xs font-extrabold text-slate-400">Card #02</span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">Deep Performance Analytics</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Track your weekly score accuracy trajectory, progress velocity, and projected IPMAT rank in real-time.
              </p>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block">Projected IPMAT Score</span>
                    <span className="text-xl font-black text-slate-950">265 <span className="text-xs text-slate-400 font-normal">/ 360</span></span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-black px-2.5 py-0.5 rounded-lg">
                    +14% Velocity
                  </span>
                </div>
                <div className="h-20 w-full relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60">
                    <path d="M 0 50 Q 75 40, 150 25 T 300 8" fill="none" stroke="#2196F3" strokeWidth="3" />
                    <circle cx="300" cy="8" r="5" fill="#0D47A1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-black text-[#2196F3] pt-3 border-t border-slate-100">
              <span>Scroll down on mouse wheel to swipe top card ➔</span>
              <button 
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1 bg-[#E3F2FD] hover:bg-[#BBDEFB] px-3 py-1 rounded-full transition-colors"
              >
                <span>Swipe Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* CARD 3 (Stack Card 3 - zIndex: 30 - Solid #FFFFFF - Swipes RIGHT) */}
          <motion.div 
            style={{ zIndex: 30 }}
            animate={{ 
              x: step >= 3 ? 950 : 0, 
              rotate: step >= 3 ? 25 : 0, 
              opacity: step >= 3 ? 0 : 1 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-white border-2 border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(13,71,161,0.12)] flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase text-rose-600 bg-rose-100 px-3 py-1 rounded-full">
                  Feature 3 of 5
                </span>
                <span className="text-xs font-extrabold text-slate-400">Card #03</span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">Mistake Bank Vault</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Revisit every incorrect answer automatically logged with AI-guided step-by-step resolution.
              </p>

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
            </div>

            <div className="flex items-center justify-between text-xs font-black text-rose-600 pt-3 border-t border-slate-100">
              <span>Scroll down on mouse wheel to swipe top card ➔</span>
              <button 
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-1 bg-rose-100 hover:bg-rose-200 px-3 py-1 rounded-full transition-colors"
              >
                <span>Swipe Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* CARD 4 (Stack Card 4 - zIndex: 20 - Solid #FFFFFF - Swipes LEFT) */}
          <motion.div 
            style={{ zIndex: 20 }}
            animate={{ 
              x: step >= 4 ? -950 : 0, 
              rotate: step >= 4 ? -25 : 0, 
              opacity: step >= 4 ? 0 : 1 
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-white border-2 border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(13,71,161,0.12)] flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase text-[#2196F3] bg-[#E3F2FD] px-3 py-1 rounded-full">
                  Feature 4 of 5
                </span>
                <span className="text-xs font-extrabold text-slate-400">Card #04</span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">Real Exam-Level Full Length Mocks</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Experience exact NTA and IIM test interface, sectional timers, bookmarking, and nationwide percentile benchmarks.
              </p>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black text-slate-900">IPMAT Indore Mock #08</span>
                  <span className="font-mono font-bold text-[#2196F3] bg-white px-2 py-0.5 rounded border border-slate-200">01:45:20</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-bold">Exam Pattern</span>
                    <span className="text-xs font-black text-slate-900">100% Latest NTA</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl border border-slate-200">
                    <span className="text-[10px] text-slate-400 block font-bold">Full Mocks</span>
                    <span className="text-xs font-black text-[#2196F3]">25 Mocks Ready</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-black text-[#2196F3] pt-3 border-t border-slate-100">
              <span>Scroll down on mouse wheel to swipe top card ➔</span>
              <button 
                onClick={() => setStep(4)}
                className="inline-flex items-center gap-1 bg-[#E3F2FD] hover:bg-[#BBDEFB] px-3 py-1 rounded-full transition-colors"
              >
                <span>Swipe Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* CARD 5 (Base Card 5 - zIndex: 10 - Solid #FFFFFF - Base Revealed) */}
          <div 
            style={{ zIndex: 10 }}
            className="absolute inset-0 bg-white border-2 border-[#D0E2F5] rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(13,71,161,0.12)] flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-black uppercase text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                  Feature 5 of 5
                </span>
                <span className="text-xs font-extrabold text-slate-400">Card #05</span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">Flashcards & Smart Revision Decks</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                Rapidly revise essential Quant formulas, Vocabulary flashcards, and shortcuts before exam day.
              </p>

              <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase bg-teal-200 text-teal-900 px-2 py-0.5 rounded">
                    {sampleFlashcards[flashcardIndex].category} • {flashcardIndex + 1}/{sampleFlashcards.length}
                  </span>
                  <span className="text-[10px] font-bold text-teal-700">320 Formula Cards</span>
                </div>

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
            </div>

            <div className="flex items-center justify-between text-xs font-black text-teal-700 pt-3 border-t border-slate-100">
              <span>All cards swiped! Scroll down to continue to Pricing ➔</span>
              <ArrowRight className="w-4 h-4 text-teal-700" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}










