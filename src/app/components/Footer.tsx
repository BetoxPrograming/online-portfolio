import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2d3d5c] bg-opacity-80 backdrop-blur-sm text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl mb-4">
              <span className="text-[#6B8DD6]">&lt;</span>
              Tu Nombre
              <span className="text-[#6B8DD6]">/&gt;</span>
            </div>
            <p className="text-gray-300">
              Desarrollador Full-Stack creando experiencias digitales excepcionales.
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#6B8DD6] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-[#6B8DD6] transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-[#6B8DD6] transition-colors">
                  Proyectos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">Conéctate</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#48659C] bg-opacity-40 hover:bg-[#48659C] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#48659C] bg-opacity-40 hover:bg-[#48659C] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-[#48659C] bg-opacity-40 hover:bg-[#48659C] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:tu@email.com"
                className="p-2 bg-[#48659C] bg-opacity-40 hover:bg-[#48659C] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
          <p>© {currentYear} Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}