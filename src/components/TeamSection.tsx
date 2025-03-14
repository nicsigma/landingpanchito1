import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const teamMembers = [
  {
    name: "Greta Gawianski",
    role: "Innovation consulting, Climate Tech & Blockchain",
    image: "/lovable-uploads/ad873582-6fdb-4d1a-95af-92fbfe7a0973.png",
    linkedin: "https://www.linkedin.com/in/gretagawi/"
  },
  {
    name: "Nicole Sigmaringo",
    role: "UX & Product Strategist",
    image: "/lovable-uploads/454f38ba-18d4-49c5-9f85-505acd02ada2.png",
    linkedin: "https://www.linkedin.com/in/nicole-sigmaringo-205a4130/"
  },
  {
    name: "Ariel Mathov",
    role: "Entrepreneur & AI No Code Specialist",
    image: "/lovable-uploads/cece3888-07b7-4616-954a-1e9eed8b6dc6.png",
    linkedin: "https://www.linkedin.com/in/arielmathov/"
  },
  {
    name: "Oswaldo Rivas",
    role: "Senior Product Manager & Business Specialist",
    image: "/lovable-uploads/5d767c0b-bc68-4220-9120-ba926b566220.png",
    linkedin: "https://www.linkedin.com/in/oswaldo-rivas/"
  }
];

const getAnimationDelay = (index: number): "fade-in" | "fade-in-delay-1" | "fade-in-delay-2" | "fade-in-delay-3" => {
  switch (index) {
    case 0:
      return "fade-in";
    case 1:
      return "fade-in-delay-1";
    case 2:
      return "fade-in-delay-2";
    default:
      return "fade-in-delay-3";
  }
};

export default function TeamSection() {
  const { language } = useLanguage();

  return (
    <section id="team" className="relative min-h-screen py-24 solid-bg-section">
      <div className="spotlight-animation">
        <div className="spotlight"></div>
        <div className="spotlight"></div>
        <div className="spotlight"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#33CD9E] bg-[#33CD9E]/10 rounded-full">
            {language === 'en' ? 'Our Team' : 'Nuestro Equipo'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Meet the Team' : 'Conoce al Equipo'}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {language === 'en'
              ? 'A diverse team of experts ready to transform your ideas into reality.'
              : 'Un equipo diverso de expertos listos para transformar tus ideas en realidad.'}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.name}
              className="relative"
              animation={getAnimationDelay(index)}
            >
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-member block aspect-[3/4] cursor-pointer rounded-xl overflow-hidden shadow-xl shadow-black/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
} 