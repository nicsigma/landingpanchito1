import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "../context/LanguageContext";
import { Clock, Zap, Target } from "lucide-react";

const AboutSection = () => {
  const { language } = useLanguage();

  const placeholderCases = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fintech Innovation",
      description: "How we helped a startup launch their MVP in just 2 weeks",
      status: "Coming Soon"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Healthcare Platform",
      description: "Transforming patient care with AI-powered solutions",
      status: "Coming Soon"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "EdTech Revolution",
      description: "Building the future of education with cutting-edge tech",
      status: "Coming Soon"
    }
  ];

  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Coming Soon: Use Cases
          </h2>
          <p className="text-lg text-gray-400">
            Stay tuned to learn more about how we help teams launch products faster and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderCases.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#33CD9E]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#33CD9E]/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-[#33CD9E]/10 text-[#33CD9E]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <span className="text-sm font-medium text-[#33CD9E]">{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
