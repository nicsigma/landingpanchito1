import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const services = [
  {
    title: "Launch a new product",
    description: "We help you transform your idea into a functional product using AI to accelerate development and ensure market fit.",
    benefits: [
      "AI-powered rapid prototyping",
      "Full-stack development",
      "User experience design",
      "Market validation"
    ]
  },
  {
    title: "Improve your product",
    description: "Enhance your existing product with AI-driven features and optimizations that deliver real value to your users.",
    benefits: [
      "Performance optimization",
      "AI feature integration",
      "UX enhancement",
      "Technical architecture improvement"
    ]
  },
  {
    title: "Automate your business operations",
    description: "Streamline your processes with AI automation that creates tangible efficiency gains and cost savings.",
    benefits: [
      "Process automation",
      "AI workflow integration",
      "Custom automation solutions",
      "Efficiency optimization"
    ]
  }
];

export default function ServicesSection() {
  const { language } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section id="services" className="relative min-h-screen py-24 solid-bg-section">
      {/* Modern spotlight animation */}
      <div className="spotlight-animation">
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>
        <div className="spotlight spotlight-3"></div>
      </div>
      
      <div className="line-animation">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Our Services' : 'Nuestros Servicios'}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'We help you bring to life your ideas with AI with low investment so you can test and scale with real product value' 
              : 'Te ayudamos a dar vida a tus ideas con IA con baja inversión para que puedas probar y escalar con valor real del producto'}
          </p>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <AnimatedSection 
                key={index}
                className="relative"
                animation={index === 0 ? "fade-in" : index === 1 ? "fade-in-delay-1" : "fade-in-delay-2"}
              >
                <motion.div 
                  className="service-card rounded-xl p-8 h-full cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div className="animated-line-container mb-8">
                    <div 
                      className="h-1 bg-gradient-to-r from-[#33CD9E] to-transparent"
                      style={{
                        width: '60px',
                        transform: `rotate(${index * 45}deg)`,
                        transformOrigin: 'left center'
                      }}
                    />
                    <div 
                      className="h-1 bg-gradient-to-l from-[#33CD9E] to-transparent mt-4"
                      style={{
                        width: '40px',
                        transform: `rotate(${-index * 30}deg)`,
                        transformOrigin: 'left center'
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-3 pt-4 border-t border-[#33CD9E]/20">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#33CD9E]"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-16">
          <motion.a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-[#33CD9E] text-[#0D2027] hover:bg-[#33CD9E]/90 transition-all duration-300 group shadow-lg shadow-[#33CD9E]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'en' ? 'Get in touch' : 'Contáctanos'}
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
