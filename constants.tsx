import React from 'react';
// Interfaces are now in types.ts, but we keep imports if needed or remove them.
// We only keep static configuration data here.

export const CONTACT_INFO = {
  phone: "0583089932",
  whatsappLink: "https://wa.me/966583089932",
  telegramLink: "https://t.me/+966583089932",
  locationName: "الرياض - حي الخليج - جامع سلمان الفارسي",
  mainMapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8",
  youtubeLink: "https://youtube.com/channel/UChbNb4z-rVjAXAl8qINIpgg?si=IrvJZbpD31aExOUX",
  instagramLink: "https://instagram.com",
  snapchatLink: "https://snapchat.com",
  tiktokLink: "https://tiktok.com"
};

export const LINKS = {
  registration: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1",
  donation: "https://store.maknon.org.sa/BQrXGa"
};

export const STATISTICS_DATA = [
  { id: 1, label: "طالباً", value: 520, key: "students" },
  { id: 2, label: "معلماً", value: 33, key: "teachers" },
  { id: 3, label: "إدارياً", value: 22, key: "admins" },
  { id: 4, label: "مسجد", value: 10, key: "mosques" },
  { id: 5, label: "حلقة قرآنية", value: 27, key: "circles" },
  { id: 6, label: "خاتماً", value: 20, key: "khatmeen" },
  { id: 7, label: "مجازاً", value: 12, key: "certified" },
  { id: 8, label: "مقارئ", value: 6, key: "maqari" },
  { id: 9, label: "طفلاً في برنامج نور البيان", value: 85, key: "noor" },
];

export const CIRCLE_TYPES = [
  {
    id: 'noor',
    ageRange: '4 - 6',
    iconName: 'Baby'
  },
  {
    id: 'elementary',
    ageRange: '7 - 12',
    iconName: 'School'
  },
  {
    id: 'intermediate',
    ageRange: '13 - 15',
    iconName: 'Backpack'
  },
  {
    id: 'highschool',
    ageRange: '16 - 18',
    iconName: 'GraduationCap'
  },
  {
    id: 'adults',
    ageRange: '18+',
    iconName: 'Briefcase'
  },
  {
    id: 'maqari',
    ageRange: null,
    iconName: 'Mic2'
  },
  {
    id: 'general',
    ageRange: 'الكل',
    iconName: 'Users'
  }
];