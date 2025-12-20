import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Server, CheckCircle } from "lucide-react";

const Security = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { 
      icon: Shield, 
      title: "KVKK uyumlu veri yönetimi", 
      description: "Tüm verileriniz yasal düzenlemelere uygun şekilde işlenir" 
    },
    { 
      icon: Lock, 
      title: "Şifrelenmiş bilgiler", 
      description: "End-to-end şifreleme ile maksimum güvenlik" 
    },
    { 
      icon: Server, 
      title: "Yüksek performanslı sunucular", 
      description: "Kesintisiz hizmet için enterprise altyapı" 
    },
  ];

  return (
    <section id="gizlilik" ref={ref} className="section-padding bg-foreground text-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold mb-6">
            Güvenlik ve Altyapı
          </h2>
          <p className="text-background/60 text-lg max-w-xl mx-auto">
            Verileriniz en üst düzey güvenlik standartlarıyla korunur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/8 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-background/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges - more minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4"
        >
          {["SSL Sertifikalı", "KVKK Uyumlu", "256-bit Şifreleme", "99.9% Uptime"].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-background/50">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
