import React from 'react';
import { Play, Headphones, User, Music } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const StudentRecitations: React.FC = () => {
  const { t } = useThemeLanguage();
  const recitations = t.recitationsList;

  return (
    <section id="recitations" className="py-20 bg-white/90 dark:bg-gray-800/90 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
             <Headphones size={28} />
          </div>
          <h2 className="text-3xl font-bold text-primary dark:text-gray-100 mb-4">{t.recitations.title}</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.recitations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recitations.map((item) => (
            <div 
              key={item.id} 
              className="relative group bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Thumbnail with overlay */}
              <div className="h-48 relative">
                <img src={item.thumbnail} alt={item.student} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                   <a 
                     href={item.link} 
                     target="_blank" 
                     rel="noreferrer" 
                     className="bg-white/90 p-4 rounded-full text-primary transform group-hover:scale-110 transition-transform shadow-xl"
                   >
                      <Play size={28} fill="currentColor" />
                   </a>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-secondary/10 text-secondary rounded-lg">
                    <User size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t.recitations.student}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {item.student}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 italic">
                  <Music size={14} />
                  <span>{t.recitations.surah}: {item.surah}</span>
                </div>
                
                <a 
                   href={item.link} 
                   target="_blank" 
                   rel="noreferrer"
                   className="mt-6 w-full py-3 bg-white dark:bg-gray-800 border-2 border-primary/20 dark:border-gray-700 rounded-xl text-primary dark:text-secondary font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white dark:hover:bg-secondary dark:hover:text-gray-900 transition-all"
                >
                   <Play size={16} />
                   {t.recitations.listen}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentRecitations;