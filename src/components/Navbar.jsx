import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-background/80 backdrop-blur-xl border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.a
                        href="#home"
                        className="font-display text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Portfolio
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </motion.a>

                        ))}

                        <motion.a
                            href="/Amar_Meshram_Resume.pdf"
                            download
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.45 }}
                            whileHover={{ scale: 1.1 }}     // thoda aur grow
                            whileTap={{ scale: 0.95 }}
                            className="
                                relative flex items-center gap-2 justify-center px-6 py-3 rounded-full font-semibold
                                border border-border
                                bg-background overflow-hidden
                                transition-all duration-300
                                hover:border-primary
                                hover:shadow-xl hover:shadow-primary/40
                            "
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Download size={18} />
                                Resume
                            </span>

                            {/* Glow layer */}
                            <span className="
                                    absolute inset-0 rounded-full
                                    bg-gradient-to-r from-primary/20 to-accent/20
                                    opacity-0 hover:opacity-100
                                    transition-opacity duration-300
                                "
                            />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:glow transition-all duration-300"
                        > Hire Me
                        </motion.a>

                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '-100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-background/90 backdrop-blur-sm z-50 overflow-y-auto"
                        >
                            <div className="py-6 px-6 space-y-4">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-lg text-muted-foreground hover:text-foreground transition-colors relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                                    </motion.a>
                                ))}

                                <motion.a
                                    href="/Amar_Meshram_Resume(2).pdf"
                                    download
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.25 }}
                                    whileHover={{ scale: 1.06 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="
                                        relative block text-center px-6 py-3 rounded-full font-semibold
                                        border border-border
                                        bg-background overflow-hidden
                                        transition-all duration-300
                                        hover:border-primary
                                        hover:shadow-xl hover:shadow-primary/40
                                    "
                                >
                                    <span className="relative z-10">Download Resume</span>

                                    {/* Glow layer */}
                                    <span className="
                                        absolute inset-0 rounded-full
                                        bg-gradient-to-r from-primary/20 to-accent/20
                                        opacity-0 hover:opacity-100
                                        transition-opacity duration-300
                                    " />
                                </motion.a>

                                <motion.a
                                    href="#contact"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="inline-block px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold"
                                >
                                    Hire Me
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
