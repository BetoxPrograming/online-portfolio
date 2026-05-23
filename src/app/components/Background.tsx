import { Briefcase, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  tools: string[];
}

function ExperienceItem({ title, company, period, description, tools }: ExperienceItemProps) {

  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-500 bg-opacity-30 last:hidden"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 -ml-[7px] bg-[#48659C] rounded-full border-4 border-[#344970] shadow-md"></div>
      
      <div className="bg-[#3d5378] bg-opacity-40 p-6 shadow-md hover:shadow-xl transition-shadow backdrop-blur-sm">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl mb-1 text-white">{title}</h3>
            <p className="text-[#6B8DD6] font-medium">{company}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{period}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <Badge key={index} variant="secondary" className="bg-[#48659C] bg-opacity-30 text-[#6B8DD6] hover:bg-[#48659C] hover:bg-opacity-50 border-0">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Background() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2023 - Presente",
      description: "Liderazgo técnico en el desarrollo de aplicaciones web escalables. Diseño e implementación de arquitecturas serverless y microservicios.",
      tools: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions",
      period: "2021 - 2023",
      description: "Desarrollo de aplicaciones web full-stack. Implementación de APIs RESTful y optimización de rendimiento de bases de datos.",
      tools: ["React", "Express", "MongoDB", "Redux", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer",
      company: "Startup Innovadora",
      period: "2019 - 2021",
      description: "Creación de interfaces de usuario modernas y responsivas. Colaboración con equipos de diseño para implementar experiencias fluidas.",
      tools: ["React", "Vue.js", "JavaScript", "SASS", "Figma"]
    },
    {
      title: "Junior Developer",
      company: "Software Agency",
      period: "2018 - 2019",
      description: "Desarrollo y mantenimiento de sitios web corporativos. Aprendizaje continuo de tecnologías web modernas y mejores prácticas.",
      tools: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen px-6 py-20 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-[#6B8DD6]" />
            <h2 className="text-4xl text-white">Experiencia Profesional</h2>
          </div>
          <p className="text-gray-300 text-lg">Mi trayectoria profesional y las tecnologías con las que he trabajado</p>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}