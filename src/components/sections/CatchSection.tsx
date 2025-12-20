import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Trophy } from "lucide-react";

const CatchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container-narrow mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center gap-4 mb-10">
            {[Zap, Target, Trophy].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="w-12 h-12 rounded-xl bg-secondary border border-border/30 flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-foreground" />
              </motion.div>
            ))}
          </div>

          <h2 className="font-heading font-bold text-foreground mb-8">
            Kaçırma,{" "}
            <span className="text-primary">Yakala,</span>{" "}
            Kazan!
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
            Fırsatlar beklemez. Sen de hızlı ol, en iyi indirimleri yakala!
          </p>

          {/* Animated discount tags */}
          <div className="relative h-24 max-w-2xl mx-auto">
            {["30%", "50%", "25%", "40%"].map((discount, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.15,
                  type: "spring",
                  bounce: 0.3
                }}
                className="absolute"
                style={{
                  left: `${10 + index * 22}%`,
                  top: index % 2 === 0 ? "0" : "32px"
                }}
              >
                <div className="bg-primary/10 text-primary px-5 py-2.5 rounded-xl font-heading font-bold text-lg">
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
