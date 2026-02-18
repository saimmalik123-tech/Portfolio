import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Home,
  User,
  Code2,
  FolderOpen,
  Phone,
  Sparkles,
} from "lucide-react";
import AboutMeModal from "./AboutMeModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeBottom, setActiveBottom] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home", icon: Home },
    {
      name: "About",
      href: "#about",
      onClick: () => setIsModalOpen(true),
      icon: User,
    },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  const bottomNavItems = menuItems.filter((item) => item.name !== "About");

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b-red-400 ${
          scrolled
            ? "bg-black/10 backdrop-blur-xl shadow-2xl shadow-red-900/20 border-b border-red-700/30"
            : "bg-black/80 backdrop-blur-lg border-b border-red-600/20"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 group"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-10 h-10 bg-gradient-to-r from-red-700 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-700/30"
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <motion.h1
                  className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Muhammad Saim
                </motion.h1>
                <p className="text-gray-400 text-xs">Full-Stack Developer</p>
              </div>
            </motion.a>

            <div className="hidden sm:flex items-center gap-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return item.href === "#about" ? (
                  <motion.button
                    key={item.name}
                    onClick={item.onClick}
                    className="text-gray-300 hover:text-white cursor-pointer font-medium transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} className="text-red-500" />
                    {item.name}
                  </motion.button>
                ) : (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} className="text-red-500" />
                    {item.name}
                  </motion.a>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 40px rgba(220, 38, 38, 0.6)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex px-5 py-2.5 bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-600 hover:via-red-500 hover:to-red-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 items-center gap-3 shadow-2xl shadow-red-700/30 relative overflow-hidden group"
            >
              <motion.div
                animate={{ x: ["0%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              />

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mail size={18} className="relative z-10" />
              </motion.div>

              <span className="relative z-10 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Hire Me
              </span>

              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl -z-10"
              />
            </motion.a>

            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="sm:hidden p-2 bg-gray-900 hover:bg-red-700 border border-gray-800 rounded-xl transition-all duration-300"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="sm:hidden bg-black/95 backdrop-blur-xl border-t border-red-700/30 overflow-hidden"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="px-4 py-6 space-y-4"
              >
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      {item.href === "#about" ? (
                        <motion.button
                          onClick={() => {
                            item.onClick();
                            setMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 rounded-2xl bg-gray-900/50 hover:bg-red-700 text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center gap-3 group"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon size={20} className="text-red-500" />
                          {item.name}
                        </motion.button>
                      ) : (
                        <motion.a
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="w-full block px-4 py-3 rounded-2xl bg-gray-900/50 hover:bg-red-700 text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center gap-3 group"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon size={20} className="text-red-500" />
                          {item.name}
                        </motion.a>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md bg-black/95 backdrop-blur-2xl border border-red-700/40 rounded-3xl shadow-2xl shadow-red-900/30 z-40 overflow-hidden"
      >
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-purple-900/20"
        />

        <div className="relative px-4 py-3 flex justify-between items-center">
          {bottomNavItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeBottom === item.name;

            return (
              <motion.a
                key={index}
                href={item.href}
                onClick={() => setActiveBottom(item.name)}
                className="relative flex flex-col items-center justify-center w-16 py-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.3 : 1,
                    y: isActive ? -2 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative z-10 p-2"
                >
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 bg-red-500/20 rounded-full blur-sm"
                    />
                  )}

                  <Icon
                    size={24}
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? "text-red-400 drop-shadow-lg"
                        : "text-gray-400 group-hover:text-gray-200"
                    }`}
                  />
                </motion.div>

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 bg-red-700/10 rounded-2xl -z-10"
                />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          animate={{
            background: [
              "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.3), transparent)",
              "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.6), transparent)",
              "linear-gradient(90deg, transparent, rgba(239, 68, 68, 0.3), transparent)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-px w-full"
        />
      </motion.div>

      <AboutMeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
