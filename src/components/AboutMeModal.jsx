import { motion as Motion, AnimatePresence } from "framer-motion";
import { Star, X, Mail, Github, Linkedin } from "lucide-react";

const skills = [
  "Frontend",
  "JavaScript",
  "React",
  "Full-Stack",
  "UI/UX",
  "Tailwind",
  "Three.js",
  "Node.js",
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/saimmalik123-tech",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/saimmalikmuhammad/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "https://mail.google.com", label: "Email" },
];

const AboutMeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="aboutModal"
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-auto"
            onClick={onClose}
          >
            <Motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="relative bg-linear-to-br from-gray-900 to-black border border-gray-700 rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto my-auto overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-3 right-3 z-20 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={18} className="text-gray-300" />
              </Motion.button>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/10 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <Motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="shrink-0 relative"
                  >
                    <div className="relative">
                      <Motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute -inset-2 bg-linear-to-r from-red-600 to-purple-600 rounded-full opacity-60 blur-sm"
                      />

                      <div className="relative bg-gray-900 rounded-full p-1">
                        <img
                          src="/profile.png"
                          alt="Muhammad Saim"
                          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-800 shadow-lg"
                        />
                      </div>

                      <div className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                    </div>
                  </Motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <Motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mb-4"
                    >
                      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 mb-2">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                          Muhammad Saim
                        </h1>
                        <Motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center gap-1"
                        >
                          <Star
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        </Motion.div>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <p className="text-sm sm:text-base font-medium">
                          Frontend & Full-Stack Developer
                        </p>
                      </div>
                    </Motion.div>

                    <Motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3 mb-4"
                    >
                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                        I am a Frontend Developer and aspiring Full-Stack
                        Engineer. I specialize in building responsive,
                        interactive, and modern web applications using HTML,
                        CSS, and JavaScript.
                      </p>

                      <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                        Currently, I'm learning full-stack development at
                        S.M.I.T to expand my skill set further.
                      </p>
                    </Motion.div>

                    <Motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-center md:justify-start gap-2 mb-4"
                    >
                      {socialLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <Motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200 flex items-center gap-1"
                            aria-label={link.label}
                          >
                            <Icon size={14} className="text-gray-300" />
                            <span className="text-xs text-gray-300 hidden sm:inline">
                              {link.label}
                            </span>
                          </Motion.a>
                        );
                      })}
                    </Motion.div>
                  </div>
                </div>

                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 text-center md:text-left">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {skills.map((skill, index) => (
                      <Motion.span
                        key={skill}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 0.8 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-default shadow-lg shadow-red-600/20"
                      >
                        {skill}
                      </Motion.span>
                    ))}
                  </div>
                </Motion.div>

                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="mt-6 pt-4 border-t border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                    <Motion.a
                      onClick={onClose}
                      href="#projects"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 order-2 sm:order-1"
                    >
                      Explore My Work
                    </Motion.a>

                    <Motion.a
                      download
                      href="/resume.pdf"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-200 rounded-lg font-semibold text-sm transition-all duration-200 order-1 sm:order-2"
                    >
                      Get My CV
                    </Motion.a>
                  </div>
                </Motion.div>
              </div>
            </Motion.div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutMeModal;
