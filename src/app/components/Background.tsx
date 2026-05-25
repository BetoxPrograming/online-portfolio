import { Badge } from "./ui/badge";
import { useState } from "react";

interface ExperienceLink {
    label: string;
    href: string;
}

interface ExperienceItemProps {
    year: string;
    role: string;
    company: string;
    description: string;
    modalDescription: string;
    responsibilities: string;
    skills: string[];
    modalSkills: string[];
    tags: string[];
    links: ExperienceLink[];
}

interface ExperienceNewProps {
    lang?: "en" | "es";
}

const content = {
    en: {
        title: "BACKGROUND",
        experiences: [
            {
                year: "2020 — 2021",
                role: "IziRig / IziRig Suite",
                company: "Final Graduation Project",
                description:
                    "Python-based automation suite for Autodesk Maya that combined tooling, workflow optimization, " +
                    "user validation, and internal systems development. Included auto-rigging, installation logic, " +
                    "scene management tools, and modular extensions focused on usability and production workflows.",
                modalDescription:
                    "IziRig started as IziHuman, a final graduation project for the Digital Animation program at " +
                    "Universidad Veritas and later evolved into IziRig Suite, a modular tooling ecosystem for Autodesk " +
                    "Maya. Beyond auto-rigging, the project included automation tools, installer logic, scene management, " +
                    "custom controllers, validation workflows, user testing, documentation, and pipeline support. The " +
                    "focus shifted from animation into software design concepts such as modularity, workflow automation, " +
                    "data persistence, debugging, validation, and user-oriented tooling development.",
                responsibilities: `☉ Designed and developed the core autorig architecture and workflow automation system for Autodesk Maya.
☉ Implemented backend logic responsible for rig generation, control creation, and configuration handling.
☉ Built modular tooling extensions including naming systems, curve generation, and pipeline utilities.
☉ Developed installation and startup logic using userSetup.py and Maya.env integration.
☉ Implemented persistent configuration handling and internal data structures.
☉ Created coordinate mapping and 2D-to-3D conversion systems using Maya API calculations.
☉ Applied debugging, validation, and testing workflows with beta users and bug tracking.
☉ Produced documentation, user flows, UI prototypes, and technical support materials.
☉ Led complete product development including planning, architecture, implementation, UX, and release preparation.
☉ Expanded the project into a modular suite focused on workflow optimization and production support.
`,
                tags: ["Academic", "Autodesk Maya", "Archived"],
                skills: [
                    "Python",
                    "Automation",
                    "Maya API",
                    "Debugging",
                    "Tool Development",
                ],
                modalSkills: [
                    "Python",
                    "Maya API",
                    "Automation",
                    "Tool Development",
                    "Debugging",
                    "Software Testing",
                    "Modular Architecture",
                    "Documentation",
                    "UI Development",
                    "Workflow Optimization",
                ],
                links: [
                    { label: "Project Page", href: "/izirig" },
                    { label: "GitHub", href: "https://github.com/BetoxPrograming/izirig-suite" },
                    { label: "YouTube", href: "https://www.youtube.com/@izirig5583" },
                ],
            },
        ],
    },
} as const;

function ExperienceItem({
                            year,
                            role,
                            company,
                            description,
                            modalDescription,
                            responsibilities,
                            skills,
                            modalSkills,
                            tags,
                            links,
                        }: ExperienceItemProps) {
    const [isOpen, setIsOpen] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get("openProject") === "izirig" && role.indexOf("IziRig") !== -1;
    });

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-full text-left grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 lg:gap-8 group mb-12 p-6 -mx-6 rounded-lg hover:bg-white/5 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
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
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-6"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#13131A]/75 pt-8 px-8 pb-[80px] shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-4 lg:gap-8">
                            <div className="text-[14px] text-gray-400 uppercase tracking-wide">
                                {year}
                            </div>

                            <div className="lg:pr-[100px]">
                                <div className="flex justify-between gap-6 mb-4">
                                    <div>
                                        <h3 className="text-[22px] font-bold text-white mb-2">
                                            {role}
                                        </h3>
                                        <p className="text-gray-400">{company}</p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-400 hover:text-white text-2xl leading-none"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {tags.map((tag, index) => (
                                        <Badge
                                            key={index}
                                            className="bg-white/10 text-white border-0"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <p className="text-[17px] text-gray-300 leading-relaxed mb-6">
                                    {modalDescription}
                                </p>

                                <p className="text-[16px] text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                                    {responsibilities}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {modalSkills.map((skill, index) => (
                                        <Badge
                                            key={index}
                                            className="bg-white/10 text-white border-0"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>

                                <h4 className="text-white font-bold mb-3">Links</h4>
                                <div className="flex flex-wrap gap-5">
                                    {links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            target={link.href.indexOf("http") === 0 ? "_blank" : "_self"}
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-[#6B8DD6] transition-colors border-b border-white/30 hover:border-[#6B8DD6]"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export function Background({ lang = "en" }: ExperienceNewProps) {
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

            </div>
        </section>
    );
}
