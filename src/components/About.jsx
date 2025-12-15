import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Coffee } from "lucide-react";

const stats = [
    { value: "Fresher", label: "search for a job" },
    { value: "8+", label: "Technologies Learned" },
    { value: "6+", label: "Coding Hours/Day" },
    { value: "∞", label: "Coffee/Tea Consumed" },
];

const highlights = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: Palette, title: "Design Focus", description: "Pixel-perfect attention to detail" },
    { icon: Rocket, title: "Performance", description: "Optimized for speed and efficiency" },
    { icon: Coffee, title: "Dedication", description: "Passionate about continuous learning" },
];

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={ref}
            className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Full screen gradient mesh */}
            <div className="absolute inset-0 w-full h-full -z-10 gradient-mesh opacity-50" />

            <div className="relative z-10 w-full max-w-7xl px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm uppercase tracking-wider">
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Turning Ideas Into <span className="gradient-text">Digital Reality</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm a motivated web developer passionate about learning and building creative, user-friendly digital experiences. I enjoy turning ideas into functional applications and exploring new technologies to improve my skills.
                    </p>

                </motion.div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Visual desktop  */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <motion.div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute inset-4 rounded-2xl bg-secondary"
                                animate={{ rotate: [0, -3, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />

                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center overflow-visible">

                                <div className="relative w-80 h-80 flex items-center justify-center">

                                    {/* SOFT GLOW LAYER */}
                                    <motion.div
                                        className="absolute inset-[-14px] rounded-full blur-2xl opacity-60"
                                        style={{
                                            background:
                                                "conic-gradient(from 180deg, #6366f1, #ec4899, #6366f1)",
                                        }}
                                        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    {/* ORBIT DOTS */}
                                    {[
                                        { size: "w-2 h-2", color: "#6366f1", shadow: "#6366f1", duration: 6, offset: 150 },
                                        { size: "w-3 h-3", color: "#ec4899", shadow: "#ec4899", duration: 8, offset: 160 },
                                        { size: "w-1.5 h-1.5", color: "#22d3ee", shadow: "#22d3ee", duration: 5, offset: 140 },
                                        { size: "w-2.5 h-2.5", color: "#a855f7", shadow: "#a855f7", duration: 7, offset: 170 },
                                    ].map((dot, i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute rounded-full ${dot.size}`}
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: dot.duration,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            style={{
                                                top: "-6px",
                                                left: "50%",
                                                transformOrigin: `0 ${dot.offset}px`,
                                                background: dot.color,
                                                boxShadow: `0 0 14px ${dot.shadow}`,
                                            }}
                                        />
                                    ))}

                                    {/* PROFILE PICTURE */}
                                    <motion.img
                                        src="/profile.jpg"
                                        alt="Amar Meshram"
                                        className="relative z-10 w-full h-full object-cover rounded-full
                                            border-2 border-transparent
                                            bg-gradient-to-br from-indigo-400 via-pink-400 to-cyan-400
                                            p-[3px] shadow-2xl cursor-pointer"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        whileHover={{ scale: 1.12, rotate: 5 }}
                                    />

                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Visual mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative block sm:hidden"
                    >
                        <div className="relative w-full aspect-square max-w-xs mx-auto">

                            {/* BACK CARD */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            />

                            {/* INNER CARD */}
                            <motion.div
                                className="absolute inset-3 rounded-xl bg-secondary"
                                animate={{ rotate: [0, -3, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />

                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center overflow-visible">

                                <div className="relative w-56 h-56 flex items-center justify-center">

                                    {/* SOFT GLOW */}
                                    <motion.div
                                        className="absolute inset-[-10px] rounded-full blur-xl opacity-60"
                                        style={{
                                            background:
                                                "conic-gradient(from 180deg, #6366f1, #ec4899, #6366f1)",
                                        }}
                                        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                    {/* ORBIT DOTS */}
                                    {[
                                        { size: "w-1.5 h-1.5", color: "#6366f1", duration: 6, offset: 120 },
                                        { size: "w-2 h-2", color: "#ec4899", duration: 8, offset: 135 },
                                        { size: "w-1 h-1", color: "#22d3ee", duration: 5, offset: 110 },
                                    ].map((dot, i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute rounded-full ${dot.size}`}
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: dot.duration, repeat: Infinity, ease: "linear" }}
                                            style={{
                                                top: "-4px",
                                                left: "50%",
                                                transformOrigin: `0 ${dot.offset}px`,
                                                background: dot.color,
                                                boxShadow: `0 0 8px ${dot.color}`,
                                            }}
                                        />
                                    ))}

                                    {/* PROFILE IMAGE */}
                                    <motion.img
                                        src="/profile.jpg"
                                        alt="Amar Meshram"
                                        className="
                                            relative z-10
                                            w-full h-full object-cover rounded-full
                                            border-2 border-transparent
                                            bg-gradient-to-br from-indigo-400 via-pink-400 to-cyan-400
                                            p-[3px]
                                            shadow-xl
                                        "
                                        animate={{ scale: [1, 1.04, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    />

                                </div>
                            </div>
                        </div>
                    </motion.div>




                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            A Developer with a Passion for Design
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            I am a passionate web developer eager to create seamless digital experiences that combine aesthetics with functionality. I enjoy learning new technologies and building projects that solve real-world problems.
                        </p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            I focus on writing clean, efficient code and continuously improving my skills. Every project is an opportunity to learn, explore, and push boundaries in both design and development.
                        </p>


                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                                >
                                    <item.icon className="w-6 h-6 text-primary mb-2" />
                                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                                    <p className="text-muted-foreground text-xs">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50"
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                            <div className="text-muted-foreground text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
