import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Shield, Smartphone } from "lucide-react";

const WorldOfDiscounts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent mb-6">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            İndirimlerle Dolu Bir Dünya
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Dikey, işbu Gizlilik Politikası ve Aydınlatma Metninde mevzuat veya hizmet koşullarına göre değişiklik yapma hakkını saklı tutar. Güncel sürüm, mobil uygulama veya resmi internet sitesi üzerinden yayımlanır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Smartphone,
                title: "Kolay Kullanım",
                description: "Basit arayüz ile anında fırsatları keşfet"
              },
              {
                icon: Shield,
                title: "Güvenli Platform",
                description: "KVKK uyumlu, şifreli veri yönetimi"
              },
              {
                icon: Globe,
                title: "Geniş Ağ",
                description: "Yüzlerce partner işletme ile büyüyen ekosistem"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border/50 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldOfDiscounts;
