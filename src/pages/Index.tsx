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
      title: "diKey - Antalya'da Anlık İndirim Uygulaması | QR ile Kasada İndirim",
      description: "Konumuna ve saate göre Antalya'daki en iyi fırsatları keşfet. Restoran, kafe ve güzellik merkezlerinde QR kod ile anında indirim kazan. Ücretsiz indir.",
      keywords: "antalya indirim, antalya fırsat, indirim uygulaması, QR kod indirim, diKey, antalya kafe indirimleri, antalya restoran fırsatları, anlık indirim",
      ogTitle: "diKey - Antalya'da Anlık İndirim Uygulaması",
      ogDescription: "Antalya'daki en iyi indirim fırsatlarını keşfet. QR kod ile anında indirim kazan."
    },
    en: {
      title: "diKey - Instant Discount App in Antalya | QR Code Discounts at Checkout",
      description: "Discover the best discount opportunities in Antalya based on your location and time. Get instant discounts with QR code at restaurants, cafes and beauty centers. Download free.",
      keywords: "antalya discount, antalya deals, discount app, QR code discount, diKey, antalya cafe discounts, antalya restaurant deals, instant discount",
      ogTitle: "diKey - Instant Discount App in Antalya",
      ogDescription: "Discover the best discount opportunities in Antalya. Get instant discounts with QR code."
    },
    de: {
      title: "diKey - Sofortrabatt-App in Antalya | QR-Code-Rabatte an der Kasse",
      description: "Entdecke die besten Rabattangebote in Antalya basierend auf deinem Standort und der Uhrzeit. Erhalte sofortige Rabatte mit QR-Code in Restaurants, Cafés und Beauty-Centern. Kostenlos herunterladen.",
      keywords: "antalya rabatt, antalya angebote, rabatt app, QR-code rabatt, diKey, antalya café rabatte, antalya restaurant angebote, sofortrabatt",
      ogTitle: "diKey - Sofortrabatt-App in Antalya",
      ogDescription: "Entdecke die besten Rabattangebote in Antalya. Erhalte sofortige Rabatte mit QR-Code."
    }
  };

  const seo = seoContent[language];
  const baseUrl = "https://dikeyapp.com";
  const canonicalUrl = language === "tr" ? baseUrl : `${baseUrl}/?lang=${language}`;
  const hreflangUrls: Record<string, string> = {
    tr: baseUrl,
    en: `${baseUrl}/?lang=en`,
    de: `${baseUrl}/?lang=de`,
    "x-default": baseUrl,
  };
  const socialImage = `${baseUrl}/dikey-logo.png`;

  const schemaMarkup = useMemo(() => {
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
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="diKey logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.ogTitle} />
        <meta name="twitter:description" content={seo.ogDescription} />
        <meta name="twitter:image" content={socialImage} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hreflang="tr" href={hreflangUrls.tr} />
        <link rel="alternate" hreflang="en" href={hreflangUrls.en} />
        <link rel="alternate" hreflang="de" href={hreflangUrls.de} />
        <link rel="alternate" hreflang="x-default" href={hreflangUrls["x-default"]} />
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
