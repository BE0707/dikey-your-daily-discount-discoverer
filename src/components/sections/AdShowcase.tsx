import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ad1 from "@/assets/Adversiting/1.jpeg";
import ad2 from "@/assets/Adversiting/2.jpeg";
import ad3 from "@/assets/Adversiting/3.jpeg";
import ad4 from "@/assets/Adversiting/4.jpeg";
import ad5 from "@/assets/Adversiting/5.jpeg";
import ad6 from "@/assets/Adversiting/6.jpeg";
import ad8 from "@/assets/Adversiting/8.jpeg";

const INTERVAL = 3200;

const AdShowcase = () => {
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

          <div className="mt-6 flex items-center justify-center gap-2">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className="relative h-2.5 w-2.5 rounded-full bg-border transition-all duration-300"
                style={{
                  width: active === index ? "16px" : "10px",
                  backgroundColor: active === index ? "hsl(var(--primary))" : "hsl(var(--border))",
                }}
                aria-label={`Reklam ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdShowcase;

