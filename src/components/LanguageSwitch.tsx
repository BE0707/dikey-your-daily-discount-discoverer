import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLanguage("tr")}
        className={`relative px-2 py-1 transition-colors duration-200 ${
          language === "tr" 
            ? "text-foreground" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        TR
        {language === "tr" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </button>
      <span className="text-border">|</span>
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-2 py-1 transition-colors duration-200 ${
          language === "en" 
            ? "text-foreground" 
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
        {language === "en" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </button>
    </div>
  );
};

export default LanguageSwitch;



