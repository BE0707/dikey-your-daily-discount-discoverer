import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

const MarqueeSection = () => {
  const { t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const phrases = [
    t("marquee.1"),
    "✦",
    t("marquee.2"),
    "✦",
    t("marquee.3"),
    "✦",
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
              {phrases.map((phrase, index) => (
                <span
                  key={index}
                  className={`px-6 sm:px-10 font-heading text-lg sm:text-xl md:text-2xl whitespace-nowrap ${
                    phrase === "✦" 
                      ? "text-primary/60" 
                      : "text-foreground/80 font-medium"
                  }`}
                >
                  {phrase}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div 
          className="flex shrink-0 animate-marquee"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {phrases.map((phrase, index) => (
                <span
                  key={index}
                  className={`px-6 sm:px-10 font-heading text-lg sm:text-xl md:text-2xl whitespace-nowrap ${
                    phrase === "✦" 
                      ? "text-primary/60" 
                      : "text-foreground/80 font-medium"
                  }`}
                >
                  {phrase}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;


