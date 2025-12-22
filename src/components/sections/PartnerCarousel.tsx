import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Import partner logos
import Badlands from "@/assets/PartnerLogos/Badlands.png";
import BemilyFamily from "@/assets/PartnerLogos/BemilyFamily.png";
import BostonDrinkDessert from "@/assets/PartnerLogos/BostonDrinkDessert.png";
import Understone from "@/assets/PartnerLogos/Understone.png";
import VipTrainingClub from "@/assets/PartnerLogos/VipTrainingClub.png";

const partners = [
  { name: "Badlands Bistro Pub", logo: Badlands },
  { name: "VIP Training Club", logo: VipTrainingClub },
  { name: "Understone Cafe Konyaaltı", logo: Understone },
  { name: "Bemily Family Cafe", logo: BemilyFamily },
  { name: "Boston Drink & Dessert", logo: BostonDrinkDessert },
];

const PartnerCarousel = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section ref={ref} className="section-padding bg-secondary/20 overflow-hidden">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-foreground mb-6">
            {t("partner.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("partner.subtitle")}
          </p>
        </motion.div>
      </div>

      {/* Logo Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-secondary/20 via-secondary/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-secondary/20 via-secondary/20 to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <div 
            className="flex shrink-0 animate-partner-scroll"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0 items-center gap-12 sm:gap-20 px-6 sm:px-10">
                {partners.map((partner, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="group relative flex-shrink-0"
                  >
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center p-4 sm:p-6 rounded-2xl bg-background border border-border/30 shadow-soft transition-all duration-500 group-hover:shadow-medium group-hover:border-primary/20">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div 
            className="flex shrink-0 animate-partner-scroll"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0 items-center gap-12 sm:gap-20 px-6 sm:px-10">
                {partners.map((partner, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className="group relative flex-shrink-0"
                  >
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center p-4 sm:p-6 rounded-2xl bg-background border border-border/30 shadow-soft transition-all duration-500 group-hover:shadow-medium group-hover:border-primary/20">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerCarousel;

