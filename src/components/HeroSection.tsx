import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { language } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gradient-section">
      <div className="spotlight-animation">
        <div className="spotlight"></div>
        <div className="spotlight"></div>
        <div className="spotlight"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {language === 'en' ? 'Meet your product team' : 'Conoce a tu equipo de producto'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {language === 'en'
              ? 'We help you improve, build and launch your product in less than a sprint'
              : 'Te ayudamos a mejorar, construir y lanzar tu producto en menos de un sprint'}
          </p>
          <motion.button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-lg border-2 border-[#33CD9E] text-white hover:bg-[#33CD9E]/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'Discover More' : 'Descubre Más'}
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
