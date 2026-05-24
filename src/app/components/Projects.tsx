import { Badge } from "./ui/badge";

interface ProjectsProps {
    lang?: "en" | "es";
}

export function Projects({ lang }: ProjectsProps) {
    const projects = [
        {
            title: "Project coming soon",
            description: "This section is being updated with selected academic and technical projects.",
            tools: ["Backend", "Databases", "QA", "Software Development"],
            link: "#"
        }
    ];

    return (
        <section
            id="projects"
            className="min-h-screen px-6 lg:px-12 py-20 relative z-10 w-full max-w-full overflow-x-hidden"
        >
            <div className="max-w-[1400px]">
                <h2 className="text-[22px] font-bold text-white mb-12 lg:hidden sticky top-0 z-40 bg-transparent backdrop-blur-lg py-4 -mx-6 px-6">
                    PROJECTS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="border border-white/10 bg-white/5 rounded-2xl p-6 shadow-xl"
                        >
                            <h3 className="text-2xl text-white mb-3">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-5">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool) => (
                                    <Badge
                                        key={tool}
                                        className="bg-[#48659C] bg-opacity-70 text-white border-0"
                                    >
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}