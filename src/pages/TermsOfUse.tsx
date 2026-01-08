import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  const { language, t } = useLanguage();

  const seoContent = {
    tr: {
      title: "Kullanım Koşulları - diKey",
      description: "diKey kullanım koşulları ve platformun kullanımına ilişkin bilgiler.",
    },
    en: {
      title: "Terms of Use - diKey",
      description: "diKey terms of use and information about using the platform.",
    },
    de: {
      title: "Nutzungsbedingungen - diKey",
      description: "diKey Nutzungsbedingungen und Informationen zur Nutzung der Plattform.",
    },
  } as const;

  const seo = seoContent[language];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href="https://dikeyapp.com/kullanim-kosullari" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />

        <section className="pt-24 pb-16 min-h-screen">
          <div className="container-narrow mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>{t("terms.backToHome")}</span>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                  {t("terms.title")}
                </h1>
                <p className="text-muted-foreground text-lg mb-12">
                  {t("terms.lastUpdated")}
                </p>

                <div className="prose prose-lg max-w-none">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {t("terms.content")}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default TermsOfUse;


