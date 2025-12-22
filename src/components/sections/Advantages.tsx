import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, Star, MapPin, Shield, Building2, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Advantages = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const businessAdvantages = [
    { icon: TrendingUp, title: t("adv.b1.title"), description: t("adv.b1.desc") },
    { icon: Users, title: t("adv.b2.title"), description: t("adv.b2.desc") },
    { icon: Zap, title: t("adv.b3.title"), description: t("adv.b3.desc") },
  ];

  const userAdvantages = [
    { icon: Star, title: t("adv.u1.title"), description: t("adv.u1.desc") },
    { icon: MapPin, title: t("adv.u2.title"), description: t("adv.u2.desc") },
    { icon: Shield, title: t("adv.u3.title"), description: t("adv.u3.desc") },
  ];

  return (
    <section id="isletme-kayit" ref={ref} className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-bold text-foreground mb-6">
            {t("adv.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("adv.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Business Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-11 h-11 rounded-xl bg-foreground flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Building2 className="w-5 h-5 text-background" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {t("adv.forBusiness")}
              </h3>
            </div>

            <div className="space-y-5">
              {businessAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2 }}
                  className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border/30 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-medium transition-shadow duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <advantage.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* User Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <User className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {t("adv.forUsers")}
              </h3>
            </div>

            <div className="space-y-5">
              {userAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2 }}
                  className="group p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-transparent hover:border-border/30 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-5">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-background flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-medium transition-shadow duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <advantage.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1.5">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                    </div>
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

export default Advantages;
