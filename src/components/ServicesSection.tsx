import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

interface ServicesSectionProps {
  language: 'en' | 'es';
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Want to launch a digital product but don't know where to start?",
      description: language === 'en' 
        ? "We help you design the proposal and build a Functional Proof of Concept in just a few weeks."
        : "Te ayudamos a diseñar la propuesta y construir una Prueba de Concepto Funcional en pocas semanas.",
      benefits: language === 'en' 
        ? [
          "Product Strategy Definition",
          "MVP Design & Planning",
          "Rapid Prototyping",
          "Technical Architecture"
        ]
        : [
          "Definición de Estrategia de Producto",
          "Diseño y Planificación de MVP",
          "Prototipado Rápido",
          "Arquitectura Técnica"
        ]
    },
    {
      title: "Have a product but need to improve or pivot?",
      description: language === 'en'
        ? "We analyze where the opportunities for improvement are and suggest the next steps. We also create a roadmap and detailed product requirements to help organize your team."
        : "Analizamos dónde están las oportunidades de mejora y sugerimos los próximos pasos. También creamos un roadmap y requisitos detallados del producto para ayudar a organizar tu equipo.",
      benefits: language === 'en'
        ? [
          "Product Analysis",
          "Improvement Opportunities",
          "Roadmap Creation",
          "Team Alignment"
        ]
        : [
          "Análisis de Producto",
          "Oportunidades de Mejora",
          "Creación de Roadmap",
          "Alineación de Equipo"
        ]
    },
    {
      title: "Not sure how to integrate technology into your business?",
      description: language === 'en'
        ? "We analyze your processes and propose a concrete action plan to optimize them using technologies such as artificial intelligence, blockchain, and more."
        : "Analizamos tus procesos y proponemos un plan de acción concreto para optimizarlos utilizando tecnologías como inteligencia artificial, blockchain y más.",
      benefits: language === 'en'
        ? [
          "Process Analysis",
          "Technology Integration Plan",
          "AI & Blockchain Solutions",
          "Digital Transformation"
        ]
        : [
          "Análisis de Procesos",
          "Plan de Integración Tecnológica",
          "Soluciones de IA y Blockchain",
          "Transformación Digital"
        ]
    }
  ];

  return (
    <AnimatedSection id="our-services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Our Services</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {language === 'en' 
              ? "We offer comprehensive solutions to help your business thrive in the digital age"
              : "Ofrecemos soluciones integrales para ayudar a tu negocio a prosperar en la era digital"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card p-6 rounded-2xl border border-white/10 hover:border-[#00FF00] transition-all duration-300"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <motion.div
                className="overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: hoveredIndex === index ? 'auto' : 0,
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-2 text-white/70">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00]"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ServicesSection;
