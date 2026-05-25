import {Github, Linkedin} from 'lucide-react';

interface HeroSectionSidebarProps {
    lang?: "en" | "es"
}

export function HeroSectionSidebar({lang}: HeroSectionSidebarProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    const content = {
        en: {
            p1: "Backend Developer · QA Mindset",
            p2: "Focused on backend development and software quality",
            p3: "ABOUT",
            p4: "BACKGROUND",
            p5: "PROJECTS",
        },
        es: {
            p1: "Desarrollador Backend · Enfoque QA",
            p2: "Enfocado en desarrollo backend y calidad de software",
            p3: "SOBRE MÍ",
            p4: "TRAYECTORIA",
            p5: "PROYECTOS",
        },
    } as const;

    const t = content[lang];

    return (
        <aside
            className="fixed top-0 left-0 h-screen w-[30%] max-w-[600px] px-12 py-20 flex flex-col justify-between min-[1100px]:flex hidden">
            <div>
                <h1
                    className="
    text-white
    leading-tight
    tracking-tight
    font-semibold
    min-[1536px]:tracking-normal
    text-[clamp(34px,2.9vw,43px)]
    mb-[10px]

  "
                >
                    Alberto Zúñiga
                    <span className="hidden min-[1392px]:inline">
    {" "}S.
  </span>
                </h1>

                <h2 className="
    text-gray-200
    leading-normal
    tracking-normal
    font-medium
    min-[1536px]:tracking-normal
    text-[clamp(15px,2.8vw,21px)
    mb-[4px]
  ">
                    {t.p1}
                </h2>
                <p className="
    text-gray-300
    leading-relaxed
    tracking-normal
    font-normal
    text-(17px)
    mb-[60px]
  ">
                    {t.p2}
                </p>

                <nav className="space-y-4">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="block text-gray-400 hover:text-white transition-colors text-left group"
                    >
            <span className="inline-block border-b-2 border-transparent group-hover:border-white transition-all">
              {t.p3}
            </span>
                    </button>
                    <button
                        onClick={() => scrollToSection('experience')}
                        className="block text-gray-400 hover:text-white transition-colors text-left group"
                    >
            <span className="inline-block border-b-2 border-transparent group-hover:border-white transition-all">
              {t.p4}
            </span>
                    </button>
                </nav>
            </div>

            <div className="flex gap-6">
                <a
                    href="https://github.com/BetoxPrograming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <Github className="w-7 h-7"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/albertozunigas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-7 h-7"/>
                </a>
            </div>
        </aside>
    );
}
