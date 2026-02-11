import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CircleTypes from './components/CircleTypes';
import Advertisements from './components/Advertisements';
import StudentRecitations from './components/StudentRecitations';
import Stats from './components/Stats';
import Mosques from './components/Mosques';
import Contact from './components/Contact';
import DonationOpportunities from './components/DonationOpportunities';
import Supporters from './components/Supporters';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      {/* Global Fixed Watermark Overlay - Behind content (z-0) */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
         <img 
           src="https://i.postimg.cc/wMQPL0GJ/IMG-20260211-081616-(1).png" 
           alt="" 
           className="w-[70%] md:w-[50%] max-w-3xl h-auto object-contain opacity-20 dark:opacity-25"
         />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <CircleTypes />
        <Advertisements />
        <DonationOpportunities />
        <Stats />
        <StudentRecitations />
        <Mosques />
        <Supporters />
        <Contact />
      </div>
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ThemeLanguageProvider>
      <AppContent />
    </ThemeLanguageProvider>
  );
}

export default App;