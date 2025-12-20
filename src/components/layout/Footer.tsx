import { Mail, Phone, MapPin } from "lucide-react";
import dikeyLogo from "@/assets/dikey-logo.png";

const Footer = () => {
  return (
    <footer id="iletisim" className="bg-foreground text-background py-20">
      <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <img 
              src={dikeyLogo} 
              alt="dikey" 
              className="h-14 mb-6 brightness-0 invert"
            />
            <p className="text-background/50 mb-8 max-w-sm leading-relaxed">
              İndirimlerle dolu bir dünya. Her saat bir fırsat ile yakınındaki en iyi fırsatları keşfet.
            </p>
            
            {/* App Store buttons */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://apps.apple.com/tr/app/dikey/id6753873918?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
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
                className="transition-opacity hover:opacity-80"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@dikey.app" 
                  className="flex items-center gap-3 text-background/50 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">info@dikey.app</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+902422437007" 
                  className="flex items-center gap-3 text-background/50 hover:text-background transition-colors"
                >
                  <Phone className="w-4 h-4" />
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

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {[
                { href: "#nasil-kullanilir", label: "Nasıl Kullanılır?" },
                { href: "#sss", label: "SSS" },
                { href: "#isletme-kayit", label: "İşletme Kayıt" },
                { href: "#gizlilik", label: "Gizlilik Politikası" },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <p className="text-background/40 text-sm">
            © 2025 DiscounTurkey. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
