import { User, Mail, MapPin, Code } from 'lucide-react';

export function AboutMe() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <div className="max-w-4xl w-full">
        <div className="space-y-6 text-white">
          <div className="inline-block">
            <h2 className="text-5xl mb-2">Who I Am</h2>
            <div className="h-1 bg-[#48659C] w-20"></div>
          </div>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            Soy un desarrollador full-stack apasionado por crear experiencias digitales 
            excepcionales. Con experiencia en múltiples tecnologías y frameworks, me enfoco 
            en construir soluciones escalables y eficientes que resuelven problemas reales.
          </p>
          
          <p className="text-lg text-gray-200 leading-relaxed">
            Mi enfoque combina pensamiento creativo con habilidades técnicas sólidas, 
            permitiéndome transformar ideas complejas en productos funcionales y atractivos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#48659C] bg-opacity-30 rounded-lg">
                <Mail className="w-5 h-5 text-[#6B8DD6]" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">tu@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#48659C] bg-opacity-30 rounded-lg">
                <MapPin className="w-5 h-5 text-[#6B8DD6]" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Ubicación</p>
                <p className="font-medium">Tu Ciudad</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <a href="#" className="px-6 py-3 bg-[#48659C] text-white hover:bg-[#5a7ab8] transition-colors">
              Descargar CV
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-[#48659C] text-white hover:bg-[#48659C] hover:bg-opacity-20 transition-colors">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <div className="p-4 bg-[#48659C] bg-opacity-30">
              <Code className="w-10 h-10 text-[#6B8DD6]" />
            </div>
            <div>
              <p className="text-3xl mb-1">5+</p>
              <p className="text-gray-300">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}