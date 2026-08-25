import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, BarChart3, RotateCcw, ArrowUpRight, ArrowRight } from 'lucide-react';

const loopSteps = [
  {
    step: '01',
    title: 'Test like the exam',
    description: 'Attempt full-length, sectional, and topic tests built for the latest pattern.',
    icon: Target,
    iconBg: 'bg-[#E3F2FD] border-2 border-[#90CAF9] text-[#2196F3] shadow-md shadow-blue-100/70',
    threshold: 0.12,
  },
  {
    step: '02',
    title: 'Understand the score',
    description: 'Find the topic, pacing, and attempt-order patterns behind the number.',
    icon: BarChart3,
    iconBg: 'bg-[#E3F2FD] border-2 border-[#90CAF9] text-[#2196F3] shadow-md shadow-blue-100/70',
    threshold: 0.38,
  },
  {
    step: '03',
    title: 'Revisit intelligently',
    description: 'Practise missed questions and revise formulas, vocabulary, and concepts.',
    icon: RotateCcw,
    iconBg: 'bg-[#E3F2FD] border-2 border-[#90CAF9] text-[#2196F3] shadow-md shadow-blue-100/70',
    threshold: 0.65,
  },
  {
    step: '04',
    title: 'Ask someone ahead',
    description: 'Use mentor guidance to turn insight into a realistic preparation decision.',
    icon: ArrowUpRight,
    iconBg: 'bg-gradient-to-br from-orange-500 via-rose-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 border-2 border-orange-300',
    threshold: 0.90,
  },
];

// Inverted S-Curve Path string for a 1000 x 180 viewBox
const S_CURVE_PATH = "M 40 85 C 120 20, 200 150, 375 85 C 550 20, 630 150, 780 85 C 835 60, 880 85, 960 85";

export default function PrepRouteLoopSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  const [progress, setProgress] = useState(0);
  const [planePos, setPlanePos] = useState({ x: 40, y: 85, angle: 0 });
  const [activeSteps, setActiveSteps] = useState([false, false, false, false]);

  useEffect(() => {
    let animId;
    let startTime = null;
    const duration = 2400; // 2.4s flight duration

    if (isInView) {
      // Reset state on entry
      setProgress(0);
      setActiveSteps([false, false, false, false]);

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        
        // Smooth ease-in-out cubic easing
        const easeProgress =
          rawProgress < 0.5
            ? 4 * rawProgress * rawProgress * rawProgress
            : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

        setProgress(easeProgress);

        // Calculate Plane position and orientation on the SVG Path
        if (pathRef.current) {
          const pathLen = pathRef.current.getTotalLength();
          const currentLen = easeProgress * pathLen;
          const point = pathRef.current.getPointAtLength(currentLen);
          
          // Get forward point to compute flight angle
          const nextLen = Math.min(currentLen + 3, pathLen);
          const nextPoint = pathRef.current.getPointAtLength(nextLen);
          const deltaX = nextPoint.x - point.x;
          const deltaY = nextPoint.y - point.y;
          
          // route-map.svg default nose is pointed top-right (~ -45deg). We adjust angle offset so nose faces forward
          const tangentAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

          setPlanePos({
            x: point.x,
            y: point.y,
            angle: tangentAngle + 45, // offset for SVG icon alignment
          });
        }

        // Trigger step fades based on threshold
        setActiveSteps([
          easeProgress >= loopSteps[0].threshold,
          easeProgress >= loopSteps[1].threshold,
          easeProgress >= loopSteps[2].threshold,
          easeProgress >= loopSteps[3].threshold,
        ]);

        if (rawProgress < 1) {
          animId = requestAnimationFrame(animate);
        }
      };

      animId = requestAnimationFrame(animate);
    } else {
      setProgress(0);
      setActiveSteps([false, false, false, false]);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView]);

  const scrollToFeatures = () => {
    const el = document.querySelector('#features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="loop" 
      ref={sectionRef}
      className="py-24 px-6 sm:px-12 md:px-24 bg-transparent text-slate-900 relative overflow-hidden border-t border-slate-200/80"
    >
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
        <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
          Practice, insight, revision, and human guidance—working as one loop.
        </p>

        {/* CONNECTED INVERTED S-CURVE ROUTE & NODES */}
        <div className="relative pt-4 pb-8">
          
          {/* SVG Inverted S-Curve Canvas with Animated Paper Plane */}
          <div className="hidden md:block absolute top-[52px] left-0 right-0 h-[120px] pointer-events-none z-0">
            <svg 
              className="w-full h-full overflow-visible" 
              viewBox="0 0 1000 180" 
              preserveAspectRatio="none"
            >
              <defs>
                {/* Vibrant Gradient along the Inverted S path */}
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2196F3" />
                  <stop offset="45%" stopColor="#60A5FA" />
                  <stop offset="75%" stopColor="#FB923C" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>

                {/* Soft Glowing filter */}
                <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Dashed Guide Track */}
              <path
                d={S_CURVE_PATH}
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                opacity="0.6"
              />

              {/* Animated Drawn Path (Left to Right) */}
              <path
                ref={pathRef}
                d={S_CURVE_PATH}
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={pathRef.current ? pathRef.current.getTotalLength() : 1200}
                strokeDashoffset={
                  pathRef.current 
                    ? pathRef.current.getTotalLength() * (1 - progress) 
                    : 1200 * (1 - progress)
                }
                filter="url(#routeGlow)"
              />

              {/* ROUTE-MAP.SVG PAPER PLANE FLYING ALONG PATH */}
              {isInView && (
                <g
                  transform={`translate(${planePos.x}, ${planePos.y}) rotate(${planePos.angle})`}
                  style={{
                    transition: 'none',
                    filter: 'drop-shadow(0px 3px 8px rgba(33, 150, 243, 0.45))',
                  }}
                >
                  {/* Glowing halo behind plane */}
                  <circle cx="0" cy="0" r="14" fill="#2196F3" opacity="0.25" />
                  
                  {/* Paper Plane Icon from route-map.svg */}
                  <g transform="translate(-10, -10) scale(0.65)">
                    <path
                      d="M5.64 25.24c-0.12 0-0.24-0.040-0.36-0.080-0.28-0.16-0.48-0.44-0.48-0.76v-4.36c0-0.2 0.080-0.4 0.2-0.56l6-6.6c0.32-0.36 0.84-0.36 1.2-0.040s0.36 0.84 0.040 1.2l-5.76 6.32v2.36l3.36-2.52c0.24-0.16 0.56-0.2 0.8-0.12l2.12 0.84 1.8-11.8-12 6.68 1.92 1.12c0.4 0.24 0.52 0.76 0.28 1.16s-0.76 0.52-1.16 0.28l-3.2-1.88c-0.28-0.16-0.4-0.44-0.4-0.72 0-0.32 0.16-0.56 0.44-0.72l14.8-8.16c0.28-0.16 0.64-0.12 0.88 0.040 0.28 0.2 0.4 0.48 0.36 0.8l-2.24 14.52c-0.040 0.24-0.2 0.48-0.4 0.6s-0.48 0.16-0.72 0.040l-2.68-1.080-4.32 3.24c-0.12 0.12-0.28 0.2-0.48 0.2z"
                      fill="#2196F3"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />
                  </g>
                </g>
              )}
            </svg>
          </div>

          {/* 4 Steps Grid: Text and Nodes Fade In As The Paper Plane Traverses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {loopSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isUnlocked = activeSteps[idx];

              return (
                <div 
                  key={idx}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Floating Number Pill & Node Badge */}
                  <motion.div 
                    className="relative flex flex-col items-center mb-6 z-10"
                    animate={{
                      scale: isUnlocked ? [0.85, 1.12, 1] : 0.85,
                      opacity: isUnlocked ? 1 : 0.25,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: 'easeOut',
                    }}
                  >
                    {/* Step Number Pill */}
                    <span className={`text-[11px] font-black tracking-wider px-3 py-0.5 rounded-full border shadow-sm mb-2 transition-all duration-500 ${
                      isUnlocked 
                        ? 'text-slate-900 bg-white border-slate-300 shadow-md' 
                        : 'text-slate-400 bg-slate-100 border-slate-200'
                    }`}>
                      {item.step}
                    </span>

                    {/* Circular Icon Ring Node */}
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${item.iconBg} ${
                        isUnlocked ? 'scale-100' : 'scale-90 opacity-40 grayscale'
                      } group-hover:scale-110`}>
                        <IconComp className="w-6 h-6 stroke-[2.2]" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Step Title & Description: Sequential Smooth Fade In */}
                  <motion.div
                    animate={{
                      opacity: isUnlocked ? 1 : 0,
                      y: isUnlocked ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: 'easeOut',
                    }}
                    className="flex flex-col items-center"
                  >
                    <h3 className="text-lg font-black text-slate-950 mb-2 group-hover:text-[#2196F3] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[220px]">
                      {item.description}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 flex justify-center">
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
