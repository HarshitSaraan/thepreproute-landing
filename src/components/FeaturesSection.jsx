import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Target, BarChart2, Repeat, LayoutTemplate, BrainCircuit, CheckCircle2 } from 'lucide-react';

const features = [
  {
    id: "01",
    title: "Topic-Wise Tests",
    desc: "Practice relevant questions across all 29 sub-topics.",
    icon: Target
  },
  {
    id: "02",
    title: "Performance Analytics",
    desc: "Track weekly accuracy and projected rank in real-time.",
    icon: BarChart2
  },
  {
    id: "03",
    title: "Mistake Bank Vault",
    desc: "Revisit incorrect answers with AI-guided resolutions.",
    icon: Repeat
  },
  {
    id: "04",
    title: "Full Length Mocks",
    desc: "Experience exact NTA & IIM interface with percentiles.",
    icon: LayoutTemplate
  },
  {
    id: "05",
    title: "Smart Revision Decks",
    desc: "Rapidly revise essential formulas before exam day.",
    icon: BrainCircuit
  }
];

// --- DEMO COMPONENTS ---
function DemoTests() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <motion.div className="h-4 w-1/3 bg-slate-200 rounded" />
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map(i => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className={`h-16 rounded-xl border-2 flex items-center justify-center ${i===2 ? 'border-[#2196F3] bg-[#E3F2FD] shadow-[0_0_20px_rgba(33,150,243,0.3)]' : 'border-slate-100 bg-white'}`}
          >
            {i===2 && <CheckCircle2 className="text-[#2196F3] w-6 h-6" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DemoAnalytics() {
  return (
    <div className="flex items-end justify-center gap-4 h-48 w-full">
      {[40, 70, 45, 90, 60].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: i * 0.08, duration: 0.5, type: 'spring' }}
          className={`w-12 rounded-t-lg relative ${i===3 ? 'bg-[#2196F3]' : 'bg-[#E3F2FD]'}`}
        >
          {i===3 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -20 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0D47A1] text-white text-[10px] font-bold px-2 py-1 rounded"
            >
              +14%
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function DemoVault() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center perspective-1000">
      <motion.div 
        animate={{ rotateY: [0, 180, 180, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full rounded-2xl shadow-xl relative"
      >
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-rose-50 border-2 border-rose-200 rounded-2xl p-4 text-center" style={{ backfaceVisibility: 'hidden' }}>
            <Repeat className="w-8 h-8 text-rose-400 mb-2" />
            <span className="text-rose-600 font-bold text-sm">Mistake Logged</span>
         </div>
         <div className="absolute inset-0 flex flex-col items-center justify-center bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 text-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-2" />
            <span className="text-emerald-700 font-bold text-sm">AI Resolution</span>
         </div>
      </motion.div>
    </div>
  );
}

function DemoMocks() {
  return (
    <div className="w-full max-w-sm bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex justify-between items-center">
        <div className="w-20 h-3 bg-slate-200 rounded" />
        <div className="w-24 bg-slate-200 rounded-full h-2 overflow-hidden">
          <motion.div 
             initial={{ width: '100%' }}
             animate={{ width: '20%' }}
             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
             className="h-full bg-[#2196F3]"
          />
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="w-3/4 h-3 bg-slate-200 rounded" />
        <div className="pt-2 space-y-2">
          {[1,2,3].map(i => (
             <div 
                key={i}
                className="w-full h-10 border border-slate-100 bg-slate-50 rounded-lg cursor-pointer transition-colors"
             />
          ))}
        </div>
      </div>
    </div>
  );
}

function DemoDecks() {
  return (
    <div className="relative w-48 h-64">
       {[0, 1, 2].map(i => (
         <motion.div
           key={i}
           animate={i === 0 ? {
             y: [0, -35, 0],
             x: [0, 80, 0],
             rotate: [0, 8, 0],
             opacity: [1, 0, 1],
             zIndex: [3, 1, 3]
           } : {
             y: i * 15,
             scale: 1 - (i * 0.05),
             zIndex: 3 - i
           }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
           className="absolute inset-0 bg-white border-2 border-[#D0E2F5] rounded-xl shadow-lg flex items-center justify-center p-6 text-center"
         >
           <span className="text-[#0D47A1] font-black text-lg">Card {3-i}</span>
         </motion.div>
       ))}
    </div>
  );
}

// --- MAIN SECTION ---
export default function FeaturesSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Direct responsive interpolation without spring overshoot
  const lineFill = useTransform(scrollYProgress, [0, 0.9], ['0%', '100%']);

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawStep = latest * (features.length - 0.2);
    const index = Math.min(features.length - 1, Math.max(0, Math.floor(rawStep)));
    setActiveIndex(index);
  });

  const renderDemo = (index) => {
    switch(index) {
      case 0: return <DemoTests />;
      case 1: return <DemoAnalytics />;
      case 2: return <DemoVault />;
      case 3: return <DemoMocks />;
      case 4: return <DemoDecks />;
      default: return <DemoTests />;
    }
  };

  return (
    <section 
      id="features" 
      ref={containerRef} 
      className="relative h-[250vh] bg-transparent text-slate-900"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col pt-16 sm:pt-20 justify-center">
        
        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[60%] w-[600px] h-[600px] bg-[#2196F3]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-[#64B5F6]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Centered Massive Title */}
        <div className="w-full text-center relative z-20 mb-6 lg:mb-10 shrink-0 px-6">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter uppercase">
             Why Us?
           </h2>
        </div>

        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 md:px-16 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center flex-1 min-h-0 pb-8">
          
          {/* LEFT COLUMN: PROGRESSION PATH */}
          <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
            
            {/* Header / Progress Indicator */}
            <div className="mb-6 lg:mb-8 pl-4 lg:pl-16">
              <span className="text-[10px] font-black tracking-widest uppercase text-[#2196F3] bg-[#E3F2FD] px-3 py-1 rounded-full">
                Features Journey
              </span>
              <div className="text-sm font-bold text-slate-400 mt-3 flex items-end gap-1">
                <span className="text-slate-950 text-4xl lg:text-5xl font-black leading-none">0{activeIndex + 1}</span> 
                <span className="text-lg pb-1">/ 0{features.length}</span>
              </div>
            </div>

            {/* Path Container */}
            <div className="relative flex flex-col gap-4 lg:gap-6">
              {/* Background Line */}
              <div className="absolute left-[24px] lg:left-[36px] top-[24px] bottom-[24px] w-0.5 bg-slate-200 -translate-x-1/2" />
              {/* Active Animated Fill Line */}
              <motion.div 
                className="absolute left-[24px] lg:left-[36px] top-[24px] w-0.5 bg-[#2196F3] -translate-x-1/2" 
                style={{ height: lineFill }}
              />

              {features.map((feat, i) => {
                const isCompleted = activeIndex > i;
                const isActive = activeIndex === i;
                
                return (
                  <div 
                    key={feat.id} 
                    onClick={() => setActiveIndex(i)}
                    className="relative pl-[60px] lg:pl-[80px] py-1.5 lg:py-2.5 cursor-pointer"
                  >
                    {/* Node / Node Icon */}
                    <div className="absolute left-[24px] lg:left-[36px] top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-[#F7F7F7] py-1">
                      <div className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted ? 'bg-[#2196F3]' :
                        isActive ? 'bg-white border-[3px] border-[#2196F3] shadow-[0_0_20px_rgba(33,150,243,0.5)]' :
                        'bg-white border-[2px] border-slate-300'
                      }`}>
                        {isCompleted && (
                          <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {isActive && (
                          <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-[#2196F3] rounded-full" />
                        )}
                      </div>
                    </div>

                    {/* Feature Text */}
                    <div className={`transition-all duration-300 ${isActive ? 'opacity-100 scale-100 translate-x-0' : 'opacity-40 scale-95 -translate-x-1'}`}>
                      <div className="flex items-center gap-3 mb-1">
                        <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isActive ? 'bg-[#E3F2FD] text-[#2196F3]' : 'bg-slate-100 text-slate-500'}`}>
                          <feat.icon className="w-4 h-4 lg:w-4.5 lg:h-4.5" />
                        </div>
                        <h3 className="text-lg lg:text-xl font-black text-slate-900">{feat.title}</h3>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-slate-600 font-medium text-xs lg:text-sm pr-4 lg:pr-12 pt-0.5 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE DEMOS */}
          <div className="w-full lg:w-1/2 h-[340px] lg:h-[440px] flex justify-center items-center py-2">
             <div className="relative w-full h-full bg-white border border-[#D0E2F5] rounded-[2rem] shadow-[0_30px_60px_rgba(33,150,243,0.08)] overflow-hidden flex flex-col">
                
                {/* Decorative Window Controls */}
                <div className="bg-slate-50/80 backdrop-blur-md border-b border-slate-100 px-5 py-3 flex items-center gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="ml-4 px-3 py-1 bg-white rounded-md text-[10px] font-bold text-slate-400 font-mono border border-slate-100">
                    preproute.com/app/feature-{activeIndex + 1}
                  </div>
                </div>

                {/* Demo Canvas */}
                <div className="flex-1 relative bg-slate-50/30 overflow-hidden">
                  
                  {/* Internal Ambient Glows */}
                  <motion.div 
                     animate={{ rotate: 360 }} 
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-full blur-[80px] opacity-70" 
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.96 }}
                      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0 flex items-center justify-center p-6 lg:p-10"
                    >
                      {renderDemo(activeIndex)}
                    </motion.div>
                  </AnimatePresence>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
