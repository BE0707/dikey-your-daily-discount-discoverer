import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WorldOfDiscounts from "@/components/sections/WorldOfDiscounts";
import DiscountHours from "@/components/sections/DiscountHours";
import EveryPocket from "@/components/sections/EveryPocket";
import CatchSection from "@/components/sections/CatchSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Advantages from "@/components/sections/Advantages";
import Security from "@/components/sections/Security";
import Statistics from "@/components/sections/Statistics";
import CTASection from "@/components/sections/CTASection";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>dikey - Her Saat Bir Fırsat | İndirimlerle Dolu Bir Dünya</title>
        <meta name="description" content="dikey ile yakınındaki en iyi indirim fırsatlarını keşfet. İşletmeler ve kullanıcılar için akıllı indirim platformu. Bütçe dostu, zamana özel fırsatlar." />
        <meta name="keywords" content="indirim, fırsat, kampanya, dikey, discount, kupon, antalya, türkiye" />
        <meta property="og:title" content="dikey - Her Saat Bir Fırsat" />
        <meta property="og:description" content="İşletmeler ve kullanıcılar için akıllı indirim platformu. Yakınındaki en iyi fırsatları keşfet." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dikey.app" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <WorldOfDiscounts />
        <DiscountHours />
        <EveryPocket />
        <CatchSection />
        <HowItWorks />
        <Advantages />
        <Security />
        <Statistics />
        <CTASection />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;
