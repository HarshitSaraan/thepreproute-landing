import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "What is PrepRoute and who is it built for?",
    answer: "PrepRoute is an end-to-end exam preparation ecosystem designed by current IIM students specifically for IPMAT Indore, IPMAT Rohtak, JIPMAT, SET, and NPAT aspirants right after Class 12."
  },
  {
    question: "How are the mock tests and practice sets crafted?",
    answer: "Our mock test series strictly mirrors the latest exam patterns with questions written, reviewed, and curated by top scorers currently studying at IIM Indore, IIM Rohtak, and other premier campuses."
  },
  {
    question: "How does the Mistake Bank vault work?",
    answer: "Every question you attempt incorrectly across daily practice drills or full-length mocks is automatically cataloged in your personal Mistake Bank. You can filter by topic, revisit step-by-step solutions, and attempt re-tests until you master the concept."
  },
  {
    question: "Can I access PrepRoute on mobile devices?",
    answer: "Yes! PrepRoute is fully responsive across desktop, tablet, and mobile browsers so you can solve daily practice tracks and revise flashcards anywhere, anytime."
  },
  {
    question: "Is 1:1 mentorship from IIM students included?",
    answer: "Yes, all enrolled students have access to book 1:1 strategy calls with current IIM students for personalized guidance, attempt strategy, and interview preparation."
  },
  {
    question: "Can I re-attempt mock tests and track score improvements?",
    answer: "Absolutely! You can re-attempt practice drills and mocks anytime. Detailed analytics track your speed, accuracy, and percentile progression over time."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-6 sm:px-12 md:px-24 bg-[#F7F7F7] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Intro */}
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black bg-[#E3F2FD] text-[#2196F3] tracking-wider uppercase mb-4">
            Have Questions?
          </span>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-none mb-6">
            FAQs
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed max-w-md">
            Everything you need to know about PrepRoute, mock series, mistake bank tracking, and 1:1 mentorship from top IIM mentors.
          </p>
        </div>

        {/* Right Column: Clean Accordion List (Borderless / No Boxes) */}
        <div className="lg:col-span-7 xl:col-span-8 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="py-5 sm:py-6 transition-colors"
              >
                <button
                  className="w-full text-left flex justify-between items-center group outline-none cursor-pointer"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-extrabold text-base sm:text-lg lg:text-xl pr-6 transition-colors ${
                    isOpen ? 'text-[#2196F3]' : 'text-slate-900 group-hover:text-[#2196F3]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#E3F2FD] text-[#2196F3] rotate-90' 
                      : 'text-slate-400 group-hover:bg-[#E3F2FD] group-hover:text-[#2196F3]'
                  }`}>
                    {isOpen ? (
                      <X className="w-5 h-5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pt-3 pb-2 pr-12 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
