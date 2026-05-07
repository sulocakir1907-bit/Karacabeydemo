export type Locale = 'en' | 'tr' | 'ru'

export const locales: Locale[] = ['en', 'tr', 'ru']
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    nav: {
      collections: 'Collections',
      heritage: 'Heritage',
      atelier: 'Atelier',
      contact: 'Contact',
    },
    hero: {
      slide1: {
        title: 'The Art of Modern Texture',
        subtitle: 'Discover 3D Printed Satin that redefines elegance',
      },
      slide2: {
        title: 'Elevating Every Occasion',
        subtitle: 'Curated collections for exquisite living',
      },
      slide3: {
        title: 'Woven Heritage',
        subtitle: 'Where tradition meets contemporary craft',
      },
      cta: 'Explore Collections',
    },
    collections: {
      title: 'The Gallery',
      subtitle: 'Curated Collections for Exquisite Living',
      explore: 'Explore',
      viewAll: 'View All Fabrics',
      filterBy: 'Filter by',
      categories: {
        velvet: {
          name: 'Velvet',
          description: 'Sumptuous textures that whisper luxury',
        },
        satin: {
          name: '3D Satin',
          description: 'Revolutionary textures, timeless elegance',
        },
        linen: {
          name: 'Premium Linen',
          description: 'Natural sophistication for refined spaces',
        },
        jacquard: {
          name: 'Jacquard',
          description: 'Intricate patterns woven with precision',
        },
        silk: {
          name: 'Silk Blend',
          description: 'The pinnacle of textile artistry',
        },
        tablecloth: {
          name: 'Table Linens',
          description: 'Dress your table in distinction',
        },
        chenille: {
          name: 'Chenille',
          description: 'Plush comfort for sophisticated interiors',
        },
        organza: {
          name: 'Organza',
          description: 'Ethereal sheers that dance with light',
        },
        taffeta: {
          name: 'Taffeta',
          description: 'Crisp elegance with lustrous sheen',
        },
        brocade: {
          name: 'Brocade',
          description: 'Opulent weaves fit for royalty',
        },
        damask: {
          name: 'Damask',
          description: 'Timeless patterns of refined heritage',
        },
        suede: {
          name: 'Suede',
          description: 'Velvety touch of modern luxury',
        },
      },
      groups: {
        all: 'All Fabrics',
        luxury: 'Luxury Collection',
        everyday: 'Everyday Elegance',
        upholstery: 'Upholstery',
        sheer: 'Sheer & Light',
      },
    },
    product: {
      styledFor: 'Styled for You',
      asCurtain: 'As Curtain',
      asCushion: 'As Cushion',
      asTablecloth: 'As Tablecloth',
      speakSpecialist: 'Speak with our Specialist',
      requestSample: 'Request Sample',
      viewCollection: 'View Full Collection',
      specifications: 'Specifications',
      specs: {
        width: 'Width',
        weight: 'Weight',
        composition: 'Composition',
        usage: 'Recommended Use',
        careInstructions: 'Care Instructions',
        colors: 'Available Colors',
        minOrder: 'Minimum Order',
        priceRange: 'Price Range',
      },
    },
    heritage: {
      title: 'Legacy of Excellence',
      subtitle: 'Three generations of mastering the art of textiles',
      logistics: {
        title: 'Global Logistics',
        description: 'Seamless delivery to Russia, CIS, and Europe',
      },
      quality: {
        title: 'Premium Quality',
        description: 'Hand-selected premium fibers',
      },
      legacy: {
        title: 'Heritage',
        description: 'Legacy of excellence since establishment',
      },
    },
    concierge: {
      title: 'Personal Concierge',
      subtitle: 'Our specialists are ready to assist you with custom orders and inquiries',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      messageTemplate: 'Hello Karaca Bey, I am captivated by the {product}. I would like to discuss a custom order for my home in {country}.',
    },
    footer: {
      tagline: 'Curated Collections for Exquisite Living',
      collections: 'Collections',
      company: 'Company',
      support: 'Support',
      aboutUs: 'About Us',
      ourStory: 'Our Story',
      careers: 'Careers',
      faq: 'FAQ',
      shipping: 'Shipping',
      returns: 'Returns',
      certifications: 'Premium Textile Certified • Global Shipping Partners',
      rights: 'All rights reserved.',
    },
  },
  tr: {
    nav: {
      collections: 'Koleksiyonlar',
      heritage: 'Miras',
      atelier: 'Atölye',
      contact: 'İletişim',
    },
    hero: {
      slide1: {
        title: 'Modern Dokunun Sanatı',
        subtitle: 'Zarafeti yeniden tanımlayan 3D Baskılı Saten',
      },
      slide2: {
        title: 'Her Anı Yücelten',
        subtitle: 'Seçkin yaşam için özenle seçilmiş koleksiyonlar',
      },
      slide3: {
        title: 'Dokuma Mirası',
        subtitle: 'Geleneğin çağdaş zanaatla buluştuğu yer',
      },
      cta: 'Koleksiyonları Keşfet',
    },
    collections: {
      title: 'Galeri',
      subtitle: 'Seçkin Yaşam İçin Özenle Seçilmiş Koleksiyonlar',
      explore: 'Keşfet',
      viewAll: 'Tüm Kumaşları Gör',
      filterBy: 'Filtrele',
      categories: {
        velvet: {
          name: 'Kadife',
          description: 'Lüksü fısıldayan muhteşem dokular',
        },
        satin: {
          name: '3D Saten',
          description: 'Devrimci dokular, zamansız zarafet',
        },
        linen: {
          name: 'Premium Keten',
          description: 'Rafine mekanlar için doğal sofistike',
        },
        jacquard: {
          name: 'Jakar',
          description: 'Hassasiyetle dokunan karmaşık desenler',
        },
        silk: {
          name: 'İpek Karışım',
          description: 'Tekstil sanatının zirvesi',
        },
        tablecloth: {
          name: 'Masa Örtüleri',
          description: 'Masanızı seçkinlikle giydirin',
        },
        chenille: {
          name: 'Şönil',
          description: 'Sofistike mekanlar için yumuşak konfor',
        },
        organza: {
          name: 'Organze',
          description: 'Işıkla dans eden eterik tüller',
        },
        taffeta: {
          name: 'Tafta',
          description: 'Parlak yüzeyli zarif sertlik',
        },
        brocade: {
          name: 'Brokar',
          description: 'Krallara layık görkemli dokumalar',
        },
        damask: {
          name: 'Şam Kumaşı',
          description: 'Rafine mirasın zamansız desenleri',
        },
        suede: {
          name: 'Süet',
          description: 'Modern lüksün kadifemsi dokunuşu',
        },
      },
      groups: {
        all: 'Tüm Kumaşlar',
        luxury: 'Lüks Koleksiyon',
        everyday: 'Günlük Zarafet',
        upholstery: 'Döşemelik',
        sheer: 'Tül & Hafif',
      },
    },
    product: {
      styledFor: 'Sizin İçin Tasarlandı',
      asCurtain: 'Perde Olarak',
      asCushion: 'Yastık Olarak',
      asTablecloth: 'Masa Örtüsü Olarak',
      speakSpecialist: 'Uzmanımızla Konuşun',
      requestSample: 'Numune Talep Et',
      viewCollection: 'Tüm Koleksiyonu Gör',
      specifications: 'Teknik Özellikler',
      specs: {
        width: 'En',
        weight: 'Ağırlık',
        composition: 'Kompozisyon',
        usage: 'Önerilen Kullanım',
        careInstructions: 'Bakım Talimatları',
        colors: 'Mevcut Renkler',
        minOrder: 'Minimum Sipariş',
        priceRange: 'Fiyat Aralığı',
      },
    },
    heritage: {
      title: 'Mükemmellik Mirası',
      subtitle: 'Üç nesil tekstil sanatına hakimiyet',
      logistics: {
        title: 'Küresel Lojistik',
        description: 'Rusya, BDT ve Avrupa\'ya sorunsuz teslimat',
      },
      quality: {
        title: 'Premium Kalite',
        description: 'El ile seçilmiş premium lifler',
      },
      legacy: {
        title: 'Miras',
        description: 'Kuruluşundan bu yana mükemmellik mirası',
      },
    },
    concierge: {
      title: 'Kişisel Danışman',
      subtitle: 'Uzmanlarımız özel siparişler ve sorularınız için hazır',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      messageTemplate: 'Merhaba Karaca Bey, {product} beni büyüledi. {country} için özel bir sipariş görüşmek istiyorum.',
    },
    footer: {
      tagline: 'Seçkin Yaşam İçin Özenle Seçilmiş Koleksiyonlar',
      collections: 'Koleksiyonlar',
      company: 'Şirket',
      support: 'Destek',
      aboutUs: 'Hakkımızda',
      ourStory: 'Hikayemiz',
      careers: 'Kariyer',
      faq: 'SSS',
      shipping: 'Kargo',
      returns: 'İadeler',
      certifications: 'Premium Tekstil Sertifikalı • Küresel Nakliye Ortakları',
      rights: 'Tüm hakları saklıdır.',
    },
  },
  ru: {
    nav: {
      collections: 'Коллекции',
      heritage: 'Наследие',
      atelier: 'Ателье',
      contact: 'Контакты',
    },
    hero: {
      slide1: {
        title: 'Искусство Современной Текстуры',
        subtitle: 'Откройте для себя 3D-печатный атлас, который переосмысливает элегантность',
      },
      slide2: {
        title: 'Возвышая Каждый Момент',
        subtitle: 'Избранные коллекции для изысканной жизни',
      },
      slide3: {
        title: 'Тканое Наследие',
        subtitle: 'Где традиция встречается с современным мастерством',
      },
      cta: 'Исследовать Коллекции',
    },
    collections: {
      title: 'Галерея',
      subtitle: 'Избранные Коллекции для Изысканной Жизни',
      explore: 'Исследовать',
      viewAll: 'Все Ткани',
      filterBy: 'Фильтр',
      categories: {
        velvet: {
          name: 'Бархат',
          description: 'Роскошные текстуры, шепчущие о роскоши',
        },
        satin: {
          name: '3D Атлас',
          description: 'Революционные текстуры, вечная элегантность',
        },
        linen: {
          name: 'Премиум Лён',
          description: 'Природная изысканность для утончённых пространств',
        },
        jacquard: {
          name: 'Жаккард',
          description: 'Сложные узоры, сотканные с точностью',
        },
        silk: {
          name: 'Шёлковая Смесь',
          description: 'Вершина текстильного искусства',
        },
        tablecloth: {
          name: 'Столовый Текстиль',
          description: 'Оденьте ваш стол в изысканность',
        },
        chenille: {
          name: 'Шенилл',
          description: 'Плюшевый комфорт для изысканных интерьеров',
        },
        organza: {
          name: 'Органза',
          description: 'Воздушная вуаль, танцующая со светом',
        },
        taffeta: {
          name: 'Тафта',
          description: 'Чёткая элегантность с блестящим отливом',
        },
        brocade: {
          name: 'Парча',
          description: 'Роскошные ткани, достойные королей',
        },
        damask: {
          name: 'Дамаск',
          description: 'Вечные узоры утончённого наследия',
        },
        suede: {
          name: 'Замша',
          description: 'Бархатистое прикосновение современной роскоши',
        },
      },
      groups: {
        all: 'Все Ткани',
        luxury: 'Люкс Коллекция',
        everyday: 'Повседневная Элегантность',
        upholstery: 'Обивочные',
        sheer: 'Прозрачные & Лёгкие',
      },
    },
    product: {
      styledFor: 'Стилизовано для Вас',
      asCurtain: 'Как Штора',
      asCushion: 'Как Подушка',
      asTablecloth: 'Как Скатерть',
      speakSpecialist: 'Связаться со Специалистом',
      requestSample: 'Запросить Образец',
      viewCollection: 'Смотреть Всю Коллекцию',
      specifications: 'Характеристики',
      specs: {
        width: 'Ширина',
        weight: 'Плотность',
        composition: 'Состав',
        usage: 'Рекомендуемое Применение',
        careInstructions: 'Уход',
        colors: 'Доступные Цвета',
        minOrder: 'Мин. Заказ',
        priceRange: 'Ценовая Категория',
      },
    },
    heritage: {
      title: 'Наследие Превосходства',
      subtitle: 'Три поколения мастерства в искусстве текстиля',
      logistics: {
        title: 'Глобальная Логистика',
        description: 'Бесшовная доставка в Россию, СНГ и Европу',
      },
      quality: {
        title: 'Премиум Качество',
        description: 'Отборные премиум волокна',
      },
      legacy: {
        title: 'Наследие',
        description: 'Наследие превосходства с момента основания',
      },
    },
    concierge: {
      title: 'Персональный Консьерж',
      subtitle: 'Наши специалисты готовы помочь с индивидуальными заказами и вопросами',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      messageTemplate: 'Здравствуйте Karaca Bey, меня покорил {product}. Хотел бы обсудить индивидуальный заказ для моего дома в {country}.',
    },
    footer: {
      tagline: 'Избранные Коллекции для Изысканной Жизни',
      collections: 'Коллекции',
      company: 'Компания',
      support: 'Поддержка',
      aboutUs: 'О Нас',
      ourStory: 'Наша История',
      careers: 'Карьера',
      faq: 'Вопросы',
      shipping: 'Доставка',
      returns: 'Возврат',
      certifications: 'Сертифицированный Премиум Текстиль • Глобальные Партнёры по Доставке',
      rights: 'Все права защищены.',
    },
  },
} as const

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
