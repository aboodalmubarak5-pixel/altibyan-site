import React from 'react';
// Added missing 'Users' icon to the imports from lucide-react
import { Target, MapPin, Award, BookOpen, Crown, Shapes, Sun, Sparkles, Users } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const About: React.FC = () => {
  const { t } = useThemeLanguage();

  return (
    <section id="about" className="py-20 bg-white/90 dark:bg-gray-800/90 relative overflow-hidden transition-colors duration-300 backdrop-blur-sm">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-br-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/5 dark:bg-secondary/10 rounded-tl-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quranic Verse Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block p-6 mb-4 bg-primary/5 dark:bg-white/5 rounded-2xl border border-primary/10 dark:border-white/10">
            <p className="text-2xl md:text-3xl font-bold text-primary dark:text-secondary italic mb-2 leading-relaxed">
              " {t.about.verse} "
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">{t.about.verseSource}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">{t.about.title}</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-20">
          {/* Main Info Card */}
          <div className="flex-1 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 leading-tight">
                {t.common.siteName}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                {t.about.mainDescription}
              </p>
              
              {/* Name Definitions */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h4 className="font-bold text-primary dark:text-secondary mb-2">{t.about.wordComplex}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.about.meaningComplex}</p>
                 </div>
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h4 className="font-bold text-primary dark:text-secondary mb-2">{t.about.wordTibyan}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.about.meaningTibyan}</p>
                 </div>
                 <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h4 className="font-bold text-primary dark:text-secondary mb-2">{t.about.wordCentral}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.about.meaningCentral}</p>
                 </div>
              </div>
            </div>

            {/* Program: Noor Al-Bayan - Highlighted Section */}
            <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 dark:from-gray-900 dark:to-gray-800 p-8 text-white shadow-xl">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Sparkles size={120} />
               </div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                       <Sun className="text-secondary" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold">{t.about.programTitle}</h3>
                  </div>
                  <p className="text-blue-50 leading-relaxed mb-6">
                    {t.about.programDesc}
                  </p>
                  <div className="flex items-center gap-2 font-bold bg-white/10 w-fit px-4 py-2 rounded-full border border-white/20">
                     <Users size={18} className="text-secondary" />
                     <span>{t.about.programStats}</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Logo Symbolism Card */}
          <div className="flex-1 w-full space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
              <Shapes className="text-secondary" size={28} />
              {t.about.logoTitle}
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
               {[
                 { text: t.about.logoPoint1, icon: <BookOpen className="text-primary dark:text-secondary" /> },
                 { text: t.about.logoPoint2, icon: <Shapes className="text-primary dark:text-secondary" /> },
                 { text: t.about.logoPoint3, icon: <Sun className="text-primary dark:text-secondary" /> },
                 { text: t.about.logoPoint4, icon: <Crown className="text-primary dark:text-secondary" /> }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-700/40 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-secondary/30 transition-all group">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                       {item.icon}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</p>
                 </div>
               ))}
            </div>

            {/* Mission & Quality grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                   <Target className="text-secondary mb-3" size={32} />
                   <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t.about.missionTitle}</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{t.about.missionDesc}</p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                   <Award className="text-secondary mb-3" size={32} />
                   <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t.about.qualityTitle}</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{t.about.qualityDesc}</p>
                </div>
            </div>
          </div>
        </div>

        {/* Visual Callout at bottom */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-white dark:border-gray-800">
           <img 
             src="https://i.postimg.cc/DzW1G0M4/IMG_20260211_WA0018.jpg" 
             alt="Salman Al-Farsi Mosque" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-10">
              <div className="max-w-2xl text-white">
                  <div className="bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold w-fit mb-4">
                     {t.about.mainLocation}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{t.about.mainMosque}</h3>
                  <p className="text-lg italic opacity-90">
                    "{t.about.quote}"
                  </p>
                  <p className="text-sm opacity-70 mt-2">— {t.about.quoteSource}</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;