import React from 'react';
import { Target, Award, BookOpen, Crown, Shapes, Sun, Sparkles, Users, Quote, Info, ExternalLink } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { LINKS } from '../constants';

const About: React.FC = () => {
  const { t, dir, language } = useThemeLanguage();
  const isAr = language === 'ar';

  return (
    <section id="about" className="py-20 bg-white/90 dark:bg-gray-800/90 relative overflow-hidden transition-colors duration-300 backdrop-blur-sm">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-br-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/5 dark:bg-secondary/10 rounded-tl-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quranic Verse Header - Conditional Styling for English/Arabic */}
        <div className="text-center mb-16 relative">
          <div className="inline-block p-8 md:p-12 mb-4 bg-primary/5 dark:bg-white/5 rounded-3xl border border-primary/10 dark:border-white/10 shadow-inner">
            <p className={`text-primary dark:text-secondary mb-4 leading-[1.8] text-center ${
              isAr ? 'text-4xl md:text-6xl font-uthmanic font-normal' : 'text-2xl md:text-3xl font-quran italic'
            }`}>
              {t.about.verse}
            </p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <div className="h-px w-8 bg-secondary/30"></div>
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400 font-sans tracking-widest">{t.about.verseSource}</span>
              <div className="h-px w-8 bg-secondary/30"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4 font-sans tracking-tight">{t.about.title}</h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-12">
          {/* Section 1: Name Etymology & Definitions */}
          <div className="flex-1 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 leading-tight flex items-center gap-3">
                <BookOpen className="text-secondary" />
                {t.about.meaningTitle}
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                 {/* مجمع */}
                 <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-r-4 border-primary dark:border-secondary shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3 mb-2">
                       <Shapes className="text-primary dark:text-secondary group-hover:scale-110 transition-transform" size={24} />
                       <h4 className="font-bold text-xl text-primary dark:text-secondary font-quran">{t.about.wordComplex}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm whitespace-pre-line">{t.about.meaningComplex}</p>
                 </div>
                 
                 {/* التبيان */}
                 <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-r-4 border-primary dark:border-secondary shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3 mb-2">
                       <Sun className="text-primary dark:text-secondary group-hover:scale-110 transition-transform" size={24} />
                       <h4 className="font-bold text-xl text-primary dark:text-secondary font-quran">{t.about.wordTibyan}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm whitespace-pre-line">{t.about.meaningTibyan}</p>
                 </div>
                 
                 {/* المركزي */}
                 <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border-r-4 border-primary dark:border-secondary shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3 mb-2">
                       <Target className="text-primary dark:text-secondary group-hover:scale-110 transition-transform" size={24} />
                       <h4 className="font-bold text-xl text-primary dark:text-secondary font-quran">{t.about.wordCentral}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm whitespace-pre-line">{t.about.meaningCentral}</p>
                 </div>
              </div>

              {/* Full Sentence Meaning Highlight */}
              <div className="mt-10 p-8 bg-primary/5 dark:bg-secondary/5 rounded-3xl border border-dashed border-primary/20 dark:border-secondary/20 relative">
                  <div className="absolute -top-4 -right-4 bg-secondary text-white p-2 rounded-xl">
                      <Quote size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-primary dark:text-secondary mb-3 flex items-center gap-2">
                     <Info size={18} />
                     {t.about.fullSentenceMeaningTitle}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                     {t.about.fullSentenceMeaning}
                  </p>
              </div>
            </div>
          </div>

          {/* Section 2: Vision & Mission Points */}
          <div className="flex-1 w-full space-y-12">
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

              <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-3">
                    <Shapes className="text-secondary" size={28} />
                    {t.about.logoTitle}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                       { text: t.about.logoPoint1, icon: <BookOpen className="text-primary dark:text-secondary" /> },
                       { text: t.about.logoPoint2, icon: <Shapes className="text-primary dark:text-secondary" /> },
                       { text: t.about.logoPoint3, icon: <Sun className="text-primary dark:text-secondary" /> },
                       { text: t.about.logoPoint4, icon: <Crown className="text-primary dark:text-secondary" /> }
                     ].map((item, idx) => (
                       <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/40 rounded-2xl border border-gray-100 dark:border-gray-700 group hover:border-secondary/30 transition-all">
                          <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                             {item.icon}
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item.text}</p>
                       </div>
                     ))}
                  </div>
              </div>
          </div>
        </div>

        {/* Mission & Quality Grid + Achievements Button */}
        <div className="flex flex-col gap-6 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group">
                   <Target className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={40} />
                   <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.about.missionTitle}</h4>
                   <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{t.about.missionDesc}</p>
                </div>
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group">
                   <Award className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={40} />
                   <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t.about.qualityTitle}</h4>
                   <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{t.about.qualityDesc}</p>
                </div>
          </div>

          {/* Achievements Button - Moved to the end of the text content section */}
          <div className="flex justify-center mt-4">
            <a 
              href={LINKS.achievements} 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-4 bg-secondary text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
              <span>{t.about.moreAchievements}</span>
              <ExternalLink size={20} className={dir === 'rtl' ? '' : 'rotate-180'} />
            </a>
          </div>
        </div>

        {/* Visual Callout Footer */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] border-4 border-white dark:border-gray-800 group">
           <img 
             src="https://i.postimg.cc/DzW1G0M4/IMG_20260211_WA0018.jpg" 
             alt="Salman Al-Farsi Mosque" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-10">
              <div className="max-w-2xl text-white">
                  <div className="bg-secondary text-white px-5 py-1.5 rounded-full text-sm font-bold w-fit mb-5 shadow-lg">
                     {t.about.mainLocation}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-5">{t.about.mainMosque}</h3>
                  <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border-l-4 border-secondary italic">
                    <p className={`font-normal leading-relaxed ${
                      isAr ? 'text-2xl md:text-3xl font-uthmanic' : 'text-xl md:text-2xl font-quran'
                    }`}>
                      "{t.about.quote}"
                    </p>
                    <p className="text-sm opacity-80 mt-3 font-sans">— {t.about.quoteSource}</p>
                  </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;