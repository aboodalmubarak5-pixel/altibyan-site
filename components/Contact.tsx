import React from 'react';
import { Phone, MapPin, MessageCircle, Youtube, Send, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

const Contact: React.FC = () => {
  const { t } = useThemeLanguage();

  const SnapchatIcon = ({ size = 20 }: { size?: number }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s8.451 4 9.5 4c1.049 0 9.5-4 9.5-4s-0.5-3.74-2-5c-1-0.84-1-2.5-1-4.5c0-4.418-2.91-8-6.5-8s-6.5 3.582-6.5 8c0 2 0 3.66-1 4.5z" />
    </svg>
  );

  const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );

  return (
    <footer id="contact" className="bg-primary dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary shadow-lg bg-white flex items-center justify-center p-0.5">
                  <img 
                    src="https://i.postimg.cc/PJfw2r5n/IMG_20260212_WA0017.jpg" 
                    alt="شعار مجمع التبيان" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary">{t.contact.title}</h3>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
              {t.contact.desc}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-secondary/30 pb-2 w-fit">{t.contact.contactInfo}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 dark:text-gray-500">{t.contact.phone}</span>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`} 
                    className="font-bold text-lg hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <span>{t.nav.quickContact}</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 dark:text-gray-500">{t.contact.whatsapp}</span>
                  <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-secondary transition-colors">
                    {t.nav.whatsapp}
                  </a>
                </div>
              </li>
               <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <Send size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 dark:text-gray-500">{t.contact.telegram}</span>
                  <a href={CONTACT_INFO.telegramLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-secondary transition-colors">
                    {t.nav.telegram}
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <Instagram size={20} />
                </div>
                <div>
                   <span className="block text-xs text-gray-400 dark:text-gray-500">{t.contact.instagram}</span>
                   <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-secondary transition-colors">
                    {t.contact.instagram}
                  </a>
                </div>
              </li>
               <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <SnapchatIcon size={20} />
                </div>
                <div>
                   <span className="block text-xs text-gray-400 dark:text-gray-500">{t.contact.snapchat}</span>
                   <a href={CONTACT_INFO.snapchatLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-secondary transition-colors">
                    {t.contact.snapchat}
                  </a>
                </div>
              </li>
               <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <TikTokIcon size={20} />
                </div>
                 <div>
                   <span className="block text-xs text-gray-400 dark:text-gray-500">{t.contact.tiktok}</span>
                   <a href={CONTACT_INFO.tiktokLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-secondary transition-colors">
                    {t.contact.tiktok}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <Youtube size={20} />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 dark:text-gray-500">{t.contact.youtube}</span>
                  <a href={CONTACT_INFO.youtubeLink} target="_blank" rel="noreferrer" className="font-semibold hover:text-secondary transition-colors">
                    {t.contact.youtube}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 dark:border-gray-800 h-64 relative group">
            <a href={CONTACT_INFO.mainMapLink} target="_blank" rel="noreferrer" className="block w-full h-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors z-10">
                    <div className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform group-hover:scale-110 transition-transform">
                        <MapPin size={16} className="text-red-500"/>
                        {t.contact.openMap}
                    </div>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                    alt="Map Background" 
                    className="w-full h-full object-cover grayscale opacity-70"
                />
            </a>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} {t.common.siteName}. {t.contact.rights}</p>
          
          <div className="flex items-center gap-4 flex-wrap justify-center">
             <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Whatsapp">
                <MessageCircle size={20} />
             </a>
             <a href={CONTACT_INFO.telegramLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Telegram">
                <Send size={20} />
             </a>
              <a href={CONTACT_INFO.instagramLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
             </a>
             <a href={CONTACT_INFO.snapchatLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Snapchat">
                <SnapchatIcon size={20} />
             </a>
             <a href={CONTACT_INFO.tiktokLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors" aria-label="TikTok">
                <TikTokIcon size={20} />
             </a>
             <a href={CONTACT_INFO.youtubeLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-colors" aria-label="Youtube">
                <Youtube size={20} />
             </a>
          </div>

          <div className="flex items-center gap-2">
             <span>{t.contact.designedBy}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;