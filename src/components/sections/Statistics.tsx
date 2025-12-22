import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const AnimatedCounter = ({ value, suffix = "", prefix = "", isInView }: { 
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
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const Statistics = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 1847, suffix: "+", label: t("hero.stat1") },
    { value: 45230, suffix: "", label: t("hero.stat2") },
    { value: 2.5, prefix: "$", suffix: "M", label: t("hero.stat3") },
    { value: 853, suffix: "+", label: t("hero.stat4") },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-foreground mb-6">
            {t("stats.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("stats.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.02 }}
              className="text-center group cursor-default"
            >
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {stat.value === 2.5 ? (
                  <span>{stat.prefix}2.5{stat.suffix}</span>
                ) : (
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    isInView={isInView} 
                  />
                )}
              </div>
              
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
