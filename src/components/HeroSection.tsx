import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

const rotatingWords = [
  "Product Team",
  "Innovation Team",
  "Process Automators",
  "Business Partners",
  "AI Coders",
  "Product Validators"
];

export default function HeroSection() {
  const { language } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (isDeleting) {
        setText(text.slice(0, -1));
        setDelta(50); // Faster deletion
        
        if (text === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
          setDelta(100); // Reset speed for typing
        }
      } else {
        setText(rotatingWords[currentWordIndex].slice(0, text.length + 1));
        setDelta(100); // Normal typing speed

        if (text === rotatingWords[currentWordIndex]) {
          setDelta(2000); // Pause at the end
          setTimeout(() => {
            setIsDeleting(true);
            setDelta(50); // Set speed for deletion
          }, 2000);
        }
      }
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, delta]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('our-services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center gradient-section overflow-hidden py-16 sm:py-0">
      {/* Innovative background animation */}
      <div className="geometric-animation opacity-20 sm:opacity-30">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
      </div>

      {/* Horizontal Lines */}
      <div className="horizontal-lines hidden sm:block">
        <div className="h-line"></div>
        <div className="h-line"></div>
        <div className="h-line"></div>
        <div className="h-line"></div>
      </div>

      <div className="spotlight-animation hidden sm:block">
        <div className="spotlight spotlight-1"></div>
        <div className="spotlight spotlight-2"></div>
        <div className="spotlight spotlight-3"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white font-grotesk whitespace-normal sm:whitespace-nowrap overflow-hidden px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Meet your{" "}
            <span className="relative inline-block min-w-[150px] sm:min-w-[200px] uppercase">
              {text}
              <span className="absolute right-0 w-[2px] h-full bg-white animate-[cursor_1s_ease-in-out_infinite]"></span>
            </span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 font-sans px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We streamline operations with AI, rapidly test ideas, and build scalable software solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://panchitoproductlab.zohobookings.com/#/panchitoproductlab"
              target="_blank"
              rel="noopener noreferrer" 
              className="border-2 border-[#00FF00] hover:bg-[#00FF00] text-white text-base px-6 py-3 rounded-full transition-all duration-300 font-semibold"
            >
              {language === 'en' ? "Start your project" : "Inicia tu proyecto"}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
