import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, MonitorPlay, Layers, ClipboardList, PenTool, BarChart, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const exams = [
  {
    id: 'indore',
    title: 'IIM IPMAT Indore',
    heading: 'IPMAT Indore',
    subheading: 'Integrated Programme in Management (IPM)',
    description: 'IPMAT Indore is a 5-year integrated management program offered by IIM Indore for students right after Class 12. It is one of the most prestigious and competitive exams for management aspirants.',
    features: [
      '5 Year Integrated Dual Degree (BBA + MBA)',
      'Highly Competitive National Level Exam',
      'Direct Pathway to IIM Indore World-Class Management Education'
    ],
    provides: [
      { icon: <ClipboardList className="w-6 h-6 text-[#2196F3]" />, title: '25+ Full Length Mock Tests' },
      { icon: <MonitorPlay className="w-6 h-6 text-[#2196F3]" />, title: 'Sectional Tests (QA, VA, LR)' },
      { icon: <PenTool className="w-6 h-6 text-[#2196F3]" />, title: 'Topic-wise Tests For Strong Basics' },
      { icon: <Layers className="w-6 h-6 text-[#2196F3]" />, title: 'Smart Flashcards To Revise Faster' },
      { icon: <BookOpen className="w-6 h-6 text-[#2196F3]" />, title: 'Detailed Solutions For Every Question' },
      { icon: <BarChart className="w-6 h-6 text-[#2196F3]" />, title: 'Deep Analytics To Understand & Improve' },
    ],
    whyText: 'Questions crafted by current IIM students, latest pattern mocks, in-depth analytics, and smart revision tools—everything you need to crack IPMAT Indore with confidence.'
  },
  {
    id: 'rohtak',
    title: 'IIM IPMAT Rohtak',
    heading: 'IPMAT Rohtak',
    subheading: 'Integrated Programme in Management (IPM)',
    description: 'IPMAT Rohtak is the entrance exam for the 5-year integrated management program at IIM Rohtak, designed to nurture young talent into future business leaders.',
    features: [
      '5 Year Integrated Management Program',
      'IIM Rohtak Faculty & World-Class Curriculum',
      'Excellent Placement Opportunities & Industry Exposure'
    ],
    provides: [
      { icon: <ClipboardList className="w-6 h-6 text-[#2196F3]" />, title: '20+ Full Length Mock Tests' },
      { icon: <MonitorPlay className="w-6 h-6 text-[#2196F3]" />, title: 'Sectional Tests (QA, VA, LR)' },
      { icon: <PenTool className="w-6 h-6 text-[#2196F3]" />, title: 'Topic-wise Tests' },
      { icon: <Layers className="w-6 h-6 text-[#2196F3]" />, title: 'Smart Flashcards' },
      { icon: <BookOpen className="w-6 h-6 text-[#2196F3]" />, title: 'Detailed Solutions' },
      { icon: <BarChart className="w-6 h-6 text-[#2196F3]" />, title: 'Performance Analytics' },
    ],
    whyText: 'Questions crafted by current IIM students, latest pattern mocks, in-depth analytics, and smart revision tools—everything you need to crack IPMAT Rohtak with confidence.'
  },
  {
    id: 'jipmat',
    title: 'JIPMAT (Jammu & Bodh Gaya)',
    heading: 'JIPMAT',
    subheading: 'Joint Integrated Programme in Management Admission Test',
    description: 'JIPMAT is a national-level entrance exam for admission to the 5-year IPM program offered by IIM Jammu and IIM Bodh Gaya.',
    features: [
      'Joint Exam for IIM Jammu & IIM Bodh Gaya',
      '5 Year Integrated Program Direct Entry',
      'Great Placement Prospects & Expanding Infrastructure'
    ],
    provides: [
      { icon: <ClipboardList className="w-6 h-6 text-[#2196F3]" />, title: '15+ Full Length Mock Tests' },
      { icon: <MonitorPlay className="w-6 h-6 text-[#2196F3]" />, title: 'Sectional Practice Sets' },
      { icon: <PenTool className="w-6 h-6 text-[#2196F3]" />, title: 'Topic-wise Practice' },
      { icon: <Layers className="w-6 h-6 text-[#2196F3]" />, title: 'Flashcard Decks' },
      { icon: <BookOpen className="w-6 h-6 text-[#2196F3]" />, title: 'Step-by-Step Solutions' },
      { icon: <BarChart className="w-6 h-6 text-[#2196F3]" />, title: 'Deep Performance Analytics' },
    ],
    whyText: 'Questions crafted by current IIM students, latest pattern mocks, in-depth analytics, and smart revision tools—everything you need to crack JIPMAT with confidence.'
  },
  {
    id: 'set-npat',
    title: 'SET & NPAT',
    heading: 'SET & NPAT Exam Series',
    subheading: 'Symbiosis SET & NMIMS NPAT Entrance Tests',
    description: 'Premier undergraduate entrance exams for Symbiosis (SET) and NMIMS (NPAT) BBA programs across top national campuses.',
    features: [
      'Covers SET & NPAT Full Syllabus',
      'Targeted Speed & Accuracy Drills',
      'Top Non-IIM Management B-School Pathway'
    ],
    provides: [
      { icon: <ClipboardList className="w-6 h-6 text-[#2196F3]" />, title: '10 Full Length Mock Tests Each' },
      { icon: <MonitorPlay className="w-6 h-6 text-[#2196F3]" />, title: 'Sectional Speed Drills' },
      { icon: <PenTool className="w-6 h-6 text-[#2196F3]" />, title: 'Topic-wise Tests' },
      { icon: <Layers className="w-6 h-6 text-[#2196F3]" />, title: 'Smart Revision Flashcards' },
      { icon: <BookOpen className="w-6 h-6 text-[#2196F3]" />, title: 'Detailed Explanations' },
      { icon: <BarChart className="w-6 h-6 text-[#2196F3]" />, title: 'Real Percentile Rankings' },
    ],
    whyText: 'Crafted with exact exam pattern precision to help you secure top ranks in Symbiosis and NMIMS BBA admissions.'
  }
];

export default function ExamOfferingsSection() {
  const [activeTab, setActiveTab] = useState(exams[0].id);

  const activeExam = exams.find(e => e.id === activeTab);

  return (
    <section id="exams" className="py-20 px-6 sm:px-12 md:px-24 bg-white border-y border-slate-200/80">
      
      {/* Section Header */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-1.5 bg-[#E3F2FD] border border-[#90CAF9]/60 text-[#2196F3] text-xs font-black uppercase px-3.5 py-1 rounded-full mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>INDIVIDUAL EXAM OFFERINGS</span>
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight">
          MADE BY IIM STUDENTS, FOR <span className="text-[#2196F3]">FUTURE IIM STUDENTS.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Exam Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {exams.map(exam => {
            const isSelected = activeTab === exam.id;
            return (
              <button
                key={exam.id}
                onClick={() => setActiveTab(exam.id)}
                className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2.5 ${
                  isSelected 
                    ? 'bg-[#2196F3] text-white shadow-md scale-105' 
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/80'
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black ${
                  isSelected ? 'bg-white text-[#2196F3]' : 'bg-slate-800 text-white'
                }`}>
                  IIM
                </div>
                <span>{exam.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="bg-[#F7F7F7] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#D0E2F5]/80 shadow-sm relative overflow-hidden min-h-[560px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-12"
            >
              {/* Left Column */}
              <div className="w-full lg:w-5/12 flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-950 mb-1 flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#2196F3] text-white rounded-xl flex items-center justify-center text-xs font-black shrink-0">
                      IIM
                    </div>
                    <span>{activeExam.heading}</span>
                  </h3>
                  <p className="text-[#2196F3] font-bold text-xs sm:text-sm mt-1">{activeExam.subheading}</p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {activeExam.description}
                </p>

                <div className="flex flex-col gap-3">
                  {activeExam.features.map((feature, i) => (
                    <div key={i} className="bg-white px-5 py-3.5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-bold">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#2196F3] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-7/12 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-4">
                    What PrepRoute Provides for {activeExam.heading}
                  </h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 mb-6">
                    {activeExam.provides.map((prov, i) => (
                      <div key={i} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col items-center text-center gap-3 hover:border-[#90CAF9] hover:shadow-xs transition-all cursor-default">
                        <div className="w-10 h-10 rounded-xl bg-[#E3F2FD] flex items-center justify-center">
                          {prov.icon}
                        </div>
                        <span className="text-xs font-extrabold text-slate-800 leading-tight">{prov.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#2196F3] text-white p-6 sm:p-8 rounded-3xl shadow-md">
                  <h4 className="text-base sm:text-lg font-black mb-2">Why PrepRoute for {activeExam.heading}?</h4>
                  <p className="text-blue-50 leading-relaxed text-xs sm:text-sm font-medium">
                    {activeExam.whyText}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center">
          <a 
            href="/#pricing"
            className="bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-md transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Explore Individual Pricing Packs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
