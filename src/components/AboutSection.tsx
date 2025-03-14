
import { Mountain, Cpu, Leaf, Briefcase, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import TeamMember from "./TeamMember";
import MountainDivider from "./MountainDivider";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();

  const teamMembers = [
    {
      name: "Greta Gawianski",
      role: language === 'en' ? "Innovation consulting, Climate Tech & Blockchain" : "Consultoría en innovación, Climate Tech & Blockchain",
      photo: "/lovable-uploads/ad873582-6fdb-4d1a-95af-92fbfe7a0973.png"
    },
    {
      name: "Nicole Sigmaringo",
      role: "UX & Business Design",
      photo: "/lovable-uploads/454f38ba-18d4-49c5-9f85-505acd02ada2.png"
    },
    {
      name: "Ariel Mathov",
      role: "Entrepreneur & AI No Code Specialist",
      photo: "/lovable-uploads/cece3888-07b7-4616-954a-1e9eed8b6dc6.png"
    },
    {
      name: "Oswaldo Rivas",
      role: language === 'en' ? "Senior Product Manager & Business Specialist" : "Senior Product Manager & Business Specialist",
      photo: "/lovable-uploads/5d767c0b-bc68-4220-9120-ba926b566220.png"
    }
  ];

  const capabilities = [
    { 
      icon: Briefcase, 
      text: language === 'en' ? "We launch products in multiple industries" : "Lanzamos productos en múltiples industrias",
      color: "#16a34a" // Verde
    },
    { 
      icon: Cpu, 
      text: language === 'en' ? "AI to enhance design and automation" : "IA para potenciar diseño y automatización",
      color: "#0f766e" // Verde azulado
    },
    { 
      icon: Mountain, 
      text: language === 'en' ? "We explore: technology + impact + nature" : "Exploramos: tecnología + impacto + naturaleza",
      color: "#166534" // Verde oscuro
    },
    { 
      icon: Leaf, 
      text: language === 'en' ? "Committed to sustainable solutions" : "Comprometidos con soluciones sostenibles",
      color: "#047857" // Verde esmeralda
    }
  ];

  return (
    <section id="nosotros" className="section-padding relative overflow-hidden bg-gray-50">
      {/* Mountain divider at the top matching how it works section */}
      <MountainDivider position="top" color="#f9fafb" />
      
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#F2FCE2] rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#D3E4FD] rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-1 px-3 bg-[#E3F9ED] rounded-full mb-4">
            <Users size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">{language === 'en' ? 'About Us' : 'Quiénes Somos'}</span>
          </div>
          
          <h2 className="section-title mb-4">{language === 'en' ? 'Team' : 'Equipo'}</h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'We are passionate about using new technologies to generate innovation. We have a combined +30 years working on digital products in different industries. Oh, and we also love the mountains.'
              : 'Somos apasionados por el uso de nuevas tecnologías para generar innovación. Tenemos en sumatoria +30 años trabajando en productos digitales en distintas industrias. Ah, y también nos encanta la montaña.'
            }
          </p>
        </AnimatedSection>

        {/* Capabilities section - horizontal with icons */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <p className="font-medium text-gray-800">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="flex flex-col h-full justify-center">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                {language === 'en' ? 'We combine technology and nature' : 'Combinamos tecnología y naturaleza'}
              </h3>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'Our philosophy combines the best of two worlds: technological innovation and the inspiration that nature gives us. We believe that the best digital solutions emerge when we keep our feet on the ground and our minds in the future.'
                  : 'Nuestra filosofía combina lo mejor de dos mundos: la innovación tecnológica y la inspiración que nos brinda la naturaleza. Creemos que las mejores soluciones digitales surgen cuando mantenemos los pies en la tierra y la mente en el futuro.'
                }
              </p>
              <p className="text-gray-600 mb-4">
                {language === 'en'
                  ? 'With more than 30 years of combined experience, our team has developed digital products in various industries, from fintech to education and health, always with a focus on efficient and innovative solutions.'
                  : 'Con más de 30 años de experiencia combinada, nuestro equipo ha desarrollado productos digitales en diversas industrias, desde fintech hasta educación y salud, siempre con un enfoque en soluciones eficientes e innovadoras.'
                }
              </p>
              <p className="text-gray-600">
                {language === 'en'
                  ? 'Artificial Intelligence is our ally to accelerate processes and enhance results, allowing us to create high-impact products in record time.'
                  : 'La Inteligencia Artificial es nuestra aliada para acelerar procesos y potenciar resultados, permitiéndonos crear productos de alto impacto en tiempos récord.'
                }
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedSection 
              key={member.name} 
              animation="fade-in-delay-1"
            >
              <TeamMember
                name={member.name}
                role={member.role}
                photo={member.photo}
                delay="fade-in"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      {/* Mountain divider at the bottom matching contact section */}
      <MountainDivider position="bottom" color="#222222" />
    </section>
  );
}
