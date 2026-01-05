import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import WorldOfDiscounts from "@/components/sections/WorldOfDiscounts";
import AdShowcase from "@/components/sections/AdShowcase";
import DiscountHours from "@/components/sections/DiscountHours";
import EveryPocket from "@/components/sections/EveryPocket";
import CatchSection from "@/components/sections/CatchSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Advantages from "@/components/sections/Advantages";
import PartnerCarousel from "@/components/sections/PartnerCarousel";
import Security from "@/components/sections/Security";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const { language } = useLanguage();
  
  const seoContent = {
    tr: {
      title: "diKey - Her Saat Bir Fırsat | İndirimlerle Dolu Bir Dünya",
      description: "diKey ile yakınındaki en iyi indirim fırsatlarını keşfet. İşletmeler ve kullanıcılar için akıllı indirim platformu. Bütçe dostu, zamana özel fırsatlar.",
      keywords: "indirim, fırsat, kampanya, diKey, discount, kupon, antalya, türkiye",
      ogTitle: "diKey - Her Saat Bir Fırsat",
      ogDescription: "İşletmeler ve kullanıcılar için akıllı indirim platformu. Yakınındaki en iyi fırsatları keşfet."
    },
    en: {
      title: "diKey - Every Hour An Opportunity | A World Full of Discounts",
      description: "Discover the best discount opportunities near you with diKey. Smart discount platform for businesses and users. Budget-friendly, time-specific deals.",
      keywords: "discount, deals, campaign, diKey, coupon, antalya, turkey, savings",
      ogTitle: "diKey - Every Hour An Opportunity",
      ogDescription: "Smart discount platform for businesses and users. Discover the best deals near you."
    },
    de: {
      title: "diKey - Jede Stunde eine Chance | Eine Welt voller Rabatte",
      description: "Entdecke die besten Rabattangebote in deiner Nähe mit diKey. Intelligente Rabattplattform für Unternehmen und Nutzer. Budgetfreundliche, zeitlich begrenzte Angebote.",
      keywords: "rabatt, angebote, kampagne, diKey, gutschein, antalya, türkei, sparen",
      ogTitle: "diKey - Jede Stunde eine Chance",
      ogDescription: "Intelligente Rabattplattform für Unternehmen und Nutzer. Entdecke die besten Angebote in deiner Nähe."
    },
    ru: {
      title: "diKey - Каждый час новая возможность | Мир, полный скидок",
      description: "Открой лучшие предложения рядом с собой с diKey. Умная платформа скидок для бизнеса и пользователей. Доступные предложения, привязанные ко времени.",
      keywords: "скидки, предложения, кампания, diKey, купон, анталья, турция, экономия",
      ogTitle: "diKey - Каждый час новая возможность",
      ogDescription: "Умная платформа скидок для бизнеса и пользователей. Открой лучшие предложения рядом с собой."
    }
  };

  const seo = seoContent[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://diKey.app" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <MarqueeSection />
        <WorldOfDiscounts />
        <AdShowcase />
        <DiscountHours />
        <EveryPocket />
        <CatchSection />
        <HowItWorks />
        <Advantages />
        <PartnerCarousel />
        <Security />
        <CTASection />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;
