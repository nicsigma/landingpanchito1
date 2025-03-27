import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { language } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('our-services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gradient-section overflow-hidden">
      {/* Innovative background animation */}
      <div className="geometric-animation">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
      </div>

      {/* Horizontal Lines */}
      <div className="horizontal-lines">
        <div className="h-line"></div>
        <div className="h-line"></div>
        <div className="h-line"></div>
        <div className="h-line"></div>
      </div>

      <div className="spotlight-animation">
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>
        <div className="spotlight spotlight-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Launch new products in less than a sprint
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We validate ideas, design solutions, and execute them faster so you can grow without wasting time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              onClick={scrollToServices}
              className="border-2 border-[#33CD9E] hover:bg-[#33CD9E]/10 text-white text-lg px-8 py-4 rounded-lg transition-all duration-300"
            >
              Start your project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
