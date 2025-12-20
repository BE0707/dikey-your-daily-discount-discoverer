import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "Dikey nedir?",
      answer: "Dikey, işletmelerin boş saatlerini değerlendirmesini ve kullanıcıların yakınlarındaki en iyi indirimleri keşfetmesini sağlayan akıllı bir indirim platformudur. Hem işletmeler hem de kullanıcılar için kazan-kazan çözümü sunar."
    },
    {
      question: "Gizlilik ve KVKK hakkında bilgi alabilir miyim?",
      answer: "Dikey, kullanıcı gizliliğine büyük önem verir. Tüm kişisel veriler KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında işlenir ve korunur. Verileriniz 256-bit şifreleme ile güvence altındadır ve üçüncü taraflarla paylaşılmaz."
    },
    {
      question: "Hesabımı nasıl silebilirim?",
      answer: "Hesabınızı silmek için uygulama içindeki Ayarlar > Hesap > Hesabı Sil seçeneğini kullanabilirsiniz. Alternatif olarak info@dikey.app adresine e-posta göndererek hesap silme talebinde bulunabilirsiniz. İşlem 48 saat içinde tamamlanır."
    },
  ];

  return (
    <section id="sss" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-muted-foreground text-lg">
            Merak ettiğiniz her şey burada
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
