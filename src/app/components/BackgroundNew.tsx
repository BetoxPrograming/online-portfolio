import { Badge } from "./ui/badge";

interface ExperienceItemProps {
    year: string;
    role: string;
    company: string;
    description: string;
    skills: string[];
}

interface ExperienceNewProps {
    lang?: "en" | "es";
}

const content = {
    en: {
        title: "BACKGROUND",
        experiences: [
            {
                year: "2024 — Present",
                role: "Bachelor in Software Development — In Progress",
                company: "Education",
                description:
                    "Developing strong foundations in backend programming, database design, software architecture, and quality-focused workflows. Academic work emphasizes structured problem solving, debugging practices, data integrity, and collaborative development using agile principles.",
                skills: [
                    "Python",
                    "Java",
                    "SQL Server",
                    "Git",
                    "REST concepts",
                    "Debugging",
                    "Unit testing",
                    "Agile (Scrum)",
                    "Database normalization",
                    "Client-server logic",
                ],
            },
            {
                year: "2025",
                role: "Backend & Database Project Development",
                company: "Academic Projects",
                description:
                    "Designed and implemented backend-driven academic systems including authentication flows, database normalization, stored procedures, and role-based logic. Focused on validation, data consistency, and system reliability through structured testing and debugging.",
                skills: [
                    "SQL Server",
                    "Python",
                    "Java",
                    "REST design",
                    "Data validation",
                    "Database modeling",
                    "Git",
                    "Debugging workflows",
                ],
            },
            {
                year: "2018 — Present",
                role: "Automation & Quality-Focused Development Practice",
                company: "Technical Practice",
                description:
                    "Built automation scripts and tooling workflows emphasizing debugging, reliability, and validation. Applied testing principles to improve system stability, reduce errors, and support structured problem resolution in technical environments.",
                skills: [
                    "Python scripting",
                    "Debugging",
                    "Test validation",
                    "Workflow automation",
                    "Git",
                    "Technical documentation",
                ],
            },
        ],
    },

    es: {
        title: "TRAYECTORIA",
        experiences: [
            {
                year: "2024 — Actualidad",
                role: "Licenciatura en Desarrollo de Software — En curso",
                company: "Formación académica",
                description:
                    "Formación sólida en programación backend, diseño de bases de datos, arquitectura de software y flujos de trabajo orientados a la calidad. Los proyectos académicos priorizan la resolución estructurada de problemas, prácticas de debugging, integridad de datos y desarrollo colaborativo bajo metodologías ágiles.",
                skills: [
                    "Python",
                    "Java",
                    "SQL Server",
                    "Git",
                    "Conceptos REST",
                    "Debugging",
                    "Pruebas unitarias",
                    "Agile (Scrum)",
                    "Normalización de bases de datos",
                    "Lógica cliente-servidor",
                ],
            },
            {
                year: "2025",
                role: "Desarrollo de Proyectos Backend y Bases de Datos",
                company: "Proyectos académicos",
                description:
                    "Diseño e implementación de sistemas académicos orientados a backend, incluyendo flujos de autenticación, normalización de bases de datos, procedimientos almacenados y control de roles. Se priorizó la validación, consistencia de datos y confiabilidad mediante pruebas estructuradas y debugging.",
                skills: [
                    "SQL Server",
                    "Python",
                    "Java",
                    "Diseño REST",
                    "Validación de datos",
                    "Modelado de bases de datos",
                    "Git",
                    "Debugging",
                ],
            },
            {
                year: "2018 — Actualidad",
                role: "Práctica de Automatización y Desarrollo Enfocado en Calidad",
                company: "Práctica técnica",
                description:
                    "Desarrollo de scripts de automatización y flujos técnicos priorizando debugging, confiabilidad y validación. Aplicación de principios de testing para mejorar la estabilidad del sistema, reducir errores y estructurar la resolución de problemas.",
                skills: [
                    "Scripting en Python",
                    "Debugging",
                    "Validación de pruebas",
                    "Automatización de flujos",
                    "Git",
                    "Documentación técnica",
                ],
            },
        ],
    },
} as const;

function ExperienceItem({ year, role, company, description, skills }: ExperienceItemProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 lg:gap-8 group mb-12 p-6 -mx-6 rounded-lg hover:bg-white/5 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="text-[14px] text-gray-400 uppercase tracking-wide">{year}</div>

            <div>
                <h3 className="text-[17px] font-bold text-white mb-3">
                    {role} · {company}
                </h3>

                <p className="text-[17px] text-gray-300 leading-relaxed mb-4">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <Badge
                            key={index}
                            className="bg-[#48659C] bg-opacity-40 text-white border-0 hover:bg-[#5a7ab8] transition-colors"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function BackgroundNew({ lang = "en" }: ExperienceNewProps) {
    const t = content[lang];
    const experiences = t.experiences;

    return (
        <section id="experience" className="min-h-screen py-20 px-6 lg:px-12 relative z-10">
            <h2 className="text-[22px]
            font-bold
            text-white
            mb-12 lg:hidden
            sticky top-0 z-40
            bg-transparent
            backdrop-blur-lg
            py-4 -mx-6 px-6">


            {t.title}
            </h2>

            <div className="max-w-4xl">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[20px] text-white hover:text-[#6B8DD6] transition-colors mt-8 group"
                >
          <span className="border-b-2 border-transparent group-hover:border-[#6B8DD6] transition-all">
            View Full Resume →
          </span>
                </a>
            </div>
        </section>
    );
}
