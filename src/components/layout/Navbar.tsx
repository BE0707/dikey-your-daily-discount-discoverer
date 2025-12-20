import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import dikeyLogo from "@/assets/dikey-logo.png";

const navLinks = [
  { href: "#nasil-kullanilir", label: "Nasıl kullanılır?" },
  { href: "#sss", label: "SSS" },
  { href: "#isletme-kayit", label: "İşletme Kayıt" },
  { href: "#gizlilik", label: "Gizlilik" },
  { href: "#iletisim", label: "İletişim" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
      <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={dikeyLogo} 
              alt="dikey" 
              className="h-10 sm:h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA - App Store buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://apps.apple.com/tr/app/dikey/id6753873918?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
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
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Google Play" 
                className="h-9"
              />
            </a>
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
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container-narrow mx-auto px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <a 
                  href="https://apps.apple.com/tr/app/dikey/id6753873918?l=tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center"
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
                  className="flex justify-center"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Google Play" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
