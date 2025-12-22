import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, User, UserPlus, Clock, QrCode, Gift, Download, Check, Scan, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const businessSteps = [
    { icon: UserPlus, title: t("how.b1.title"), description: t("how.b1.desc") },
    { icon: Clock, title: t("how.b2.title"), description: t("how.b2.desc") },
    { icon: Scan, title: t("how.b3.title"), description: t("how.b3.desc") },
    { icon: Gift, title: t("how.b4.title"), description: t("how.b4.desc") },
  ];

  const userSteps = [
    { icon: Download, title: t("how.u1.title"), description: t("how.u1.desc") },
    { icon: Check, title: t("how.u2.title"), description: t("how.u2.desc") },
    { icon: QrCode, title: t("how.u3.title"), description: t("how.u3.desc") },
    { icon: Sparkles, title: t("how.u4.title"), description: t("how.u4.desc") },
  ];

  return (
    <section id="nasil-kullanilir" ref={ref} className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-bold text-foreground mb-6">
            {t("how.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("how.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Business Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-background rounded-3xl p-8 sm:p-10 border border-border/30 shadow-soft"
          >
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Building2 className="w-6 h-6 text-background" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {t("how.forBusiness")}
              </h3>
            </div>

            <div className="space-y-5">
              {businessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-background flex items-center justify-center shadow-soft"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <step.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-0.5">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* User Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-background rounded-3xl p-8 sm:p-10 border border-border/30 shadow-soft"
          >
            <div className="flex items-center gap-4 mb-10">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <User className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {t("how.forUsers")}
              </h3>
            </div>

            <div className="space-y-5">
              {userSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-background flex items-center justify-center shadow-soft"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <step.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-0.5">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
