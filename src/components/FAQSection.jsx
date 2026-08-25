import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    question: "How does the Rose Pink Mistake Bank vault work?",
    answer: "Every question you attempt incorrectly across daily practice drills or full-length mocks is automatically cataloged in your personal Mistake Bank. You can filter by topic, revisit step-by-step solutions, and attempt re-tests until you master the concept."
  },
  {
    question: "Can I access PrepRoute on mobile devices?",
    answer: "Yes! PrepRoute is fully responsive across desktop, tablet, and mobile browsers so you can solve daily practice tracks and revise flashcards anywhere, anytime."
  },
  {
    question: "Is 1:1 mentorship from IIM students included?",
    answer: "Yes, all students have access to book 1:1 strategy calls with current IIM students for personalized guidance, attempt strategy, and interview preparation."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 sm:px-12 md:px-24 bg-[#F7F7F7]">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
            Frequently Asked <span className="text-[#2196F3]">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-[#D0E2F5]/80 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#E3F2FD] text-[#2196F3]' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2196F3]' : ''}`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100">
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
