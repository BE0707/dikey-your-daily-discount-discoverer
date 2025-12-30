import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import logoMark from "@/assets/logowithoutbrand.png";
import { useLanguage } from "@/context/LanguageContext";
import ad1 from "@/assets/Adversiting/1.jpeg";
import ad2 from "@/assets/Adversiting/2.jpeg";
import ad3 from "@/assets/Adversiting/3.jpeg";
import ad4 from "@/assets/Adversiting/4.jpeg";
import ad5 from "@/assets/Adversiting/5.jpeg";
import ad6 from "@/assets/Adversiting/6.jpeg";
import ad8 from "@/assets/Adversiting/8.jpeg";

const INTERVAL = 3200;

const AdShowcase = () => {
  const { t } = useLanguage();
  const ads = useMemo(() => [ad1, ad2, ad3, ad4, ad5, ad6, ad8], []);
  const extendedAds = useMemo(() => [...ads, ...ads], [ads]);
  const [active, setActive] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItems = () => {
      const w = window.innerWidth;
      if (w >= 1200) setItemsPerView(3);
      else if (w >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % ads.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [ads.length]);

  const widthPercent = 100 / itemsPerView;
  const highlightIndex = (active + Math.floor(itemsPerView / 2)) % ads.length;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl border border-border/40 bg-background/70 backdrop-blur-md p-5 sm:p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div className="flex justify-center mb-14 relative z-10 px-4">
            <div className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-4 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-secondary/90 via-background to-secondary/80 border border-border/40 shadow-[0_10px_35px_-18px_rgba(0,0,0,0.35)] backdrop-blur-sm text-xs sm:text-sm md:text-base text-center">
              <img
                src={logoMark}
                alt="diKey"
                className="h-12 w-auto opacity-90 translate-y-[6px]"
                loading="lazy"
              />
              <span className="font-heading font-semibold text-foreground leading-tight md:pt-0.5">
                {t("ad.headlinePrefix")}{" "}
                <span className="font-bold text-primary">{t("ad.brand").replace(".", "")}</span>
              </span>
            </div>
          </div>

          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.25,.8,.4,1)]"
            style={{ transform: `translateX(-${active * widthPercent}%)` }}
          >
            {extendedAds.map((src, index) => {
              const baseIndex = index % ads.length;
              const isHighlight = baseIndex === highlightIndex;
              return (
                <div key={`${src}-${index}`} className="px-2 sm:px-3" style={{ minWidth: `${widthPercent}%` }}>
                  <motion.div
                    className="w-full rounded-2xl overflow-hidden relative bg-muted flex items-center justify-center"
                    animate={{
                      scale: isHighlight ? 1.18 : 0.95,
                      opacity: isHighlight ? 1 : 0.7,
                      filter: isHighlight ? "brightness(1.06)" : "brightness(0.92)",
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.8, 0.4, 1] }}
                  >
                    <img
                      src={src}
                      alt="diKey reklam görseli"
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Indicators removed per request */}
        </div>
      </div>
    </section>
  );
};

export default AdShowcase;

