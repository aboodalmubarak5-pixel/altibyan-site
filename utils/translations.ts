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
      allAges: 'لكل السنوات',
      types: {
        noor: 'نور البيان',
        elementary: 'الابتدائي',
        intermediate: 'المتوسط',
        highschool: 'الثانوي',
        adults: 'حلقة كبار',
        correction: 'تصحيح التلاوة',
        online: 'عن بعد',
        maqari: 'مقرأة',
        general: 'حلقة عامة'
      },
      desc: {
        noor: 'تأسيس القراءة والكتابة والقرآن للأطفال الصغار.',
        elementary: 'حلقات مخصصة لطلاب المرحلة الابتدائية.',
        intermediate: 'برامج تربوية وقرآنية لطلاب المتوسطة.',
        highschool: 'تعزيز الحفظ والمراجعة لطلاب الثانوية.',
        adults: 'حلقات مرنة تتناسب مع أوقات الموظفين والكبار.',
        correction: 'برنامج مخصص لضبط قراءة سورة الفاتحة وقصار السور (متاح بعد العصر والعشاء).',
        online: 'حلقات مرنة يتم تقديمها عبر المنصات الرقمية (متاح بعد صلاة العشاء).',
        maqari: 'ضبط التلاوة والحصول على الإجازات المسندة.',
        general: 'حلقة شاملة تجمع جميع المراحل الدراسية في بيئة واحدة.'
      },
      benefits: {
        noor: ['إتقان مخارج الحروف العربية.', 'القراءة الصحيحة من المصحف.', 'حفظ قصار السور.', 'تنمية المهارات اللغوية.'],
        elementary: ['حفظ أجزاء من القرآن الكريم.', 'تعلم أحكام التجويد الأساسية.', 'ترسيخ الأخلاق الإسلامية.', 'تحسين جودة التلاوة.'],
        intermediate: ['حفظ مكثف مع مراجعة مستمرة.', 'فهم معاني الآيات.', 'تعلم أحكام التجويد المتقدمة.', 'بيئة تربوية آمنة.'],
        highschool: ['العمل على ختم القرآن الكريم.', 'تثبيت الحفظ القديم.', 'تعلم التفسير الميسر.', 'القدوة والقيادة.'],
        adults: ['تصحيح تلاوة الفاتحة وقصار السور.', 'حفظ ميسر حسب القدرة.', 'أوقات مرنة (بعد العصر/العشاء).', 'فهم مقاصد السور.'],
        correction: ['ضمان صحة الصلاة بتصحيح الفاتحة.', 'إتقان مخارج الحروف الأساسية.', 'مناسب لجميع المستويات والأعمار.', 'جلسات قصيرة ومركزة.'],
        online: ['مرونة كاملة في الوقت والمكان.', 'استخدام أحدث تقنيات التعليم التفاعلي.', 'متابعة إلكترونية دقيقة للمستوى.', 'مناسبة للمغتربين والبعيدين عن مقراتنا.'],
        maqari: ['ضبط التلاوة بروايات مختلفة.', 'نيل الإجازات المسندة.', 'التحضير لمسابقات كبرى.', 'تأهيل المعلمين.'],
        general: ['دمج الفئات العمرية (بيئة أخوية).', 'متابعة فردية لكل طالب.', 'مناسبة للأخوة والأقارب.', 'مرونة في التعامل مع المستويات.']
      },
      curriculum: {
        noor: ['منهج نور البيان المعتمد.', 'تلقين قصار السور.', 'مبادئ العقيدة والأخلاق.'],
        elementary: ['كتاب تجويد ميسر.'],
        intermediate: ['تفسير كلمات القرآن.'],
        highschool: ['تدبر القرآن الكريم.'],
        adults: ['منهج تصحيح التلاوة.', 'حفظ مختارات من السور.'],
        correction: ['وقت الحلقة: بعد صلاة العصر وبعد صلاة العشاء.', 'منهج تصحيح الفاتحة.', 'دروس ميسرة في أحكام التجويد.', 'تلقين جزء عم.'],
        online: ['وقت الحلقة: بعد صلاة العشاء.', 'منهج الحفظ والمراجعة (حسب مستوى الطالب).', 'تصحيح التلاوة عبر الاتصال المرئي.', 'دروس تجويد تفاعلية عن بعد.'],
        maqari: ['ختمة كاملة غيباً.', 'دراسة رواية حفص عن عاصم.', 'القراءات السبع (للمتميزين).', 'حفظ متن الجزرية وتحفة الاطفال والشاطبية.'],
        general: ['خطط حفظ فردية.', 'مراجعة تراكمية.', 'منهج تربوي عام.']
      }
    },
    hero: {
      title: 'مجمع التبيان المركزي',
      subtitle: 'نورٌ يملأ الآفاق، وتربيةٌ تبني الأجيال، بيئة قرآنية متميزة تسعى لخدمة كتاب الله وتنشئة جيل حافظ لكتاب الله.',
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
      title: 'تلاوات الطلاب',
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
      certified: 'معلماً مجازاً',
      admins: 'إدارياً',
      khatmeen: 'خاتماً',
      circles: 'حلقة قرآنية',
      mosques: 'مسجد',
      noor: 'طفلاً في نور البيان',
      maqari: 'مقارئ'
    },
    about: {
      title: 'عن المجمع',
      verse: '﴿وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً وَبُشْرَى لِلْمُسْلِمِينَ﴾',
      verseSource: '[النحل: 89]',
      mainDescription: 'صرحٌ قرآني رائد يسعى لخدمة كتاب الله وتنشئة جيلٍ قرآنيٍ متميز. نحمل على عاتقنا أمانة تعليم القرآن الكريم، ونسعى لتربية جيل يحفظ القرآن ويعمل به في بيئة تعليمية محفزة.',
      meaningTitle: 'دلالة الاسم في المعجم',
      wordComplex: 'مُجَمَّع',
      wordTibyan: 'التِّبْيَان',
      wordCentral: 'المَرْكَزي',
      meaningComplex: 'لغةً: اسم مفعول من جَمَعَ، وهو الموضع الذي يجتمع فيه الناس أو الأشياء.\nاصطلاحاً: كيان تعليمي متكامل يجمع عدة مسارات تربوية وقرآنية تحت إدارة موحدة لخدمة كتاب الله.',
      meaningTibyan: 'لغةً: مصدر للفعل بَيَّنَ، وهو الكشف والإيضاح التام والجلي.\nاصطلاحاً: منهج تعليمي يهدف لإظهار حقائق القرآن ومعانيه بوضوح، مستلهمين ذلك من وصف القرآن الكريم لنفسه بأنه تبيانٌ لكل شيء.',
      meaningCentral: 'لغةً: نسبة إلى المركز، وهو النقطة التي يدور حولها الشيء والقاعدة التي يستند إليها.\nاصطلاحاً: المقر الرئيس ونقطة الانطلاق لكافة الحلقات والمبادرات القرآنية، والقلب النابض للمشاريع التعليمية في المنطقة.',
      fullSentenceMeaningTitle: 'المعنى العام للاسم',
      fullSentenceMeaning: 'مجمع التبيان المركزي: هو صرح تعليمي قرآني، جامع بين تحفيظ القرآن وتعليم قراءته وإقرائه، يقوم على منهج قرآني واضح، لحفظ راسخ ومتين لكتاب الله تعالى، ونعمل على كونه مقرًا مهمًّا لإعداد جيل حافظ متقن، ومستوعب لقيم القرآن ومقاصده العظيمة.',
      logoTitle: 'رؤيتنا ورسالتنا',
      logoPoint1: 'توفير بيئة قرآنية آمنة وجاذبة لكل الفئات.',
      logoPoint2: 'بناء شراكات مجتمعية لخدمة القرآن الكريم.',
      logoPoint3: 'تأهيل معلمين متميزين ومجازين لضمان جودة التعليم.',
      logoPoint4: 'استخدام أحدث الوسائل التقنية في التعليم والتحفيظ.',
      programTitle: 'برنامج نور البيان للأطفال',
      programDesc: 'برنامج تعليمي يدمج بين تعليم القرآن والقراءة والكتابة بطريقة حديثة (صوت، صورة، حركة) لصناعة جيل قرآني من سن 4-6 سنوات، وفق منهج معتمد.',
      programStats: 'يضم حالياً ٨٥ طفلاً',
      missionTitle: 'رسالتنا',
      missionDesc: 'الإسهام في تعليم كتاب الله تعالى وغرس ما اشتمل عليه من قيم .. ( لتخريج جيل يحفظ كلام الله ليعمل به ويعلمه فيكون لبنة صالحة ينفع دينه ويسهم في بناء وطنه ) .',
      qualityTitle: 'رؤيتنا',
      qualityDesc: 'الريادة والتميز المؤسسي في تعليم القرآن .. ( من خلال منهج يمتاز بالجودة والإتقان ومعلمين مؤهلين أكفاء وإشراف فاعل في عمل مؤسسي متكامل يمتاز بروح الفريق الواحد ) .',
      methodTitle: 'منهجنا',
      methodDesc: 'برامج تعليمية متنوعة تناسب كافة الفئات العمرية، مع متابعة دقيقة لمستوى الطلاب.',
      quote: 'خيركم من تعلم القرآن وعلمه',
      quoteSource: 'أخرجه البخاري',
      mainLocation: 'الموقع الرئيسي',
      mainMosque: 'جامع سلمان الفارسي',
      moreAchievements: 'للمزيد عن إنجازاتنا'
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
      phone: 'رقم الهاتف',
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
    mosquesList: [
      { id: 1, name: "جامع سلمان الفارسي (الرئيسي)", mapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8", availableCircles: ['noor', 'elementary', 'intermediate', 'highschool', 'correction', 'online', 'maqari'] },
      { id: 2, name: "جامع الرومي", mapLink: "https://maps.app.goo.gl/fW2sQpCdkqjkNGFQ9", availableCircles: ['general'] },
      { id: 3, name: "جامع الروسان", mapLink: "https://maps.app.goo.gl/ynxKfqs6EhJrsPsF7", availableCircles: ['elementary', 'intermediate', 'highschool', 'maqari'] },
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
        link: "https://forms.gle/UP6SERTgbV3KtybWA",
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
        link: "https://forms.gle/kFCxzGE2TXL3Xvn39",
        buttons: [
          { text: "تسجيل الرجال", link: "https://forms.gle/kFCxzGE2TXL3Xvn39" },
          { text: "تسجيل النساء", link: "https://forms.gle/HPBPbpDduTPvzuZo8" }
        ],
        details: {
          sections: [
            { 
              title: "عن البرنامج", 
              items: [
                "7️⃣ *سَبـعُ آيــاتٍ فَقَـط!* لڪنّھاً أعظمُ سُوَر القُـرآن!",
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
      },
      {
        id: 3,
        title: "قريباً: افتتاح حلقة للجاليات",
        description: "نسعى لإيصال نور القرآن لكل مسلم. نعلن عن قرب افتتاح حلقة مخصصة للجاليات (الناطقين بغير العربية).",
        date: "قريباً",
        image: "https://i.postimg.cc/fTQb03nx/qryba.png",
        details: {
          sections: [
            { title: "أهداف الحلقة", items: ["تصحيح التلاوة", "تعليم مبادئ التجويد", "دروس إيمانية مبسطة"] }
          ]
        }
      }
    ],
    recitationsList: [
      { id: 0, student: "عبدالمجيد بن حسن الشهري", surah: "سورة النمل", link: "https://youtu.be/kCKnLoexeAg", thumbnail: "https://img.youtube.com/vi/kCKnLoexeAg/hqdefault.jpg" },
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
      circleTypes: 'Circles',
      ads: 'Ads',
      recitations: 'Recitations',
      donate: 'Donate',
      stats: 'Stats',
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
      siteName: 'Al-Tibyan Central Complex',
      loading: 'Loading...',
      readMore: 'Read More',
      close: 'Close',
      viewMap: 'View Map',
      benefits: 'Benefits & Features',
      curriculum: 'What they learn',
      details: 'Full Details'
    },
    circleTypes: {
      title: 'Quranic Circle Types',
      subtitle: 'We provide specialized educational programs for all ages and levels',
      age: 'Age',
      years: 'Years',
      above: 'and above',
      allAges: 'All Ages',
      types: {
        noor: 'Noor Al-Bayan',
        elementary: 'Elementary',
        intermediate: 'Intermediate',
        highschool: 'High School',
        adults: 'Adults',
        correction: 'Recitation Correction',
        online: 'Online Circle',
        maqari: 'Maqari (Elite)',
        general: 'General Circle'
      },
      desc: {
        noor: 'Foundational reading, writing, and Quran for young children.',
        elementary: 'Dedicated circles for elementary school students.',
        intermediate: 'Educational and Quranic programs for intermediate students.',
        highschool: 'Intensive memorization for high school students.',
        adults: 'Flexible circles for employees and adults.',
        correction: 'Special program for perfecting Al-Fatiha and short surahs.',
        online: 'Flexible remote circles via digital platforms.',
        maqari: 'Perfecting recitation and obtaining supported Ijazahs.',
        general: 'A comprehensive circle for all ages in one environment.'
      },
      benefits: {
        noor: ['Mastering Arabic phonetics.', 'Correct reading from Mushaf.', 'Memorizing short Surahs.', 'Developing language skills.'],
        elementary: ['Memorizing Quranic parts.', 'Basic Tajweed rules.', 'Islamic morals.', 'Improving recitation.'],
        intermediate: ['Intensive memorization.', 'Understanding word meanings.', 'Advanced Tajweed.', 'Safe environment.'],
        highschool: ['Working on full completion.', 'Reviewing old parts.', 'Simplified Tafsir.', 'Leadership skills.'],
        adults: ['Correcting Fatiha recitation.', 'Flexible memorization.', 'Fits work schedules.', 'Understanding Surah purposes.'],
        correction: ['Ensuring valid prayer.', 'Mastering letter exits.', 'Suitable for all levels.', 'Focused sessions.'],
        online: ['Full flexibility.', 'Modern interactive tools.', 'Digital progress tracking.', 'Suitable for expats.'],
        maqari: ['Multi-narration mastery.', 'Supported Ijazahs.', 'Competition prep.', 'Teacher training.'],
        general: ['Integrating age groups.', 'Individual follow-up.', 'Suitable for siblings.', 'Flexible levels.']
      },
      curriculum: {
        noor: ['Noor Al-Bayan book.', 'Short Surahs dictation.', 'Basic Faith & Morals.'],
        elementary: ['Simplified Tajweed book.'],
        intermediate: ['Quran vocabulary meanings.'],
        highschool: ['Quranic contemplation.'],
        adults: ['Recitation correction manual.', 'Selected Surahs memorization.'],
        correction: ['After Asr & Isha.', 'Al-Fatiha correction curriculum.', 'Easy Tajweed lessons.', 'Juz Amma teaching.'],
        online: ['After Isha prayer.', 'Individual memorization plan.', 'Video call correction.', 'Interactive remote Tajweed lessons.'],
        maqari: ['Full Quran memorization.', 'Hafs Narration mastery.', 'The Seven Readings (elite).', 'Matn Al-Jazariyyah & Tuhfa.'],
        general: ['Custom memorization plans.', 'Cumulative review.', 'General Islamic education.']
      }
    },
    hero: {
      title: 'Al-Tibyan Central Complex',
      subtitle: 'A light filling the horizons, building generations, a distinguished Quranic environment dedicated to serving Allah\'s Book and raising a generation that memorizes it.',
      register: 'Join Us Now',
      registerMen: 'Men Registration',
      registerWomen: 'Women Registration',
      donate: 'Contribute Now'
    },
    ads: {
      title: 'Latest News & Ads',
      subtitle: 'Stay updated with our latest events and activities',
      date: 'Published on',
    },
    recitations: {
      title: 'Student Recitations',
      subtitle: 'Beautiful and soulful recitations from our distinguished students',
      listen: 'Listen Now',
      student: 'Reader',
      surah: 'Surah'
    },
    stats: {
      title: 'Our Statistics',
      subtitle: 'Numbers reflecting our journey of serving the Holy Quran',
      students: 'Students',
      teachers: 'Teachers',
      certified: 'Certified Teachers',
      admins: 'Admins',
      khatmeen: 'Huffaz (Graduates)',
      circles: 'Circles',
      mosques: 'Mosques',
      noor: 'Noor Al-Bayan Kids',
      maqari: 'Maqari Centers'
    },
    about: {
      title: 'About the Complex',
      verse: '﴿And We have sent down to you the Book as clarification for all things and as guidance and mercy and good tidings for the Muslims.﴾',
      verseSource: '[An-Nahl: 89]',
      mainDescription: 'A leading Quranic institution seeking to serve the Book of Allah and raise a distinguished generation. We carry the trust of teaching the Holy Quran in a motivating educational environment.',
      meaningTitle: 'Etymology of the Name',
      wordComplex: 'Complex',
      wordTibyan: 'Al-Tibyan',
      wordCentral: 'Central',
      meaningComplex: 'Linguistically: A noun referring to the place where people or things gather.\nTechnically: An integrated educational entity combining multiple pedagogical and Quranic paths.',
      meaningTibyan: 'Linguistically: A source meaning "Clarification" or "Full disclosure".\nTechnically: An educational methodology aimed at making Quranic truths manifest clearly.',
      meaningCentral: 'Linguistically: Relating to the "Center" or hub.\nTechnically: The headquarters and starting point for all Quranic initiatives in the region.',
      fullSentenceMeaningTitle: 'General Meaning of the Name',
      fullSentenceMeaning: 'Al-Tibyan Central Complex: A Quranic educational institution that combines Quran memorization with teaching its reading and recitation. It is based on a clear Quranic methodology for firm and solid memorization of the Book of Allah Almighty, serving as a vital center for preparing a generation that masters and embodies Quranic values and great purposes.',
      logoTitle: 'Vision & Mission',
      logoPoint1: 'Providing a safe and attractive Quranic environment.',
      logoPoint2: 'Building community partnerships to serve the Quran.',
      logoPoint3: 'Training distinguished and certified teachers.',
      logoPoint4: 'Using modern technologies in memorization.',
      programTitle: 'Noor Al-Bayan for Kids',
      programDesc: 'An integrated program teaching Quran, reading, and writing using modern methods for children aged 4-6.',
      programStats: 'Currently hosting 85 children',
      missionTitle: 'Our Mission',
      missionDesc: 'Contributing to teaching the Book of Allah Almighty and instilling the values it contains .. (To graduate a generation that memorizes the Word of Allah to act upon it and teach it, becoming a righteous building block that benefits its religion and contributes to building its nation) .',
      qualityTitle: 'Our Vision',
      qualityDesc: 'Leadership and institutional excellence in Quranic education (through a curriculum characterized by quality and mastery, qualified teachers, and effective supervision in an integrated institutional work characterized by a team spirit).',
      methodTitle: 'Our Method',
      methodDesc: 'Diverse educational programs suitable for all ages with precise follow-up.',
      quote: 'The best of you are those who learn the Quran and teach it',
      quoteSource: 'Narrated by Al-Bukhari',
      mainLocation: 'Main Location',
      mainMosque: 'Salman Al-Farsi Mosque',
      moreAchievements: 'View Achievements'
    },
    mosques: {
      title: 'Our Mosques & Circles',
      subtitle: 'Located across Riyadh to be closer to you. Find the nearest mosque from the list.',
      availableCircles: 'Available Circles'
    },
    donation: {
      tag: 'A Trade That Never Fails',
      title: 'Donation Opportunities',
      subtitle: 'Help us serve Allah\'s Book and share the reward through our diverse donation packages',
      teacher: 'Sponsor a Teacher',
      teacherDesc: 'The teacher is the pillar of education. Contribute to teachers\' salaries to ensure continuity.',
      student: 'Sponsor a Student',
      studentDesc: 'Support a student\'s journey and be a partner in every letter they recite.',
      circle: 'Sponsor a Circle',
      circleDesc: 'Sponsor a full Quranic circle and help graduate a constellation of huffaz annually.',
      general: 'General Support',
      generalDesc: 'Open contribution to support general activities and operational expenses.',
      donateBtn: 'Donate Now',
      storeTitle: 'Wish to contribute another amount?',
      storeSubtitle: 'Visit our online store to choose the charitable avenues that suit you',
      storeBtn: 'Visit Online Store'
    },
    supporters: {
      title: 'Success Partner',
      subtitle: 'We are proud of our partnership with the supervising entity for Quran memorization in Riyadh',
      partnerName: 'Maknon Association',
      partnerType: 'Charity Association for Quran Memorization in Riyadh',
      visitPartner: 'Visit Website'
    },
    contact: {
      title: 'Al-Tibyan Central Complex',
      desc: 'A leading Quranic complex seeking to raise a distinguished generation through an attractive environment and qualified staff.',
      contactInfo: 'Contact Info',
      phone: 'Phone Number',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      youtube: 'YouTube',
      address: 'Main Address',
      rights: 'All rights reserved.',
      designedBy: 'Designed with Precision',
      openMap: 'Open Map',
      instagram: 'Instagram',
      snapchat: 'Snapchat',
      tiktok: 'TikTok',
    },
    assistant: {
      placeholder: 'Type your inquiry...',
      typing: 'Assistant is typing...',
      suggestions: {
        register: "How do I register?",
        donate: "How can I donate?",
        location: "Where are you located?",
        mosques: "What are the affiliated mosques?",
        students: "How many students are there?"
      }
    },
    mosquesList: [
      { id: 1, name: "Salman Al-Farsi Mosque (Main)", mapLink: "https://maps.app.goo.gl/KbQnsK6YeNpbfXmv8", availableCircles: ['noor', 'elementary', 'intermediate', 'highschool', 'correction', 'online', 'maqari'] },
      { id: 2, name: "Al-Rumi Mosque", mapLink: "https://maps.app.goo.gl/fW2sQpCdkqjkNGFQ9", availableCircles: ['general'] },
      { id: 3, name: "Al-Rusan Mosque", mapLink: "https://maps.app.goo.gl/ynxKfqs6EhJrsPsF7", availableCircles: ['elementary', 'intermediate', 'highschool', 'maqari'] },
      { id: 4, name: "Al-Maiman Mosque", mapLink: "https://maps.app.goo.gl/zyZ58aeV828Qdfbw8", availableCircles: ['elementary', 'intermediate', 'highschool'] },
      { id: 5, name: "Sheikh Abdullah bin Rashid bin Kulaib Mosque", mapLink: "https://maps.app.goo.gl/FEDiKmtZYD7G8cUH9", availableCircles: ['elementary', 'intermediate'] },
      { id: 6, name: "Abdulmohsen Al-Muhaisen Mosque", mapLink: "https://maps.app.goo.gl/4nfgYPzBQg8YPh8VA", availableCircles: ['maqari'] },
      { id: 7, name: "Uqba bin Nafi Mosque", mapLink: "https://maps.app.goo.gl/r7Wkgrqh6MGQyEiR7", availableCircles: ['maqari'] },
      { id: 8, name: "Sheikh Abdulrahman bin Abdullah Al-Sheikh Mosque", mapLink: "https://maps.app.goo.gl/xBW1cgguaBKgFaXP9", availableCircles: ['maqari'] },
      { id: 9, name: "Abu Ubaidah bin Al-Jarrah Mosque", mapLink: "https://maps.app.goo.gl/PmVzeR45QMZBehyT6", availableCircles: ['adults'] },
      { id: 10, name: "Saeed bin Zaid Mosque", mapLink: "https://maps.app.goo.gl/tw2E9swcpyFgjPe8", availableCircles: ['adults'] },
    ],
    adsList: [
      {
        id: 0,
        title: "7th Ramadan Tibyan Course (1447 AH)",
        description: "Registration is open for the 7th Ramadan Tibyan Course (Permit: 7641). Various branches and distinguished prizes.",
        date: "22 Sha'ban 1447",
        image: "https://i.postimg.cc/7ZvFrCTR/IMG-20260210-WA0010.jpg",
        link: "https://forms.gle/UP6SERTgbV3KtybWA",
        details: {
          sections: [
            { title: "Course Branches", items: ["3 Parts", "5 Parts", "10 Parts", "15 Parts", "20 Parts", "30 Parts"] },
            { title: "Accompanying Programs", items: ["Tajweed Course", "Course Knights", "Recitation Correction", "Quran Vocabulary"] },
            { title: "Features", items: ["Certified Teachers", "Prizes for Winners", "Daily Gifts and Incentives"] },
            { title: "Periods", items: ["Fajr", "Asr", "After Taraweeh"] },
            { title: "Duration", items: ["1st to 19th Ramadan", "Sunday to Thursday"] }
          ]
        }
      },
      {
        id: 1,
        title: "Registration Open for New Semester",
        description: "We are now accepting applications for all complex circles across all age groups.",
        date: "29 Rajab 1447",
        image: "https://i.postimg.cc/zBNzwPfZ/IMG_20260211_WA0019.jpg",
        link: "https://docs.google.com/forms/d/1k9hEO1o-_NuRGmxUP7Yl5CcERDZK72t7cUhb6EoXNXI/viewform?edit_requested=true&pli=1"
      },
      {
        id: 2,
        title: "Surat Al-Fatiha Correction Project",
        description: "Only 7 verses! But it is the greatest surah in the Quran. Join us in perfecting your recitation.",
        date: "Open Now",
        image: "https://i.postimg.cc/Xv4Fqx0N/IMG_20260211_WA0020.jpg",
        link: "https://forms.gle/kFCxzGE2TXL3Xvn39",
        buttons: [
          { text: "Men Registration", link: "https://forms.gle/kFCxzGE2TXL3Xvn39" },
          { text: "Women Registration", link: "https://forms.gle/HPBPbpDduTPvzuZo8" }
        ],
        details: {
          sections: [
            { 
              title: "About the Program", 
              items: [
                "Only 7 verses! But it is the greatest surah in the Quran.",
                "It is called 'The Surah of Prayer' 1",
                "Our prayer is set right, with great reward in correcting the recitation of Al-Fatiha and short surahs."
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
      },
      {
        id: 3,
        title: "Coming Soon: Expatriates Circle",
        description: "Opening soon! A circle dedicated to non-Arabic speakers to spread the light of Quran to every Muslim.",
        date: "Coming Soon",
        image: "https://i.postimg.cc/fTQb03nx/qryba.png",
        details: {
          sections: [
            { title: "Objectives", items: ["Recitation correction", "Basic Tajweed", "Faith lessons"] }
          ]
        }
      }
    ],
    recitationsList: [
      { id: 0, student: "Abdulmajeed Hassan Al-Shehri", surah: "Surah An-Naml", link: "https://youtu.be/kCKnLoexeAg", thumbnail: "https://img.youtube.com/vi/kCKnLoexeAg/hqdefault.jpg" },
      { id: 1, student: "Abdulrahman Al-Kholani", surah: "Surah An-Najm", link: "https://youtu.be/YtM-YwmmpY4", thumbnail: "https://img.youtube.com/vi/YtM-YwmmpY4/hqdefault.jpg" },
      { id: 2, student: "Abdulmalik Abdulqadir Al-Ansari", surah: "Surah An-Naba", link: "https://youtu.be/2AOmd9FyglE", thumbnail: "https://img.youtube.com/vi/2AOmd9FyglE/hqdefault.jpg" },
      { id: 3, student: "Salah bin Hisham", surah: "Surah At-Tariq", link: "https://youtu.be/NupjCHfg07M", thumbnail: "https://img.youtube.com/vi/NupjCHfg07M/hqdefault.jpg" },
      { id: 4, student: "Ahmed bin Hisham", surah: "Surah Fatir", link: "https://youtu.be/9tccFoNeR6M", thumbnail: "https://img.youtube.com/vi/9tccFoNeR6M/hqdefault.jpg" },
      { id: 5, student: "Mohammed bin Taha Abu Kurayshah", surah: "Surah An-Najm (Khalaf from Hamzah)", link: "https://youtu.be/U1QfNi16Ilc", thumbnail: "https://img.youtube.com/vi/U1QfNi16Ilc/hqdefault.jpg" }
    ]
  }
};