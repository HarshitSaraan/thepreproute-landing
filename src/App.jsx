import React from 'react';
import OpeningPreloader from './components/OpeningPreloader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PrepRouteLoopSection from './components/PrepRouteLoopSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-[#F7F7F7] selection:bg-[#90CAF9] selection:text-[#2196F3] min-h-screen relative overflow-x-hidden">
      
      {/* GLOBAL LIGHT BLUEISH AMBIENT GLOW CANVASES SPANNING ALL OVER THE WEBSITE */}
      
      {/* Top Header Light Blue Spotlight Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-[800px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(144, 202, 249, 0.45), rgba(227, 242, 253, 0.25) 45%, transparent 80%)'
        }}
      />

      {/* Mid Left Ambient Sky Blue Orb Glow */}
      <div className="absolute top-[22%] -left-[200px] w-[800px] h-[800px] bg-[#90CAF9]/25 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Mid Right Ambient Electric Blue Orb Glow */}
      <div className="absolute top-[48%] -right-[200px] w-[850px] h-[850px] bg-[#2196F3]/18 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Lower Mid Ambient Pastel Blue Glow */}
      <div className="absolute top-[72%] left-[10%] w-[900px] h-[900px] bg-[#64B5F6]/20 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Bottom Footer Light Blue Ambient Glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 90% 60% at 50% 110%, rgba(144, 202, 249, 0.35), transparent 75%)'
        }}
      />

      <div className="relative z-10">
        {/* Opening Preloader: 'prep' drops from the air onto the center screen */}
        <OpeningPreloader />

        {/* 1. Navbar */}
        <Navbar />

        {/* 2. Hero Section ("Because every Dream deserves a Route" + IIM Mentor Option) */}
        <HeroSection />

        {/* 3. The PrepRoute Loop (4-Step Connected Preparation Path Showcase) */}
        <PrepRouteLoopSection />

        {/* 4. Features Section ("MORE ENGAGEMENT, EVERY DAY" 5-Feature Interactive Showcase) */}
        <FeaturesSection />

        {/* 5. Pricing Section */}
        <PricingSection />

        {/* 6. Frequently Asked Questions Section */}
        <FAQSection />

        {/* 7. Cool Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;



