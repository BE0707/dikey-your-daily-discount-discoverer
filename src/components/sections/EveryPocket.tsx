import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, UtensilsCrossed, Store, Sun, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import appImage from "@/assets/appimage.png";

const EveryPocket = () => {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { icon: Coffee, label: t("pocket.cafe") },
    { icon: UtensilsCrossed, label: t("pocket.restaurant") },
    { icon: Store, label: t("pocket.store") },
    { icon: Sun, label: t("pocket.beach") },
    { icon: Sparkles, label: t("pocket.more") },
  ];

  return (
    <section ref={ref} className="section-padding bg-foreground text-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center text-center lg:text-left"
        >
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h2 className="font-heading font-bold mb-4 text-3xl sm:text-4xl">
                {t("pocket.title1")}<span className="text-primary">{t("pocket.titleK")}</span>{t("pocket.title2")}
              </h2>
              <p className="text-background/60 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t("pocket.description")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-300 cursor-default"
                >
                  <category.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{category.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative py-6"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-background/5 select-none">
                İNDİRİM
              </div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-lg sm:text-xl font-heading font-semibold text-primary">
                  {t("pocket.earn")}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto w-full"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary/25 via-background/10 to-primary/15 blur-3xl opacity-70"
            />
            <div className="relative overflow-hidden rounded-3xl border border-background/10 bg-background/10 backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/10 to-primary/5 opacity-85" aria-hidden />
              <img
                src={appImage}
                alt={language === "tr" ? "diKey uygulama ekran görüntüsü" : "diKey app screenshot"}
                className="relative z-10 w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EveryPocket;
