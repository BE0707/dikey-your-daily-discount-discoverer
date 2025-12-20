import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="iletisim" className="bg-foreground text-background py-16">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-heading font-bold text-3xl tracking-tight">
                di<span className="text-primary">k</span>ey
              </span>
            </div>
            <p className="text-background/70 mb-6 max-w-md">
              İndirimlerle dolu bir dünya. Her saat bir fırsat ile yakınındaki en iyi fırsatları keşfet.
            </p>
            <p className="text-primary font-semibold text-lg">
              dikey'i hemen indir
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@dikey.app" 
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@dikey.app</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+902422437007" 
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+90 242 243 70 07</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Konyaaltı / Antalya</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {[
                { href: "#nasil-kullanilir", label: "Nasıl Kullanılır?" },
                { href: "#sss", label: "SSS" },
                { href: "#isletme-kayit", label: "İşletme Kayıt" },
                { href: "#gizlilik", label: "Gizlilik Politikası" },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © 2025 DiscounTurkey. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
