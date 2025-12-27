import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    "nav.howItWorks": "Nasıl kullanılır?",
    "nav.faq": "SSS",
    "nav.businessRegister": "İşletme Kayıt",
    "nav.businessLogin": "İşletme Giriş",
    "nav.privacy": "Gizlilik",
    "nav.contact": "İletişim",
    
    // Hero Section
    "hero.badge": "İndirimlerle Dolu Bir Dünya",
    "hero.title1": "Her Saat",
    "hero.title2": "Bir Fırsat",
    "hero.subtitle": "İşletmeler ve kullanıcılar için akıllı indirim platformu. Yakınındaki en iyi fırsatları keşfet, anında kazan.",
    "hero.stat1": "Aktif Kampanya",
    "hero.stat2": "Mutlu Müşteri",
    "hero.stat3": "Toplam Tasarruf",
    "hero.stat4": "Partner İşletme",
    
    // World of Discounts
    "world.title": "İndirimlerle Dolu Bir Dünya",
    "world.description": "diKey, bulunduğun konum ve saate göre en avantajlı indirimleri anında keşfetmeni sağlayan akıllı bir fırsat platformudur. Kafe, restoran, mağaza ve daha birçok işletmedeki özel teklifleri senin için bir araya getirir; daha az ödeyerek daha fazlasını deneyimlemeni sağlar. Hemen ücretsiz indir, sana en yakın fırsatları keşfet ve indirim kazanmaya şimdi başla.",
    "world.feature1.title": "Kolay Kullanım",
    "world.feature1.desc": "Basit arayüz ile anında fırsatları keşfet",
    "world.feature2.title": "Güvenli Platform",
    "world.feature2.desc": "KVKK uyumlu, şifreli veri yönetimi",
    "world.feature3.title": "Geniş Ağ",
    "world.feature3.desc": "Yüzlerce partner işletme ile büyüyen ekosistem",
    
    // Discount Hours
    "discount.badge": "Akıllı Zamanlama",
    "discount.title": "Uygun İndirimli Saatler",
    "discount.description": "diKey, \"Uygun indirimli saatler\" ile belirli zaman aralıklarında en avantajlı hizmet ve ürünleri sunar. Kullanıcılar uygulamayı açarak kendilerine en yakın işletmelerin özel fırsatlarını anında görebilir.",
    "discount.benefit1.title": "Bütçe dostu",
    "discount.benefit1.desc": "Cebine uygun fırsatlar",
    "discount.benefit2.title": "Yeni mekanlar keşfetme",
    "discount.benefit2.desc": "Yakınındaki işletmeleri bul",
    "discount.benefit3.title": "Zamana özel fırsatlar",
    "discount.benefit3.desc": "En avantajlı saatlerde indirim",
    "discount.activeDeals": "Şu an aktif fırsatlar",
    
    // Every Pocket
    "pocket.title1": "di",
    "pocket.titleK": "K",
    "pocket.title2": "ey Her Cebe Lazım",
    "pocket.description": "diKey; kafe, restoran, mağaza, plaj ve birçok farklı mekânda sunulan özel indirimlerle her cebin vazgeçilmezidir.",
    "pocket.cafe": "Kafe",
    "pocket.restaurant": "Restoran",
    "pocket.store": "Mağaza",
    "pocket.beach": "Plaj",
    "pocket.more": "Ve daha fazlası",
    "pocket.earn": "₺ Kazan & Tasarruf Et",
    
    // Catch Section
    "catch.title1": "Kaçırma,",
    "catch.title2": "Yakala,",
    "catch.title3": "Kazan!",
    "catch.description": "Fırsatlar beklemez. Sen de hızlı ol, en iyi indirimleri yakala!",
    
    // How It Works
    "how.title": "Nasıl Çalışır?",
    "how.subtitle": "Hem işletmeler hem de kullanıcılar için basit adımlarla başla",
    "how.forBusiness": "İşletmeler için",
    "how.forUsers": "Kullanıcılar için",
    "how.b1.title": "Kayıt ol",
    "how.b1.desc": "İşletmeni hızlıca kaydet",
    "how.b2.title": "Fırsat saatlerini belirle",
    "how.b2.desc": "İndirimli saatleri ayarla",
    "how.b3.title": "QR okut",
    "how.b3.desc": "Müşteri QR kodunu tara",
    "how.b4.title": "Anında indirim sun",
    "how.b4.desc": "Otomatik indirim uygula",
    "how.u1.title": "Uygulamayı indir",
    "how.u1.desc": "iOS veya Android'den indir",
    "how.u2.title": "Fırsatını seç",
    "how.u2.desc": "Yakınındaki fırsatları keşfet",
    "how.u3.title": "QR kod okut",
    "how.u3.desc": "İşletmede QR kodu göster",
    "how.u4.title": "İndirimin tadını çıkar",
    "how.u4.desc": "Anında tasarruf et",
    
    // Advantages
    "adv.title": "Herkes İçin Avantajlar",
    "adv.subtitle": "İşletmeler gelirlerini artırır, kullanıcılar tasarruf eder",
    "adv.forBusiness": "İşletmeler İçin",
    "adv.forUsers": "Kullanıcılar İçin",
    "adv.b1.title": "Boş saatleri gelir fırsatına çevirme",
    "adv.b1.desc": "Düşük trafikli saatlerde müşteri çekin",
    "adv.b2.title": "Sadık müşteri oluşturma",
    "adv.b2.desc": "Tekrar gelen müşterilerle büyüyün",
    "adv.b3.title": "Anlık kampanya yönetimi",
    "adv.b3.desc": "Fırsatları gerçek zamanlı düzenleyin",
    "adv.u1.title": "Kaliteli işletmelerde özel fırsatlar",
    "adv.u1.desc": "Seçkin mekanlarda indirimli deneyim",
    "adv.u2.title": "Konuma göre indirim keşfi",
    "adv.u2.desc": "Yakınındaki en iyi fırsatları bul",
    "adv.u3.title": "Güvenilir indirim deneyimi",
    "adv.u3.desc": "Onaylı ve güvenli işletmeler",
    
    // Partner Section
    "partner.title": "Avantaj Zincirimiz",
    "partner.subtitle": "Güvenilir işletmelerle büyüyen avantaj ekosistemi.",
    
    // Security
    "security.title": "Güvenlik ve Altyapı",
    "security.subtitle": "Verileriniz en üst düzey güvenlik standartlarıyla korunur",
    "security.f1.title": "KVKK uyumlu veri yönetimi",
    "security.f1.desc": "Tüm verileriniz yasal düzenlemelere uygun şekilde işlenir",
    "security.f2.title": "Şifrelenmiş bilgiler",
    "security.f2.desc": "End-to-end şifreleme ile maksimum güvenlik",
    "security.f3.title": "Yüksek performanslı sunucular",
    "security.f3.desc": "Kesintisiz hizmet için enterprise altyapı",
    "security.badge1": "SSL Sertifikalı",
    "security.badge2": "KVKK Uyumlu",
    "security.badge3": "256-bit Şifreleme",
    "security.badge4": "99.9% Uptime",
    
    // Statistics
    "stats.title": "Rakamlarla diKey",
    "stats.subtitle": "Güven ve başarının somut göstergeleri",
    
    // CTA
    "cta.title": "Fırsatı Kaçırma",
    "cta.subtitle": "Size en yakın fırsatlar, sürpriz özel indirimler",
    
    // FAQ
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.subtitle": "Merak ettiğiniz her şey burada",
    "faq.q1": "diKey nedir?",
    "faq.a1": "diKey, işletmelerin boş saatlerini değerlendirmesini ve kullanıcıların yakınlarındaki en iyi indirimleri keşfetmesini sağlayan akıllı bir indirim platformudur. Hem işletmeler hem de kullanıcılar için kazan-kazan çözümü sunar.",
    "faq.q2": "Gizlilik ve KVKK hakkında bilgi alabilir miyim?",
    "faq.a2": "diKey, kullanıcı gizliliğine büyük önem verir. Tüm kişisel veriler KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında işlenir ve korunur. Verileriniz 256-bit şifreleme ile güvence altındadır ve üçüncü taraflarla paylaşılmaz.",
    "faq.q3": "Hesabımı nasıl silebilirim?",
    "faq.a3": "Hesabınızı silmek için uygulama içindeki Ayarlar > Hesap > Hesabı Sil seçeneğini kullanabilirsiniz. Alternatif olarak info@diKey.app adresine e-posta göndererek hesap silme talebinde bulunabilirsiniz. İşlem 48 saat içinde tamamlanır.",
    
    // Footer
    "footer.tagline": "İndirimlerle dolu bir dünya. Her saat bir fırsat ile yakınındaki en iyi fırsatları keşfet.",
    "footer.contact": "İletişim",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.copyright": "© 2025 DiscounTurkey. Tüm hakları saklıdır.",
    
    // Marquee
    "marquee.1": "İndirimlerle Dolu Bir Dünya",
    "marquee.2": "Her Saat Bir Fırsat",
    "marquee.3": "Kaçırma · Yakala · Kazan",
  },
  en: {
    // Navbar
    "nav.howItWorks": "How it works",
    "nav.faq": "FAQ",
    "nav.businessRegister": "Business",
    "nav.businessLogin": "Business Login",
    "nav.privacy": "Privacy",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.badge": "A World Full of Discounts",
    "hero.title1": "Every Hour",
    "hero.title2": "An Opportunity",
    "hero.subtitle": "Smart discount platform for businesses and users. Discover the best deals near you, win instantly.",
    "hero.stat1": "Active Campaigns",
    "hero.stat2": "Happy Customers",
    "hero.stat3": "Total Savings",
    "hero.stat4": "Partner Businesses",
    
    // World of Discounts
    "world.title": "A World Full of Discounts",
    "world.description": "diKey is a smart opportunity platform that lets you instantly discover the best discounts based on your location and time. It brings together special offers from cafes, restaurants, stores, and many other businesses so you can experience more while paying less. Download for free, find the closest deals, and start saving now.",
    "world.feature1.title": "Easy to Use",
    "world.feature1.desc": "Discover deals instantly with a simple interface",
    "world.feature2.title": "Secure Platform",
    "world.feature2.desc": "GDPR compliant, encrypted data management",
    "world.feature3.title": "Wide Network",
    "world.feature3.desc": "Growing ecosystem with hundreds of partner businesses",
    
    // Discount Hours
    "discount.badge": "Smart Timing",
    "discount.title": "Discounted Happy Hours",
    "discount.description": "diKey offers the most advantageous services and products at specific time intervals with \"Discounted happy hours\". Users can instantly see special offers from the nearest businesses by opening the app.",
    "discount.benefit1.title": "Budget-friendly",
    "discount.benefit1.desc": "Deals that fit your pocket",
    "discount.benefit2.title": "Discover new places",
    "discount.benefit2.desc": "Find businesses near you",
    "discount.benefit3.title": "Time-based deals",
    "discount.benefit3.desc": "Discounts at the best hours",
    "discount.activeDeals": "Currently active deals",
    
    // Every Pocket
    "pocket.title1": "di",
    "pocket.titleK": "K",
    "pocket.title2": "ey for Every Pocket",
    "pocket.description": "diKey is essential for every pocket with special discounts offered at cafes, restaurants, stores, beaches and many different venues.",
    "pocket.cafe": "Cafe",
    "pocket.restaurant": "Restaurant",
    "pocket.store": "Store",
    "pocket.beach": "Beach",
    "pocket.more": "And more",
    "pocket.earn": "₺ Earn & Save",
    
    // Catch Section
    "catch.title1": "Don't Miss,",
    "catch.title2": "Catch,",
    "catch.title3": "Win!",
    "catch.description": "Opportunities don't wait. Be quick and catch the best discounts!",
    
    // How It Works
    "how.title": "How It Works",
    "how.subtitle": "Start with simple steps for both businesses and users",
    "how.forBusiness": "For Businesses",
    "how.forUsers": "For Users",
    "how.b1.title": "Sign up",
    "how.b1.desc": "Register your business quickly",
    "how.b2.title": "Set deal hours",
    "how.b2.desc": "Configure discounted hours",
    "how.b3.title": "Scan QR",
    "how.b3.desc": "Scan customer QR code",
    "how.b4.title": "Apply discount",
    "how.b4.desc": "Automatic discount applied",
    "how.u1.title": "Download the app",
    "how.u1.desc": "Download from iOS or Android",
    "how.u2.title": "Choose your deal",
    "how.u2.desc": "Discover deals near you",
    "how.u3.title": "Show QR code",
    "how.u3.desc": "Present QR at the business",
    "how.u4.title": "Enjoy your discount",
    "how.u4.desc": "Save instantly",
    
    // Advantages
    "adv.title": "Benefits for Everyone",
    "adv.subtitle": "Businesses increase revenue, users save money",
    "adv.forBusiness": "For Businesses",
    "adv.forUsers": "For Users",
    "adv.b1.title": "Turn slow hours into revenue",
    "adv.b1.desc": "Attract customers during low-traffic hours",
    "adv.b2.title": "Build loyal customers",
    "adv.b2.desc": "Grow with returning customers",
    "adv.b3.title": "Real-time campaign management",
    "adv.b3.desc": "Edit deals in real-time",
    "adv.u1.title": "Exclusive deals at quality venues",
    "adv.u1.desc": "Discounted experience at premium locations",
    "adv.u2.title": "Location-based discovery",
    "adv.u2.desc": "Find the best deals near you",
    "adv.u3.title": "Trusted discount experience",
    "adv.u3.desc": "Verified and secure businesses",
    
    // Partner Section
    "partner.title": "Our Partner Network",
    "partner.subtitle": "A growing ecosystem of trusted businesses.",
    
    // Security
    "security.title": "Security & Infrastructure",
    "security.subtitle": "Your data is protected with the highest security standards",
    "security.f1.title": "GDPR compliant data management",
    "security.f1.desc": "All your data is processed in compliance with regulations",
    "security.f2.title": "Encrypted information",
    "security.f2.desc": "Maximum security with end-to-end encryption",
    "security.f3.title": "High-performance servers",
    "security.f3.desc": "Enterprise infrastructure for uninterrupted service",
    "security.badge1": "SSL Certified",
    "security.badge2": "GDPR Compliant",
    "security.badge3": "256-bit Encryption",
    "security.badge4": "99.9% Uptime",
    
    // Statistics
    "stats.title": "diKey in Numbers",
    "stats.subtitle": "Concrete indicators of trust and success",
    
    // CTA
    "cta.title": "Don't Miss Out",
    "cta.subtitle": "The best deals near you, surprise special discounts",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you want to know is here",
    "faq.q1": "What is diKey?",
    "faq.a1": "diKey is a smart discount platform that enables businesses to utilize their slow hours and users to discover the best discounts nearby. It offers a win-win solution for both businesses and users.",
    "faq.q2": "Can I get information about privacy and GDPR?",
    "faq.a2": "diKey places great importance on user privacy. All personal data is processed and protected under GDPR regulations. Your data is secured with 256-bit encryption and is not shared with third parties.",
    "faq.q3": "How can I delete my account?",
    "faq.a3": "To delete your account, you can use the Settings > Account > Delete Account option in the app. Alternatively, you can send an email to info@diKey.app to request account deletion. The process is completed within 48 hours.",
    
    // Footer
    "footer.tagline": "A world full of discounts. Discover the best deals near you with an opportunity every hour.",
    "footer.contact": "Contact",
    "footer.quickLinks": "Quick Links",
    "footer.copyright": "© 2025 DiscounTurkey. All rights reserved.",
    
    // Marquee
    "marquee.1": "A World Full of Discounts",
    "marquee.2": "Every Hour An Opportunity",
    "marquee.3": "Don't Miss · Catch · Win",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("diKey-lang");
      return (saved as Language) || "tr";
    }
    return "tr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("diKey-lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;

