import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const services = [
  {
    title: "Launch a new product",
    description: "Whether you're starting from scratch, launching a new MVP, or improving an existing product — we help you move fast, with clarity and user focus.",
    benefits: [
      "From idea to actionable plan",
      "From plan to MVP",
      "From MVP to optimized product"
    ],
    pill: "Less than a sprint"
  },
  {
    title: "Product as a service",
    description: "Perfect for teams needing product direction and momentum. Hire a product team to organize and ignite your team operations. We help you go from \"we're winging it\" to \"we have a product-led roadmap and aligned execution.\"",
    benefits: [
      "Product leadership without hiring full-time",
      "Clear, outcome-driven product roadmap",
      "Implementation support with your existing team"
    ]
  },
  {
    title: "Internal Process Automation",
    description: "Perfect for teams drowning in manual work and inefficient workflows. We integrate technology into your operations so you can focus on what matters. We help you move from \"this takes too much time\" to \"this just works.\"",
    benefits: [
      "Process mapping and diagnosis",
      "Automation opportunities via no-code / low-code / custom tools",
      "Integration between systems, tools, and teams"
    ]
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <AnimatedSection id="our-services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help you launch and improve your products with speed and precision
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#33CD9E]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#33CD9E]/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                {service.pill && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#33CD9E]/10 text-[#33CD9E] whitespace-nowrap border border-[#33CD9E]/20">
                    {service.pill}
                  </span>
                )}
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-4 pt-6 border-t border-white/10">
                      {service.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3 text-sm text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <span className="w-2 h-2 rounded-full bg-[#33CD9E]"></span>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
