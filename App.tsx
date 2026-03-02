import React, { useState, useEffect } from 'react';
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
import NewsTicker from './components/NewsTicker';
import SmartAssistant from './components/SmartAssistant';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';

function AppContent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      <div className="relative z-10">
        <Navbar isScrolled={isScrolled} />
        <NewsTicker isScrolled={isScrolled} />
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
      <SmartAssistant />
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