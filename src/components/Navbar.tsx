import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    window.open('https://panchitoproductlab.zohobookings.com/#/customer/panchitoproductlab', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0D2027]/90 backdrop-blur-md py-4" 
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/images/logo.svg" 
              alt="Logo" 
              className="h-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-8"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#33CD9E] transition-colors"
            >
              {language === 'en' ? 'Services' : 'Servicios'}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#33CD9E] transition-colors"
            >
              {language === 'en' ? 'About' : 'Nosotros'}
            </button>
            <motion.button
              onClick={handleBookCall}
              className="px-6 py-2 text-white border-2 border-[#33CD9E] rounded-lg hover:bg-[#33CD9E]/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? "Book a Call" : "Agendar Llamada"}
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-[#33CD9E] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D2027]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 pt-4 pb-6 space-y-4">
              <a href="#services" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-[#33CD9E] transition-colors">
                {language === 'en' ? 'Services' : 'Servicios'}
              </a>
              <a href="#team" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-[#33CD9E] transition-colors">
                {language === 'en' ? 'Team' : 'Equipo'}
              </a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-white/90 hover:text-[#33CD9E] transition-colors">
                {language === 'en' ? 'Contact' : 'Contacto'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
