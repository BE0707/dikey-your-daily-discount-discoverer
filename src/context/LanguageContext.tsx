import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "tr" | "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    "nav.howItWorks": "Nasıl kullanılır?",
    "nav.faq": "SSS",
    "nav.businessRegister": "İşletme Kayıt",
    "nav.businessLogin": "İşletme Giriş",
    "nav.privacy": "Gizlilik",
    "nav.contact": "İletişim",
    
    // Hero Section
    "hero.badge": "İndirimlerle Dolu Bir Dünya",
    "hero.title1": "Her Saat",
    "hero.title2": "Bir Fırsat",
    "hero.subtitle": "İşletmeler ve kullanıcılar için akıllı indirim platformu. Yakınındaki en iyi fırsatları keşfet, anında kazan.",
    "hero.stat1": "Aktif Kampanya",
    "hero.stat2": "Mutlu Müşteri",
    "hero.stat3": "Toplam Tasarruf",
    "hero.stat4": "Partner İşletme",
    
    // World of Discounts
    "world.title": "İndirimlerle Dolu Bir Dünya",
    "world.description": "diKey, bulunduğun konum ve saate göre en avantajlı indirimleri anında keşfetmeni sağlayan akıllı bir fırsat platformudur. Kafe, restoran, mağaza ve daha birçok işletmedeki özel teklifleri senin için bir araya getirir; daha az ödeyerek daha fazlasını deneyimlemeni sağlar. Hemen ücretsiz indir, sana en yakın fırsatları keşfet ve indirim kazanmaya şimdi başla.",
    "world.feature1.title": "Kolay Kullanım",
    "world.feature1.desc": "Basit arayüz ile anında fırsatları keşfet",
    "world.feature2.title": "Güvenli Platform",
    "world.feature2.desc": "KVKK uyumlu, şifreli veri yönetimi",
    "world.feature3.title": "Geniş Ağ",
    "world.feature3.desc": "Yüzlerce partner işletme ile büyüyen ekosistem",
    
    // Discount Hours
    "discount.badge": "Akıllı Zamanlama",
    "discount.title": "Uygun İndirimli Saatler",
    "discount.description": "diKey, \"Uygun indirimli saatler\" ile belirli zaman aralıklarında en avantajlı hizmet ve ürünleri sunar. Kullanıcılar uygulamayı açarak kendilerine en yakın işletmelerin özel fırsatlarını anında görebilir.",
    "discount.benefit1.title": "Bütçe dostu",
    "discount.benefit1.desc": "Cebine uygun fırsatlar",
    "discount.benefit2.title": "Yeni mekanlar keşfetme",
    "discount.benefit2.desc": "Yakınındaki işletmeleri bul",
    "discount.benefit3.title": "Zamana özel fırsatlar",
    "discount.benefit3.desc": "En avantajlı saatlerde indirim",
    "discount.activeDeals": "Şu an aktif fırsatlar",
    
    // Every Pocket
    "pocket.title1": "di",
    "pocket.titleK": "K",
    "pocket.title2": "ey Her Cebe Lazım",
    "pocket.description": "diKey; kafe, restoran, mağaza, plaj ve birçok farklı mekânda sunulan özel indirimlerle her cebin vazgeçilmezidir.",
    "pocket.cafe": "Kafe",
    "pocket.restaurant": "Restoran",
    "pocket.store": "Mağaza",
    "pocket.beach": "Plaj",
    "pocket.more": "Ve daha fazlası",
    "pocket.earn": "₺ Kazan & Tasarruf Et",
    
    // Catch Section
    "catch.title1": "Kaçırma,",
    "catch.title2": "diKey'i",
    "catch.title3": "kontrol et.",
    "catch.description": "Fırsatlar birçok sektörde geçerlidir. Ve sürekli yayılıyoruz!",
    
    // How It Works
    "how.title": "Nasıl Çalışır?",
    "how.subtitle": "Hem işletmeler hem de kullanıcılar için basit adımlarla başla",
    "how.forBusiness": "İşletmeler için",
    "how.forUsers": "Kullanıcılar için",
    "how.b1.title": "Kayıt ol",
    "how.b1.desc": "İşletmeni hızlıca kaydet",
    "how.b2.title": "Fırsat saatlerini belirle",
    "how.b2.desc": "İndirimli saatleri ayarla",
    "how.b3.title": "QR okut",
    "how.b3.desc": "Müşteri QR kodunu tara",
    "how.b4.title": "Anında indirim sun",
    "how.b4.desc": "Otomatik indirim uygula",
    "how.u1.title": "Uygulamayı indir",
    "how.u1.desc": "iOS veya Android'den indir",
    "how.u2.title": "Fırsatını seç",
    "how.u2.desc": "Yakınındaki fırsatları keşfet",
    "how.u3.title": "QR kod okut",
    "how.u3.desc": "İşletmede QR kodu göster",
    "how.u4.title": "İndirimin tadını çıkar",
    "how.u4.desc": "Anında tasarruf et",
    
    // Advantages
    "adv.title": "Herkes İçin Avantajlar",
    "adv.subtitle": "İşletmeler gelirlerini artırır, kullanıcılar tasarruf eder",
    "adv.forBusiness": "İşletmeler İçin",
    "adv.forUsers": "Kullanıcılar İçin",
    "adv.b1.title": "Boş saatleri gelir fırsatına çevirme",
    "adv.b1.desc": "Düşük trafikli saatlerde müşteri çekin",
    "adv.b2.title": "Sadık müşteri oluşturma",
    "adv.b2.desc": "Tekrar gelen müşterilerle büyüyün",
    "adv.b3.title": "Anlık kampanya yönetimi",
    "adv.b3.desc": "Fırsatları gerçek zamanlı düzenleyin",
    "adv.u1.title": "Kaliteli işletmelerde özel fırsatlar",
    "adv.u1.desc": "Seçkin mekanlarda indirimli deneyim",
    "adv.u2.title": "Konuma göre indirim keşfi",
    "adv.u2.desc": "Yakınındaki en iyi fırsatları bul",
    "adv.u3.title": "Güvenilir indirim deneyimi",
    "adv.u3.desc": "Onaylı ve güvenli işletmeler",
    
    // Partner Section
    "partner.title": "Avantaj Zincirimiz",
    "partner.subtitle": "Güvenilir işletmelerle büyüyen avantaj ekosistemi.",
    
    // Security
    "security.title": "Güvenlik ve Altyapı",
    "security.subtitle": "Verileriniz en üst düzey güvenlik standartlarıyla korunur",
    "security.f1.title": "KVKK uyumlu veri yönetimi",
    "security.f1.desc": "Tüm verileriniz yasal düzenlemelere uygun şekilde işlenir",
    "security.f2.title": "Şifrelenmiş bilgiler",
    "security.f2.desc": "End-to-end şifreleme ile maksimum güvenlik",
    "security.f3.title": "Yüksek performanslı sunucular",
    "security.f3.desc": "Kesintisiz hizmet için enterprise altyapı",
    "security.badge1": "SSL Sertifikalı",
    "security.badge2": "KVKK Uyumlu",
    "security.badge3": "256-bit Şifreleme",
    "security.badge4": "99.9% Uptime",
    
    // Statistics
    "stats.title": "Rakamlarla diKey",
    "stats.subtitle": "Güven ve başarının somut göstergeleri",
    
    // CTA
    "cta.title": "Fırsatı Kaçırma",
    "cta.subtitle": "Size en yakın fırsatlar, sürpriz özel indirimler",
    
    // FAQ
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.subtitle": "Merak ettiğiniz her şey burada",
    "faq.q1": "diKey nedir?",
    "faq.a1": "diKey, işletmelerin boş saatlerini değerlendirmesini ve kullanıcıların yakınlarındaki en iyi indirimleri keşfetmesini sağlayan akıllı bir indirim platformudur. Hem işletmeler hem de kullanıcılar için kazan-kazan çözümü sunar.",
    "faq.q2": "Gizlilik ve KVKK hakkında bilgi alabilir miyim?",
    "faq.a2": "diKey, kullanıcı gizliliğine büyük önem verir. Tüm kişisel veriler KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında işlenir ve korunur. Verileriniz 256-bit şifreleme ile güvence altındadır ve üçüncü taraflarla paylaşılmaz. {privacyLink} hakkında daha fazla bilgi almak için lütfen linke tıklayın. {termsLink} için daha fazla bilgi için de bu linki ziyaret edebilirsiniz.",
    "faq.a2.privacyLinkText": "gizlilik politikası",
    "faq.a2.termsLinkText": "diKey Kullanım koşulları",
    "faq.q3": "Hesabımı nasıl silebilirim?",
    "faq.a3": "Hesabınızı silmek için uygulama içindeki Ayarlar > Hesap > Hesabı Sil seçeneğini kullanabilirsiniz. Alternatif olarak info@diKey.app adresine e-posta göndererek hesap silme talebinde bulunabilirsiniz. İşlem 48 saat içinde tamamlanır.",
    
    // Footer
    "footer.tagline": "İndirimlerle dolu bir dünya. Her saat bir fırsat ile yakınındaki en iyi fırsatları keşfet.",
    "footer.contact": "İletişim",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.copyright": "© 2025 DiscounTurkey. Tüm hakları saklıdır.",
    
    // Marquee
    "marquee.1": "İndirimlerle Dolu Bir Dünya",
    "marquee.2": "Her Saat Bir Fırsat",
    "marquee.3": "Kaçırma, diKey'i kontrol et",
    "marquee.4": "Her Yerde Fırsat, Her An Kazanç",

    // Ad Showcase
    "ad.headlinePrefix": "Şehrin her köşesinde indirimler ve avantajlar cebinde. Hepsi",
    "ad.brand": "diKey'de.",
    
    // Privacy Policy
    "privacy.title": "Gizlilik Politikası",
    "privacy.lastUpdated": "Son güncelleme: 2025",
    "privacy.content": "GİZLİLİK POLİTİKASI VE AYDINLATMA METNİ\n\nYürürlük Tarihi: 06.08.2025\n\nVeri Sorumlusu: Discounturkey İnternet Hizmetler İletişim Pazarlama Anonim Şirketi.\n\n \n1. diKey NEDİR?\n\ndiKey uygulaması; bunlarla sınırlı olmaksızın cafe, restoran, plaj, mağaza ve diğer hizmet sektörleri gibi yerli ve global işletmelere özel geliştirilmiş dijital bir indirim platformdur. İşletmelerin kampanya ve indirim tekliflerini kullanıcılarla paylaşmasına olanak tanır.\n\n \n2. GİZLİLİK POLİTİKASI VE AYDINLATMA METNİ’NİN AMACI\n\nİşbu Gizlilik Politikası ve Aydınlatma Metni ile DiscounTurkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş. (“diKey”)’in faaliyet gösterdiği her türlü mecradaki ziyaretçilerimize/kullanıcılarımıza ait özel ve genel nitelikli kişisel veriler 6698 Sayılı Kişisel Verilerin Korunması Kanununa, Kanun’a bağlı yürürlüğe koyulan ve koyulacak düzenlemelere (yönetmelik, tebliğ, genelge vb.) ve bağlayıcı nitelikteki Kişisel Verileri Koruma Kurulu tarafından alınmış ve alınacak kararlara uygun olarak işlenecek, saklanacak ve veri sahibi tarafından talep edildiğinde silinecektir. Kişisel verilerin alınma ve işlenme usulü dahil veri sahiplerinin yasal hakları aşağıda açıklanmıştır. İşbu Gizlilik Politikası ve Aydınlatma Metni, Dikey uygulamasına kayıt olan gerçek ve tüzel kişi kullanıcılar adına hazırlanmıştır.\n\n3. diKey’ in SORUMLULUKLARI\n\n6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“Kanun”) 3. Maddesi uyarınca kişisel veri, kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade etmektedir. diKey 6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca “veri sorumlusu” sıfatıyla kişisel verilerinizi Kanuna uygun olarak kaydedecek, işleyecek, saklayacak, güncelleyecek, üçüncü kişilere aktarabilecektir.\n\nToplanan kişisel verileriniz, diKey tarafından Kanunun 4. 5. ve 6. Maddelerinde belirtilen, hukuka ve dürüstlük kurallarına uygun, doğru, belirli, açık ve meşru amaçlar için, işlendikleri amaçlarla bağlantılı, sınırlı ve ölçülü bir biçimde, ilgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan süre kadar muhafaza edilme şartlarına uygun bir şekilde, aşağıdaki amaçlarla işlenebilecektir;\n\n• 6698 Sayılı Kişisel Verilerin Korunması Kanununda ve bu Kanuna bağlı çıkarılan düzenlemelerde belirtilen yükümlülüklerimizin yerine getirilmesi,\n• diKey tarafından icra edilen faaliyetlerin Kanuna ve diKey politikalarına uygun şekilde yürütülebilmesi,\n• Ürün/hizmet teklifi, her türlü bilgilendirme, reklam-tanıtım, promosyon, satış ve pazarlama faaliyetlerinin gerçekleştirilebilmesi,\n• İlgili diKey birimleri tarafından müşteri siparişlerinin veya taleplerinin hazırlanması, teslimi ve diğer gerekli tüm süreçlerin yürütülebilmesi,\n• diKey’in kullanıcılarıyla kuracağı sözleşmeler veya bu sözleşmelerin ifasıyla doğrudan ilgili olması nedeniyle,\n• diKey tarafından kullanıcılara tesis edilecek hakların tesisi, kullanılması veya korunması amacıyla,\n• diKey’ in ticari ve iş stratejilerinin belirlenmesi ve uygulanması amaçları ile işlenebilecektir.\ndiKey’ e üye olmanız, platformu kullanmanız, diKey web sitesi veya uygulamalarını ziyaret etmeniz halinde diKey tarafından kimlik bilgileriniz ve diKey ile paylaşmış olduğunuz kişisel verileriniz diKey tarafından e-posta, telefon, internet sitesi, muhtelif sözleşmeler, kâğıt ortamında veya elektronik ortamda tutulan formlar gibi vasıtalar ile otomatik ve otomatik olmayan yöntemlerle Kanunun 5. ve 6. maddelerine uygun şekilde toplanıp, işlenebilecektir.\n\n \n4. KİŞİSEL VERİLERİN AKTARILMASI\n\ndiKey tarafından toplanan kişisel veriler, Kanunun 8 ve 9. maddelerinde belirtilen şartlara uygun olarak iş ilişkisi içerisinde bulunulan kişilere, iş ortaklarına, kanunen yetkili kurum ve kuruluşlara aktarılabilecektir.\n\n \n5. VERİ SAHİPLERİNİN KANUN KAPSAMINDAKİ HAKLARI\n\nDilediğiniz zaman diKey’ e yazılı olarak başvurarak kişisel verilerinizin;\n\n• İşlenip işlenmediğini, işlenme amacını ve amacına uygun kullanıp kullanılmadığını öğrenebilir ve işlenmiş ise bu konuda bilgi isteyebilir,\n• Kanuna uygun olarak yurt içinde ve yurt dışında bilgilerinizin paylaşıldığı üçüncü kişileri öğrenebilir,\n• Bilgilerinizin eksik ya da hatalı işlendiğini düşünüyorsanız düzeltilmesini isteyebilir,\n• Kanunun 7. Maddesinde öngörülen şartlar çerçevesinde bilgilerinizin silinmesini ya da yok edilmesini talep edebilir,\n• Bilgilerinizin, otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz edebilir veya Kanuna aykırı olarak kaydedildiğini veya kullanıldığını düşünüyorsanız ve bu sebeple zarara uğramışsanız zararın giderilmesini talep edebilirsiniz.\nKişisel veri sahipleri, Kanunun 11. Maddesinde belirtilen hak ve taleplerini info@dikey.app mail adresimize elektronik posta yoluyla veya “Altınkum Mah. 423. Sk. Kaya Plaza No:35 İç Kapı No:4 Konyaaltı/ANTALYA” adresindeki şirket merkezimize posta yoluyla iletebilirler. Tarafımıza usulüne uygun olarak iletilen talepleriniz Kanunun 13. Maddesi gereğince en geç otuz gün içerisinde ücretsiz olarak sonuçlandırılacaktır. Başvuruya verilen cevabın ayrı bir maliyet gerektirmesi halinde, Kişisel Verileri Koruma Kurulunca belirlenen tarifedeki ücretler talep edilebilir.\n\n6. DEĞİŞİKLİK HAKKI\n\nDikey, işbu Gizlilik Politikası ve Aydınlatma Metninde mevzuat veya hizmet koşullarına göre değişiklik yapma hakkını saklı tutar. Güncel sürüm, mobil uygulama veya resmi internet sitesi üzerinden yayımlanır.\n\n \n7. İLETİŞİM\n\nE-posta: info@dikey.app\n\nAdres: Altınkum Mah. 423. Sk. Kaya Plaza No:35 İç Kapı No:4 Konyaaltı/ANTALYA\n \nUnvan: Discounturkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş\n\nVergi No: 3011284995",
    "privacy.backToHome": "Ana sayfaya dön",
    
    // Terms of Use
    "terms.title": "Kullanım Koşulları",
    "terms.lastUpdated": "Son güncelleme: 2025",
    "terms.content": "KULLANIM KOŞULLARI\n\n \n\nYürürlük Tarihi: 06.08.2025\n\n \n\nBu Kullanım Koşulları (\"Koşullar\"), diKey Mobil Uygulamasını (\"Uygulama\") kullanmadan önce dikkatlice okunmalıdır. Uygulama, DiscounTurkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş. (\"diKey\") tarafından geliştirilmiş ve sunulmuştur. Uygulama üzerinde her türlü kullanım ve tasarruf yetkisi \"diKey\" e aittir.\n\n\nKullanıcı, uygulamaya giriş yaparak ve/veya üye olarak Kullanım Sözleşmesi'nin tamamını okuduğunu, içeriğini bütünü ile anladığını ve tüm hükümlerini onayladığını ve ayrıca uygulamada belirtilen diğer koşullara ve yürürlükteki mevzuata uygun davranacağını kabul ve beyan eder.\n\n \n\n1. Hizmetin Tanımı\n\ndiKey, kullanıcıların iş birliği yapılan markalardan ve işletmelerden çeşitli ürün ve hizmetlerde indirimler almasını sağlayan bir mobil uygulamadır. diKey, kullanıcıya özel promosyonlar, kampanyalar ve dijital kuponlar sunabilir.\n\n \n\n2. Kullanıcı Koşulları\n\nUygulamayı kullanabilmek için aşağıdaki şartların karşılanması gerekmektedir. Kullanıcının;\n\n• En az 18 yaşında olması veya yasal vasisinin izniyle kullanması,\n• Doğru, güncel ve eksiksiz kullanıcı bilgileri sağlaması,\n• Uygulamanın yalnızca yasal amaçlarla kullanılması gerekmektedir.\n \n\n3. Hesap Oluşturma ve Güvenlik\n\nUygulamayı kullanmak için işbu Kullanım Koşulları kabul edilerek bir kullanıcı hesabı oluşturulması gerekmektedir. Kullanıcı bilgilerinin gizliliğini korumak kullanıcının sorumluluğundadır. Kullanıcı hesabıyla yapılan tüm işlemlerden münferiden kullanıcılar sorumlu olacaktır.\n\ndiKey uygulamasına üye olurken doğru ve güncel bilgilerin verilmesi kullanıcıların sorumluluğundadır. Kullanıcı hatasından kaynaklı bilgiler nedeniyle doğabilecek erişim ve kullanım sorunlarından diKey' in hiçbir sorumluluğu bulunmamaktadır.\n\ndiKey tarafından uygulama aracılığıyla verilmekte olan hizmetler, Tüketici Hukuku mevzuatında tanımlanmış olan uygulama üzerinden sunacağı hizmetler genel itibariyle Tüketici Hukuku mevzuatında tanımlanan elektronik ticaretten ibarettir. Kullanıcılar uygulama kullanımı kapsamında kendisinin belirleyeceği bir \"şifre\" ye sahip olur. Kayıt sırasında Kullanıcı tarafından yazılan e-mail adresi Kullanıcı' ya özeldir ve tek üyelik oluşturma imkanına sahiptir; aynı e-mail adresi ile iki farklı Kullanıcı yaratılamaz. \"Şifre\" sadece Kullanıcı tarafından bilinir. Kullanıcı dilediği zaman şifresini değiştirebilir. Şifre'nin seçimi ve korunması tamamı ile kullanıcının sorumluluğundadır. diKey, şifre kullanımından doğacak problemlerden sorumluluk kabul etmemektedir.\n\n \n\n4. İndirimler ve Kampanyalar\n\ndiKey uygulaması yalnızca anlaşmalı işletmeler tarafından sağlanacak kampanyaların kullanıcılar adına tanımlanmasına fayda sağlayacak olup, diKey uygulaması üzerinden herhangi bir siparişte bulunulması veya herhangi bir şekilde ödeme gerçekleştirilmesi mümkün değildir.\n\n• diKey üzerinden sunulan indirimler belirli sürelerle ve işletmelerin koşullarına bağlıdır.\n• Her indirim, sadece belirtilen lokasyonlarda ve sürelerde geçerlidir.\n• diKey, kampanyaları önceden haber vermeksizin değiştirme, durdurma veya sonlandırma hakkını saklı tutar.\n• Kullanıcılar diKey' in sağlamış olduğu kampanyalara katılımlarını iptal edebilirler. Bu kapsamda katılımın iptali veya süresinde kullanılmaması halinde ilgili işletmeler kendi inisiyatiflerine göre kullanıcıları aynı kampanyadan belirli bir süre boyunca tekrar yararlandırmayabilirler.\n• Kullanıcıların kampanyalara katılımı, herhangi bir ürün veya hizmet için rezervasyon anlamına gelmemektedir. Bu kapsamda ilgili işletmeler ve diKey, kullanıcılara belirtilen tarih ve saatte ilgili ürün veya hizmetin kesinlikle sunulacağı garantisi vermemektedir.\n• İş birliği yapılan işletmeler ve markalar, kampanyaların kullanımına dair ek şartlar belirleyebilir.\n• İlgili işletmelerde kullanılacak kampanyalar tek bir harcama için kullanılabilir. Kampanyalar, doğrudan veya dolaylı olarak farklı harcamalar ile birleştirilerek veya birden fazla üyelik üzerinden toplu şekilde kullanılamaz.\n• Kampanyadan faydalanmak isteyen kullanıcının harcama yapmadan önce ilgili işletmeye kampanya hakkında bilgi paylaşımı yapması gerekmektedir. Aksi takdirde kullanıcı kampanyadan faydalanamayabilir.\n \n\n5. Üçüncü Taraf Hizmetler\n\ndiKey, üçüncü taraf işletmelerle iş birliği yaparak indirim sağlar. Bu üçüncü tarafların sunduğu ürün ve hizmetlerin kalitesi, güvenliği veya uygunluğuna dair herhangi bir garanti verilmemektedir. Satın alınan ürün ve hizmetlerden doğan sorunlardan ilgili işletme sorumludur.\n\n \n\n6. Kullanıcı Sorumlulukları\n\nKullanıcılar, yalnızca hukuka uygun ve şahsi amaçlarla uygulama üzerinde işlem yapabilirler. Kullanıcıların, uygulama dâhilinde yaptığı her işlem ve eylemdeki hukuki ve cezai sorumlulukları kendilerine aittir. Kullanıcının diKey uygulamasına kaydolurken vermiş olduğu bilgilerin tamamı o kullanıcıya özgüdür. Kullanıcı uygulamaya kaydolurken doğru bilgileri girmekle yükümlüdür. Kullanıcının yanlış bilgiler ile kaydolması halinde yaşanabilecek herhangi bir giriş sorunundan diKey hiçbir şekilde sorumlu değildir.\n\nKullanıcı bilgilerinin güvenliğinden münferiden kullanıcı sorumlu olup bu bilgilerin üçüncü kişilerin eline geçmesi nedeniyle kullanıcının uğrayabileceği zararlardan diKey' in sorumluluğu bulunmayacaktır. Kullanıcının böyle bir durumdan şüphelenmesi halinde diKey ile derhal yazılı olarak irtibata geçmesi gerekmektedir.\n\nKullanıcının sorumlulukları;\n\n• Uygulamayı kötüye kullanmamak (örneğin sahte hesap açmak, kampanyaları hileli yollarla kullanmak),\n• Diğer kullanıcıların deneyimini olumsuz etkileyecek davranışlarda bulunmamak,\n• Uygulamanın güvenliğini, İşletmeleri ve üçüncü kişileri tehlikeye atacak girişimlerde bulunmamak,\n• diKey tarafından, geçici olarak üyelikten uzaklaştırılmış veya üyelikten süresiz yasaklanmış olmamak,\n• diKey uygulamasını değiştirmemek, sistem protokollerini ihlal etmemek, zararlı yazılım yüklememek, tersine mühendislik uygulamamak veya herhangi bir yasa dışı müdahaleye teşebbüs etmemek,\n \n• diKey uygulamasını yalnızca şahsi amaçlarla kullanmak, diKey uygulaması ticari amaçlarla kullanmamak,\n \n\n• diKey uygulamasını kullanmak için gerekli olan internet bağlantısı, hücresel veri vb. teknik altyapıyı sağlamak ve gereken veri iletim maliyetini üstlenmek,\n \n\n• Uygulamaya ait yazılım güncellemelerini takip edip uygulamak.\n \nKullanıcı bunlarla sınırlı olmaksızın yukarıda belirtilen sorumluluklarının ihlali halinde diKey' in herhangi bir zarara uğraması halinde uğranılan tüm zararlardan sorumlu olacak ve bu zararları derhal giderecektir.\n \n\n7. Fikri Mülkiyet Hakları\n\nBu uygulamada bulunan bilgiler, yazılar, resimler, markalar, slogan ve diğer işaretler ile sair sınaî ve fikri mülkiyet haklarına ilişkin bilgilerin korunmasına yönelik programlarla, sayfa düzeni ve uygulamanın sunumu, her türlü Fikri Mülkiyet hakkı münferiden \"diKey\" in mülkiyetindedir. Bu uygulamadaki bilgilerin ya da uygulama sayfalarına ilişkin her tür veri tabanı, web sitesi, software kodları ile html kodu ve diğer kodlar uygulama içeriğinde bulunan ürünlerin, tasarımların, resimlerin, metinlerin, görsel, işitsel imgelerin, video kliplerin, dosyaların, katalogların ve listelerin kısmen ya da tamamen kopyalanması, değiştirilmesi, yayınlanması, online ya da diğer bir medya kullanılmak suretiyle gönderimi, dağıtımı, satılması yasaktır. Kullanıcılar, yukarıda sayılan ve bunlarla sınırlı olmayan uygulama yazılım, donanım ve içeriğini çoğaltmayacağını, kopyalamayacağını, dağıtmayacağını, işlemeyeceğini gerek bu eylemleri ile gerekse de başka yollarla \"diKey\" ile doğrudan ve/veya dolaylı olarak rekabete girmeyeceğini kabul ve taahhüt etmektedir.\n\nKullanıcı, diKey hizmetlerini, bilgilerini ve telif haklarına tâbi çalışmalarını yeniden satmak, işlemek, paylaşmak, dağıtmak, sergilemek veya başkasının diKey hizmetlerine erişmesi veya kullanmasına izin vermek hakkına sahip değildir. Bu sayfadaki bilgilerin kısmen kopyalanması, basılması, işlenmesi, dağıtılması, çoğaltılması, sergilenmesi ancak ticari olmayan kişisel ihtiyaçlar için ve diKey' in yazılı izni ile mümkündür. diKey markası, logosu, uygulama arayüzü ve içerikleri diKey' e aittir. Herhangi bir içerik izinsiz kopyalanamaz, dağıtılamaz veya ticari amaçla kullanılamaz.\n\n \n\n8. Gizlilik ve Kişisel Veriler\n\ndiKey, kullanıcıların kişisel verilerini [KVKK / GDPR] kapsamına uygun olarak işler. Gizlilik Politikamızda, hangi verilerin nasıl toplandığı ve işlendiği detaylı olarak açıklanmıştır. Uygulamayı kullanarak bu politikayı kabul etmiş sayılırsınız.\n\n \n\n9. Sorumluluğun Sınırlandırılması\n\ndiKey, uygulamanın kesintisiz, hatasız veya güvenli olacağını garanti etmez. Kullanıcının uğrayabileceği doğrudan veya dolaylı zararlardan, uygulamanın kullanımından kaynaklanan veri kayıplarından veya teknik arızalardan sorumlu değildir.\n\n \n\n11. Koşullarda Değişiklik Hakkı\n\nİşbu kullanım koşullarını diKey gerektiği zaman değiştirebilir. Bu değişiklikler düzenli olarak uygulamada yayınlanır ve aynı tarihten itibaren geçerli olur. Uygulama hizmetlerinden yararlanan ve uygulamaya erişim sağlayan her gerçek ve tüzel kişi, diKey tarafından işbu kullanım koşulları hükümlerinde yapılan her değişikliği, önceden kabul etmiş sayılmaktadır. \n\n \n\n12. Devir \n\n\ndiKey, bu Sözleşmeyi bildirimsiz olarak istediği zaman kısmen veya bütünüyle devredebilir. Kullanıcı ise diKey' in yazılı onayı olmadan, Kullanıcı Sözleşmesi kapsamındaki hak ve yükümlülüklerini, kısmen veya tamamen, herhangi bir üçüncü kişiye devredemez. \n\n \n\n \n\n13. Mücbir Sebepler \n\n\nHukuken mücbir sebep sayılan tüm durumlarda, diKey bu Sözleşme' den kaynaklanan yükümlülüklerini geç ifa etmekten veya ifa etmemekten dolayı yükümlü değildir. Bu ve bunun gibi durumlar, diKey açısından, gecikme veya ifa etmeme veya temerrüt addedilmeyecek veya bu durumlar için diKey' in herhangi bir tazminat yükümlülüğü doğmayacaktır. \n\n14. Uygulanacak Hukuk ve Yetki\n\nBu Koşullar Türkiye Cumhuriyeti kanunlarına tabi olacaktır. Taraflar arasında çıkabilecek uyuşmazlıklarda Antalya Mahkemeleri ve İcra Daireleri yetkilidir.\n\n \n\n15. Sözleşmenin Sona Ermesi ve Fesih\n\n\nBu Sözleşme, Kullanıcı uygulamaya giriş yaptığı ve/veya üye olduğu sürece yürürlükte kalacak ve Taraflar arası hüküm ve sonuçlarını doğurmaya devam edecektir. Kullanıcının üyelik süresinin dolması veya geçici veya kalıcı olarak üyeliğinin durdurulması hallerinde sona ermiş sayılacaktır.\n\ndiKey, Kullanıcıların işbu Kullanıcı Sözleşmesi'ni ve/veya uygulama içinde yer alan Kullanıcının, üyeliğe ve hizmetlere ilişkin benzeri kuralları ihlal etmeleri durumunda Kullanıcı Sözleşmesi'ni tek taraflı olarak feshedebilecek ve Kullanıcılar, fesih sebebiyle, diKey' in uğradığı doğrudan veya dolaylı tüm zararları tazmin etmekle yükümlü olacaktır.\n\nYürürlükte bulunan ilgili mevzuatlara ve işbu Kullanım Koşullarına aykırı kullanım olması halinde diKey' in kullanıcı üyeliğini iptal etme, askıya alma vb. hakları saklıdır.\n\nKullanıcı da dilediği zaman hesabını kapatarak hizmeti kullanmayı sonlandırabilir.\n\n \n\n16. İletişim\n\nHer türlü soru, öneri veya şikayet için bizimle aşağıdaki adreslerden iletişime geçebilirsiniz.\n\nUnvan  : Discounturkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş\n\nVergi No: 3011284995\n\nAdres    : Altınkum Mah. 423. Sk. Kaya Plaza No:35 İç Kapı No:4 Konyaaltı/ANTALYA\n\nE-posta : info@diKey.app\n\n \n\n ",
    "terms.backToHome": "Ana sayfaya dön",
  },
  en: {
    // Navbar
    "nav.howItWorks": "How it works",
    "nav.faq": "FAQ",
    "nav.businessRegister": "Business",
    "nav.businessLogin": "Business Login",
    "nav.privacy": "Privacy",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.badge": "A World Full of Discounts",
    "hero.title1": "Every Hour",
    "hero.title2": "An Opportunity",
    "hero.subtitle": "Smart discount platform for businesses and users. Discover the best deals near you, win instantly.",
    "hero.stat1": "Active Campaigns",
    "hero.stat2": "Happy Customers",
    "hero.stat3": "Total Savings",
    "hero.stat4": "Partner Businesses",
    
    // World of Discounts
    "world.title": "A World Full of Discounts",
    "world.description": "diKey is a smart opportunity platform that lets you instantly discover the best discounts based on your location and time. It brings together special offers from cafes, restaurants, stores, and many other businesses so you can experience more while paying less. Download for free, find the closest deals, and start saving now.",
    "world.feature1.title": "Easy to Use",
    "world.feature1.desc": "Discover deals instantly with a simple interface",
    "world.feature2.title": "Secure Platform",
    "world.feature2.desc": "GDPR compliant, encrypted data management",
    "world.feature3.title": "Wide Network",
    "world.feature3.desc": "Growing ecosystem with hundreds of partner businesses",
    
    // Discount Hours
    "discount.badge": "Smart Timing",
    "discount.title": "Discounted Happy Hours",
    "discount.description": "diKey offers the most advantageous services and products at specific time intervals with \"Discounted happy hours\". Users can instantly see special offers from the nearest businesses by opening the app.",
    "discount.benefit1.title": "Budget-friendly",
    "discount.benefit1.desc": "Deals that fit your pocket",
    "discount.benefit2.title": "Discover new places",
    "discount.benefit2.desc": "Find businesses near you",
    "discount.benefit3.title": "Time-based deals",
    "discount.benefit3.desc": "Discounts at the best hours",
    "discount.activeDeals": "Currently active deals",
    
    // Every Pocket
    "pocket.title1": "di",
    "pocket.titleK": "K",
    "pocket.title2": "ey for Every Pocket",
    "pocket.description": "diKey is essential for every pocket with special discounts offered at cafes, restaurants, stores, beaches and many different venues.",
    "pocket.cafe": "Cafe",
    "pocket.restaurant": "Restaurant",
    "pocket.store": "Store",
    "pocket.beach": "Beach",
    "pocket.more": "And more",
    "pocket.earn": "₺ Earn & Save",
    
    // Catch Section
    "catch.title1": "Don't Miss,",
    "catch.title2": "check",
    "catch.title3": "diKey.",
    "catch.description": "Opportunities exist across many sectors. And we're constantly expanding!",
    
    // How It Works
    "how.title": "How It Works",
    "how.subtitle": "Start with simple steps for both businesses and users",
    "how.forBusiness": "For Businesses",
    "how.forUsers": "For Users",
    "how.b1.title": "Sign up",
    "how.b1.desc": "Register your business quickly",
    "how.b2.title": "Set deal hours",
    "how.b2.desc": "Configure discounted hours",
    "how.b3.title": "Scan QR",
    "how.b3.desc": "Scan customer QR code",
    "how.b4.title": "Apply discount",
    "how.b4.desc": "Automatic discount applied",
    "how.u1.title": "Download the app",
    "how.u1.desc": "Download from iOS or Android",
    "how.u2.title": "Choose your deal",
    "how.u2.desc": "Discover deals near you",
    "how.u3.title": "Show QR code",
    "how.u3.desc": "Present QR at the business",
    "how.u4.title": "Enjoy your discount",
    "how.u4.desc": "Save instantly",
    
    // Advantages
    "adv.title": "Benefits for Everyone",
    "adv.subtitle": "Businesses increase revenue, users save money",
    "adv.forBusiness": "For Businesses",
    "adv.forUsers": "For Users",
    "adv.b1.title": "Turn slow hours into revenue",
    "adv.b1.desc": "Attract customers during low-traffic hours",
    "adv.b2.title": "Build loyal customers",
    "adv.b2.desc": "Grow with returning customers",
    "adv.b3.title": "Real-time campaign management",
    "adv.b3.desc": "Edit deals in real-time",
    "adv.u1.title": "Exclusive deals at quality venues",
    "adv.u1.desc": "Discounted experience at premium locations",
    "adv.u2.title": "Location-based discovery",
    "adv.u2.desc": "Find the best deals near you",
    "adv.u3.title": "Trusted discount experience",
    "adv.u3.desc": "Verified and secure businesses",
    
    // Partner Section
    "partner.title": "Our Partner Network",
    "partner.subtitle": "A growing ecosystem of trusted businesses.",
    
    // Security
    "security.title": "Security & Infrastructure",
    "security.subtitle": "Your data is protected with the highest security standards",
    "security.f1.title": "GDPR compliant data management",
    "security.f1.desc": "All your data is processed in compliance with regulations",
    "security.f2.title": "Encrypted information",
    "security.f2.desc": "Maximum security with end-to-end encryption",
    "security.f3.title": "High-performance servers",
    "security.f3.desc": "Enterprise infrastructure for uninterrupted service",
    "security.badge1": "SSL Certified",
    "security.badge2": "GDPR Compliant",
    "security.badge3": "256-bit Encryption",
    "security.badge4": "99.9% Uptime",
    
    // Statistics
    "stats.title": "diKey in Numbers",
    "stats.subtitle": "Concrete indicators of trust and success",
    
    // CTA
    "cta.title": "Don't Miss Out",
    "cta.subtitle": "The best deals near you, surprise special discounts",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you want to know is here",
    "faq.q1": "What is diKey?",
    "faq.a1": "diKey is a smart discount platform that enables businesses to utilize their slow hours and users to discover the best discounts nearby. It offers a win-win solution for both businesses and users.",
    "faq.q2": "Can I get information about privacy and GDPR?",
    "faq.a2": "diKey places great importance on user privacy. All personal data is processed and protected under GDPR regulations. Your data is secured with 256-bit encryption and is not shared with third parties. Please click on the link to learn more about the {privacyLink}. You can also visit this link for more information about the {termsLink}.",
    "faq.a2.privacyLinkText": "privacy policy",
    "faq.a2.termsLinkText": "diKey Terms of Use",
    "faq.q3": "How can I delete my account?",
    "faq.a3": "To delete your account, you can use the Settings > Account > Delete Account option in the app. Alternatively, you can send an email to info@diKey.app to request account deletion. The process is completed within 48 hours.",
    
    // Footer
    "footer.tagline": "A world full of discounts. Discover the best deals near you with an opportunity every hour.",
    "footer.contact": "Contact",
    "footer.quickLinks": "Quick Links",
    "footer.copyright": "© 2025 DiscounTurkey. All rights reserved.",
    
    // Marquee
    "marquee.1": "A World Full of Discounts",
    "marquee.2": "Every Hour An Opportunity",
    "marquee.3": "Don't miss, check diKey",
    "marquee.4": "Opportunities Everywhere, Savings Anytime",

    // Ad Showcase
    "ad.headlinePrefix": "Discounts and perks across the city. All at",
    "ad.brand": "diKey.",
    
    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last updated: 2025",
    "privacy.content": "PRIVACY POLICY AND INFORMATION NOTICE\nEffective Date: 06.08.2025\nData Controller:\nDiscounturkey İnternet Hizmetleri İletişim ve Pazarlama Anonim Şirketi\n \n1. WHAT IS diKey?\nThe diKey application is a digital discount platform developed for local and global businesses, including but not limited to cafés, restaurants, beaches, retail stores, and other service-sector businesses. It enables businesses to share their campaigns and discount offers with users.\n \n2. PURPOSE OF THE PRIVACY POLICY AND INFORMATION NOTICE\nThis Privacy Policy and Information Notice has been prepared by Discounturkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş. (“diKey”) to inform visitors and users about the processing of personal data in accordance with Law No. 6698 on the Protection of Personal Data (KVKK), related regulations, and binding decisions of the Personal Data Protection Authority.\nPersonal data will be processed, stored, and deleted upon the request of the data subject in compliance with applicable legislation. This document also explains the legal rights of data subjects and the procedures for the collection and processing of personal data. This Policy applies to all natural and legal persons registered in the diKey application.\n \n3. RESPONSIBILITIES OF diKey\nPursuant to Article 3 of Law No. 6698, personal data refers to any information relating to an identified or identifiable natural person. diKey processes personal data as a Data Controller in accordance with the Law and may record, process, store, update, and, where legally permitted, transfer such data to third parties.\nCollected personal data may be processed in compliance with the principles set out in Articles 4, 5, and 6 of the Law—lawfully and fairly, accurately, for specific, explicit, and legitimate purposes, in a manner that is limited and proportionate, and retained for the period required by applicable legislation or necessary for the purpose of processing—for the following purposes:\n• Fulfillment of obligations arising from Law No. 6698 and related regulations;\n• Proper execution of diKey’s activities in accordance with legislation and internal policies;\n• Conducting product and service offers, notifications, advertising, promotion, sales, and marketing activities;\n• Managing user requests and operational processes;\n• Establishment and performance of contracts with users;\n• Establishment, exercise, or protection of diKey’s legal rights;\n• Determination and implementation of diKey’s commercial and business strategies.\nIf you register for diKey, use the platform, or visit diKey’s website or applications, your personal data may be collected and processed automatically or non-automatically through channels such as email, telephone, websites, contracts, and physical or electronic forms, in accordance with Articles 5 and 6 of the Law.\n \n4. TRANSFER OF PERSONAL DATA\nPersonal data collected by diKey may be transferred to business partners, affiliates, and legally authorized public institutions and organizations in accordance with Articles 8 and 9 of Law No. 6698.\n \n5. RIGHTS OF DATA SUBJECTS\nData subjects may apply to diKey in writing at any time and have the right to:\n• Learn whether their personal data is being processed and, if so, request information regarding the processing purpose and whether it is used in accordance with that purpose;\n• Learn the third parties to whom personal data is transferred domestically or abroad;\n• Request correction of incomplete or inaccurate personal data;\n• Request deletion or destruction of personal data within the framework of Article 7 of the Law;\n• Object to results arising against them due to analysis of data exclusively through automated systems;\n• Request compensation for damages in case personal data is processed unlawfully and results in loss.\nApplications may be submitted via email to info@dikey.app or by post to the company’s registered address:\nAltınkum Mah. 423. Sk. Kaya Plaza No:35 İç Kapı No:4 Konyaaltı / ANTALYA\nRequests will be finalized free of charge within a maximum of 30 days in accordance with Article 13 of the Law. If the response requires additional costs, fees determined by the Personal Data Protection Authority may be charged.\n \n6. RIGHT TO AMEND\ndiKey reserves the right to amend this Privacy Policy and Information Notice in line with changes in legislation or service conditions. The most up-to-date version shall be published via the mobile application or the official website.\n \n7. CONTACT INFORMATION\nE-mail: info@dikey.app\nAddress: Altınkum Mah. 423. Sk. Kaya Plaza No:35 İç Kapı No:4 Konyaaltı / ANTALYA\nCompany Title: Discounturkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş.\nTax Number: 3011284995",
    "privacy.backToHome": "Back to home",
    
    // Terms of Use
    "terms.title": "Terms of Use",
    "terms.lastUpdated": "Last updated: 2025",
    "terms.content": "TERMS OF USE\nEffective Date: 06.08.2025\nThese Terms of Use (“Terms”) must be read carefully before using the diKey Mobile Application (“Application”). The Application has been developed and is provided by Discounturkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş.(“diKey”). All rights of use and disposition related to the Application belong exclusively to diKey.\nBy accessing and/or registering in the Application, the User acknowledges that they have read, fully understood, and accepted all provisions of these Terms of Use, and agrees to comply with all other conditions specified in the Application and applicable legislation.\n \n1. Description of the Service\ndiKey is a mobile application that enables users to benefit from discounts on various products and services offered by partner brands and businesses. diKey may provide users with personalized promotions, campaigns, and digital coupons.\n \n2. User Eligibility\nTo use the Application, the User must:\n• be at least 18 years old or use the Application with the consent of a legal guardian;\n• provide accurate, current, and complete information;\n• use the Application solely for lawful purposes.\n \n3. Account Creation and Security\nIn order to use the Application, the User must accept these Terms and create a user account. The User is solely responsible for maintaining the confidentiality of their account information. All actions performed through the User’s account shall be deemed to have been carried out by the User.\nProviding accurate and up-to-date information during registration is the User’s responsibility. diKey shall not be liable for any access or usage issues arising from incorrect information provided by the User.\nThe services provided through the Application generally fall within the scope of electronic services as defined under consumer protection legislation. The User determines a password for access to the Application. Each email address is unique and may be used to create only one account. The password is known only to the User and may be changed at any time. The selection and protection of the password are entirely the User’s responsibility. diKey shall not be liable for any issues arising from password usage.\n \n4. Discounts and Campaigns\nThe diKey Application serves solely as a platform to define and present campaigns provided by partner businesses. It is not possible to place orders or make payments through the Application.\n• Discounts offered through diKey are valid for limited periods and subject to the conditions determined by partner businesses.\n• Each discount is valid only at the specified locations and within the specified time periods.\n• diKey reserves the right to modify, suspend, or terminate campaigns without prior notice.\n• Users may cancel their participation in campaigns. In case of cancellation or failure to use a campaign within its validity period, partner businesses may, at their discretion, restrict the User from benefiting from the same campaign again for a certain period.\n• Participation in a campaign does not constitute a reservation or guarantee of a product or service.\n• Partner businesses may impose additional conditions regarding the use of campaigns.\n• Campaigns may be used for a single transaction only and may not be combined with other transactions or multiple memberships.\n• Users must inform the relevant business of the campaign before making a purchase; otherwise, the User may not be able to benefit from the campaign.\n \n5. Third-Party Services\ndiKey cooperates with third-party businesses to provide discounts. diKey does not guarantee the quality, safety, or suitability of the products or services offered by such third parties. Any issues arising from purchased products or services shall be the responsibility of the relevant business.\n \n6. User Responsibilities\nUsers may perform actions within the Application solely for lawful and personal purposes. Users bear full legal and criminal responsibility for all actions carried out through the Application.\nUsers are responsible for:\n• not misusing the Application (e.g., creating fake accounts or using campaigns fraudulently);\n• not engaging in behavior that negatively affects other users’ experience;\n• not attempting actions that may compromise the security of the Application, partner businesses, or third parties;\n• not being temporarily or permanently suspended from membership by diKey;\n• not modifying the Application, violating system protocols, uploading malicious software, engaging in reverse engineering, or attempting any unlawful interference;\n• using the Application solely for personal purposes and not for commercial use;\n• providing the necessary technical infrastructure such as internet access and covering all related costs;\n• following and installing Application updates.\nIn the event that diKey suffers any damage due to a breach of these responsibilities, the User shall be liable for all resulting damages and shall compensate such damages immediately.\n \n7. Intellectual Property Rights\nAll information, texts, images, trademarks, slogans, designs, software codes, page layouts, and other intellectual and industrial property rights contained in the Application belong exclusively to diKey. Any copying, reproduction, modification, distribution, publication, transmission, sale, or commercial use of the Application content, in whole or in part, without prior written consent from diKey is strictly prohibited.\nUsers agree not to reproduce, copy, distribute, process, or otherwise use the Application’s software, hardware, or content, and not to compete directly or indirectly with diKey through such actions.\n \n8. Privacy and Personal Data\ndiKey processes Users’ personal data in accordance with KVKK and GDPR. Details regarding data collection and processing are provided in the Privacy Policy. By using the Application, the User is deemed to have accepted this policy.\n \n9. Limitation of Liability\ndiKey does not guarantee that the Application will operate uninterrupted, error-free, or securely. diKey shall not be liable for any direct or indirect damages, data losses, or technical failures arising from the use of the Application.\n \n10. Right to Amend the Terms\ndiKey reserves the right to amend these Terms at any time. Amendments shall become effective upon publication within the Application.\n \n11. Assignment\ndiKey may assign these Terms, in whole or in part, at any time without notice. The User may not assign their rights or obligations under these Terms without the prior written consent of diKey.\n \n12. Force Majeure\ndiKey shall not be liable for any delay or failure in the performance of its obligations due to force majeure events recognized by law.\n \n13. Governing Law and Jurisdiction\nThese Terms shall be governed by the laws of the Republic of Türkiye. Any disputes arising out of these Terms shall be subject to the jurisdiction of the courts and enforcement offices of Antalya.\n \n14. Termination\nThese Terms shall remain in force as long as the User accesses and/or uses the Application. diKey may terminate or suspend User access unilaterally in case of any violation of these Terms or applicable legislation. The User may terminate their account at any time by closing their account.\n \n15. Contact Information\nCompany Name: Discounturkey İnternet Hizmetleri İletişim ve Pazarlama A.Ş.\nTax Number: 3011284995\nAddress: Altınkum Mah. 423. Sk. Kaya Plaza No:35 İç Kapı No:4 Konyaaltı / ANTALYA\nE-mail: info@dikey.app",
    "terms.backToHome": "Back to home",
  },
  de: {
    // Navbar
    "nav.howItWorks": "Wie es geht",
    "nav.faq": "FAQ",
    "nav.businessRegister": "Registrieren",
    "nav.businessLogin": "Login",
    "nav.privacy": "Datenschutz",
    "nav.contact": "Kontakt",
    
    // Hero Section
    "hero.badge": "Eine Welt voller Rabatte",
    "hero.title1": "Jede Stunde",
    "hero.title2": "eine Chance",
    "hero.subtitle": "Die intelligente Rabattplattform für Unternehmen und Nutzer. Entdecke die besten Angebote in deiner Nähe und profitiere sofort.",
    "hero.stat1": "Aktive Kampagnen",
    "hero.stat2": "Zufriedene Kunden",
    "hero.stat3": "Gesamte Ersparnis",
    "hero.stat4": "Partnerunternehmen",
    
    // World of Discounts
    "world.title": "Eine Welt voller Rabatte",
    "world.description": "diKey ist eine intelligente Angebotsplattform, mit der du je nach Standort und Uhrzeit sofort die besten Rabatte entdecken kannst. Sie bündelt exklusive Angebote aus Cafés, Restaurants, Geschäften und vielen weiteren Betrieben. So erlebst du mehr – und zahlst weniger. Lade die App jetzt kostenlos herunter, entdecke Angebote in deiner Nähe und spare sofort.",
    "world.feature1.title": "Einfache Nutzung",
    "world.feature1.desc": "Entdecke Angebote sofort dank intuitiver Oberfläche",
    "world.feature2.title": "Sichere Plattform",
    "world.feature2.desc": "DSGVO-konforme und verschlüsselte Datenverarbeitung",
    "world.feature3.title": "Großes Netzwerk",
    "world.feature3.desc": "Wachsendes Ökosystem mit hunderten Partnern",
    
    // Discount Hours
    "discount.badge": "Intelligente Zeitsteuerung",
    "discount.title": "Vorteilhafte Rabattzeiten",
    "discount.description": "Mit \"vorteilhaften Rabattzeiten\" bietet diKey zu bestimmten Zeitfenstern besonders attraktive Angebote. Nutzer sehen beim Öffnen der App sofort exklusive Angebote von Betrieben in ihrer Nähe.",
    "discount.benefit1.title": "Budgetfreundlich",
    "discount.benefit1.desc": "Angebote passend zu deinem Budget",
    "discount.benefit2.title": "Neue Orte entdecken",
    "discount.benefit2.desc": "Finde Betriebe in deiner Nähe",
    "discount.benefit3.title": "Zeitlich begrenzte Angebote",
    "discount.benefit3.desc": "Rabatte zu den besten Zeiten",
    "discount.activeDeals": "Aktuell verfügbare Angebote",
    
    // Every Pocket
    "pocket.title1": "di",
    "pocket.titleK": "K",
    "pocket.title2": "ey für jede Tasche",
    "pocket.description": "diKey ist unverzichtbar für jede Tasche mit speziellen Rabatten in Cafés, Restaurants, Geschäften, Stränden und vielen anderen Orten.",
    "pocket.cafe": "Café",
    "pocket.restaurant": "Restaurant",
    "pocket.store": "Geschäft",
    "pocket.beach": "Strand",
    "pocket.more": "Und vieles mehr",
    "pocket.earn": "€ Verdienen & Sparen",
    
    // Catch Section
    "catch.title1": "Verpass nichts – ",
    "catch.title2": "diKey",
    "catch.title3": " entdecken",
    "catch.description": "Angebote gibt es in vielen Branchen. Und wir wachsen ständig!",
    
    // How It Works
    "how.title": "Wie funktioniert es?",
    "how.subtitle": "Starte mit einfachen Schritten für Unternehmen und Nutzer",
    "how.forBusiness": "Für Unternehmen",
    "how.forUsers": "Für Nutzer",
    "how.b1.title": "Registrieren",
    "how.b1.desc": "Unternehmen schnell anlegen",
    "how.b2.title": "Rabattzeiten festlegen",
    "how.b2.desc": "Rabattzeiten konfigurieren",
    "how.b3.title": "QR-Code scannen",
    "how.b3.desc": "QR-Code des Kunden scannen",
    "how.b4.title": "Rabatt automatisch anwenden",
    "how.b4.desc": "Automatischer Rabatt wird angewendet",
    "how.u1.title": "App herunterladen",
    "how.u1.desc": "Von iOS oder Android herunterladen",
    "how.u2.title": "Angebot auswählen",
    "how.u2.desc": "Angebote in deiner Nähe entdecken",
    "how.u3.title": "QR-Code vorzeigen",
    "how.u3.desc": "QR-Code im Geschäft vorzeigen",
    "how.u4.title": "Rabatt genießen",
    "how.u4.desc": "Sofort sparen",
    
    // Advantages
    "adv.title": "Vorteile für alle",
    "adv.subtitle": "Unternehmen steigern Umsätze, Nutzer sparen Geld",
    "adv.forBusiness": "Für Unternehmen",
    "adv.forUsers": "Für Nutzer",
    "adv.b1.title": "Leerlaufzeiten in Umsatz verwandeln",
    "adv.b1.desc": "Kunden in ruhigen Stunden anlocken",
    "adv.b2.title": "Stammkunden aufbauen",
    "adv.b2.desc": "Mit wiederkehrenden Kunden wachsen",
    "adv.b3.title": "Kampagnen in Echtzeit steuern",
    "adv.b3.desc": "Angebote sofort anpassen",
    "adv.u1.title": "Exklusive Angebote bei ausgewählten Betrieben",
    "adv.u1.desc": "Rabattierte Erlebnisse an Premium-Standorten",
    "adv.u2.title": "Standortbasierte Angebotsentdeckung",
    "adv.u2.desc": "Beste Angebote in deiner Nähe finden",
    "adv.u3.title": "Sichere und geprüfte Rabatte",
    "adv.u3.desc": "Verifizierte und sichere Betriebe",
    
    // Partner Section
    "partner.title": "Unser Partnernetzwerk",
    "partner.subtitle": "Ein wachsendes Ökosystem vertrauenswürdiger Unternehmen.",
    
    // Security
    "security.title": "Sicherheit & Infrastruktur",
    "security.subtitle": "Deine Daten sind nach höchsten Sicherheitsstandards geschützt",
    "security.f1.title": "DSGVO-konforme Datenverwaltung",
    "security.f1.desc": "Alle Daten werden gesetzeskonform verarbeitet",
    "security.f2.title": "Verschlüsselte Daten",
    "security.f2.desc": "Maximale Sicherheit durch End-to-End-Verschlüsselung",
    "security.f3.title": "Hochleistungsserver",
    "security.f3.desc": "Enterprise-Infrastruktur für unterbrechungsfreien Service",
    "security.badge1": "SSL-Zertifiziert",
    "security.badge2": "DSGVO-konform",
    "security.badge3": "256-Bit-Verschlüsselung",
    "security.badge4": "99,9% Verfügbarkeit",
    
    // Statistics
    "stats.title": "diKey in Zahlen",
    "stats.subtitle": "Konkrete Kennzahlen für Vertrauen und Erfolg",
    
    // CTA
    "cta.title": "Verpasse es nicht",
    "cta.subtitle": "Die besten Angebote in deiner Nähe, überraschende Sonderrabatte",
    
    // FAQ
    "faq.title": "Häufig gestellte Fragen",
    "faq.subtitle": "Alles, was du wissen möchtest, findest du hier",
    "faq.q1": "Was ist diKey?",
    "faq.a1": "diKey ist eine intelligente Rabattplattform, die es Unternehmen ermöglicht, ihre ruhigen Stunden zu nutzen, und Nutzern hilft, die besten Rabatte in der Nähe zu entdecken. Sie bietet eine Win-Win-Lösung für Unternehmen und Nutzer.",
    "faq.q2": "Kann ich Informationen über Datenschutz und DSGVO erhalten?",
    "faq.a2": "diKey legt großen Wert auf den Datenschutz der Nutzer. Alle personenbezogenen Daten werden gemäß DSGVO-Verordnungen verarbeitet und geschützt. Deine Daten sind mit 256-Bit-Verschlüsselung gesichert und werden nicht an Dritte weitergegeben. Bitte klicke auf den Link, um mehr über die {privacyLink} zu erfahren. Du kannst auch diesen Link besuchen, um mehr über die {termsLink} zu erfahren.",
    "faq.a2.privacyLinkText": "Datenschutzerklärung",
    "faq.a2.termsLinkText": "diKey Nutzungsbedingungen",
    "faq.q3": "Wie kann ich mein Konto löschen?",
    "faq.a3": "Um dein Konto zu löschen, kannst du die Option Einstellungen > Konto > Konto löschen in der App verwenden. Alternativ kannst du eine E-Mail an info@diKey.app senden, um die Kontolöschung anzufordern. Der Vorgang wird innerhalb von 48 Stunden abgeschlossen.",
    
    // Footer
    "footer.tagline": "Eine Welt voller Rabatte. Entdecke jede Stunde die besten Angebote in deiner Nähe.",
    "footer.contact": "Kontakt",
    "footer.quickLinks": "Schnellzugriff",
    "footer.copyright": "© 2025 DiscounTurkey. Alle Rechte vorbehalten.",
    
    // Marquee
    "marquee.1": "Eine Welt voller Rabatte",
    "marquee.2": "Jede Stunde eine Chance",
    "marquee.3": "Verpasse es nicht – check diKey",
    "marquee.4": "Überall Angebote, jederzeit Gewinn",

    // Ad Showcase
    "ad.headlinePrefix": "Rabatte und Vorteile in der ganzen Stadt. Alles bei",
    "ad.brand": "diKey.",
    
    // Privacy Policy
    "privacy.title": "Datenschutzerklärung",
    "privacy.lastUpdated": "Zuletzt aktualisiert: 2025",
    "privacy.content": "Inhalt folgt in Kürze...",
    "privacy.backToHome": "Zurück zur Startseite",
    
    // Terms of Use
    "terms.title": "Nutzungsbedingungen",
    "terms.lastUpdated": "Zuletzt aktualisiert: 2025",
    "terms.content": "Inhalt folgt in Kürze...",
    "terms.backToHome": "Zurück zur Startseite",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("diKey-lang");
      return (saved as Language) || "tr";
    }
    return "tr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("diKey-lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;

