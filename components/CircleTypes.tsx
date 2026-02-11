import React, { useState } from 'react';
import { Baby, School, Backpack, GraduationCap, Briefcase, Mic2, Clock, CheckCircle2, BookOpen, X, Info, Users } from 'lucide-react';
import { CIRCLE_TYPES } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const CircleTypes: React.FC = () => {
  const { t, dir } = useThemeLanguage();
  const [selectedType, setSelectedType] = useState<typeof CIRCLE_TYPES[0] | null>(null);

  const getIcon = (name: string, size = 32) => {
    switch (name) {
      case 'Baby': return <Baby size={size} />;
      case 'School': return <School size={size} />;
      case 'Backpack': return <Backpack size={size} />;
      case 'GraduationCap': return <GraduationCap size={size} />;
      case 'Briefcase': return <Briefcase size={size} />;
      case 'Mic2': return <Mic2 size={size} />;
      case 'Users': return <Users size={size} />;
      default: return <School size={size} />;
    }
  };

  return (
    <section id="circle-types" className="py-20 bg-white/90 dark:bg-gray-800/90 transition-colors duration-300 relative overflow-hidden backdrop-blur-sm">
      {/* Decorative background Islamic pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1F5F65 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-gray-100 mb-4">{t.circleTypes.title}</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {t.circleTypes.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CIRCLE_TYPES.map((type) => (
            <div 
              key={type.id} 
              className="group bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-secondary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl text-primary dark:text-secondary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {getIcon(type.iconName)}
                </div>
                {type.ageRange && (
                  <div className="flex items-center gap-1.5 text-xs font-bold bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20">
                     <Clock size={12} />
                     <span>{t.circleTypes.age}: {type.ageRange} {type.id === 'adults' ? t.circleTypes.above : (type.id === 'general' ? '' : t.circleTypes.years)}</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {t.circleTypes.types[type.id as keyof typeof t.circleTypes.types]}
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                {t.circleTypes.desc[type.id as keyof typeof t.circleTypes.desc]}
              </p>

              <button 
                onClick={() => setSelectedType(type)}
                className="mt-auto flex items-center gap-2 text-primary dark:text-secondary font-bold text-sm group-hover:gap-3 transition-all"
              >
                <Info size={16} />
                <span>{t.common.readMore}</span>
              </button>

              <div className="mt-4 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedType(null)}></div>
          
          <div className="relative bg-white dark:bg-gray-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="relative h-32 bg-primary flex items-center justify-center">
              <button 
                onClick={() => setSelectedType(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl text-primary dark:text-secondary shadow-xl">
                 {getIcon(selectedType.iconName, 40)}
              </div>
            </div>

            <div className="p-8">
              {/* Site Name inside Read More */}
              <div className="text-center mb-1">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">{t.common.siteName}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {t.circleTypes.types[selectedType.id as keyof typeof t.circleTypes.types]}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
                {t.circleTypes.desc[selectedType.id as keyof typeof t.circleTypes.desc]}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Benefits Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-primary dark:text-secondary font-bold">
                    <CheckCircle2 size={20} />
                    <h4>{t.common.benefits}</h4>
                  </div>
                  <ul className="space-y-3">
                    {(t.circleTypes.benefits[selectedType.id as keyof typeof t.circleTypes.benefits] as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Curriculum Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-primary dark:text-secondary font-bold">
                    <BookOpen size={20} />
                    <h4>{t.common.curriculum}</h4>
                  </div>
                  <ul className="space-y-3">
                    {(t.circleTypes.curriculum[selectedType.id as keyof typeof t.circleTypes.curriculum] as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => setSelectedType(null)}
                className="mt-10 w-full py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {t.common.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CircleTypes;