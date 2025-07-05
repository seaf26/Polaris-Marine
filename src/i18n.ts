import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      companyIntroduction: 'Company Introduction',
      polaris: 'Polaris Marine ',
      projectGoal: 'Project Goal',
      projectGoalText: 'Launching the first two projects (2 barges) as a start to building the company\'s reputation and preparing the site for establishing an industrial zone specialized in marine constructions.',
      projectGoalDesc: 'Our goal is to set new standards in marine construction, combining innovation, safety, and sustainability for every project we undertake.',
      // ...add more keys as needed
      language: 'Language',
      english: 'English',
      arabic: 'Arabic',
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      about: {
        polaris: {
          title: 'About Polaris',
          intro: 'Polaris was founded by three senior experts with decades of experience in marine navigation, shipbuilding, and industrial project execution. This diverse leadership empowers us to deliver fully integrated solutions that meet the highest international standards of quality, safety, and sustainability.',
          leadership: 'Our leadership integrates:',
          expertise1: 'Practical maritime navigation expertise',
          expertise2: 'Specialized engineering in marine vessel design',
          expertise3: 'Advanced industrial and operational management',
          qualityAssurance: {
            title: 'Quality Assurance',
            description: 'Every project is executed with precision, adhering to international maritime standards and best practices in marine construction.',
          },
        },
      },
      contact: 'Contact',
      process: 'Project Process & Phases',
      processDesc: 'Explore the detailed phases and activities of our marine construction projects, from planning to execution, marketing, and future vision.',
      testimonials: 'What Our Clients Say',
      testimonialsDesc: "Don't just take our word for it. Here's what boat owners throughout the region have to say about our marine services.",
      getInTouch: 'Get In Touch',
      getInTouchDesc: 'Ready to get your vessel serviced? Contact our team of marine experts today for a free consultation and quote.',
      contactInfo: 'Contact Information',
      phoneLabel: 'Phone',
      phoneMain: '+20 111 111 1206',
      phoneEmergency: '+20 100 653 0395',
      phoneThird: '+20 114 511 7071',
      emailLabel: 'Email',
      emailMain: 'info@polarismarine.com',
      locationLabel: 'Location',
      locationMain: 'P.O.Box 22745, Rashid Nile Corrnish - New Port Rd, Egypt',
      hoursLabel: 'Business Hours',
      hoursMain: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
      requestQuote: 'Request a Quote',
      fullName: 'Full Name *',
      fullNamePlaceholder: 'Enter your full name',
      email: 'Email Address *',
      emailPlaceholder: 'Enter your email address',
      phone: 'Phone Number',
      phonePlaceholder: 'Enter your phone number',
      serviceNeeded: 'Service Needed',
      selectService: 'Select a service',
      maintenance: 'Boat Maintenance',
      repairs: 'Repairs & Restoration',
      insurance: 'Marine Insurance',
      marina: 'Marina Services',
      transport: 'Boat Transport',
      consulting: 'Marine Consulting',
      message: 'Message *',
      messagePlaceholder: 'Tell us about your vessel and what services you need...',
      submit: 'Submit',
      thankYou: "Thank you for your inquiry! We'll get back to you within 24 hours.",
      notFound: 'Page Not Found',
      notFoundDesc: 'Sorry, the page you are looking for does not exist or has been moved.',
      goHome: 'Go Home',
      loading: 'Loading...',
      loadingDesc: 'Please wait while we prepare your experience.',
      maritimeHeroTitle: 'Crafting Marine Construction & Offshore Engineering',
      slogan: 'From RiverBanks to Whole World — Built Right',
      maritimeHeroDesc: 'Polaris Marine Construction and Services is an Egyptian company specialized in delivering high-integrity marine engineering and construction solutions throughout Egypt and the broader region. Headquartered in Rashid (Rosetta) — a coastal city with centuries of maritime and industrial heritage — Polaris revives the spirit of craftsmanship and excellence that has long defined the area. Our operations are built on technical accuracy, operational discipline, and deep local pride, providing high-quality services at competitive prices.',
      buildWithUs: 'Build With Us',
      contactUs: 'Contact Us',
      phaseOneTitle: 'Phase One: Preparation and Planning',
      phaseOneDetail1: 'Site analysis and soil study',
      phaseOneDetail2: "Soil tests to determine the ground's bearing capacity for heavy loads",
      phaseOneDetail3: 'Evaluation of groundwater level and site proximity to the shore',
      phaseOneDetail4: 'Barge design (collaboration with accredited engineering office)',
      phaseOneDetail5: 'Using 3D design software (AutoCAD, Rhino Marine)',
      phaseOneDetail6: 'Selection of appropriate materials',
      phaseOneDetail7: 'Licenses and government approvals',
      phaseOneDetail8: 'Approval from the General Authority for Ports and River Transport',
      phaseOneDetail9: 'Building permit from the Nile Protection Authority',
      phaseOneDetail10: 'Vessel registration with the Maritime Safety Authority',
      phaseOneDetail11: 'Site preparation: land leveling and drainage',
      phaseOneDetail12: 'Installation of temporary shelters and raw material warehouses',
      phaseOneDetail13: 'Providing electricity, water, and welding equipment',
      phaseTwoTitle: 'Phase Two: Execution',
      phaseTwoDetail1: 'Metal cutting and forming',
      phaseTwoDetail2: 'Using CNC cutting machines',
      phaseTwoDetail3: 'Bending and shaping steel plates according to structural designs',
      phaseTwoDetail4: 'Welding and Assembly: constructing the barge hull using MIG/MAG welding',
      phaseTwoDetail5: 'Installing internal bulkheads according to the design',
      phaseTwoDetail6: 'Installing electrical and mechanical systems',
      phaseTwoDetail7: 'Installing water pumps, ventilation systems, and lighting',
      phaseTwoDetail8: 'Installing propulsion engines (if any) or flotation and stability systems',
      phaseTwoDetail9: 'Pressure and safety tests',
      phaseTwoDetail10: 'Water tests to ensure no leakage',
      phaseTwoDetail11: 'Flotation balance and weight tests',
      phaseTwoDetail12: 'Final painting (anti-corrosion and anti-rust paint)',
      phaseTwoDetail13: 'Placing safety marks and company identification',
      phaseTwoDetail14: 'Launching the two barges: preparing a basin or launching dock',
      phaseTwoDetail15: 'Launching process under the supervision of an engineering and technical team',
      phaseThreeTitle: 'Company Marketing and Promotion',
      phaseThreeDetail1: 'Visual Identity: designing a professional logo that reflects the name "Polaris"',
      phaseThreeDetail2: 'Business cards, a simple website, and social media accounts',
      phaseThreeDetail3: 'Marketing Content: time-lapse videos and photos of the work process',
      phaseThreeDetail4: 'Publishing introductory articles on specialized marine industry platforms',
      phaseThreeDetail5: 'Public Relations: inviting local media to cover the barge launching',
      phaseThreeDetail6: 'Field visits for interested engineers and government entities',
      phaseThreeDetail7: 'Collaboration with governmental and private entities',
      phaseThreeDetail8: 'Submitting price offers for infrastructure projects in Rashid City',
      phaseThreeDetail9: 'Collaborating with the Ministry of Water Resources and Irrigation, and companies in the oil and gas sector',
      phaseFourTitle: 'Funding, Support, and Future Vision',
      phaseFourDetail1: 'Self-funding: personal investment and funding from founding partners',
      phaseFourDetail2: 'Grants and government support',
      phaseFourDetail3: 'Applying for small and medium industries support programs',
      phaseFourDetail4: 'Support from the Micro, Small, and Medium Enterprises Development Agency',
      phaseFourDetail5: 'Support from the Ministry of Industry and Trade',
      phaseFourDetail6: 'Support from the National Bank of Egypt / Social Development Bank',
      phaseFourDetail7: 'Strategic Partnerships: collaboration with metal and pipe manufacturing companies',
      phaseFourDetail8: 'Collaboration with universities and research institutes for product development',
      phaseFourDetail9: 'Future Vision: establishing a complete workshop for manufacturing light and medium vessels',
      phaseFourDetail10: 'Manufacturing floating units, barges, specialized vessels, and tourist yachts',
      phaseFourDetail11: 'Providing marine maintenance and repair services',
      phaseFourDetail12: 'Participating in water infrastructure projects (floating dams, docks, retaining walls)',
      phaseFourDetail13: 'Exporting to neighboring countries (Libya, Sudan, Saudi Arabia, and entering the European market)',
      readyToGetStarted: 'Ready to Get Started?',
      processCTA: 'Contact us today for a free consultation and let our expert team take care of all your marine service needs.',
      getFreeQuote: 'Get Free Quote',
      galleryTitle: 'Our Work Gallery',
      testimonial1_name: 'Captain James Mitchell',
      testimonial1_role: 'Yacht Owner',
      testimonial1_text: 'AquaMarine Services has been maintaining my 45-foot yacht for over 8 years. Their attention to detail and professional service is unmatched. I trust them completely with my vessel.',
      testimonial1_location: 'Marina Bay',
      testimonial2_name: 'Sarah Thompson',
      testimonial2_role: 'Fishing Boat Owner',
      testimonial2_text: "When my engine failed 20 miles offshore, AquaMarine's emergency service saved the day. They had me back on the water within hours. Exceptional service and fair pricing.",
      testimonial2_location: 'Harbor Point',
      testimonial3_name: 'Michael Rodriguez',
      testimonial3_role: 'Commercial Fleet Manager',
      testimonial3_text: "Managing a fleet of 12 vessels, I need reliable service partners. AquaMarine consistently delivers quality work on time and within budget. They're our go-to marine service provider.",
      testimonial3_location: 'Commercial Harbor',
      testimonial4_name: 'Lisa Chen',
      testimonial4_role: 'Sailboat Enthusiast',
      testimonial4_text: 'The team at AquaMarine restored my vintage sailboat to better-than-new condition. Their craftsmanship and knowledge of classic boats is impressive. Highly recommended!',
      testimonial4_location: 'Sunset Marina',
      ourServices: {
        title: 'Our Services',
        subtitle: 'We offer a full suite of services across the marine construction field, including:',
        service1: {
          title: 'Design & Fabrication',
          desc: 'Light to medium marine vessels (steel barges, workboats, floating platforms) designed and built to spec.'
        },
        service2: {
          title: 'Marine Repair & Maintenance',
          desc: 'Comprehensive repair and maintenance for vessels, ensuring safety and operational reliability.'
        },
        service3: {
          title: 'Coastal Infrastructure',
          desc: 'Production of quay walls, pumping stations, and floating docks for robust coastal infrastructure.'
        },
        service4: {
          title: 'Support Services',
          desc: 'Dredging, logistics, and offshore operations support for seamless marine project execution.'
        },
        note1: 'All services are delivered in line with international maritime standards — and at',
        note2: 'cost-effective pricing',
        note3: 'that balances long-term value with technical excellence.'
      },
      whyPolaris: {
        title: 'Why Polaris?',
        subtitle: 'Discover what sets us apart in the marine construction industry.',
        reason1: {
          title: 'Strategic Location',
          desc: 'In Rashid – a city with proven maritime and industrial history.'
        },
        reason2: {
          title: 'Experienced Leadership',
          desc: 'Leadership with practical and engineering depth.'
        },
        reason3: {
          title: 'High-Quality Solutions',
          desc: 'Marine solutions at competitive prices.'
        },
        reason4: {
          title: 'Full Compliance',
          desc: 'With environmental and industry standards.'
        },
        reason5: {
          title: 'Client-Focused Delivery',
          desc: 'Delivery with real-world results.'
        },
      },
      futureVision: {
        title: 'Our Future Vision',
        subtitle: 'After the success of our initial operations, Polaris is poised to expand into:',
        vision1: {
          title: 'Marine Fabrication Facility',
          desc: 'Establishing a fully equipped marine fabrication facility.'
        },
        vision2: {
          title: 'Vessel Manufacturing',
          desc: 'Manufacturing vessels for tourism, oil & gas, and utility sectors.'
        },
        vision3: {
          title: 'Coastal Infrastructure',
          desc: 'Delivering large-scale coastal infrastructure projects.'
        },
        vision4: {
          title: 'Strategic Partnerships',
          desc: 'Partnering with government agencies and international clients.'
        },
        vision5: {
          title: 'Export Expansion',
          desc: 'Exporting to target markets including Saudi Arabia, Libya, Sudan, and Europe.'
        },
      },
      footer: {
        companyName: 'Polarise Marine',
        companyDesc: 'Polarise Marine delivers world-class marine construction, precision-engineered vessels, and reliable offshore solutions. Building trust across the seas with expertise and innovation.',
        servicesTitle: 'Services',
        services: [
          'Marine Construction',
          'Vessel Building',
          'Ship Maintenance',
          'Offshore Engineering',
          'Port Services',
        ],
        quickLinksTitle: 'Quick Links',
        quickLinks: [
          'Home',
          'Services',
          'About Us',
          'Gallery',
          'Process',
          'Contact',
        ],
        contactTitle: 'Contact Info',
        phone: '+20 111 111 1206',
        email: 'info@polarismarine.com',
        address: {
          line1: 'Rashid (Rosetta)',
          line2: 'Egypt',
        },
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
      },
    },
  },
  ar: {
    translation: {
      companyIntroduction: 'مقدمة عن الشركة',
      polaris: 'بولاريس للخدمات البحرية والإنشائية',
      projectGoal: 'هدف المشروع',
      projectGoalText: 'إطلاق أول مشروعين (2 صندل) كبداية لبناء سمعة الشركة وتجهيز الموقع لإنشاء منطقة صناعية متخصصة في الإنشاءات البحرية.',
      projectGoalDesc: 'هدفنا هو وضع معايير جديدة في الإنشاءات البحرية من خلال الابتكار والسلامة والاستدامة في كل مشروع ننفذه.',
      language: 'اللغة',
      english: 'الإنجليزية',
      arabic: 'العربية',
      home: 'الرئيسية',
      services: 'الخدمات',
      gallery: 'المعرض',
      about: {
        polaris: {
          title: 'عن بولاريس',
          intro: 'تأسست بولاريس على يد ثلاثة خبراء كبار يتمتعون بعقود من الخبرة في الملاحة البحرية، وبناء السفن، وتنفيذ المشاريع الصناعية. هذا التنوع القيادي يمكّننا من تقديم حلول متكاملة تلبي أعلى المعايير الدولية للجودة والسلامة والاستدامة.',
          leadership: 'قيادتنا تجمع بين:',
          expertise1: 'خبرة عملية في الملاحة البحرية',
          expertise2: 'هندسة متخصصة في تصميم السفن البحرية',
          expertise3: 'إدارة صناعية وتشغيلية متقدمة',
          qualityAssurance: {
            title: 'التأكد من الجودة',
            description: 'يتم تنفيذ كل مشروع بدقة وفقا للمعايير الدولية للملاحة البحرية وأفضل الممارسات في الإنشاءات البحرية.',
          },
        },
      },
      contact: 'اتصل بنا',
      process: 'مراحل وخطوات المشروع',
      processDesc: 'استكشف المراحل والأنشطة التفصيلية لمشاريعنا البحرية، من التخطيط إلى التنفيذ والتسويق والرؤية المستقبلية.',
      testimonials: 'آراء عملائنا',
      testimonialsDesc: 'لا تأخذوا كلامنا فقط. إليكم ما يقوله مالكو القوارب في المنطقة عن خدماتنا البحرية.',
      getInTouch: 'تواصل معنا',
      getInTouchDesc: 'هل أنت مستعد لصيانة قاربك؟ تواصل مع فريق خبرائنا البحريين اليوم للحصول على استشارة وعرض سعر مجاني.',
      contactInfo: 'معلومات الاتصال',
      phoneLabel: 'الهاتف',
      phoneMain: '+20 111 111 1206',
      phoneEmergency: '+20 100 653 0395',
      phoneThird: '+20 114 511 7071',
      emailLabel: 'البريد الإلكتروني',
      emailMain: 'info@polarismarine.com',
      locationLabel: 'الموقع',
      llocationMain: 'ص.ب 22745، كورنيش النيل رشيد - طريق الميناء الجديد، مصر',
      hoursLabel: 'ساعات العمل',
      hoursMain: 'الاحد - الخميس: 8:00 صباحاً - 6:00 مساءً',
      requestQuote: 'طلب عرض سعر',
      fullName: 'الاسم الكامل *',
      fullNamePlaceholder: 'أدخل اسمك الكامل',
      email: 'البريد الإلكتروني *',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      phone: 'رقم الهاتف',
      phonePlaceholder: 'أدخل رقم هاتفك',
      serviceNeeded: 'الخدمة المطلوبة',
      selectService: 'اختر خدمة',
      maintenance: 'صيانة القوارب',
      repairs: 'إصلاحات وترميم',
      insurance: 'تأمين بحري',
      marina: 'خدمات المارينا',
      transport: 'نقل القوارب',
      consulting: 'استشارات بحرية',
      message: 'الرسالة *',
      messagePlaceholder: 'أخبرنا عن قاربك والخدمات التي تحتاجها...',
      submit: 'إرسال',
      thankYou: 'شكرًا لاستفسارك! سنعاود التواصل معك خلال 24 ساعة.',
      notFound: 'الصفحة غير موجودة',
      notFoundDesc: 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
      goHome: 'العودة للرئيسية',
      loading: 'جاري التحميل...',
      loadingDesc: 'يرجى الانتظار بينما نقوم بتحضير تجربتك.',
      maritimeHeroTitle: 'نصنع الإنشاءات البحرية والهندسة البحرية المتقدمة',
      slogan: 'من ضفاف النهر إلى أعالي البحار العالم — بناء متقن',
      maritimeHeroDesc: 'في بولاريس، نحوّل الرؤية إلى واقع من خلال إنشاءات بحرية عالمية المستوى، وسفن مصممة بدقة، وحلول بحرية موثوقة. بخبرة لا مثيل لها والتزام بالجودة، نبني أكثر من مجرد هياكل — نبني الثقة عبر البحار.',
      buildWithUs: 'انشئ معنا',
      contactUs: 'تواصل معنا',
      phaseOneTitle: 'المرحلة الأولى: التحضير والتخطيط',
      phaseOneDetail1: 'تحليل الموقع ودراسة التربة',
      phaseOneDetail2: 'اختبارات التربة لتحديد قدرة التحمل للأوزان الثقيلة',
      phaseOneDetail3: 'تقييم منسوب المياه الجوفية وقرب الموقع من الشاطئ',
      phaseOneDetail4: 'تصميم الصندل (بالتعاون مع مكتب هندسي معتمد)',
      phaseOneDetail5: 'استخدام برامج التصميم ثلاثية الأبعاد (أوتوكاد، راينو مارين)',
      phaseOneDetail6: 'اختيار المواد المناسبة',
      phaseOneDetail7: 'التراخيص والموافقات الحكومية',
      phaseOneDetail8: 'موافقة الهيئة العامة للموانئ والنقل النهري',
      phaseOneDetail9: 'رخصة البناء من هيئة حماية النيل',
      phaseOneDetail10: 'تسجيل الوحدة بهيئة السلامة البحرية',
      phaseOneDetail11: 'تجهيز الموقع: تسوية الأرض والصرف',
      phaseOneDetail12: 'تركيب المظلات المؤقتة ومستودعات المواد الخام',
      phaseOneDetail13: 'توفير الكهرباء والمياه وأجهزة اللحام',
      phaseTwoTitle: 'المرحلة الثانية: التنفيذ',
      phaseTwoDetail1: 'تقطيع وتشكيل المعادن',
      phaseTwoDetail2: 'استخدام ماكينات القطع CNC',
      phaseTwoDetail3: 'ثني وتشكيل الألواح المعدنية حسب التصميمات الإنشائية',
      phaseTwoDetail4: 'اللحام والتجميع: بناء بدن الصندل باستخدام لحام MIG/MAG',
      phaseTwoDetail5: 'تركيب الحواجز الداخلية حسب التصميم',
      phaseTwoDetail6: 'تركيب الأنظمة الكهربائية والميكانيكية',
      phaseTwoDetail7: 'تركيب مضخات المياه وأنظمة التهوية والإضاءة',
      phaseTwoDetail8: 'تركيب محركات الدفع (إن وجدت) أو أنظمة الطفو والثبات',
      phaseTwoDetail9: 'اختبارات الضغط والسلامة',
      phaseTwoDetail10: 'اختبارات المياه للتأكد من عدم وجود تسريب',
      phaseTwoDetail11: 'اختبارات توازن الطفو والوزن',
      phaseTwoDetail12: 'الدهان النهائي (مضاد للتآكل والصدأ)',
      phaseTwoDetail13: 'وضع علامات السلامة وهوية الشركة',
      phaseTwoDetail14: 'إنزال الصندلين: تجهيز حوض أو مرسى للإنزال',
      phaseTwoDetail15: 'عملية الإنزال تحت إشراف فريق هندسي وفني',
      phaseThreeTitle: 'تسويق الشركة والترويج',
      phaseThreeDetail1: 'الهوية البصرية: تصميم شعار احترافي يعكس اسم "بولاريس"',
      phaseThreeDetail2: 'بطاقات العمل، موقع إلكتروني بسيط، وحسابات على وسائل التواصل الاجتماعي',
      phaseThreeDetail3: 'محتوى تسويقي: فيديوهات وصور تايم لابس لعملية العمل',
      phaseThreeDetail4: 'نشر مقالات تعريفية على منصات الصناعة البحرية المتخصصة',
      phaseThreeDetail5: 'علاقات عامة: دعوة وسائل الإعلام المحلية لتغطية إنزال الصندل',
      phaseThreeDetail6: 'زيارات ميدانية للمهندسين والجهات الحكومية المهتمة',
      phaseThreeDetail7: 'التعاون مع جهات حكومية وخاصة',
      phaseThreeDetail8: 'تقديم عروض أسعار لمشاريع البنية التحتية بمدينة رشيد',
      phaseThreeDetail9: 'التعاون مع وزارة الموارد المائية والري وشركات قطاع البترول والغاز',
      phaseFourTitle: 'التمويل والدعم والرؤية المستقبلية',
      phaseFourDetail1: 'التمويل الذاتي: استثمار شخصي وتمويل من الشركاء المؤسسين',
      phaseFourDetail2: 'المنح والدعم الحكومي',
      phaseFourDetail3: 'التقديم على برامج دعم الصناعات الصغيرة والمتوسطة',
      phaseFourDetail4: 'دعم جهاز تنمية المشروعات الصغيرة والمتوسطة',
      phaseFourDetail5: 'دعم وزارة الصناعة والتجارة',
      phaseFourDetail6: 'دعم البنك الأهلي المصري / بنك التنمية الاجتماعية',
      phaseFourDetail7: 'شراكات استراتيجية: التعاون مع شركات تصنيع المعادن والأنابيب',
      phaseFourDetail8: 'التعاون مع الجامعات والمعاهد البحثية لتطوير المنتجات',
      phaseFourDetail9: 'الرؤية المستقبلية: إنشاء ورشة متكاملة لتصنيع الوحدات الخفيفة والمتوسطة',
      phaseFourDetail10: 'تصنيع وحدات عائمة وصنادل وسفن متخصصة ويخوت سياحية',
      phaseFourDetail11: 'تقديم خدمات الصيانة والإصلاح البحري',
      phaseFourDetail12: 'المشاركة في مشاريع البنية التحتية المائية (سدود عائمة، أرصفة، حوائط ساندة)',
      phaseFourDetail13: 'التصدير للدول المجاورة (ليبيا، السودان، السعودية، ودخول السوق الأوروبي)',
      readyToGetStarted: 'هل أنت مستعد للبدء؟',
      processCTA: 'تواصل معنا اليوم للحصول على استشارة مجانية ودع فريقنا الخبير يهتم بجميع احتياجاتك البحرية.',
      getFreeQuote: 'احصل على عرض سعر مجاني',
      galleryTitle: 'معرض أعمالنا',
      testimonial1_name: 'الكابتن جيمس ميتشل',
      testimonial1_role: 'مالك يخت',
      testimonial1_text: 'تتولى خدمات أكوامارين صيانة يختي بطول 45 قدمًا لأكثر من 8 سنوات. اهتمامهم بالتفاصيل واحترافيتهم لا مثيل لهما. أثق بهم تمامًا في قاربي.',
      testimonial1_location: 'مارينا باي',
      testimonial2_name: 'سارة طومسون',
      testimonial2_role: 'مالكة قارب صيد',
      testimonial2_text: 'عندما تعطل المحرك على بعد 20 ميلاً من الشاطئ، أنقذتني خدمة الطوارئ من أكوامارين. أعادوني إلى الماء خلال ساعات. خدمة استثنائية وأسعار عادلة.',
      testimonial2_location: 'هاربر بوينت',
      testimonial3_name: 'مايكل رودريغيز',
      testimonial3_role: 'مدير أسطول تجاري',
      testimonial3_text: 'بصفتي مديرًا لأسطول من 12 سفينة، أحتاج إلى شركاء خدمة موثوقين. أكوامارين تقدم دائمًا عملاً عالي الجودة في الوقت المحدد وضمن الميزانية. هم شركاؤنا المفضلون.',
      testimonial3_location: 'الميناء التجاري',
      testimonial4_name: 'ليزا تشين',
      testimonial4_role: 'هاوية إبحار شراعي',
      testimonial4_text: 'أعاد فريق أكوامارين قارب الإبحار الكلاسيكي الخاص بي إلى حالة أفضل من الجديدة. حرفيتهم ومعرفتهم بالقوارب الكلاسيكية رائعة. أنصح بهم بشدة!',
      testimonial4_location: 'مارينا الغروب',
      ourServices: {
        title: 'خدماتنا',
        subtitle: 'نقدم مجموعة متكاملة من الخدمات في مجال الإنشاءات البحرية، بما في ذلك:',
        service1: {
          title: 'تصميم وتصنيع',
          desc: 'تصميم وتصنيع وحدات بحرية خفيفة إلى متوسطة (صنادل فولاذية، قوارب عمل، منصات عائمة) حسب المواصفات.'
        },
        service2: {
          title: 'إصلاح وصيانة بحرية',
          desc: 'خدمات إصلاح وصيانة شاملة للوحدات البحرية لضمان السلامة والموثوقية التشغيلية.'
        },
        service3: {
          title: 'البنية التحتية الساحلية',
          desc: 'إنتاج جدران الأرصفة، محطات الضخ، والأرصفة العائمة لبنية تحتية ساحلية متينة.'
        },
        service4: {
          title: 'خدمات الدعم',
          desc: 'دعم أعمال التكريك، الخدمات اللوجستية، والعمليات البحرية الخارجية لتنفيذ المشاريع بسلاسة.'
        },
        note1: 'جميع الخدمات تُقدم وفقًا للمعايير البحرية الدولية — وبأسعار',
        note2: 'فعّالة من حيث التكلفة',
        note3: 'توازن بين القيمة طويلة الأمد والتميز الفني.'
      },
      whyPolaris: {
        title: 'لماذا بولاريس؟',
        subtitle: 'اكتشف ما يميزنا في مجال الإنشاءات البحرية.',
        reason1: {
          title: 'موقع استراتيجي',
          desc: 'في رشيد – مدينة ذات تاريخ بحري وصناعي عريق.'
        },
        reason2: {
          title: 'قيادة ذات خبرة',
          desc: 'قيادة تجمع بين العمق العملي والهندسي.'
        },
        reason3: {
          title: 'حلول عالية الجودة',
          desc: 'حلول بحرية بأسعار تنافسية.'
        },
        reason4: {
          title: 'التزام كامل',
          desc: 'بالمعايير البيئية والصناعية.'
        },
        reason5: {
          title: 'تسليم يركز على العميل',
          desc: 'تسليم بنتائج واقعية وملموسة.'
        },
      },
      futureVision: {
        title: 'رؤيتنا المستقبلية',
        subtitle: 'بعد نجاح عملياتنا الأولية، تستعد بولاريس للتوسع في:',
        vision1: {
          title: 'منشأة تصنيع بحرية',
          desc: 'إنشاء منشأة تصنيع بحرية مجهزة بالكامل.'
        },
        vision2: {
          title: 'تصنيع السفن',
          desc: 'تصنيع سفن لقطاعات السياحة، النفط والغاز، والخدمات.'
        },
        vision3: {
          title: 'البنية التحتية الساحلية',
          desc: 'تنفيذ مشاريع بنية تحتية ساحلية واسعة النطاق.'
        },
        vision4: {
          title: 'شراكات استراتيجية',
          desc: 'شراكة مع الجهات الحكومية والعملاء الدوليين.'
        },
        vision5: {
          title: 'التوسع في التصدير',
          desc: 'التصدير إلى أسواق مستهدفة تشمل السعودية، ليبيا، السودان، وأوروبا.'
        },
      },
      footer: {
        companyName: 'بولاريس مارين',
        companyDesc: 'تقدم بولاريس مارين خدمات إنشاءات بحرية عالمية المستوى، وسفن مصممة بدقة، وحلول بحرية موثوقة. نبني الثقة عبر البحار بالخبرة والابتكار.',
        servicesTitle: 'الخدمات',
        services: [
          'الإنشاءات البحرية',
          'بناء السفن',
          'صيانة السفن',
          'الهندسة البحرية',
          'خدمات الموانئ',
        ],
        quickLinksTitle: 'روابط سريعة',
        quickLinks: [
          'الرئيسية',
          'الخدمات',
          'من نحن',
          'المعرض',
          'المراحل',
          'اتصل بنا',
        ],
        contactTitle: 'معلومات التواصل',
        phone: '+20 111 111 1206',
        email: 'info@polarismarine.com',
        address: {
          line1: 'رشيد (روزيتا)',
          line2: 'مصر',
        },
        rights: 'جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
        cookies: 'سياسة الكوكيز',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

// Helper to set dir attribute
function setDirByLang(lng: string) {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
}

// Set dir on initial load
setDirByLang(i18n.language);

// Set dir attribute on language change
i18n.on('languageChanged', (lng) => {
  setDirByLang(lng);
});

export default i18n; 