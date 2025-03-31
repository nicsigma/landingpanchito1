import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import UseCasesSection from "@/components/UseCasesSection";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });
  const { language } = useLanguage();

  // Smooth scroll to section on page load if URL has a hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--dark-green)] text-white overflow-hidden">
      <Navbar />
      <motion.main 
        ref={mainRef}
        className="relative w-full"
        style={{
          perspective: "1px",
          perspectiveOrigin: "center top",
        }}
      >
        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, -50])
          }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, -30])
          }}
        >
          <ServicesSection language={language} />
        </motion.div>

        <motion.div
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, -10])
          }}
        >
          <UseCasesSection language={language} />
        </motion.div>

        <motion.div>
          <ContactSection />
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
