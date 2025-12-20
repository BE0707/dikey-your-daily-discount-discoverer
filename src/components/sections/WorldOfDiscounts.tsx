import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Shield, Smartphone } from "lucide-react";

const WorldOfDiscounts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-8">
            <Globe className="w-7 h-7 text-foreground" />
          </div>
          
          <h2 className="font-heading font-bold text-foreground mb-8">
            İndirimlerle Dolu Bir Dünya
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Dikey, işbu Gizlilik Politikası ve Aydınlatma Metninde mevzuat veya hizmet koşullarına göre değişiklik yapma hakkını saklı tutar. Güncel sürüm, mobil uygulama veya resmi internet sitesi üzerinden yayımlanır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
                className="p-8 rounded-2xl bg-background border border-border/30 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 mx-auto">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldOfDiscounts;
