import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function ContactSection() {
  const { language } = useLanguage();

  return (
    <AnimatedSection id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">
            {language === 'en' 
              ? "Interested in starting your next project?" 
              : "¿Interesado en comenzar tu próximo proyecto?"}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://calendly.com/panchito-tech/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00FF00] hover:bg-white text-black text-lg px-8 py-4 rounded-full transition-all duration-300 font-semibold"
            >
              {language === 'en' ? "Book a Demo" : "Reservar Demo"}
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}


