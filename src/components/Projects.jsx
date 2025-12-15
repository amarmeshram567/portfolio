import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Grocery Green Cart App",
        description:
            "An online grocery store with user-friendly interface, real-time cart updates, and secure checkout.",
        image:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", // Example image, change as needed
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "https://grocery-greencart.vercel.app/",
        githubUrl: "https://github.com/amarmeshram567/Grocery",
    },

    {
        id: 2,
        title: "Blog AI App",
        description:
            "An AI-powered blogging platform with content generation, smart recommendations, and analytics dashboard.",
        image:
            "https://images.pexels.com/photos/7278578/pexels-photo-7278578.jpeg",
        tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
        liveUrl: "https://quick-blog-client.vercel.app/",
        githubUrl: "https://github.com/amarmeshram567/QuickBlog",
    },

    {
        id: 3,
        title: "Hotel Booking App",
        description:
            "A hotel booking app with real-time availability, booking management, and user reviews.",
        image:
            "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg",
        tags: ["React", "Node.js", "MongoDB", "Clerk Auth"],
        liveUrl: "https://hotel-booking-app-inky-omega.vercel.app/",
        githubUrl: "https://github.com/amarmeshram567/hotel-booking",
    },
    {
        id: 4,
        title: "Car Rental App",
        description:
            "A car rental web application that allows users to browse cars, book rentals, manage reservations, and view pricing in real time.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        tags: ["React", "Node.js", "Express.js", "MongoDB"],
        liveUrl: "https://car-rental-six-peach.vercel.app/",
        githubUrl: "https://github.com/amarmeshram567/CarRental",
    },

];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-2xl bg-card border border-border group-hover:border-primary/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.1 : 1 }}
                        transition={{ duration: 0.6 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                    {/* Overlay */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center gap-4 bg-background/20 backdrop-blur"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                    >
                        <motion.a
                            href={project.liveUrl}
                            whileHover={{ scale: 1.1 }}
                            className="p-4 rounded-full bg-primary text-primary-foreground"
                        >
                            <ExternalLink size={20} />
                        </motion.a>

                        <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.1 }}
                            className="p-4 rounded-full bg-secondary"
                        >
                            <Github size={20} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex justify-between mb-3">
                        <h3 className="font-bold text-xl group-hover:text-primary transition">
                            {project.title}
                        </h3>
                        <ArrowUpRight className="text-primary" />
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs rounded-full bg-secondary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" ref={ref} className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
            {/* Full screen gradient mesh */}
            <div className="absolute inset-0 w-full h-full -z-10 gradient-mesh opacity-30" />

            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 w-full">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
