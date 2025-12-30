import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import sign from "@/assets/logowithoutbrand.png";

const MarqueeSection = () => {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const SIGN = "__SIGN__";
  const phrases = [
    t("marquee.1"),
    SIGN,
    t("marquee.2"),
    SIGN,
    t("marquee.3"),
    SIGN,
  ];

  return (
    <section className="py-6 sm:py-8 bg-secondary/30 border-y border-border/20 overflow-hidden">
      <div
        className="flex"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex shrink-0 animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {phrases.map((phrase, index) =>
                phrase === SIGN ? (
                  <span
                    key={index}
                    className="px-6 sm:px-10 font-heading whitespace-nowrap"
                  >
                    <img
                      src={sign}
                      alt="diKey symbol"
                      className="h-14 w-auto opacity-80"
                      loading="lazy"
                    />
                  </span>
                ) : (
                  <span
                    key={index}
                    className="px-6 sm:px-10 font-heading text-lg sm:text-xl md:text-2xl whitespace-nowrap text-foreground/80 font-medium"
                  >
                    {phrase}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
        <div 
          className="flex shrink-0 animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {phrases.map((phrase, index) =>
                phrase === SIGN ? (
                  <span
                    key={index}
                    className="px-6 sm:px-10 font-heading whitespace-nowrap"
                  >
                    <img
                      src={sign}
                      alt="diKey symbol"
                      className="h-10 w-auto opacity-80"
                      style={{
                        filter:
                          "invert(22%) sepia(94%) saturate(4115%) hue-rotate(353deg) brightness(88%) contrast(104%)",
                      }}
                      loading="lazy"
                    />
                  </span>
                ) : (
                  <span
                    key={index}
                    className="px-6 sm:px-10 font-heading text-lg sm:text-xl md:text-2xl whitespace-nowrap text-foreground/80 font-medium"
                  >
                    {phrase}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;


