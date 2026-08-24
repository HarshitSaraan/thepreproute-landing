import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningPreloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after animation completes (2.6s total)
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.45, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F7F7F7] overflow-hidden select-none"
        >
          {/* Soft Pastel Blue Spotlight Orb */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.4, 2.4], 
              opacity: [0, 0.9, 0.7] 
            }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[300px] h-[300px] rounded-full pointer-events-none z-0 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(144, 202, 249, 0.85) 0%, rgba(100, 181, 246, 0.5) 45%, rgba(227, 242, 253, 0.25) 75%, transparent 100%)'
            }}
          />

          {/* Centered Logo Box */}
          <div className="relative z-10 flex items-center justify-center font-sans tracking-tight text-3xl sm:text-4xl md:text-5xl font-black">
            
            {/* "the" */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-slate-950"
            >
              the
            </motion.span>

            {/* "prep" - Drops from the air into the glowing center! */}
            <motion.span
              initial={{ y: -380, opacity: 0, scale: 1.3 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 15,
                delay: 0.4,
              }}
              className="text-[#2196F3] relative inline-block mx-0.5"
            >
              prep
            </motion.span>

            {/* "route" */}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-slate-950"
            >
              route
            </motion.span>

          </div>

          {/* Tagline reveal below logo */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.95 }}
            className="relative z-10 text-[10px] sm:text-xs font-black text-slate-500 tracking-[0.2em] uppercase mt-4"
          >
            Because Every Dream Deserves A Route
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}





