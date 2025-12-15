import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, Instagram } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/amarmeshram567', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/amar-meshram-1a51a3235', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com/amar_meshram3142', label: 'Instagram' },
    ];

    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative mt-10 py-16 border-t border-border overflow-hidden bg-secondary/20">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 -z-10 gradient-mesh opacity-20" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <motion.a
                            href="#home"
                            className="font-display text-2xl font-bold gradient-text inline-block mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Portfolio
                        </motion.a>
                        <p className="text-muted-foreground leading-relaxed">
                            Passionate about building clean and functional web experiences.
                            Let’s build something amazing together.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors inline-block"
                                        whileHover={{ x: 5 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className='flex flex-col items-center justify-center'>
                        <h4 className="font-display  font-bold mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Amar Meshram. All rights reserved.
                    </p>
                    <motion.p
                        className="text-muted-foreground text-sm flex items-center gap-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Made with{' '}
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart size={14} className="text-red-500 fill-red-500" />
                        </motion.span>{' '}
                        and lots of coffee
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
