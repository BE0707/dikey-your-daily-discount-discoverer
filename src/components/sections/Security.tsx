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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Güvenlik ve Altyapı
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
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
              className="p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-background/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {["SSL Sertifikalı", "KVKK Uyumlu", "256-bit Şifreleme", "99.9% Uptime"].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-background/70">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
