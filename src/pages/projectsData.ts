import { ProjectType } from '../hooks/project';

const getProjectsData = (isRTL: boolean): Record<string, ProjectType> => {
  return {
    'luxury-villa': {
      title: isRTL ? 'مسجد الرحمة' : 'Al-Rahma Mosque',
      subtitle: isRTL ? 'جدة, المملكة العربية السعودية' : 'Jeddah, KSA',
      description: isRTL
        ? ' مشروع اضاءة لمسجد الرحمة في جدة شامل الديكورات وتركيب الهلال وانارة المسجدة وتركيب عدد 6 نجفات كلاسيكية اسلامية فاخرة .'
        : 'Al-Rahma Mosque lighting project, including decorations, installation of the crescent, illumination of the mosque, and installation of 6 chandeliers.',
      year: '2023',
      category: isRTL ? 'مساجد' : 'Mosque',
      client: isRTL ? 'دار المعمار' : 'darmamar.',
      location: isRTL ? 'جدة, المملكة العربية السعودية' : 'Jeddah, KSA',
      mainImage: '/projects-page/mosque/into-cover.jpg',
      gallery: [
        '/projects-page/mosque/11.jpg',
        '/projects-page/mosque/9.jpg',
        '/projects-page/mosque/3.jpg',
        '/projects-page/mosque/6.jpg',
        '/projects-page/mosque/13.jpg',
        '/projects-page/mosque/12.jpg',
      ],
      details: [
        {
          title: isRTL ? 'التصميم المعماري' : 'Architectural Design',
          content: isRTL
            ? 'تم تصميم نظام الإضاءة بما يتناغم مع الطابع الإسلامي الفريد للمسجد، مع إبراز العناصر الزخرفية والمعمارية التقليدية مثل الأقواس والقباب والمقرنصات. الهدف كان تعزيز روحانية المكان وإبراز جماليته المعمارية بطريقة راقية ومهيبة.'
            : 'The lighting was designed to highlight the unique architectural elements of the villa, focusing on clean lines and precise angles.'
        },
        {
          title: isRTL ? 'إضاءة الواجهة' : 'Facade Lighting',
          content: isRTL
            ? 'استخدمنا مزيجاً من الإضاءة الجدارية والإضاءة المخفية لتسليط الضوء على النقوش الإسلامية والتفاصيل الحجرية الدقيقة'
            : 'We used a combination of linear and point lighting to highlight architectural details and create visual depth.'
        },
        {
          title: isRTL ? 'إضاءة داخلية' : 'Interior Lighting',
          content: isRTL ? " الإضاءة الداخلية وُزعت بطريقة مدروسة لتوفير جو روحاني هادئ أثناء الصلاة، مع التركيز على قاعة الصلاة الرئيسية، تم اختيار نجف إسلامي فخم يعكس روح الأصالة والفن الإسلامي، مع مراعاة التوازن بين الجمال والوظيف"
            : 'A luxurious Islamic chandelier was chosen that reflects the spirit of originality and Islamic art, taking into account the balance between beauty and function.'
        }
      ]
    },
    'commercial-plaza': {
      title: isRTL ? 'بلازا تجارية' : 'Commercial Plaza',
      subtitle: isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      description: isRTL
        ? 'مشروع إضاءة لبلازا تجارية في الرياض، يركز على خلق تجربة تسوق مميزة من خلال الإضاءة الذكية والمبتكرة. تم تصميم الإضاءة لتعزيز هوية العلامة التجارية وخلق بيئة جذابة للزوار.'
        : 'A lighting project for a commercial plaza in Riyadh, focusing on creating a distinctive shopping experience through smart and innovative lighting. The lighting was designed to enhance brand identity and create an attractive environment for visitors.',
      year: '2024',
      category: isRTL ? 'تجاري' : 'Commercial',
      client: isRTL ? 'مجموعة الاستثمار العقاري' : 'Real Estate Investment Group',
      location: isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      mainImage: '/projects-page/mall/landpage.jpg',
      gallery: [
        '/projects-page/mall/cropped-WhatsApp-Image-2025-02-28-at-3.05.44-PM.jpg',
        '/projects-page/mall/IMG_7395-scaled.jpg',
        '/projects-page/mall/Customized-Large-Luxury-K9-Crystal-Chandeliers-Pendant-Light-Pefect-for-Shopping-Mall-Hotel-Stairs.jpg',
        '/projects-page/mall/High-Quality-Custom-Project-Mall-Hotel-Lobby-Large-Glass-Modern-Chandelier-Light (1).jpg',
        '/projects-page/mall/p1-1000x1000.jpg',
        '/projects-page/mall/16.jpg',
      ],
      details: [
        {
          title: isRTL ? 'إضاءة الواجهة' : 'Facade Lighting',
          content: isRTL
            ? 'تم تصميم إضاءة الواجهة لجذب الانتباه وإبراز الهوية المعمارية للمبنى، مع استخدام تقنيات الإضاءة الديناميكية.'
            : 'The facade lighting was designed to attract attention and highlight the architectural identity of the building, using dynamic lighting techniques.'
        },
        {
          title: isRTL ? 'إضاءة المناطق العامة' : 'Common Area Lighting',
          content: isRTL
            ? 'تم تصميم إضاءة المناطق العامة لخلق تجربة تسوق مريحة وممتعة، مع التركيز على سهولة التنقل وجاذبية المكان.'
            : 'Common area lighting was designed to create a comfortable and enjoyable shopping experience, focusing on ease of navigation and attractiveness.'
        },
        {
          title: isRTL ? 'التحكم في الإضاءة' : 'Lighting Control',
          content: isRTL
            ? 'تم تركيب نظام تحكم متقدم في الإضاءة للسماح بتغيير مستويات الإضاءة والألوان لمناسبات وأحداث مختلفة.'
            : 'An advanced lighting control system was installed to allow for changing lighting levels and colors for different occasions and events.'
        }
      ]
    },
    'hotel-lobby': {
      title: isRTL ? 'بهو فندق' : 'Hotel Lobby',
      subtitle: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      description: isRTL
        ? 'مشروع إضاءة لبهو فندق فاخر في جدة، يركز على خلق انطباع أول مذهل للضيوف. تم استخدام ثريات كريستالية مخصصة وإضاءة جدارية فنية لخلق أجواء فاخرة ودافئة.'
        : 'A lighting project for a luxury hotel lobby in Jeddah, focusing on creating a stunning first impression for guests. Custom crystal chandeliers and artistic wall lighting were used to create a luxurious and warm atmosphere.',
      year: '2025',
      category: isRTL ? 'ضيافة' : 'Hospitality',
      client: isRTL ? 'مجموعة فنادق الشرق' : 'East Hotels Group',
      location: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      mainImage: '/projects-page/hotel/IMG_7388-1-scaled.jpg',
      gallery: [
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.21-PM-1.jpg',
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.21-PM.jpg',
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.19-PM-1.jpg',
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.19-PM.jpg',
        '/projects-page/hotel/property-image_7H9Bo1ONxZFC0Tl.jpg',
        '/projects-page/hotel/IMG_7398-scaled.jpg',
        '/projects-page/hotel/IMG_7397-scaled.jpg',
        '/projects-page/hotel/25.jpg',
      ],
      details: [
        {
          title: isRTL ? 'الثريات المركزية' : 'Central Chandeliers',
          content: isRTL
            ? 'تم تصميم وتنفيذ ثريات كريستالية مخصصة لتكون نقطة محورية في البهو، مما يعكس فخامة وأناقة الفندق.'
            : 'Custom crystal chandeliers were designed and implemented to be a focal point in the lobby, reflecting the luxury and elegance of the hotel.'
        },
        {
          title: isRTL ? 'إضاءة الجدران' : 'Wall Lighting',
          content: isRTL
            ? 'تم استخدام إضاءة جدارية فنية لخلق عمق وإضافة لمسات من الدفء والفخامة إلى المساحة.'
            : 'Artistic wall lighting was used to create depth and add touches of warmth and luxury to the space.'
        },
        {
          title: isRTL ? 'إضاءة غير مباشرة' : 'Indirect Lighting',
          content: isRTL
            ? 'تم استخدام الإضاءة غير المباشرة لتحسين الارتفاع وإضافة طبقات من الضوء، مما يخلق أجواء دافئة ومريحة.'
            : 'Indirect lighting was used to enhance height and add layers of light, creating a warm and comfortable atmosphere.'
        }
      ]
    },
    'interior-design': {
      title: isRTL ? 'التصميم الداخلي' : 'Interior Design',
      subtitle: isRTL ? 'السعودية , نيوم' : 'Neom, Saudi Arabia',
      description: isRTL
        ? 'مشروع تصميم داخلي لمنزل فاخر في الدوحة يجمع بين الأناقة العصرية والعناصر التقليدية. تم التركيز على استخدام مواد طبيعية فاخرة وإضاءة متخصصة لإبراز جمال المساحات المختلفة.'
        : 'An interior design project for a luxury home in Neom that combines modern elegance with traditional elements. The focus was on using premium natural materials and specialized lighting to enhance the beauty of different spaces.',
      year: '2024',
      category: isRTL ? 'سكني' : 'Residential',
      client: isRTL ? 'عائلة محمد' : 'Mohammed Family',
      location: isRTL ? 'نيوم الجديدة ' : 'Neom, The lINE',
      mainImage: '/projects-page/Interior/incover.jpg',
      gallery: [
        '/projects-page/Interior/incover.jpg',
        '/projects-page/Interior/Interior1.jpg',
        '/projects-page/Interior/Interior2.jpg',
        '/projects-page/Interior/Interior3.1.jpg',
        '/projects-page/Interior/Interior3.jpg',
        '/projects-page/Interior/Interior5.jpg',
        '/projects-page/Interior/18.jpg',
      ],
      details: [
        {
          title: isRTL ? 'المواد الطبيعية' : 'Natural Materials',
          content: isRTL
            ? 'تم استخدام مجموعة متنوعة من المواد الطبيعية مثل الرخام والخشب والحجر لإضفاء الدفء والأصالة على المساحات.'
            : 'A variety of natural materials such as marble, wood, and stone were used to add warmth and authenticity to the spaces.'
        },
        {
          title: isRTL ? 'تصميم الإضاءة' : 'Lighting Design',
          content: isRTL
            ? 'تم تصميم نظام إضاءة متعدد الطبقات يجمع بين الإضاءة المحيطة والمهام والتأكيد لإنشاء مساحات جذابة ووظيفية.'
            : 'A multi-layered lighting system was designed combining ambient, task, and accent lighting to create appealing and functional spaces.'
        },
        {
          title: isRTL ? 'اللمسات الثقافية' : 'Cultural Touches',
          content: isRTL
            ? 'تم دمج العناصر الثقافية التقليدية مع التصميم العصري لإنشاء مساحة تعكس هوية المالك مع الحفاظ على الأناقة العصرية.'
            : 'Traditional cultural elements were integrated with modern design to create a space that reflects the owner\'s identity while maintaining contemporary elegance.'
        }
      ]
    }
  };
};

export default getProjectsData;