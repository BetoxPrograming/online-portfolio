interface AboutProps {
    lang?: "en" | "es"
}

export function About({lang}: AboutProps) {
  const content = {
    en: {
      p1: "Advanced Software Development student focused on backend, QA, and security. I bring fast learning, attention to detail, analytical thinking, creativity, initiative, and a quality-driven mindset.",
      p2: "I am building a technical foundation for backend, QA, and entry-level technology roles through programming, databases, Git, system design, documentation, and academic software projects.",
      p3: "I am looking for an internship or entry-level opportunity where I can contribute structure, teamwork, customer-oriented thinking, and continuous improvement while growing as a software developer.",
    },
    es: {
      p1: "Me enfoco en construir software orientado a backend con una mentalidad fuerte de calidad. Mi trabajo se centra en escribir lógica clara, validar el comportamiento con pruebas y mejorar la confiabilidad mediante debugging y documentación estructurada.",
      p2: "A través de proyectos académicos y freelance, he desarrollado scripts de automatización, sistemas de bases de datos y aplicaciones cliente-servidor que priorizan corrección, mantenibilidad y resolución práctica de problemas.",
      p3: "Sigo fortaleciendo mis habilidades de backend y testing mientras construyo proyectos con enfoque real — con la meta de crecer en equipos que valoren claridad, aprendizaje y calidad de software.",
    },
  } as const;

  const t = content[lang];


  return (
        <section id="about" className="min-h-screen flex items-center py-20 px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
                <h2 className="text-[22px]
            font-bold
            text-white
            mb-12 lg:hidden
            sticky top-0 z-40
            bg-transparent
            backdrop-blur-lg
            py-4 -mx-6 px-6">

                    ABOUT
                </h2>
                <p className="text-[17px] text-gray-300 leading-relaxed text-justify mb-6">
                  {t.p1}
                </p>
                <p className="text-[17px] text-gray-300 leading-relaxed text-justify mb-6">
                  {t.p2}
                </p>
                <p className="text-[17px] text-gray-300 leading-relaxed text-justify ">
                  {t.p3}
                </p>
            </div>
        </section>
    );
}

