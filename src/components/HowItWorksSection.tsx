import { MessageSquare, BarChart, Rocket, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksSection() {
  const { language } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      title: language === 'en' ? "Step 1: Analysis" : "Paso 1: Análisis",
      description: language === 'en' 
        ? "We schedule a call to understand your idea, goals, and challenges."
        : "Agendamos una llamada para entender tu idea, objetivos y desafíos."
    },
    {
      icon: BarChart,
      title: language === 'en' ? "Step 2: Strategy" : "Paso 2: Estrategia",
      description: language === 'en'
        ? "Together we define the best approach: from a Design Sprint to the development of an MVP."
        : "Definimos juntos el mejor enfoque: desde un Design Sprint hasta el desarrollo de un MVP."
    },
    {
      icon: Rocket,
      title: language === 'en' ? "Step 3: Launch" : "Paso 3: Lanzamiento",
      description: language === 'en'
        ? "In just a few weeks, your product will be ready to hit the market and start growing."
        : "En pocas semanas, tu producto estará listo para salir al mercado y comenzar a crecer."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-br from-[#165B46] to-[#0D2027] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {language === 'en'
              ? 'A simple and agile process to bring your idea to market in record time'
              : 'Un proceso simple y ágil para llevar tu idea al mercado en tiempo récord'
            }
          </p>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Horizontal connecting line */}
            <div className="hidden md:block absolute top-[60px] left-[100px] right-[100px] h-px bg-[#33CD9E]/20"></div>
            
            {steps.map((step, index) => (
              <AnimatedSection 
                key={index}
                animation="fade-in-delay-1"
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#165B46] to-[#0D2027] p-6 rounded-lg border border-[#33CD9E]/20 transition-all duration-300 h-full">
                  {/* Step number and icon */}
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center relative"
                      style={{
                        background: `linear-gradient(135deg, #C45DFF 0%, #0D2027 100%)`,
                      }}
                    >
                      <step.icon size={28} className="text-[#FAFAFA]" />
                      <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#33CD9E] flex items-center justify-center text-sm font-medium text-white">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-[#FAFAFA] mb-3">{step.title}</h3>
                    <p className="text-[#FAFAFA] font-light">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        
        <AnimatedSection className="text-center mt-16">
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md bg-[#FAFAFA] hover:bg-transparent hover:border-[#33CD9E] border-2 border-transparent transition-all duration-300 text-gray-900 hover:text-white group"
          >
            Book a Demo
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
