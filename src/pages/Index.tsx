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
import { useMemo } from "react";

const Index = () => {
  const { language, t } = useLanguage();
  
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
    }
  };

  const seo = seoContent[language];

  const schemaMarkup = useMemo(() => {
    const baseUrl = "https://dikeyapp.com";
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "diKey",
      "alternateName": "diKey - Her Saat Bir Fırsat",
      "url": baseUrl,
      "logo": `${baseUrl}/dikey-logo.png`,
      "description": language === "tr" 
        ? "İşletmeler ve kullanıcılar için akıllı indirim platformu"
        : language === "en"
        ? "Smart discount platform for businesses and users"
        : "Intelligente Rabattplattform für Unternehmen und Nutzer",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@diKey.app",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://apps.apple.com/tr/app/diKey/id6753873918",
        "https://play.google.com/store/apps/details?id=com.dikey.discounturkey"
      ]
    };

    const mobileAppSchema = {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "diKey",
      "applicationCategory": "ShoppingApplication",
      "operatingSystem": ["iOS", "Android"],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "1000"
      },
      "applicationSubCategory": "Discount & Coupon App",
      "description": language === "tr"
        ? "Yakınındaki en iyi indirim fırsatlarını keşfet. QR kod ile anında indirim kazan."
        : language === "en"
        ? "Discover the best discount opportunities near you. Get instant discounts with QR code."
        : "Entdecke die besten Rabattangebote in deiner Nähe. Erhalte sofortige Rabatte mit QR-Code.",
      "screenshot": `${baseUrl}/appimage.png`,
      "softwareVersion": "1.0",
      "downloadUrl": language === "tr"
        ? "https://apps.apple.com/tr/app/diKey/id6753873918?l=tr"
        : "https://play.google.com/store/apps/details?id=com.dikey.discounturkey"
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": t("faq.q1"),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": t("faq.a1")
          }
        },
        {
          "@type": "Question",
          "name": t("faq.q2"),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": t("faq.a2")
          }
        },
        {
          "@type": "Question",
          "name": t("faq.q3"),
          "acceptedAnswer": {
            "@type": "Answer",
            "text": t("faq.a3")
          }
        }
      ]
    };

    return {
      organization: organizationSchema,
      mobileApp: mobileAppSchema,
      faq: faqSchema
    };
  }, [language, t]);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dikeyapp.com" />
      </Helmet>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup.organization),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup.mobileApp),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup.faq),
        }}
      />

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
