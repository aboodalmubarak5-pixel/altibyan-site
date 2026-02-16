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
  donation: "https://store.maknon.org.sa/BQrXGa",
  achievements: "https://forms.gle/xt9yrtq9GZg61MWx6"
};

export const STATISTICS_DATA = [
  { id: 1, label: "طالباً", value: 520, key: "students" },
  { id: 2, label: "معلماً", value: 27, key: "teachers" },
  { id: 3, label: "معلماً مجازاً", value: 23, key: "certified" },
  { id: 4, label: "إدارياً", value: 22, key: "admins" },
  { id: 5, label: "مسجد", value: 10, key: "mosques" },
  { id: 6, label: "حلقة قرآنية", value: 40, key: "circles" },
  { id: 7, label: "خاتماً", value: 28, key: "khatmeen" },
  { id: 8, label: "مقارئ", value: 7, key: "maqari" },
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
    id: 'correction',
    ageRange: 'لكل السنوات',
    iconName: 'CheckCircle2'
  },
  {
    id: 'online',
    ageRange: 'لكل السنوات',
    iconName: 'Globe'
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