import {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Badge} from './ui/badge';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    tools: string[];
    link?: string;
    isCenter?: boolean;
    onClick?: () => void;
}

function ProjectCard({title, description, image, tools, link, isCenter, onClick}: ProjectProps) {
    const handleClick = () => {
        if (isCenter && link) {
            window.open(link, '_blank');
        } else if (!isCenter && onClick) {
            onClick();
        }
    };

    return (
        <div className="px-0">
            <div
                className="relative w-[560px] h-[360px] overflow-hidden shadow-2xl cursor-pointer group mx-auto left-1/2 -translate-x-1/2"
                onClick={handleClick}
            >
                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-3xl text-white mb-2">{title}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{description}</p>

                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool, index) => (
                            <Badge
                                key={index}
                                className="bg-[#48659C] bg-opacity-70 text-white border-0 hover:bg-[#5a7ab8]"
                            >
                                {tool}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ProjectsProps {
    lang?: "en" | "es"
}

export function Projects({lang}: ProjectsProps) {
    const sliderRef = useRef<Slider>(null);

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Plataforma completa de comercio electrónico con carrito de compras y pasarela de pagos",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200",
            tools: ["React", "Node.js", "Stripe", "MongoDB", "Redux"],
            link: "#"
        },
        {
            title: "Task Management App",
            description: "Aplicación de gestión de tareas con colaboración en tiempo real",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
            tools: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
            link: "#"
        },
        {
            title: "Social Media Dashboard",
            description: "Dashboard analítico para redes sociales con visualización de métricas",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
            tools: ["Vue.js", "Chart.js", "Express", "PostgreSQL"],
            link: "#"
        },
        {
            title: "Portfolio Builder",
            description: "Constructor de portafolios drag-and-drop con múltiples templates",
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200",
            tools: ["React", "TailwindCSS", "Firebase", "DnD Kit"],
            link: "#"
        },
        {
            title: "Health Tracker",
            description: "Aplicación para seguimiento de salud, rutinas de ejercicio y nutrición",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
            tools: ["React Native", "React", "AWS", "GraphQL"],
            link: "#"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        arrows: false,
        beforeChange: (current: number, next: number) => {
            // This ensures the z-index updates properly
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '15%',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    centerPadding: '5%',
                }
            }
        ]
    };

    const goToSlide = (index: number) => {
        sliderRef.current?.slickGoTo(index);
    };

    return (
        <section id="projects" className="min-h-screen px-6 lg:px-12 py-20 relative z-10 w-full max-w-full overflow-x-hidden">
            <div className="max-w-[1400px]">
                <h2 className="text-[22px]
            font-bold
            text-white
            mb-12 lg:hidden
            sticky top-0 z-40
            bg-transparent
            backdrop-blur-lg
            py-4 -mx-6 px-6">
                    PROJECTS
                </h2>

                <div className="relative">
                    <div className="projects-slider">
                        <Slider ref={sliderRef} {...settings}>
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}