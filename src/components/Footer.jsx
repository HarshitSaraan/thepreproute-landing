import React from 'react';
import { UserCheck, Sparkles, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-slate-800 pt-20 pb-12 relative">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2196F3]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 relative z-10">
        
        {/* Top Mentor Banner CTA inside Footer */}
        <div className="bg-gradient-to-r from-[#E3F2FD] via-[#F0F7FF] to-white border border-[#90CAF9] rounded-3xl p-8 sm:p-12 mb-16 shadow-[0_10px_30px_rgba(33,150,243,0.1)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-white border border-[#90CAF9]/60 text-[#2196F3] text-[11px] font-black uppercase px-3.5 py-1 rounded-full mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#2196F3]" />
              <span>READY TO BEGIN YOUR JOURNEY?</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight mb-3">
              Book a 1:1 strategy call with an <span className="text-[#2196F3]">IIM mentor today.</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Get direct guidance on exam strategy, timing drills, and score acceleration from students currently at IIM Indore & Rohtak.
            </p>
          </div>

          <button 
            onClick={() => alert('Booking free 1:1 strategy session with IIM Mentor...')}
            className="shrink-0 bg-[#2196F3] hover:bg-[#1976D2] text-white font-black py-4 px-8 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-98 flex items-center gap-2.5"
          >
            <UserCheck className="w-4 h-4 stroke-[2.5]" />
            <span>Talk to an IIM Mentor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-slate-200">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <a href="#" className="inline-flex items-center group">
              <span className="font-black text-2xl tracking-tight text-slate-950 font-sans">
                the<span className="text-[#2196F3]">prep</span>route
              </span>
            </a>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              India's premier IPMAT preparation platform built by current IIM students. Mock tests, deep analytics, mistake bank, and 1:1 mentorship.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#2196F3] mt-1">
              <ShieldCheck className="w-4 h-4 text-[#2196F3]" />
              <span>100% IPMAT Indore & Rohtak Focused</span>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div>
            <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><a href="#loop" className="hover:text-[#2196F3] transition-colors">The PrepRoute Loop</a></li>
              <li><a href="#features" className="hover:text-[#2196F3] transition-colors">Interactive Features</a></li>
              <li><a href="#features" className="hover:text-[#2196F3] transition-colors">Rose Pink Mistake Vault</a></li>
              <li><a href="#features" className="hover:text-[#2196F3] transition-colors">Quant & Vocab Flashcards</a></li>
              <li><a href="#pricing" className="hover:text-[#2196F3] transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Col 3: Exam Series */}
          <div>
            <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider mb-4">Exam Series</h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><a href="#exams" className="hover:text-[#2196F3] transition-colors">IIM IPMAT Indore</a></li>
              <li><a href="#exams" className="hover:text-[#2196F3] transition-colors">IIM IPMAT Rohtak</a></li>
              <li><a href="#exams" className="hover:text-[#2196F3] transition-colors">JIPMAT (Jammu & Bodh Gaya)</a></li>
              <li><a href="#exams" className="hover:text-[#2196F3] transition-colors">Symbiosis SET</a></li>
              <li><a href="#exams" className="hover:text-[#2196F3] transition-colors">NMIMS NPAT</a></li>
            </ul>
          </div>

          {/* Col 4: Support & Contact */}
          <div>
            <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2196F3]" />
                <span>support@thepreproute.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2196F3]" />
                <span>Founded by IIM Alumni</span>
              </li>
              <li><a href="#faq" className="hover:text-[#2196F3] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-slate-900 font-bold">thepreproute</span>. All rights reserved. Because every Dream deserves a Route.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#2196F3] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2196F3] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#2196F3] transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}


