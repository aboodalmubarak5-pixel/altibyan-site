import React from 'react';
import { HeartHandshake, ExternalLink } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Supporters: React.FC = () => {
  const { t } = useThemeLanguage();

  const supporters = [
    {
      id: 1,
      name: t.supporters.partnerName,
      type: t.supporters.partnerType,
      icon: (
        <img 
          src="https://i.postimg.cc/Pr69Rprb/شعار_الجمعية.png" 
          alt="شعار الجمعية" 
          className="w-24 h-auto object-contain" 
        />
      ),
      color: "text-primary dark:text-secondary",
      link: "https://maknon.org.sa/"
    }
  ];

  return (
    <section className="py-16 bg-white/90 dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">{t.supporters.title}</h2>
          <div className="h-1 w-16 bg-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
             {t.supporters.subtitle}
          </p>
        </div>

        <div className="flex justify-center">
          {supporters.map((supporter) => (
            <a 
              key={supporter.id} 
              href={supporter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-700/50 rounded-2xl border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md text-center cursor-pointer decoration-0"
            >
              <div className={`mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${supporter.color} bg-white dark:bg-gray-800 p-5 rounded-full shadow-md group-hover:scale-110 transform transition-transform`}>
                {supporter.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                {supporter.name}
              </h3>
              <p className="text-base text-gray-500 dark:text-gray-400 mb-6 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-relaxed">
                {supporter.type}
              </p>
              
              <div className="flex items-center gap-2 text-secondary font-bold text-sm bg-secondary/5 dark:bg-secondary/10 px-4 py-2 rounded-full group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <span>{t.supporters.visitPartner}</span>
                  <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;