import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import dikeyLogo from "@/assets/dikey-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <img 
              src={dikeyLogo} 
              alt="dikey" 
              className="h-24 sm:h-28 md:h-32 mx-auto"
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium mb-10"
          >
            <Sparkles size={14} className="text-primary" />
            <span>İndirimlerle Dolu Bir Dünya</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Her Saat{" "}
            <span className="text-primary">Bir Fırsat</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-12"
            style={{ lineHeight: 1.7 }}
          >
            İşletmeler ve kullanıcılar için akıllı indirim platformu. 
            Yakınındaki en iyi fırsatları keşfet, anında kazan.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://apps.apple.com/tr/app/dikey/id6753873918?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="App Store'dan İndir" 
                className="h-12 sm:h-14"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.dikey.discounturkey"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play'den İndir" 
                className="h-12 sm:h-14"
              />
            </a>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-24 pt-16 border-t border-border/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "1,847+", label: "Aktif Kampanya" },
                { value: "45K+", label: "Mutlu Müşteri" },
                { value: "$2.5M", label: "Toplam Tasarruf" },
                { value: "853+", label: "Partner İşletme" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
