import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import dikeyLogo from "@/assets/dikey-logo.png";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#nasil-kullanilir", label: t("nav.howItWorks") },
    { href: "#sss", label: t("nav.faq") },
    { href: "https://www.diKey.website/Auth/Register/", label: t("nav.businessRegister"), external: true },
    { href: "https://www.dikey.website/Account/Login/?ReturnUrl=%2F", label: t("nav.businessLogin"), external: true },
    { href: "#gizlilik", label: t("nav.privacy") },
    { href: "#iletisim", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
      <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="#active-deals" className="flex items-center hover-scale">
            <img 
              src={dikeyLogo} 
              alt="dikey" 
              className="h-[4.2rem] sm:h-[4.8rem] transform scale-x-[1.1]"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="relative px-3 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop CTA - App Store buttons + Language Switch */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitch />
            <div className="w-px h-6 bg-border/50" />
            <div className="flex items-center gap-3">
              <a 
                href="https://apps.apple.com/tr/app/diKey/id6753873918?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:opacity-80 hover:scale-105 active:scale-95"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="App Store" 
                  className="h-9"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.dikey.discounturkey"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 hover:opacity-80 hover:scale-105 active:scale-95"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-9"
                />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-narrow mx-auto px-6 py-6 space-y-1">
              {/* Language Switch - Mobile */}
              <div className="flex justify-center pb-4 border-b border-border/30 mb-4">
                <LanguageSwitch />
              </div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all duration-200 active:scale-98"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div 
                className="pt-6 flex flex-col gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a 
                  href="https://apps.apple.com/tr/app/diKey/id6753873918?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center transition-transform active:scale-95"
                >
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="App Store" 
                    className="h-12"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.dikey.discounturkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center transition-transform active:scale-95"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-12"
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
