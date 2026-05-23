import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2d3d5c] bg-opacity-95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl text-white">
          <span className="text-[#6B8DD6]">&lt;</span>
          Tu Nombre
          <span className="text-[#6B8DD6]">/&gt;</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-[#6B8DD6] transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-white hover:text-[#6B8DD6] transition-colors"
          >
            Experiencia
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-[#6B8DD6] transition-colors"
          >
            Proyectos
          </button>
          <a 
            href="#contact"
            className="px-6 py-2 bg-[#48659C] text-white hover:bg-[#5a7ab8] transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#2d3d5c] bg-opacity-95 backdrop-blur-sm border-t border-gray-600 mt-4 py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left py-2 text-white hover:text-[#6B8DD6] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-left py-2 text-white hover:text-[#6B8DD6] transition-colors"
            >
              Experiencia
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-left py-2 text-white hover:text-[#6B8DD6] transition-colors"
            >
              Proyectos
            </button>
            <a 
              href="#contact"
              className="text-center px-6 py-2 bg-[#48659C] text-white hover:bg-[#5a7ab8] transition-colors"
            >
              Contacto
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}