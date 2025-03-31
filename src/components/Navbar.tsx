import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const navigation = [
    { name: { en: 'Services', es: 'Servicios' }, href: '#services' },
    { name: { en: 'Contact', es: 'Contacto' }, href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-[var(--dark-green)]/95 backdrop-blur-md shadow-lg" 
          : "py-5 bg-transparent"
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
              className="h-8 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            <nav className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-[#00FF00] transition-colors duration-300"
                >
                  {language === 'en' ? item.name.en : item.name.es}
                </a>
              ))}
            </nav>
            <motion.button
              onClick={handleBookCall}
              className="border-2 border-[#00FF00] hover:bg-[#00FF00] text-white text-base px-4 py-2 rounded-full transition-all duration-300 font-semibold"
            >
              {language === 'en' ? "Start your Project" : "Inicia tu Proyecto"}
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={handleBookCall}
              className="border-2 border-[#00FF00] hover:bg-[#00FF00] text-white text-sm px-3 py-1.5 rounded-full transition-all duration-300 font-semibold"
            >
              {language === 'en' ? "Start Project" : "Iniciar"}
            </motion.button>
            <button
              onClick={toggleMenu}
              className="p-2 text-white hover:text-[#00FF00] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--dark-green)]/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 pt-4 pb-6 space-y-4">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white/80 hover:text-[#00FF00] block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300"
                  >
                    {language === 'en' ? item.name.en : item.name.es}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
