import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";

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
                year: "2025",
                role: "Music & Podcast Database",
                company: "Academic Completed",
                description:
                    "SQL Server database project for a digital music and podcast platform, focused on relational " +
                    "modeling, documentation, views, stored procedures, triggers, data validation and structured " +
                    "database implementation.",

                modalDescription:
                    "Academic SQL Server database project for a digital music and podcast platform. The project " +
                    "focused on requirements analysis, relational modeling, normalization, table creation, data " +
                    "insertion, views, stored procedures, triggers, validation queries and technical documentation. " +
                    "Although it was not a full web application, it shows database design, SQL logic, debugging, " +
                    "code cleanup and structured implementation work.",

                responsibilities: `
☉ Participated in the full database design and implementation process.
☉ Created and maintained SQL Server tables, relationships and constraints.
☉ Developed views, stored procedures, functions and triggers.
☉ Supported normalization, relational modeling and data consistency decisions.
☉ Reviewed, cleaned and refactored SQL scripts to keep the project executable.
☉ Fixed broken queries, structural issues and execution errors.
☉ Prepared validation queries to confirm database behavior and expected results.
☉ Organized technical documentation, diagrams and project explanations.
☉ Helped structure the repository for clearer presentation and maintainability.
☉ Supported final execution, review and delivery of the academic database project.
`,

                tags: ["Academic", "Completed", "Database"],

                skills: [
                    "SQL Server",
                    "T-SQL",
                    "Database Design",
                    "Stored Procedures",
                    "Documentation",
                ],

                modalSkills: [
                    "SQL Server",
                    "T-SQL",
                    "Database Design",
                    "Normalization",
                    "Stored Procedures",
                    "Triggers",
                    "Views",
                    "Data Validation",
                    "Debugging",
                    "Technical Documentation",
                ],

                links: [
                    {
                        label: "GitHub",
                        href: "https://github.com/BetoxPrograming/music-podcast-database-sqlserver",
                    },
                ],
            },
            {
                year: "2025",
                role: "Waste Management Platform",
                company: "Academic Completed",
                description:
                    "Web platform for waste report management with user system, image uploads, geolocation, " +
                    "rankings and educational modules. Includes backend logic, database integration, deployment " +
                    "fixes and production debugging.",

                modalDescription:
                    "Academic web platform focused on waste management and environmental awareness. The system " +
                    "allows user registration, report creation, image uploads, map visualization, educational " +
                    "content and community participation. The project evolved beyond the original academic scope " +
                    "by adding deployment adjustments, production debugging and improved demo navigation using " +
                    "generic datasets.",

                responsibilities: `
☉ Designed and implemented backend functionality using PHP and MySQL.
☉ Developed user management, report handling, image management and database interaction modules.
☉ Implemented CRUD operations and database connectivity features.
☉ Performed deployment configuration and production debugging after migration to Namecheap hosting.
☉ Refactored backend components to improve maintainability and project organization.
☉ Fixed environment-specific issues appearing only in production environments.
☉ Resolved bugs related to profile images, report images and map icon visualization.
☉ Improved demo datasets and navigation flows to create a better testing experience.
☉ Produced technical documentation including README, setup guides and database notes.
☉ Supported validation, debugging and project stabilization activities.
`,

                tags: [
                    "Academic",
                    "Completed",
                    "Backend",
                    "Deployed",
                ],

                skills: [
                    "PHP",
                    "MySQL",
                    "Backend Development",
                    "Debugging",
                    "Deployment",
                ],

                modalSkills: [
                    "PHP",
                    "MySQL",
                    "CRUD",
                    "Database Design",
                    "Debugging",
                    "Production Troubleshooting",
                    "Deployment",
                    "Image Handling",
                    "Technical Documentation",
                    "QA Mindset",
                ],

                links: [
                    {
                        label: "GitHub",
                        href: "https://github.com/BetoxPrograming/waste-management",
                    },
                    {
                        label: "Demo",
                        href: "https://wastemanagement.betoxprograming.com/",
                    },
                ],
            },
            {
                year: "2024",
                role: "Parking Management System",
                company: "Academic Completed",

                description:
                    "Academic parking management system developed to apply data structures concepts through " +
                    "vehicle registration, zone management, parking flow control and operational interfaces " +
                    "within a desktop environment.",

                modalDescription:
                    "Academic desktop project developed for the Data Structures course. The objective was not " +
                    "data persistence but the practical application of structures through a parking management " +
                    "system. The project includes vehicle registration, parking zones, operational flows and " +
                    "interface interaction. It served as a practical environment to apply linked lists and " +
                    "other structures while organizing system logic and user workflows.",

                responsibilities: `
☉ Designed and developed the complete desktop application structure and interface flow.
☉ Implemented parking registration and vehicle management workflows.
☉ Applied data structures concepts within system modules and operations.
☉ Built interfaces for vehicle entry, exit, zone handling and operational views.
☉ Organized project architecture and internal logic distribution.
☉ Integrated object-oriented programming concepts into the application structure.
☉ Refactored and corrected broken components during development.
☉ Performed debugging and validation during implementation.
☉ Produced project documentation and academic deliverables.
☉ Adapted the implementation to course scope where persistence was not required.
`,

                tags: [
                    "Academic",
                    "Completed",
                    "Data Structures",
                ],

                skills: [
                    "Java",
                    "Data Structures",
                    "OOP",
                    "Debugging",
                    "Desktop Development",
                ],

                modalSkills: [
                    "Java",
                    "Data Structures",
                    "Linked Lists",
                    "OOP",
                    "Swing UI",
                    "Debugging",
                    "Refactoring",
                    "Validation",
                    "Desktop Development",
                    "Documentation",
                ],

                links: [],
            },
            {
                year: "2024",
                role: "Ubuntu Server Security Lab",
                company: "Academic Completed",

                description:
                    "Academic security project focused on Ubuntu Server hardening, network analysis, " +
                    "system protection and infrastructure documentation using practical security tools " +
                    "and validation workflows.",

                modalDescription:
                    "Academic infrastructure and security project focused on Ubuntu Server hardening and " +
                    "security improvement practices. The project covered vulnerability analysis, network " +
                    "inspection, firewall configuration, system updates, access control and documentation. " +
                    "Although oriented to learning and presentation, it provided practical exposure to " +
                    "Linux administration, security tooling, technical documentation and validation workflows.",

                responsibilities: `
☉ Configured and validated Ubuntu Server security settings and hardening practices.
☉ Worked with network inspection and security analysis tools.
☉ Applied firewall and access control configurations.
☉ Evaluated system updates and security improvement workflows.
☉ Performed practical validation and troubleshooting tasks.
☉ Organized technical documentation and learning notes.
☉ Structured project artifacts and repository contents.
☉ Supported configuration review and correction activities.
☉ Documented setup processes and technical decisions.
☉ Presented project findings and security concepts.
`,

                tags: [
                    "Academic",
                    "Completed",
                    "Security",
                ],

                skills: [
                    "Ubuntu Server",
                    "Security",
                    "Networking",
                    "Documentation",
                    "Troubleshooting",
                ],

                modalSkills: [
                    "Ubuntu Server",
                    "Linux",
                    "Security",
                    "Networking",
                    "Firewall",
                    "Hardening",
                    "System Validation",
                    "Troubleshooting",
                    "Documentation",
                    "Technical Analysis",
                ],

                links: [
                    {
                        label: "GitHub",
                        href: "https://github.com/BetoxPrograming/ubuntu-server-security-lab",
                    },
                ],
            },
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

    // Prevents the background page from scrolling while the modal is open.
    // Restores the original body overflow value when the modal closes.
    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

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
