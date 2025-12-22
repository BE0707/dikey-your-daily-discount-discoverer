import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Server, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Security = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { 
      icon: Shield, 
      title: t("security.f1.title"), 
      description: t("security.f1.desc") 
    },
    { 
      icon: Lock, 
      title: t("security.f2.title"), 
      description: t("security.f2.desc") 
    },
    { 
      icon: Server, 
      title: t("security.f3.title"), 
      description: t("security.f3.desc") 
    },
  ];

  const badges = [
    t("security.badge1"),
    t("security.badge2"),
    t("security.badge3"),
    t("security.badge4"),
  ];

  return (
    <section id="gizlilik" ref={ref} className="section-padding bg-foreground text-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-6">
            {t("security.title")}
          </h2>
          <p className="text-background/60 text-lg max-w-xl mx-auto">
            {t("security.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/8 transition-all duration-300 cursor-default"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="w-6 h-6 text-background group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              <h3 className="font-heading text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-background/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges - more minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {badges.map((badge, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2 text-background/50 hover:text-background/70 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-medium">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
