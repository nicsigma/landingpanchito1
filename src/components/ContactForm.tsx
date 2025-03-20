import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { language } = useLanguage();

  const handleBookCall = () => {
    window.open('https://panchitoproductlab.zohobookings.com/#/customer/panchitoproductlab', '_blank');
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 text-center"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {language === 'en' ? "Let's Connect" : "Conectémonos"}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Book a call so we can discuss your next product" 
              : "Agenda una llamada para discutir tu próximo producto"}
          </p>
        </div>

        <motion.button
          onClick={handleBookCall}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-[#33CD9E] text-white hover:bg-[#33CD9E]/90 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {language === 'en' ? "Let's meet" : "Reunámonos"}
        </motion.button>
      </motion.div>
    </div>
  );
} 