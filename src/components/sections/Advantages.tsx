import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Zap, Star, MapPin, Shield, Building2, User } from "lucide-react";

const Advantages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const businessAdvantages = [
    { icon: TrendingUp, title: "Boş saatleri gelir fırsatına çevirme", description: "Düşük trafikli saatlerde müşteri çekin" },
    { icon: Users, title: "Sadık müşteri oluşturma", description: "Tekrar gelen müşterilerle büyüyün" },
    { icon: Zap, title: "Anlık kampanya yönetimi", description: "Fırsatları gerçek zamanlı düzenleyin" },
  ];

  const userAdvantages = [
    { icon: Star, title: "Kaliteli işletmelerde özel fırsatlar", description: "Seçkin mekanlarda indirimli deneyim" },
    { icon: MapPin, title: "Konuma göre indirim keşfi", description: "Yakınındaki en iyi fırsatları bul" },
    { icon: Shield, title: "Güvenilir indirim deneyimi", description: "Onaylı ve güvenli işletmeler" },
  ];

  return (
    <section id="isletme-kayit" ref={ref} className="section-padding">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Herkes İçin Avantajlar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            İşletmeler gelirlerini artırır, kullanıcılar tasarruf eder
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                <Building2 className="w-5 h-5 text-background" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                İşletmeler İçin
              </h3>
            </div>

            <div className="space-y-4">
              {businessAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border/50 transition-all hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-foreground/20 transition-colors">
                      <advantage.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
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
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Kullanıcılar İçin
              </h3>
            </div>

            <div className="space-y-4">
              {userAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-accent/50 hover:bg-accent border border-transparent hover:border-primary/20 transition-all hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <advantage.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
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
