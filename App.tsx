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