import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="relative py-12 overflow-hidden backdrop-blur-sm border-t border-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo-icon.jpeg" 
                alt="Panchito Logo" 
                className="h-[50px] w-[50px] object-contain"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>
            <p className="text-sm text-white/40 max-w-xs">
              {language === 'en'
                ? 'We help companies build better products through design thinking and technology.'
                : 'Ayudamos a las empresas a construir mejores productos a través del design thinking y la tecnología.'}
            </p>
          </div>
          
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4 text-white/90">
              {language === 'en' ? 'Contact' : 'Contacto'}
            </h3>
            <p className="text-sm text-white/40">
              Buenos Aires, Argentina<br />
              hello@panchito.xyz
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/[0.02] text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Panchito Product Lab. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}</p>
        </div>
      </div>
    </footer>
  );
}
