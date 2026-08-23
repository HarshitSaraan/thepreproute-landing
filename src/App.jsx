import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import ExamOfferingsSection from './components/ExamOfferingsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-[#F7F7F7] selection:bg-[#90CAF9] selection:text-[#2196F3] min-h-screen">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Banner (No sticky scrolling, just intro) */}
      <HeroSection />

      {/* 3. Our Features Section - Topicwise, Deep Analytics, Mistake Bank, Full Mocks (Dark auto-slideshow) */}
      <FeaturesSection />

      {/* 4. Pricing Section (Light section below features) */}
      <PricingSection />

      {/* 5. Individual Exam Offerings Section */}
      <ExamOfferingsSection />

      {/* 6. Frequently Asked Questions Section */}
      <FAQSection />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;
