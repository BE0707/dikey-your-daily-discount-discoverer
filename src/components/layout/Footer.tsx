import { Mail, Phone, MapPin } from "lucide-react";
import dikeyLogo from "@/assets/horizontalLogoNoBG.png";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "#nasil-kullanilir", label: t("nav.howItWorks") },
    { href: "#sss", label: t("nav.faq") },
    { href: "https://www.diKey.website/Auth/Register/", label: t("nav.businessRegister"), external: true },
    { href: "https://www.dikey.website/Account/Login/?ReturnUrl=%2F", label: t("nav.businessLogin"), external: true },
    { href: "#gizlilik", label: t("nav.privacy") },
  ];

  return (
    <footer id="iletisim" className="bg-foreground text-background py-20">
      <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <motion.img 
              src={dikeyLogo} 
              alt="dikey" 
              className="h-[5.32rem] mb-6 brightness-0 invert"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <p className="text-background/50 mb-8 max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://apps.apple.com/tr/app/diKey/id6753873918?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-80 hover:scale-105 active:scale-95"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="App Store" 
                  className="h-10"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.dikey.discounturkey"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-80 hover:scale-105 active:scale-95"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@diKey.app" 
                  className="group flex items-center gap-3 text-background/50 hover:text-background transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
                  <span className="text-sm">info@diKey.app</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+902422437007" 
                  className="group flex items-center gap-3 text-background/50 hover:text-background transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 group-hover:text-primary transition-colors duration-300" />
                  <span className="text-sm">+90 242 243 70 07</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/50">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Konyaaltı / Antalya</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-base mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-background/50 hover:text-background transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <p className="text-background/40 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
