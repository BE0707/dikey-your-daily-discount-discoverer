import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, User, UserPlus, Clock, QrCode, Gift, Download, Check, Scan, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const businessSteps = [
    { icon: UserPlus, title: "Kayıt ol", description: "İşletmeni hızlıca kaydet" },
    { icon: Clock, title: "Fırsat saatlerini belirle", description: "İndirimli saatleri ayarla" },
    { icon: Scan, title: "QR okut", description: "Müşteri QR kodunu tara" },
    { icon: Gift, title: "Anında indirim sun", description: "Otomatik indirim uygula" },
  ];

  const userSteps = [
    { icon: Download, title: "Uygulamayı indir", description: "iOS veya Android'den indir" },
    { icon: Check, title: "Fırsatını seç", description: "Yakınındaki fırsatları keşfet" },
    { icon: QrCode, title: "QR kod okut", description: "İşletmede QR kodu göster" },
    { icon: Sparkles, title: "İndirimin tadını çıkar", description: "Anında tasarruf et" },
  ];

  return (
    <section id="nasil-kullanilir" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hem işletmeler hem de kullanıcılar için basit adımlarla başla
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Business Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-3xl p-6 sm:p-8 border border-border/50 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                <Building2 className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                İşletmeler için
              </h3>
            </div>

            <div className="space-y-4">
              {businessSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background rounded-3xl p-6 sm:p-8 border border-border/50 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Kullanıcılar için
              </h3>
            </div>

            <div className="space-y-4">
              {userSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
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
