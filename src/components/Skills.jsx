import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
    { name: "React", level: 85, color: "from-primary to-cyan-400" },
    { name: "Python", level: 75, color: "from-yellow-500 to-orange-400" },
    { name: "JavaScript", level: 80, color: "from-blue-500 to-primary" },
    { name: "Node.js", level: 85, color: "from-green-500 to-emerald-400" },
    { name: "Express.js", level: 85, color: "from-red-500 to-emerald-400" },
    { name: "MongoDB", level: 88, color: "from-accent to-pink-400" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-primary" },
    { name: "SQLite", level: 80, color: "from-indigo-500 to-blue-400" },
    { name: "HTML", level: 90, color: "from-cyan-500 to-primary" },
    { name: "CSS", level: 90, color: "from-blue-500 to-primary" },
];

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            ref={ref}
            className="relative mt-10 w-full min-h-screen flex flex-col justify-center overflow-hidden"
        >
            <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm uppercase tracking-wider">
                        Skills
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        My <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I am passionate about learning and applying modern web technologies to build user-friendly and creative digital solutions. My skills in front-end development, design, and problem-solving help me bring ideas to life.
                    </p>

                </motion.div>

                <div className="grid lg:grid-cols-2  gap-16">
                    {/* Skill Bars */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-3">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-primary font-semibold">{skill.level}%</span>
                                </div>
                                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                        transition={{ duration: 1.5, delay: 0.4 + index * 0.1 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Circular Rings */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center items-center gap-8"
                    >
                        {[
                            { label: "Frontend", value: 95, color1: "hsl(175, 80%, 50%)", color2: "hsl(280,70%,60%)" },
                            { label: "Backend", value: 85, color1: "hsl(200, 80%, 50%)", color2: "hsl(320,70%,60%)" },
                            { label: "Design", value: 88, color1: "hsl(50, 80%, 50%)", color2: "hsl(340,70%,60%)" },
                        ].map((item, index) => {
                            const radius = 56;
                            const circumference = 2 * Math.PI * radius;
                            const gradientId = `gradient-${index}`; // unique id for each circle

                            return (
                                <div key={item.label} className="relative">
                                    <svg className="w-32 h-32 -rotate-90">
                                        <circle
                                            cx="64"
                                            cy="64"
                                            r={radius}
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            fill="transparent"
                                            className="text-secondary"
                                        />
                                        <motion.circle
                                            cx="64"
                                            cy="64"
                                            r={radius}
                                            stroke={`url(#${gradientId})`}
                                            strokeWidth="8"
                                            fill="transparent"
                                            strokeLinecap="round"
                                            strokeDasharray={circumference}
                                            initial={{ strokeDashoffset: circumference }}
                                            animate={
                                                isInView
                                                    ? { strokeDashoffset: circumference * (1 - item.value / 100) }
                                                    : {}
                                            }
                                            transition={{ duration: 2, delay: 0.6 + index * 0.2 }}
                                        />
                                        <defs>
                                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={item.color1} />
                                                <stop offset="100%" stopColor={item.color2} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <motion.span
                                            className="text-2xl font-bold"
                                            initial={{ opacity: 0 }}
                                            animate={isInView ? { opacity: 1 } : {}}
                                            transition={{ delay: 1 + index * 0.2 }}
                                        >
                                            {item.value}%
                                        </motion.span>
                                        <span className="text-sm text-muted-foreground">{item.label}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
