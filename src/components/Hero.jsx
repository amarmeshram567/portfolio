import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram, Linkedin } from 'lucide-react';

const roles = ['Full Stack Developer', 'Frontend Developer', "Backend Developer", "Mern Stack Developer", 'Creative Coder'];

const HeroSection = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter Effect
    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const socialLinks = [
        { icon: Github, href: 'https://github.com/amarmeshram567', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/amar-meshram-1a51a3235', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/amar_meshram3142', label: 'Instagram' },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 gradient-mesh" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"
                animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-[15%] w-80 h-80 rounded-full bg-accent/10 blur-3xl"
                animate={{ y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Geometric Floating Shapes */}
            <motion.div
                className="absolute top-[20%] right-[20%] w-20 h-20 border border-primary/30 rotate-45"
                animate={{ rotate: [45, 90, 45], y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-[30%] left-[10%] w-16 h-16 rounded-full border border-accent/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute top-[40%] left-[25%] w-4 h-4 bg-primary rounded-full"
                animate={{ y: [0, -40, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium">
                            👋 Welcome to my portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                    >
                        Hi, I'm <span className="gradient-text">Amar</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-12 md:h-16 mb-8"
                    >
                        <span className="font-display text-2xl md:text-4xl text-muted-foreground">
                            I'm a{' '}
                            <span className="text-primary font-semibold">
                                {displayText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                    className="inline-block w-0.5 h-8 md:h-10 bg-primary ml-1 align-middle"
                                />
                            </span>
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        A passionate fresher developer focused on building clean, responsive,
                        and user-friendly web applications using modern technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden"
                        >
                            <span className="relative z-10">View My Work</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border border-border text-foreground rounded-full font-semibold text-lg hover:bg-secondary transition-colors duration-300"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-center justify-center gap-6"
                    >
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors duration-300"
                                aria-label={link.label}
                            >
                                <link.icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#about"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <span className="text-sm font-medium">Scroll Down</span>
                    <ArrowDown size={20} />
                </motion.a>
            </motion.div>

        </section>
    );
};

export default HeroSection;
