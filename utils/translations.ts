import { Mosque, AdItem, Recitation } from '../types';

export type Language = 'ar' | 'en';

interface Translation {
  nav: any;
  common: any;
  circleTypes: any;
  hero: any;
  ads: any;
  recitations: any;
  stats: any;
  about: any;
  mosques: any;
  donation: any;
  supporters: any;
  contact: any;
  assistant: any;
  mosquesList: Mosque[];
  adsList: AdItem[];
  recitationsList: Recitation[];
}

export const translations: Record<Language, Translation> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن المجمع',
      circleTypes: 'أنواع الحلقات',
      ads: 'الإعلانات',
      recitations: 'تلاوات الطلاب',
      donate: 'ساهم معنا',
      stats: 'الإحصائيات',
      mosques: 'مساجدنا',
      contact: 'تواصل معنا',
      donateButton: 'تبرع',
      quickContact: 'اتصال',
      whatsapp: 'واتساب',
      telegram: 'تيليجرام',
      youtube: 'يوتيوب',
      location: 'الموقع'
    },
    common: {
      siteName: 'مجمع التبيان المركزي',
      loading: 'جاري التحميل...',
      readMore: 'اقرأ المزيد',
      close: 'إغلاق',
      viewMap: 'عرض الموقع على الخريطة',
      benefits: 'الفوائد والمميزات',
      curriculum: 'ماذا يتعلمون (المنهج)',
      details: 'التفاصيل الكاملة'
    },
    circleTypes: {
      title: 'أنواع الحلقات القرآنية',
      subtitle: 'نقدم برامج تعليمية متخصصة تناسب كافة الفئات العمرية والمستويات العلمية',
      age: 'العمر',
      years: 'سنوات',
      above: 'فما فوق',
      types: {
        noor: 'نور البيان',
        elementary: 'الابتدائي',
        intermediate: 'المتوسط',
        highschool: 'الثانوي',
        adults: 'حلقة كبار',
        maqari: 'مقرأة',
        general: 'حلقة عامة'
      },
      desc: {
        noor: 'تأسيس القراءة والكتابة والقرآن للأطفال الصغار.',
        elementary: 'حلقات مخصصة لطلاب المرحلة الابتدائية.',
        intermediate: 'برامج تربوية وقرآنية لطلاب المتوسطة.',
        highschool: 'تعزيز الحفظ والمراجعة لطلاب الثانوية.',
        adults: 'حلقات مرنة تتناسب مع أوقات الموظفين والكبار.',
        maqari: 'ضبط التلاوة والحصول على الإجازات المسندة.',
        general: 'حلقة شاملة تجمع جميع المراحل الدراسية في بيئة واحدة.'
      },
      benefits: {
        noor: ['إتقان مخارج الحروف العربية.', 'القراءة الصحيحة من المصحف.', 'حفظ قصار السور.', 'تنمية المهارات اللغوية.'],
        elementary: ['حفظ أجزاء من القرآن الكريم.', 'تعلم أحكام التجويد الأساسية.', 'ترسيخ الأخلاق الإسلامية.', 'تحسين جودة التلاوة.'],
        intermediate: ['حفظ مكثف مع مراجعة مستمرة.', 'فهم معاني الآيات.', 'تعلم أحكام التجويد المتقدمة.', 'بيئة تربوية آمنة.'],
        highschool: ['العمل على ختم القرآن الكريم.', 'تثبيت الحفظ القديم.', 'تعلم التفسير الميسر.', 'القدوة والقيادة.'],
        adults: ['تصحيح تلاوة الفاتحة وقصار السور.', 'حفظ ميسر حسب القدرة.', 'أوقات مرنة (بعد العصر/العشاء).', 'فهم مقاصد السور.'],
        maqari: ['ضبط التلاوة بروايات مختلفة.', 'نيل الإجازات المسندة.', 'التحضير لمسابقات كبرى.', 'تأهيل المعلمين.'],
        general: ['دمج الفئات العمرية (بيئة أخوية).', 'متابعة فردية لكل طالب.', 'مناسبة للأخوة والأقارب.', 'مرونة في التعامل مع المستويات.']
      },
      curriculum: {
        noor: ['منهج نور البيان المعتمد.', 'تلقين قصار السور.', 'مبادئ العقيدة والأخلاق.'],
        elementary: ['كتاب تجويد ميسر.'],
        intermediate: ['تفسير كلمات القرآن.'],
        highschool: ['تدبر القرآن الكريم.'],
        adults: ['منهج تصحيح التلاوة.', 'حفظ مختارات من السور.'],
        maqari: ['ختمة كاملة غيباً.', 'دراسة رواية حفص عن عاصم.', 'القراءات السبع (للمتميزين).', 'حفظ متن الجزرية وتحفة الاطفال والشاطبية.'],
        general: ['خطط حفظ فردية.', 'مراجعة تراكمية.', 'منهج تربوي عام.']
      }
    },
    hero: {
      title: 'مجمع التبيان المركزي',
      subtitle: 'نورٌ يملأ الآفاق، وتربيةٌ تبني الأجيال. بيئة قرآنية متميزة تنتشر حلقاتها في عدة أحياء بالرياض.',
      register: 'سجل معنا الآن',
      registerMen: 'تسجيل الرجال',
      registerWomen: 'تسجيل النساء',
      donate: 'ساهم معنا'
    },
    ads: {
      title: 'آخر الإعلانات والأخبار',
      subtitle: 'ابق على اطلاع بآخر مستجدات المجمع وفعالياته القادمة',
      date: 'تاريخ النشر',
    },
    recitations: {
      title: 'تلاوات طلاب المجمع',
      subtitle: 'أصوات ندية وتلاوات خاشعة من حناجر طلابنا المتميزين',
      listen: 'استمع الآن',
      student: 'القارئ',
      surah: 'سورة'
    },
    stats: {
      title: 'إحصائيات المجمع',
      subtitle: 'أرقام تعكس مسيرة العطاء والإنجاز في خدمة كتاب الله الكريم',
      students: 'طالباً',
      teachers: 'معلماً',
      admins: 'إدارياً',
      khatmeen: 'خاتماً (العام الماضي)',
      circles: 'حلقة قرآنية',
      mosques: 'مسجد',
      noor: 'طفلاً في نور البيان',
      certified: 'مجازاً',
      maqari: 'مقارئ'
    },
    about: {
      title: 'عن المجمع',
      verse: 'وَنَزَلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ وَهُدًى وَرَحْمَةٌ وَبُشْرَى لِلْمُسْلِمِينَ',
      verseSource: '[النحل: 89]',
      mainDescription: 'صرحٌ قرآني رائد يقع مقره الرئيسي في الرياض بحي الخليج (جامع سلمان الفارسي)، وتنتشر مساجده وحلقاته في أحياء متعددة لخدمة كتاب الله. نحمل على عاتقنا أمانة تعليم القرآن الكريم، ونسعى لتربية جيل قرآني متميز يحفظ القرآن ويعمل به.',
      
      meaningTitle: 'ماذا يعني اسمنا؟',
      wordComplex: 'مجمع',
      wordTibyan: 'التبيان',
      wordCentral: 'المركزي',
      meaningComplex: 'مجمع: اجتماع عدد من الحلقات من عدة مساجد للتعاون على تعليم القرآن.',
      meaningTibyan: 'التبيان: من أسماء القرآن الكريم، ومعناه الإيضاح والبيان.',
      meaningCentral: 'المركزي: الإشراف الموحد لضمان أعلى معايير الجودة التعليمية.',
      
      logoTitle: 'رموز ودلالات الشعار',
      logoPoint1: 'اسم المجمع مستمد من القرآن الكريم كونه الرابط بين حلقاتنا.',
      logoPoint2: 'الحلقات المترابطة ترمز لتكامل وتعاون الحلقات في المجمع.',
      logoPoint3: 'حرف النون يتوسطه مصحف يشع نوراً ليكون نبراساً في الحياة.',
      logoPoint4: 'الشعار الكلي يشبه التاج، تذكيراً بتاج الوقار لأهل القرآن.',

      programTitle: 'برنامج نور البيان للأطفال',
      programDesc: 'برنامج تعليمي يدمج بين تعليم القرآن والقراءة والكتابة بطريقة حديثة (صوت، صورة، حركة) لصناعة جيل قرآني من سن 4-6 سنوات، وفق منهج معتمد من وزارة التعليم.',
      programStats: 'يضم حالياً ٨٥ طفلاً',

      missionTitle: 'رسالتنا',
      missionDesc: 'تخريج جيل حافظ لكتاب الله، متخلق بأخلاقه.',
      qualityTitle: 'الجودة والإتقان',
      qualityDesc: 'نتميز ببيئة تعليمية جاذبة وكوادر تربوية مؤهلة وذات كفاءة عالية.',
      methodTitle: 'منهجنا',
      methodDesc: 'برامج تعليمية متنوعة تناسب كافة الفئات العمرية، مع متابعة دقيقة لمستوى الطلاب.',
      quote: 'خيركم من تعلم القرآن وعلمه',
      quoteSource: 'أخرجه البخاري',
      mainLocation: 'الموقع الرئيسي',
      mainMosque: 'جامع سلمان الفارسي'
    },
    mosques: {
      title: 'مساجدنا وحلقاتنا',
      subtitle: 'ننتشر في عدة أحياء بالرياض لنكون الأقرب إليكم. ابحث عن المسجد الأقرب لمنزلك من القائمة أدناه.',
      availableCircles: 'الحلقات المتوفرة'
    },
    donation: {
      tag: 'تجارة لن تبور',
      title: 'فرص المساهمة',
      subtitle: 'ساهم معنا في خدمة كتاب الله، وكن شريكاً في الأجر من خلال باقات التبرع المتنوعة',
      teacher: 'كفالة معلم',
      teacherDesc: 'المعلم هو الركيزة الأساسية في تعليم كتاب الله. ساهم في كفالة رواتب المعلمين لنضمن استمرار الحلقات.',
      student: 'كفالة طالب',
      studentDesc: 'ساهم في تكاليف تعليم طالب في حلقات التحفيظ، وكن شريكاً له في كل حرف يتلوه ويحفظه.',
      circle: 'كفالة حلقة',
      circleDesc: 'اكفل حلقة قرآنية كاملة (معلم وطلاب) وشارك في تخريج كوكبة من الحفاظ سنوياً.',
      general: 'دعم عام للمجمع',
      generalDesc: 'مساهمة مفتوحة لدعم أنشطة المجمع ومصاريفه التشغيلية وتطوير البيئة التعليمية.',
      donateBtn: 'تبرع الآن',
      storeTitle: 'هل ترغب بالمساهمة بمبلغ آخر؟',
      storeSubtitle: 'يمكنك زيارة المتجر الإلكتروني واختيار أوجه الخير التي تناسبك',
      storeBtn: 'زيارة المتجر الإلكتروني'
    },
    supporters: {
      title: 'شريك النجاح',
      subtitle: 'نعتز بشراكتنا مع الجهة المشرفة والراعية لمسيرة تحفيظ القرآن الكريم في الرياض',
      partnerName: 'جمعية مكنون',
      partnerType: 'الجمعية الخيرية لتحفيظ القرآن الكريم بالرياض',
      visitPartner: 'زيارة الموقع الرسمي'
    },
    contact: {
      title: 'مجمع التبيان المركزي',
      desc: 'مجمع قرآني رائد يسعى لتربية جيل قرآني متميز من خلال بيئة جاذبة وكوادر مؤهلة.',
      contactInfo: 'معلومات التواصل',
      phone: 'اتصال هاتفي',
      whatsapp: 'واتساب',
      telegram: 'تيليجرام',
      youtube: 'يوتيوب',
      address: 'العنوان الرئيسي',
      rights: 'جميع الحقوق محفوظة.',
      designedBy: 'صمم بإتقان',
      openMap: 'افتح الخريطة',
      instagram: 'انستغرام',
      snapchat: 'سناب شات',
      tiktok: 'تيك توك',
    },
    assistant: {
      placeholder: 'اكتب استفسارك...',
      typing: 'جاري الكتابة...',
      suggestions: {
        register: "كيف يمكنني التسجيل؟",
        donate: "ما هي طرق التبرع؟",
        location: "أين يقع المجمع؟",
        mosques: "ما هي المساجد التابعة للمجمع؟",
        students: "كم عدد الطلاب في المجمع؟"
      }
    },
    // Data Lists (Arabic)
    mosquesList: [
      { id: 1, name: "جامع سلمان الفارسي (الرئيسي)", mapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8", availableCircles: ['noor', 'elementary', 'intermediate', 'highschool', 'maqari'] },
      { id: 2, name: "جامع الرومي", mapLink: "https://maps.app.goo.gl/fW2sQpCdkqjkNGFQ9", availableCircles: ['general'] },
      { id: 3, name: "جامع الروسان", mapLink: "https://maps.app.goo.gl/ynxKfqs6EhJrsPsF7", availableCircles: ['elementary', 'intermediate', 'highschool'] },
      { id: 4, name: "جامع الميمان", mapLink: "https://maps.app.goo.gl/zyZ58aeV828Qdfbw8", availableCircles: ['elementary', 'intermediate', 'highschool'] },
      { id: 5, name: "جامع الشيخ عبدالله بن راشد بن كليب", mapLink: "https://maps.app.goo.gl/FEDiKmtZYD7G8cUH9", availableCircles: ['elementary', 'intermediate'] },
      { id: 6, name: "جامع عبدالمحسن المحيسن", mapLink: "https://maps.app.goo.gl/4nfgYPzBQg8YPh8VA", availableCircles: ['maqari'] },
      { id: 7, name: "جامع عقبة بن نافع", mapLink: "https://maps.app.goo.gl/r7Wkgrqh6MGQyEiR7", availableCircles: ['maqari'] },
      { id: 8, name: "جامع الشيخ عبد الرحمن بن عبدالله آل الشيخ", mapLink: "https://maps.app.goo.gl/xBW1cgguaBKgFaXP9", availableCircles: ['maqari'] },
      { id: 9, name: "جامع أبو عبيدة بن الجراح", mapLink: "https://maps.app.goo.gl/PmVzeR45QMZBehyT6", availableCircles: ['adults'] },
      { id: 10, name: "جامع سعيد بن زيد", mapLink: "https://maps.app.goo.gl/tw2E9swcKpyFgjPe8", availableCircles: ['adults'] },
    ],
    adsList: [
      {
        id: 0,
        title: "دورة التبيان الرمضانية السابعة (1447هـ)",
        description: "انطلاق التسجيل في دورة التبيان الرمضانية السابعة (تصريح: 7641). فروع متنوعة وجوائز متميزة.",
        date: "٢٢ شعبان 1447",
        image: "https://i.postimg.cc/7ZvFrCTR/IMG-20260210-WA0010.jpg",
        details: {
          sections: [
            { title: "فروع الدورة", items: ["٣ أجزاء", "٥ أجزاء", "١٠ أجزاء", "١٥ جزء", "٢٠ جزء", "٣٠ جزء"] },
            { title: "البرامج المصاحبة", items: ["دورة تجويد", "فرسان الدورة", "تصحيح التلاوة", "غريب القرآن"] },
            { title: "مميزات الدورة", items: ["معلمون مجازون", "جوائز للفائزين", "هدايا وحوافز يومية"] },
            { title: "فترات الدورة", items: ["الفجر", "العصر", "بعد التراويح"] },
            { title: "مدة الدورة", items: ["من ١ رمضان إلى ١٩ رمضان", "من الأحد إلى الخميس"] }
          ]
        }
      },
      {
        id: 1,
        title: "انطلاق التسجيل للفصل الدراسي الجديد",
        description: "نعلن عن فتح باب القبول والتسجيل في جميع حلقات المجمع لمختلف الأعمار.",
        date: "٢٩ رجب 1447",
        image: "https://i.postimg.cc/zBNzwPfZ/IMG_20260211_WA0019.jpg",
        link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1"
      },
      {
        id: 2,
        title: "مشروع تصحيح تلاوة سورة الفاتحة",
        description: "سبع آيات فقط! لكنها أعظم سور القرآن. شاركنا في تصحيح تلاوة الفاتحة وقصار السور.",
        date: "مفتوح الآن",
        image: "https://i.postimg.cc/Xv4Fqx0N/IMG_20260211_WA0020.jpg",
        link: "https://forms.gle/kFCxzGE2TXL3Xvn39", // Keep as fallback
        buttons: [
          { text: "تسجيل الرجال", link: "https://forms.gle/kFCxzGE2TXL3Xvn39" },
          { text: "تسجيل النساء", link: "https://forms.gle/HPBPbpDduTPvzuZo8" }
        ],
        details: {
          sections: [
            { 
              title: "عن البرنامج", 
              items: [
                "7️⃣ *سَبـعُ آيــاتٍ فَقَـط!* لڪنّھا أعظمُ سُوَر القُـرآن!",
                "واسمھا *سُورةُ الصـلاة* 🕌",
                "قِراءتُنا تَستَقيم، مع أجرٍ عَظيم فِـي تصحيــحِ قِــراءةِ الفــــاتِحة وقِصــــارِ السُـــوَر"
              ] 
            },
            {
              title: "للتواصل (واتساب)",
              items: [
                "الرجال: 0583089932",
                "النساء: 0559907862"
              ]
            }
          ]
        }
      }
    ],
    recitationsList: [
      { id: 1, student: "عبدالرحمن الخولاني", surah: "سورة النجم", link: "https://youtu.be/YtM-YwmmpY4", thumbnail: "https://img.youtube.com/vi/YtM-YwmmpY4/hqdefault.jpg" },
      { id: 2, student: "عبدالملك عبدالقادر الأنصاري", surah: "سورة النبأ", link: "https://youtu.be/2AOmd9FyglE", thumbnail: "https://img.youtube.com/vi/2AOmd9FyglE/hqdefault.jpg" },
      { id: 3, student: "صلاح بن هشام", surah: "سورة الطارق", link: "https://youtu.be/NupjCHfg07M", thumbnail: "https://img.youtube.com/vi/NupjCHfg07M/hqdefault.jpg" },
      { id: 4, student: "أحمد بن هشام", surah: "سورة فاطر", link: "https://youtu.be/9tccFoNeR6M", thumbnail: "https://img.youtube.com/vi/9tccFoNeR6M/hqdefault.jpg" },
      { id: 5, student: "محمد بن طه أبو كريشة", surah: "سورة النجم (رواية خلف عن حمزة)", link: "https://youtu.be/U1QfNi16Ilc", thumbnail: "https://img.youtube.com/vi/U1QfNi16Ilc/hqdefault.jpg" }
    ]
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      circleTypes: 'Circle Types',
      ads: 'Ads',
      recitations: 'Recitations',
      donate: 'Donate',
      stats: 'Statistics',
      mosques: 'Mosques',
      contact: 'Contact',
      donateButton: 'Donate',
      quickContact: 'Call',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      youtube: 'YouTube',
      location: 'Location'
    },
    common: {
      siteName: 'Al-Tibyan Complex',
      loading: 'Loading...',
      readMore: 'Read More',
      close: 'Close',
      viewMap: 'View on Map',
      benefits: 'Benefits & Features',
      curriculum: 'Curriculum',
      details: 'Full Details'
    },
    circleTypes: {
      title: 'Quranic Circle Types',
      subtitle: 'We provide specialized educational programs for all age groups and scientific levels',
      age: 'Age',
      years: 'Years',
      above: 'and above',
      types: {
        noor: 'Noor Al-Bayan',
        elementary: 'Elementary Stage',
        intermediate: 'Intermediate Stage',
        highschool: 'High School Stage',
        adults: 'Adults & Employees',
        maqari: 'Maqari (for Khatmeen)',
        general: 'General Circle'
      },
      desc: {
        noor: 'Foundational reading, writing, and Quran for young children.',
        elementary: 'Dedicated circles for elementary school students.',
        intermediate: 'Educational and Quranic programs for intermediate students.',
        highschool: 'Strengthening memorization and review for high schoolers.',
        adults: 'Flexible circles suitable for employees and adults.',
        maqari: 'Perfecting recitation and obtaining supported Ijazahs.',
        general: 'A comprehensive circle for all age groups and levels.'
      },
      benefits: {
        noor: ['Mastering Arabic letter pronunciation.', 'Correct reading from the Quran.', 'Memorizing short Surahs.', 'Developing linguistic skills.'],
        elementary: ['Memorizing parts of the Holy Quran.', 'Learning basic Tajweed rules.', 'Consolidating Islamic morals.', 'Improving recitation quality.'],
        intermediate: ['Intensive memorization with continuous review.', 'Understanding the meanings of verses.', 'Learning advanced Tajweed rules.', 'Safe educational environment.'],
        highschool: ['Working on completing the Holy Quran.', 'Fixing old memorization.', 'Learning simplified Tafsir.', 'Role models and leadership.'],
        adults: ['Correcting recitation of Fatiha and short Surahs.', 'Easy memorization as per ability.', 'Flexible times (After Asr/Isha).', 'Understanding Surah purposes.'],
        maqari: ['Perfecting recitation in different Narrations.', 'Obtaining supported Ijazahs.', 'Preparing for major competitions.', 'Teacher training.'],
        general: ['Integrating age groups (brotherly environment).', 'Individual follow-up.', 'Suitable for siblings.', 'Flexible with levels.']
      },
      curriculum: {
        noor: ['Approved Noor Al-Bayan curriculum.', 'Dictation of short Surahs.', 'Principles of Creed and Morals.'],
        elementary: ['Simplified Tajweed book.'],
        intermediate: ['Tafsir of Quran words.'],
        highschool: ['Quranic contemplation.'],
        adults: ['Recitation correction curriculum.', 'Memorizing selected Surahs.'],
        maqari: ['Full memorization.', 'Study of Hafs from Asim.', 'The Seven Readings (for elite).', 'Memorizing Al-Jazariyyah, Tuhfat al-Atfal, and Al-Shatibiyyah.'],
        general: ['Individual memorization plans.', 'Cumulative review.', 'General educational curriculum.']
      }
    },
    hero: {
      title: 'Al-Tibyan Central Complex',
      subtitle: 'A light filling the horizons, and upbringing that builds generations. A distinguished Quranic environment spreading across Riyadh.',
      register: 'Register Now',
      registerMen: 'Men Registration',
      registerWomen: 'Women Registration',
      donate: 'Donate With Us'
    },
    ads: {
      title: 'Latest Advertisements & News',
      subtitle: 'Stay updated with the latest events and news of the complex',
      date: 'Published on',
    },
    recitations: {
      title: 'Student Recitations',
      subtitle: 'Beautiful voices and soulful recitations from our distinguished students',
      listen: 'Listen Now',
      student: 'Reader',
      surah: 'Surah'
    },
    stats: {
      title: 'Our Statistics',
      subtitle: 'Numbers reflecting our journey of giving and achievement in serving the Holy Quran',
      students: 'Students',
      teachers: 'Teachers',
      admins: 'Administrators',
      khatmeen: 'Huffaz (Last Year)',
      circles: 'Circles',
      mosques: 'Mosques',
      noor: 'Noor Al-Bayan Children',
      certified: 'Certified (Mujaz)',
      maqari: 'Maqari'
    },
    about: {
      title: 'About Us',
      verse: 'And We have sent down to you the Book as clarification for all things and as guidance and mercy and good tidings for the Muslims.',
      verseSource: '[An-Nahl: 89]',
      mainDescription: 'A leading Quranic institution headquartered in Riyadh, Al-Khaleej District (Salman Al-Farsi Mosque). Our circles spread across various neighborhoods to serve the Book of Allah.',
      
      meaningTitle: 'What does our name mean?',
      wordComplex: 'Complex',
      wordTibyan: 'Al-Tibyan',
      wordCentral: 'Central',
      meaningComplex: 'Complex: A gathering of Quranic circles from several mosques working together.',
      meaningTibyan: 'Al-Tibyan: One of the names of the Quran, meaning clarification and exposition.',
      meaningCentral: 'Central: Unified supervision to ensure the highest educational quality standards.',
      
      logoTitle: 'Logo Symbolism',
      logoPoint1: 'The name is derived from the Quran, our core connection.',
      logoPoint2: 'Interconnected rings symbolize integration and cooperation.',
      logoPoint3: 'The letter "Noon" with a Quran inside represents the light of life.',
      logoPoint4: 'The overall crown shape represents "Taj Al-Waqar" for Quran people.',

      programTitle: 'Noor Al-Bayan Program for Kids',
      programDesc: 'An educational program integrating Quran, reading, and writing using modern methods (audio, visual, movement) for ages 4-6, following Ministry of Education curriculum.',
      programStats: 'Currently serves 85 children',

      missionTitle: 'Our Mission',
      missionDesc: 'Graduating a generation that memorizes the Book of Allah and embodies its morals.',
      qualityTitle: 'Quality & Excellence',
      qualityDesc: 'We are distinguished by an attractive educational environment and highly qualified educational staff.',
      methodTitle: 'Our Methodology',
      methodDesc: 'Diverse educational programs suitable for all age groups, with careful follow-up of student levels.',
      quote: 'The best of you are those who learn the Quran and teach it',
      quoteSource: 'Narrated by Al-Bukhari',
      mainLocation: 'Main Location',
      mainMosque: 'Salman Al-Farsi Mosque'
    },
    mosques: {
      title: 'Our Mosques & Circles',
      subtitle: 'We are spread across several neighborhoods in Riyadh to be closer to you.',
      availableCircles: 'Available Circles'
    },
    donation: {
      tag: 'A Trade That Never Fails',
      title: 'Donation Opportunities',
      subtitle: 'Contribute with us in serving the Book of Allah, and be a partner in the reward through various donation packages',
      teacher: 'Sponsor a Teacher',
      teacherDesc: 'The teacher is the main pillar in teaching the Book of Allah. Contribute to sponsoring teachers\' salaries to ensure the continuity of the circles.',
      student: 'Sponsor a Student',
      studentDesc: 'Contribute to the costs of educating a student in memorization circles, and be a partner in every letter they recite and memorize.',
      circle: 'Sponsor a Circle',
      circleDesc: 'Sponsor a full Quranic circle (teacher and students) and participate in graduating a constellation of memorizers annually.',
      general: 'General Support',
      generalDesc: 'Open contribution to support the complex\'s activities, operational expenses, and development of the educational environment.',
      donateBtn: 'Donate Now',
      storeTitle: 'Do you want to contribute another amount?',
      storeSubtitle: 'You can visit the online store and choose the charitable avenues that suit you',
      storeBtn: 'Visit Online Store'
    },
    supporters: {
      title: 'Success Partner',
      subtitle: 'We are proud of our partnership with the supervising and sponsoring entity for the Quran memorization journey in Riyadh',
      partnerName: 'Maknon Association',
      partnerType: 'Charitable Association for Quran Memorization in Riyadh',
      visitPartner: 'Visit Official Website'
    },
    contact: {
      title: 'Al-Tibyan Complex',
      desc: 'A leading Quranic complex seeking to raise a distinguished Quranic generation through an attractive environment and qualified staff.',
      contactInfo: 'Contact Information',
      phone: 'Phone Call',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      youtube: 'YouTube',
      address: 'Main Address',
      rights: 'All rights reserved.',
      designedBy: 'Designed with precision',
      openMap: 'Open Map',
      instagram: 'Instagram',
      snapchat: 'Snapchat',
      tiktok: 'TikTok',
    },
    assistant: {
      placeholder: 'Type your question...',
      typing: 'Typing...',
      suggestions: {
        register: "How do I register?",
        donate: "How can I donate?",
        location: "Where is the complex?",
        mosques: "What are the affiliated mosques?",
        students: "How many students?"
      }
    },
    // Data Lists (English)
    mosquesList: [
      { id: 1, name: "Salman Al-Farsi Mosque (Main)", mapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8", availableCircles: ['noor', 'elementary', 'intermediate', 'highschool', 'maqari'] },
      { id: 2, name: "Al-Rumi Mosque", mapLink: "https://maps.app.goo.gl/fW2sQpCdkqjkNGFQ9", availableCircles: ['general'] },
      { id: 3, name: "Al-Rusan Mosque", mapLink: "https://maps.app.goo.gl/ynxKfqs6EhJrsPsF7", availableCircles: ['elementary', 'intermediate', 'highschool'] },
      { id: 4, name: "Al-Maiman Mosque", mapLink: "https://maps.app.goo.gl/zyZ58aeV828Qdfbw8", availableCircles: ['elementary', 'intermediate', 'highschool'] },
      { id: 5, name: "Sheikh Abdullah bin Rashid bin Kulaib Mosque", mapLink: "https://maps.app.goo.gl/FEDiKmtZYD7G8cUH9", availableCircles: ['elementary', 'intermediate'] },
      { id: 6, name: "Abdulmohsen Al-Muhaisen Mosque", mapLink: "https://maps.app.goo.gl/4nfgYPzBQg8YPh8VA", availableCircles: ['maqari'] },
      { id: 7, name: "Uqba bin Nafi Mosque", mapLink: "https://maps.app.goo.gl/r7Wkgrqh6MGQyEiR7", availableCircles: ['maqari'] },
      { id: 8, name: "Sheikh Abdulrahman bin Abdullah Al-Sheikh Mosque", mapLink: "https://maps.app.goo.gl/xBW1cgguaBKgFaXP9", availableCircles: ['maqari'] },
      { id: 9, name: "Abu Ubaidah bin Al-Jarrah Mosque", mapLink: "https://maps.app.goo.gl/PmVzeR45QMZBehyT6", availableCircles: ['adults'] },
      { id: 10, name: "Saeed bin Zaid Mosque", mapLink: "https://maps.app.goo.gl/tw2E9swcKpyFgjPe8", availableCircles: ['adults'] },
    ],
    adsList: [
      {
        id: 0,
        title: "7th Ramadan Tibyan Course (1447 AH)",
        description: "Registration is open for the 7th Ramadan Tibyan Course (Permit: 7641). Various branches and distinguished prizes.",
        date: "22 Sha'ban 1447",
        image: "https://i.postimg.cc/7ZvFrCTR/IMG-20260210-WA0010.jpg",
        details: {
          sections: [
            { title: "Course Branches", items: ["3 Parts", "5 Parts", "10 Parts", "15 Parts", "20 Parts", "30 Parts"] },
            { title: "Accompanying Programs", items: ["Tajweed Course", "Course Knights", "Recitation Correction", "Quran Vocabulary"] },
            { title: "Features", items: ["Certified Teachers", "Prizes for Winners", "Daily Gifts and Incentives"] },
            { title: "Periods", items: ["Fajr", "Asr", "After Taraweeh"] },
            { title: "Duration", items: ["From 1 Ramadan to 19 Ramadan", "Sunday to Thursday"] }
          ]
        }
      },
      {
        id: 1,
        title: "Registration Open for New Semester",
        description: "We announce the opening of admission and registration for all complex circles for various ages.",
        date: "29 Rajab 1447",
        image: "https://i.postimg.cc/zBNzwPfZ/IMG_20260211_WA0019.jpg",
        link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1"
      },
      {
        id: 2,
        title: "Surat Al-Fatiha Correction Project",
        description: "Only 7 verses! But it is the greatest Surah in the Quran. Join us in correcting the recitation of Al-Fatiha and short Surahs.",
        date: "Open Now",
        image: "https://i.postimg.cc/Xv4Fqx0N/IMG_20260211_WA0020.jpg",
        link: "https://forms.gle/kFCxzGE2TXL3Xvn39", // Keep as fallback
        buttons: [
          { text: "Men Registration", link: "https://forms.gle/kFCxzGE2TXL3Xvn39" },
          { text: "Women Registration", link: "https://forms.gle/HPBPbpDduTPvzuZo8" }
        ],
        details: {
          sections: [
            { 
              title: "About the Program", 
              items: [
                "Only 7 verses! But it is the greatest Surah in the Quran.",
                "It is called 'The Surah of Prayer' 🕌",
                "Our prayer is set right, with great reward in correcting the recitation of Al-Fatiha and short Surahs."
              ] 
            },
            {
              title: "Contact (WhatsApp)",
              items: [
                "Men: 0583089932",
                "Women: 0559907862"
              ]
            }
          ]
        }
      }
    ],
    recitationsList: [
      { id: 1, student: "Abdulrahman Al-Kholani", surah: "Surah An-Najm", link: "https://youtu.be/YtM-YwmmpY4", thumbnail: "https://img.youtube.com/vi/YtM-YwmmpY4/hqdefault.jpg" },
      { id: 2, student: "Abdulmalik Abdulqadir Al-Ansari", surah: "Surah An-Naba", link: "https://youtu.be/2AOmd9FyglE", thumbnail: "https://img.youtube.com/vi/2AOmd9FyglE/hqdefault.jpg" },
      { id: 3, student: "Salah bin Hisham", surah: "Surah At-Tariq", link: "https://youtu.be/NupjCHfg07M", thumbnail: "https://img.youtube.com/vi/NupjCHfg07M/hqdefault.jpg" },
      { id: 4, student: "Ahmed bin Hisham", surah: "Surah Fatir", link: "https://youtu.be/9tccFoNeR6M", thumbnail: "https://img.youtube.com/vi/9tccFoNeR6M/hqdefault.jpg" },
      { id: 5, student: "Mohammed bin Taha Abu Kurayshah", surah: "Surah An-Najm (Khalaf from Hamzah)", link: "https://youtu.be/U1QfNi16Ilc", thumbnail: "https://img.youtube.com/vi/U1QfNi16Ilc/hqdefault.jpg" }
    ]
  }
};