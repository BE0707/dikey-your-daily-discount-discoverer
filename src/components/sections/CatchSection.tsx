import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Trophy } from "lucide-react";

const CatchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-accent/20" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-narrow mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center gap-4 mb-8">
            {[Zap, Target, Trophy].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="w-14 h-14 rounded-2xl bg-accent border border-primary/20 flex items-center justify-center"
              >
                <Icon className="w-7 h-7 text-primary" />
              </motion.div>
            ))}
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Kaçırma,{" "}
            <span className="gradient-text">Yakala,</span>{" "}
            Kazan!
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fırsatlar beklemez. Sen de hızlı ol, en iyi indirimleri yakala!
          </p>

          {/* Animated elements */}
          <div className="mt-16 relative h-32">
            {["30%", "50%", "25%", "40%"].map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  bounce: 0.4
                }}
                className="absolute"
                style={{
                  left: `${15 + index * 22}%`,
                  top: index % 2 === 0 ? "0" : "40px"
                }}
              >
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-heading font-bold text-xl shadow-glow animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}>
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
