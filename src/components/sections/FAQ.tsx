import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
  ];

  return (
    <section id="sss" ref={ref} className="section-padding bg-secondary/20">
      <div className="container-narrow mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-foreground mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-background rounded-2xl border border-border/30 px-6 data-[state=open]:shadow-soft transition-all duration-300 hover:border-border/50"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-6 text-base group">
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer.includes("{privacyLink}") || faq.answer.includes("{termsLink}") ? (
                      (() => {
                        const content = faq.answer;
                        const parts: (string | JSX.Element)[] = [];
                        let lastIndex = 0;

                        const pushText = (toIndex: number) => {
                          if (toIndex > lastIndex) {
                            parts.push(content.substring(lastIndex, toIndex));
                          }
                        };

                        const addLink = (key: "privacy" | "terms", textKey: "faq.a2.privacyLinkText" | "faq.a2.termsLinkText", to: string) => {
                          parts.push(
                            <Link
                              key={key}
                              to={to}
                              className="text-primary hover:text-primary/80 underline font-medium transition-colors duration-300"
                            >
                              {t(textKey)}
                            </Link>
                          );
                        };

                        // Handle privacy link
                        const privacyToken = "{privacyLink}";
                        const privacyIndex = content.indexOf(privacyToken);
                        if (privacyIndex !== -1) {
                          pushText(privacyIndex);
                          addLink("privacy", "faq.a2.privacyLinkText", "/gizlilik-politikasi-2026");
                          lastIndex = privacyIndex + privacyToken.length;
                        }

                        // Handle terms link
                        const termsToken = "{termsLink}";
                        const termsIndex = content.indexOf(termsToken);
                        if (termsIndex !== -1) {
                          pushText(termsIndex);
                          addLink("terms", "faq.a2.termsLinkText", "/kullanim-kosullari");
                          lastIndex = termsIndex + termsToken.length;
                        }

                        // Remaining text
                        if (lastIndex < content.length) {
                          parts.push(content.substring(lastIndex));
                        }

                        return <>{parts}</>;
                      })()
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
