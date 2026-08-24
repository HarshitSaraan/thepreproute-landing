import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, RotateCcw, ArrowUpRight, ArrowRight } from 'lucide-react';

const loopSteps = [
  {
    step: '01',
    title: 'Test like the exam',
    description: 'Attempt full-length, sectional, and topic tests built for the latest pattern.',
    icon: Target,
    iconBg: 'bg-[#E3F2FD] border-2 border-[#90CAF9] text-[#2196F3] shadow-md shadow-blue-100/70',
    revealDelay: 0.2,
  },
  {
    step: '02',
    title: 'Understand the score',
    description: 'Find the topic, pacing, and attempt-order patterns behind the number.',
    icon: BarChart3,
    iconBg: 'bg-[#E3F2FD] border-2 border-[#90CAF9] text-[#2196F3] shadow-md shadow-blue-100/70',
    revealDelay: 0.5,
  },
  {
    step: '03',
    title: 'Revisit intelligently',
    description: 'Practise missed questions and revise formulas, vocabulary, and concepts.',
    icon: RotateCcw,
    iconBg: 'bg-[#E3F2FD] border-2 border-[#90CAF9] text-[#2196F3] shadow-md shadow-blue-100/70',
    revealDelay: 0.8,
  },
  {
    step: '04',
    title: 'Ask someone ahead',
    description: 'Use mentor guidance to turn insight into a realistic preparation decision.',
    icon: ArrowUpRight,
    iconBg: 'bg-gradient-to-br from-orange-500 via-rose-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 border-2 border-orange-300',
    revealDelay: 1.1,
  },
];

export default function PrepRouteLoopSection() {
  const scrollToFeatures = () => {
    const el = document.querySelector('#features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="loop" className="py-24 px-6 sm:px-12 md:px-24 bg-transparent text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2196F3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Top Section Identifier Tag */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-[2px] bg-[#2196F3]"></div>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#2196F3]">
            THE PREPROUTE LOOP
          </span>
          <div className="w-6 h-[2px] bg-[#2196F3]"></div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 mb-4">
          From every mock to a <span className="text-[#2196F3]">better next move.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto mb-20 leading-relaxed">
          Practice, insight, revision, and human guidance—working as one loop.
        </p>

        {/* CONNECTED LINE & CIRCULAR NODES PATH LAYOUT */}
        <div className="relative pt-4">
          
          {/* Animated Connecting Line Draw: Lies directly under the circular nodes */}
          <div className="hidden md:block absolute top-[74px] left-[10%] right-[10%] h-[3px] z-0 pointer-events-none rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2196F3] via-[#64B5F6] to-orange-500"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.3, ease: 'easeInOut' }}
            />
          </div>

          {/* Static Dashed Path Guide Line */}
          <div className="hidden md:block absolute top-[74px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-slate-300 z-0 pointer-events-none opacity-50" />

          {/* 4 Open Nodes Grid (Circular Node Badges Sitting Above Line) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {loopSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 25, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: item.revealDelay, 
                    type: 'spring',
                    stiffness: 220,
                    damping: 16 
                  }}
                  className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 relative"
                >
                  
                  {/* Floating Number Pill & Circular Icon Badge sitting directly above the line */}
                  <div className="relative flex flex-col items-center mb-6 z-10">
                    
                    {/* Step Number Pill */}
                    <span className="text-[11px] font-black tracking-wider text-slate-800 bg-white px-3 py-0.5 rounded-full border border-slate-200 shadow-md mb-2">
                      {item.step}
                    </span>

                    {/* Circular Icon Ring Node */}
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.iconBg}`}>
                      <IconComp className="w-6 h-6 stroke-[2.2]" />
                    </div>

                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-black text-slate-950 mb-2 group-hover:text-[#2196F3] transition-colors">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[220px]">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="mt-20 flex justify-center">
          <button
            onClick={scrollToFeatures}
            className="group bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold text-xs sm:text-sm py-4 px-8 rounded-full shadow-[0_10px_25px_-5px_rgba(33,150,243,0.35)] transition-all hover:scale-105 active:scale-98 flex items-center gap-2.5"
          >
            <span>See what's inside</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}








