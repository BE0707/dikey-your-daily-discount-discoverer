import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import dikeyLogo from "@/assets/dikey-logo.png";
import heroDesktop from "@/assets/hero-desktop.png";
import heroMobile from "@/assets/hero-mobile.png";
import { useLanguage } from "@/context/LanguageContext";

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  isInView,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 1847, suffix: "+", label: t("hero.stat1"), prefix: "" },
    { value: 5000, suffix: "+", label: t("hero.stat2"), prefix: "" },
    { value: 1, suffix: "M", label: t("hero.stat3"), prefix: "₺" },
    { value: 160, suffix: "+", label: t("hero.stat4"), prefix: "" },
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
          <motion.img 
            src={dikeyLogo} 
            alt="dikey" 
            className="h-24 sm:h-28 md:h-32 mx-auto"
            initial={{ scale: 1 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 3, ease: "easeInOut" }}
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
              href="https://apps.apple.com/tr/app/diKey/id6753873918?l=tr"
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
              href="https://play.google.com/store/apps/details?id=com.diKey.discounturkey"
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
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-24 pt-16 border-t border-border/30"
          >
            <div className="mb-8">
              <h3 className="font-heading text-sm sm:text-base uppercase tracking-[0.18em] text-primary/80 font-semibold">
                {t("stats.title")}
              </h3>
              <p className="text-muted-foreground mt-2">
                {t("stats.subtitle")}
              </p>
            </div>
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
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      isInView={statsInView}
                    />
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
