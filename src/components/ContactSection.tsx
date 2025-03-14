import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#165B46] via-[#0D2027] to-[#165B46] opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let us buy you a coffee
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Drop your email and we'll get in touch
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-[#33CD9E]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#33CD9E] transition-colors"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-[#FAFAFA] text-gray-900 rounded-md hover:bg-transparent hover:text-white hover:border-[#33CD9E] border border-transparent transition-all duration-300"
              >
                Get in touch
              </motion.button>
            </div>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#33CD9E] mt-2"
              >
                Thanks! We'll be in touch soon.
              </motion.p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}

