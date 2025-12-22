import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CatchSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const discounts = ["30%", "50%", "25%", "40%"];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container-narrow mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <div className="flex justify-center gap-4 mb-10">
            {[Zap, Target, Trophy].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-secondary border border-border/30 flex items-center justify-center cursor-default"
              >
                <Icon className="w-6 h-6 text-foreground" />
              </motion.div>
            ))}
          </div>

          <h2 className="font-heading font-bold text-foreground mb-8">
            {t("catch.title1")}{" "}
            <span className="text-primary">{t("catch.title2")}</span>{" "}
            {t("catch.title3")}
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
            {t("catch.description")}
          </p>

          {/* Animated discount tags */}
          <div className="relative h-24 max-w-2xl mx-auto">
            {discounts.map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.12,
                  type: "spring",
                  stiffness: 150,
                  damping: 12
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="absolute cursor-default"
                style={{
                  left: `${10 + index * 22}%`,
                  top: index % 2 === 0 ? "0" : "32px"
                }}
              >
                <div className="bg-primary/10 text-primary px-5 py-2.5 rounded-xl font-heading font-bold text-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
                  {discount}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatchSection;
