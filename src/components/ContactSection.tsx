import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D2027]/50"></div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="geometric-animation opacity-20">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
          <div className="geometric-shape shape-4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ContactForm />
      </div>
    </section>
  );
}

