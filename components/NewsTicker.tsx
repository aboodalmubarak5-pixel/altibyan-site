import React from 'react';
import { Megaphone } from 'lucide-react';
import { NEWS_ITEMS } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

interface NewsTickerProps {
  isScrolled: boolean;
}

const NewsTicker: React.FC<NewsTickerProps> = ({ isScrolled }) => {
  const { language, dir } = useThemeLanguage();

  return (
    <div className={`fixed left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-secondary/20 py-2.5 z-40 overflow-hidden shadow-sm transition-all duration-300 ${isScrolled ? 'top-20 md:top-24' : 'top-0'}`} dir={dir}>
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Label */}
        <div className="flex items-center gap-2 bg-secondary text-white px-3 py-1.5 rounded-lg text-xs font-bold z-10 shadow-sm whitespace-nowrap">
          <Megaphone size={14} className="animate-bounce" />
          <span>{language === 'ar' ? 'آخر الأخبار' : 'Latest News'}</span>
        </div>

        {/* Scrolling Content */}
        <div className="flex-1 overflow-hidden relative h-6 mx-4">
          <div className="absolute whitespace-nowrap animate-marquee flex items-center gap-16">
            {NEWS_ITEMS.map((item, index) => (
              <span key={index} className="text-primary dark:text-accent font-bold text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-sm"></span>
                {item}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {NEWS_ITEMS.map((item, index) => (
              <span key={`dup-${index}`} className="text-primary dark:text-accent font-bold text-sm flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-sm"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NewsTicker;
