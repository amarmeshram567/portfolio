import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { toast } from "react-hot-toast"
import emailjs from "emailjs-com";


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                },
                PUBLIC_KEY
            )
            .then(() => {
                setIsSubmitted(true);
                toast.success("Message sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                setTimeout(() => setIsSubmitted(false), 3000);
            })
            .catch(() => {
                toast.error("Failed to send message");
            });
    };


    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    console.log(formData);


    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'meshramamar567@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+91 928 457 2177' },
        { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra (India)' },
    ];

    return (
        <section
            id="contact"
            ref={ref}
            className="relative w-full mt-10 min-h-screen flex flex-col justify-center items-center overflow-hidden"
        >
            <div className="absolute inset-0 w-full h-full -z-10 gradient-mesh opacity-30" />

            <div className="relative z-10 w-full max-w-7xl px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                        Contact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Let's Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Have a project in mind? Drop me a message and let’s build something amazing.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto w-full">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

                        <div className="space-y-6 mb-10">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition"
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-left text-muted-foreground">{item.label}</p>
                                        <p className="font-medium">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border"
                        >
                            <p className="text-muted-foreground">
                                I’m actively seeking full-time opportunities as a Frontend / Full-Stack Developer.
                                Open to exciting roles where I can learn, grow, and contribute to real-world projects.
                            </p>

                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Name */}
                            <div className="relative">
                                <label className="block text-left text-sm font-medium mb-2">
                                    Your Name
                                </label>

                                <div className="relative group">
                                    <motion.div
                                        animate={{ scale: focusedField === "name" ? 1.02 : 1 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("name")}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 ease-in-out"
                                            required
                                        />
                                    </motion.div>

                                    {/* Gradient Bottom Line only on hover */}
                                    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full" />
                                </div>

                            </div>

                            {/* Email */}
                            <div className="relative group">
                                <motion.div
                                    animate={{ scale: focusedField === "email" ? 1.02 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="amar@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 ease-in-out"
                                        required
                                    />
                                </motion.div>

                                {/* Gradient Bottom Line only on hover */}
                                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full" />
                            </div>

                            {/* Message */}
                            <div className="relative group">
                                <motion.div
                                    animate={{ scale: focusedField === "message" ? 1.02 : 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.textarea
                                        type="text"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 ease-in-out"
                                        required
                                    />
                                </motion.div>

                                {/* Gradient Bottom Line only on hover */}
                                <span className="absolute left-0 -bottom-0 w-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full" />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitted}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold"
                            >
                                {isSubmitted ? "Message Sent!" : "Send Message"}
                            </motion.button>

                        </form>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
