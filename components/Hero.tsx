import React from 'react';
import { Heart } from 'lucide-react';
import { LINKS } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Hero: React.FC = () => {
  const { t, dir } = useThemeLanguage();

  return (
    <div id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image overlay with gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1596522354195-e84ae3c9878f?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/90 mix-blend-multiply dark:from-gray-900/95 dark:via-gray-900/80 dark:to-gray-900/90" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="mb-6 p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl animate-in zoom-in duration-500">
           <img 
             src="https://i.postimg.cc/wMQPL0GJ/IMG-20260211-081616-(1).png" 
             alt="Logo" 
             className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
           />
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
          {t.hero.title}
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-100 mb-12 max-w-2xl font-medium leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
            <a 
                href={LINKS.registration}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-secondary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
                <span>{t.hero.register}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${dir === 'rtl' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
            </a>
            
            <a 
                href={LINKS.donation}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition duration-300 shadow-lg flex items-center justify-center gap-2 group"
            >
                <Heart className="group-hover:text-red-500 transition-colors" size={20} />
                <span>{t.hero.donate}</span>
            </a>
        </div>
      </div>

      {/* Decorative Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>
    </div>
  );
};

export default Hero;