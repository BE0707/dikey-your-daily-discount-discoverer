import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import dikeyLogo from "@/assets/dikey-logo.png";
import heroDesktop from "@/assets/hero-desktop.png";
import heroMobile from "@/assets/hero-mobile.png";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "1,847+", label: t("hero.stat1") },
    { value: "45K+", label: t("hero.stat2") },
    { value: "$2.5M", label: t("hero.stat3") },
    { value: "853+", label: t("hero.stat4") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Subtle Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      {/* Hero imagery with Apple-like soft overlay */}
      <picture className="pointer-events-none absolute inset-0">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt=""
          className="h-full w-full object-cover opacity-70 mix-blend-normal"
          loading="eager"
        />
      </picture>

      {/* Soft mask to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/65 to-background/75 backdrop-blur-[2px]" />

      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />

      <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10"
          >
            <img 
              src={dikeyLogo} 
              alt="dikey" 
              className="h-24 sm:h-28 md:h-32 mx-auto"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium mb-10 hover:bg-secondary/80 transition-colors duration-300"
          >
            <Sparkles size={14} className="text-primary" />
            <span>{t("hero.badge")}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            {t("hero.title1")}{" "}
            <span className="text-primary">{t("hero.title2")}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12"
            style={{ lineHeight: 1.7 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://apps.apple.com/tr/app/dikey/id6753873918?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="App Store'dan İndir" 
                className="h-12 sm:h-14"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.dikey.discounturkey"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play'den İndir" 
                className="h-12 sm:h-14"
              />
            </a>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-24 pt-16 border-t border-border/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
