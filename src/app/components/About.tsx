interface AboutProps {
    lang?: "en" | "es"
}

export function About({lang}: AboutProps) {
  const content = {
    en: {
      p1: "I’m focused on building backend-driven software with a strong quality mindset. My work centers on writing clear logic, validating behavior through testing, and improving reliability through structured debugging and documentation.",
      p2: "Through academic and freelance projects, I’ve developed automation scripts, database systems, and client-server applications that emphasize correctness, maintainability, and practical problem solving.",
      p3: "I’m continuously strengthening my backend and testing skills while contributing to real-world style projects — aiming to grow within teams that value clarity, learning, and software quality.",
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

