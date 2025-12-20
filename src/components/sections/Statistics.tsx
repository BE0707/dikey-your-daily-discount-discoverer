import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, DollarSign, Building } from "lucide-react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: TrendingUp, value: 1847, suffix: "+", label: "Aktif Kampanya", color: "primary" },
    { icon: Users, value: 45230, suffix: "", label: "Mutlu Müşteri", color: "foreground" },
    { icon: DollarSign, value: 2.5, prefix: "$", suffix: "M", label: "Toplam Tasarruf", color: "primary" },
    { icon: Building, value: 853, suffix: "+", label: "Partner İşletme", color: "foreground" },
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rakamlarla dikey
          </h2>
          <p className="text-muted-foreground text-lg">
            Güven ve başarının somut göstergeleri
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group p-6 sm:p-8 rounded-2xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all hover-lift text-center"
            >
              <div className={`w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                stat.color === "primary" ? "bg-primary/10" : "bg-foreground/10"
              }`}>
                <stat.icon className={`w-7 h-7 ${
                  stat.color === "primary" ? "text-primary" : "text-foreground"
                }`} />
              </div>
              
              <div className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
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
