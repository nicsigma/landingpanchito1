import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-black text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.svg" alt="Panchito Logo" className="h-6 w-auto" />
              <span className="text-xl font-semibold">Panchito</span>
            </div>
            <p className="text-sm text-white/60 max-w-xs">
              {language === 'en'
                ? 'We help companies build better products through design thinking and technology.'
                : 'Ayudamos a las empresas a construir mejores productos a través del design thinking y la tecnología.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Contact' : 'Contacto'}
            </h3>
            <p className="text-sm text-white/60">
              Buenos Aires, Argentina<br />
              hello@panchito.co
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Follow Us' : 'Síguenos'}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/panchito"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#33CD9E] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/panchito"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#33CD9E] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/panchito"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#33CD9E] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Panchito. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        </div>
      </div>
    </footer>
  );
}
