import React from 'react';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Mosques: React.FC = () => {
  const { t } = useThemeLanguage();
  const mosques = t.mosquesList;

  return (
    <section id="mosques" className="py-20 bg-gray-50/90 dark:bg-gray-900/90 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-gray-100 mb-4">{t.mosques.title}</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.mosques.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mosques.map((mosque) => (
            <a 
                href={mosque.mapLink}
                target="_blank"
                rel="noreferrer"
                key={mosque.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col transition-all duration-300 group"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-secondary w-full"></div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                        <MapPin size={24} />
                    </div>
                    <ArrowUpRight size={20} className="text-gray-400 dark:text-gray-500 group-hover:text-secondary transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {mosque.name}
                </h3>

                {mosque.availableCircles && mosque.availableCircles.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 font-medium">
                       {t.mosques.availableCircles}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mosque.availableCircles.map((circleId) => (
                        <span 
                          key={circleId} 
                          className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-md bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-600"
                        >
                          <CheckCircle2 size={10} className="text-secondary" />
                          {t.circleTypes.types[circleId as keyof typeof t.circleTypes.types]}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700">
                  <span className="text-sm font-medium text-secondary flex items-center gap-1">
                    {t.common.viewMap}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mosques;