import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Shield, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WorldOfDiscounts = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Smartphone,
      title: t("world.feature1.title"),
      description: t("world.feature1.desc"),
    },
    {
      icon: Shield,
      title: t("world.feature2.title"),
      description: t("world.feature2.desc"),
    },
    {
      icon: Globe,
      title: t("world.feature3.title"),
      description: t("world.feature3.desc"),
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-8"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Globe className="w-7 h-7 text-foreground" />
          </motion.div>
          
          <h2 className="font-heading font-bold text-foreground mb-8">
            {t("world.title")}
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {t("world.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group p-8 rounded-2xl bg-background border border-border/30 shadow-soft card-interactive"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldOfDiscounts;
