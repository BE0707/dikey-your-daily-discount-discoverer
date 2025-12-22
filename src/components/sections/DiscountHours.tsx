import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Wallet, MapPin, Timer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DiscountHours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: Wallet, title: t("discount.benefit1.title"), description: t("discount.benefit1.desc") },
    { icon: MapPin, title: t("discount.benefit2.title"), description: t("discount.benefit2.desc") },
    { icon: Timer, title: t("discount.benefit3.title"), description: t("discount.benefit3.desc") },
  ];

  const mockDeals = [
    { name: "Cafe Botanik", discount: "%30", time: "14:00 - 17:00" },
    { name: "Restoran Lezzet", discount: "%25", time: "15:00 - 18:00" },
    { name: "Beach Club Sahil", discount: "%40", time: "11:00 - 14:00" },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <Clock size={14} />
              <span>{t("discount.badge")}</span>
            </motion.div>
            
            <h2 className="font-heading font-bold text-foreground mb-8">
              {t("discount.title")}
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              {t("discount.description")}
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 cursor-default"
                >
                  <motion.div 
                    className="w-11 h-11 rounded-xl bg-background flex items-center justify-center flex-shrink-0 shadow-soft"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <benefit.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative bg-secondary/30 rounded-3xl p-8 border border-border/30">
              {/* Mock Phone UI */}
              <div className="relative bg-background rounded-2xl p-6 space-y-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-2.5 h-2.5 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm font-medium text-foreground">{t("discount.activeDeals")}</span>
                </div>
                
                {mockDeals.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="bg-secondary/50 rounded-xl p-4 flex items-center justify-between transition-all duration-300 cursor-pointer hover:bg-secondary"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                    </div>
                    <motion.div 
                      className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-bold text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.discount}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscountHours;
