import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, UtensilsCrossed, Store, Sun, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const EveryPocket = () => {
  const { t } = useLanguage();
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
          className="text-center"
        >
          <h2 className="font-heading font-bold mb-8">
            {t("pocket.title1")}<span className="text-primary">{t("pocket.titleK")}</span>{t("pocket.title2")}
          </h2>
          
          <p className="text-background/60 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            {t("pocket.description")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
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

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative py-8"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-background/5 select-none">
              İNDİRİM
            </div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-xl sm:text-2xl font-heading font-semibold text-primary">
                {t("pocket.earn")}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EveryPocket;
