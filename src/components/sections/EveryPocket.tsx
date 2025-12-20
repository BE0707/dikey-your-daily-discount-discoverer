import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, UtensilsCrossed, Store, Sun, Sparkles } from "lucide-react";

const EveryPocket = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { icon: Coffee, label: "Kafe" },
    { icon: UtensilsCrossed, label: "Restoran" },
    { icon: Store, label: "Mağaza" },
    { icon: Sun, label: "Plaj" },
    { icon: Sparkles, label: "Ve daha fazlası" },
  ];

  return (
    <section ref={ref} className="section-padding bg-foreground text-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading font-bold mb-8">
            di<span className="text-primary">K</span>ey Her Cebe Lazım
          </h2>
          
          <p className="text-background/60 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            diKey; kafe, restoran, mağaza, plaj ve birçok farklı mekânda sunulan özel indirimlerle her cebin vazgeçilmezidir.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-background/5 border border-background/10 hover:bg-background/10 transition-colors duration-300"
              >
                <category.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{category.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative py-8"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-background/5 select-none">
              İNDİRİM
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl sm:text-2xl font-heading font-semibold text-primary">
                ₺ Kazan & Tasarruf Et
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EveryPocket;
