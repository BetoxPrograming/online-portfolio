import {Github, Linkedin} from 'lucide-react';

interface HeroSectionMobileProps {
    lang?: "en" | "es"
}

export function HeroSectionMobile({lang}: HeroSectionMobileProps) {
    const content = {
        en: {
            p1: "Backend Developer · QA Mindset",
            p2: "Focused on backend development and software quality",
        },
        es: {
            p1: "Desarrollador Backend · Enfoque en QA",
            p2: "Enfocado en desarrollo backend y calidad de software",
        },
    } as const;

    const t = content[lang];

    return (
        <header className="min-[1100px]:hidden px-6 py-12 relative z-10">

        <h1 className="text-[43px] leading-tight text-white mb-2 font-semibold">
                Alberto Zúñiga S.
            </h1>
            <h2 className="text-[28px] text-white/90 mb-4">
                {t.p1}
            </h2>
            <p className="text-[16px] text-gray-300 mb-8">
                {t.p2}
            </p>

            <div className="flex gap-6">
                <a
                    href="https://github.com/BetoxPrograming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <Github className="w-6 h-6"/>
                </a>
                <a
                    href="https://www.linkedin.com/in/albertozunigas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-6 h-6"/>
                </a>
            </div>
        </header>
    );
}
