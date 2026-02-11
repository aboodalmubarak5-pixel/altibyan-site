import React, { useState } from 'react';
import { Calendar, Megaphone, ArrowLeft, X, CheckCircle2 } from 'lucide-react';
import { AdItem } from '../types';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Advertisements: React.FC = () => {
  const { t, dir } = useThemeLanguage();
  const ads = t.adsList;
  const [selectedAd, setSelectedAd] = useState<AdItem | null>(null);

  const renderItemWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const phoneRegex = /(05\d{8})/g; // Regex for Saudi mobile numbers (05xxxxxxxx)

    // Split text by URLs first
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      // If it's a URL
      if (part.match(urlRegex)) {
        return (
          <a 
            key={`url-${index}`} 
            href={part} 
            target="_blank" 
            rel="noreferrer" 
            className="text-primary dark:text-secondary underline hover:text-yellow-600 dark:hover:text-yellow-400 break-all transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }

      // If text, check for phone numbers
      const subParts = part.split(phoneRegex);
      if (subParts.length > 1) {
        return (
          <span key={`text-${index}`}>
            {subParts.map((subPart, subIndex) => {
              if (subPart.match(phoneRegex)) {
                // Convert 05xxxxxxxx to 9665xxxxxxxx for WhatsApp
                const waNumber = '966' + subPart.substring(1);
                return (
                  <a 
                    key={`phone-${subIndex}`}
                    href={`https://wa.me/${waNumber}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="text-green-600 dark:text-green-400 font-bold hover:underline mx-1 inline-block ltr"
                    dir="ltr"
                    onClick={(e) => e.stopPropagation()}
                    title={t.nav.whatsapp}
                  >
                    {subPart}
                  </a>
                );
              }
              return <span key={`sub-${subIndex}`}>{subPart}</span>;
            })}
          </span>
        );
      }
      
      return <span key={`text-${index}`}>{part}</span>;
    });
  };

  return (
    <section id="ads" className="py-20 bg-gray-50/90 dark:bg-gray-900/90 transition-colors duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 rounded-full bg-secondary/10 text-secondary mb-4">
             <Megaphone size={28} />
          </div>
          <h2 className="text-3xl font-bold text-primary dark:text-gray-100 mb-4">{t.ads.title}</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.ads.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ads.map((ad) => (
            <div 
              key={ad.id} 
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden group transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={ad.image} 
                  alt={ad.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-primary dark:text-secondary flex items-center gap-1.5 shadow-sm">
                   <Calendar size={14} />
                   <span>{ad.date}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {ad.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {ad.description}
                </p>
                <div className="pt-4 border-t border-gray-50 dark:border-gray-700">
                  <button 
                    onClick={() => setSelectedAd(ad)}
                    className="flex items-center gap-2 text-primary dark:text-secondary font-bold text-sm hover:gap-3 transition-all"
                  >
                     {t.common.readMore}
                     <ArrowLeft size={16} className={dir === 'rtl' ? '' : 'rotate-180'} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Details Modal */}
      {selectedAd && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedAd(null)}></div>
          
          <div className="relative bg-white dark:bg-gray-900 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-300 flex flex-col max-h-[90vh]">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedAd(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Scrollable Area */}
            <div className="overflow-y-auto flex-1">
                {/* Full Image Section */}
                <div className="w-full bg-gray-100 dark:bg-black/20">
                  <img 
                    src={selectedAd.image} 
                    alt={selectedAd.title} 
                    className="w-full h-auto object-contain mx-auto" 
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Header Info */}
                  <div className="mb-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                       <div className="flex items-center justify-between mb-3">
                           <span className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-2 py-1 rounded">{t.common.siteName}</span>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-bold text-sm">
                               <Calendar size={16} />
                               <span>{selectedAd.date}</span>
                           </div>
                       </div>
                       <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                         {selectedAd.title}
                       </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                    {selectedAd.description}
                  </p>

                  {selectedAd.details && (
                    <div className="grid grid-cols-1 gap-8 mb-8">
                      {selectedAd.details.sections.map((section, sIdx) => (
                        <div key={sIdx}>
                          <h4 className="font-bold text-primary dark:text-secondary border-b border-gray-100 dark:border-gray-700 pb-2 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            {section.title}
                          </h4>
                          <ul className="space-y-3">
                            {section.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                                <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                                <span className="flex-1 leading-relaxed">
                                   {renderItemWithLinks(item)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setSelectedAd(null)}
                      className="flex-1 py-4 bg-gray-100 dark:bg-gray-800 rounded-2xl font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {t.common.close}
                    </button>
                    {selectedAd.buttons ? (
                      selectedAd.buttons.map((btn, idx) => (
                        <a 
                          key={idx}
                          href={btn.link}
                          target="_blank" 
                          rel="noreferrer"
                          onClick={() => setSelectedAd(null)}
                          className={`flex-1 py-4 text-white text-center rounded-2xl font-bold transition-colors ${idx === 0 ? 'bg-secondary hover:bg-yellow-600' : 'bg-primary hover:bg-primary/90'}`}
                        >
                          {btn.text}
                        </a>
                      ))
                    ) : (
                      selectedAd.link && (
                        <a 
                          href={selectedAd.link}
                          target="_blank" 
                          rel="noreferrer"
                          onClick={() => setSelectedAd(null)}
                          className="flex-1 py-4 bg-primary text-white text-center rounded-2xl font-bold hover:bg-primary/90 transition-colors"
                        >
                          {t.hero.register}
                        </a>
                      )
                    )}
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Advertisements;