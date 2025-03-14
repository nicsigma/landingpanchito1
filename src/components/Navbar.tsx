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
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0D2027]/95 backdrop-blur-md shadow-lg py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo.svg" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {/* Desktop Menu */}
            <div className="flex items-center space-x-8">
              <a 
                href="#services" 
                className="text-sm font-medium text-white/80 hover:text-[#33CD9E] transition-colors duration-300"
              >
                {language === 'en' ? 'Services' : 'Servicios'}
              </a>
              <a 
                href="#team" 
                className="text-sm font-medium text-white/80 hover:text-[#33CD9E] transition-colors duration-300"
              >
                {language === 'en' ? 'Team' : 'Equipo'}
              </a>
              <a 
                href="#contact" 
                className="text-sm font-medium text-white/80 hover:text-[#33CD9E] transition-colors duration-300"
              >
                {language === 'en' ? 'Contact' : 'Contacto'}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <LanguageToggle />
              <a
                href="#contact"
                className="px-6 py-2.5 text-sm font-semibold rounded-md bg-[#33CD9E] text-[#0D2027] hover:bg-[#33CD9E]/90 transition-all duration-300 shadow-lg shadow-[#33CD9E]/20 hover:scale-105"
              >
                {language === 'en' ? 'Book a Call' : 'Agendar Llamada'}
              </a>
            </div>
          </div>

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
