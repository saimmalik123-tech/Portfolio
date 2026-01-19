import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  ArrowUp,
  Code,
  Coffee,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Sparkles,
  Zap,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/saimmalik123-tech",
      color: "hover:text-white hover:bg-gray-800",
      bgColor: "text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/saimmalikmuhammad/",
      color: "hover:text-white hover:bg-blue-600",
      bgColor: "text-gray-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://www.instagram.com/saim.malik820",
      color: "hover:text-white hover:bg-sky-500",
      bgColor: "text-gray-400",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:saim9j8@gmail.com",
      color: "hover:text-white hover:bg-red-600",
      bgColor: "text-gray-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const floatingShapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: parseFloat((Math.random() * 3).toFixed(2)),
    duration: parseFloat((4 + Math.random() * 3).toFixed(2)),
    size: parseFloat((2 + Math.random() * 4).toFixed(2)),
  }));
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const scrollVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
        />

        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20"
            style={{
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-3 bg-gradient-to-r from-red-700 to-red-600 rounded-2xl"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Muhammad Saim
                  </h3>
                  <p className="text-red-400 text-sm font-semibold">
                    Full-Stack Developer
                  </p>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md"
              >
                Crafting digital experiences with modern technologies and
                innovative solutions. Let's build something amazing together.
              </motion.p>

              <motion.div variants={itemVariants} className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      whileHover={{
                        scale: 1.2,
                        y: -2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-900 border border-gray-800 rounded-2xl ${social.bgColor} ${social.color} transition-all duration-300 group relative overflow-hidden`}
                    >
                      <Icon size={20} />
                      <motion.div
                        whileHover={{
                          x: ["0%", "200%"],
                        }}
                        transition={{
                          duration: 0.8,
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
                      />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-red-500" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-500" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group cursor-pointer"
                  onClick={() =>
                    window.open("mailto:saim9j8@gmail.com", "_blank")
                  }
                >
                  <div className="p-2 bg-red-700/20 rounded-xl group-hover:bg-red-700/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium group-hover:text-red-400 transition-colors duration-300">
                    saim9j8@gmail.com
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-gray-800 rounded-xl group-hover:bg-gray-700 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Hyderabad, Pakistan</p>
                  </div>
                </motion.div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 mt-4"
                >
                  <ExternalLink size={16} />
                  Start Project
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-800/50 mt-12 pt-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2"
                >
                  <span>© {currentYear} Muhammad Saim. Made with</span>
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </motion.div>
                  <span>and</span>
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Coffee className="w-4 h-4 text-amber-500" />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 text-sm"
              >
                <motion.a
                  href="#privacy"
                  whileHover={{ scale: 1.05, color: "#f87171" }}
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#terms"
                  whileHover={{ scale: 1.05, color: "#f87171" }}
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
                <motion.span className="text-gray-600">•</motion.span>
                <motion.span
                  className="text-gray-400 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  Crafted with passion
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.button
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl shadow-red-700/25 z-50 border border-red-600/20"
        >
          <ArrowUp size={20} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-4 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent">
            <motion.div
              animate={{
                x: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-32 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -skew-x-45"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
