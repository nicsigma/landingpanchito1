import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function ValueProposition() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen py-24 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              {language === 'en' 
                ? 'Building Product Value Together' 
                : 'Construyendo Valor de Producto Juntos'}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              {language === 'en'
                ? 'We combine design thinking with cutting-edge technology to create meaningful solutions that drive your business forward.'
                : 'Combinamos design thinking con tecnología de vanguardia para crear soluciones significativas que impulsan tu negocio.'}
            </p>
            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 text-lg font-medium rounded-lg bg-[#33CD9E] text-white hover:bg-[#33CD9E]/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'Start Your Journey' : 'Comienza tu Viaje'}
              </motion.a>
              <motion.a
                href="#services"
                className="px-8 py-4 text-lg font-medium rounded-lg border-2 border-[#33CD9E] text-white hover:bg-[#33CD9E]/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {language === 'en' ? 'Explore Services' : 'Explorar Servicios'}
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
} 