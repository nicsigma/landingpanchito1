import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";

interface UseCasesSectionProps {
  language: 'en' | 'es';
}

export function UseCasesSection({ language }: UseCasesSectionProps) {
  return (
    <AnimatedSection id="use-cases" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Use Cases</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {language === 'en' 
              ? "See how we've done it with others..."
              : "Mira cómo lo hemos hecho con otros..."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-white/60 border border-white/10">
                Product Management
              </span>
              <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-white/60 border border-white/10">
                AI-Powered
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              from021.io
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              {language === 'en'
                ? "Built in less than a month, from021.io is a new product that helps Product Managers define and refine products in minutes. It transforms how teams create and document their products, from initial ideation to detailed technical specifications."
                : "Construido en menos de un mes, from021.io es un nuevo producto que ayuda a los Product Managers a definir y refinar productos en minutos. Transforma la forma en que los equipos crean y documentan sus productos, desde la ideación inicial hasta las especificaciones técnicas detalladas."}
            </p>
            <a 
              href="https://from021.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#00FF00] hover:bg-[#00FF00] text-white text-base px-6 py-3 rounded-full transition-all duration-300 font-semibold"
            >
              {language === 'en' ? "Visit Website" : "Visitar Sitio"}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <a 
              href="https://from021.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-[#00FF00] transition-all duration-300 bg-black/20 backdrop-blur-sm">
                <div className="relative w-full h-full">
                  <img 
                    src="/images/from021-hero.png" 
                    alt="from021.io Feature Prioritization Interface" 
                    className="w-full h-full object-contain p-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                    Feature Prioritization Interface
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default UseCasesSection; 