import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#D0E2F5]/80 py-6 text-slate-700">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="inline-flex items-center group shrink-0">
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-950 font-sans">
            the<span className="text-[#2196F3]">prep</span>route
          </span>
        </a>

        {/* Copyright & Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
          <span>&copy; {new Date().getFullYear()} thepreproute. All rights reserved.</span>
          <span>•</span>
          <a href="#" className="hover:text-[#2196F3] transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-[#2196F3] transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="#" className="hover:text-[#2196F3] transition-colors">Contact Us</a>
        </div>

      </div>
    </footer>
  );
}
