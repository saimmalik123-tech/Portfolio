import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import RobotViewer from "./RobotViewer";
import AboutMeModal from "./AboutMeModal";

const Hero = () => {
  const fullText = "Frontend Developer | Full-Stack Engineer";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullText.length) setDeleting(true);
      } else {
        setText(fullText.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setDeleting(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [index, deleting]);

  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-16 lg:px-20 py-20 md:py-32 bg-black text-white"
    >
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Hi, I’m <span className="text-red-500">Muhammad Saim</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 font-light">
          {text}
          <span className="border-r-2 border-red-500 animate-pulse ml-1"></span>
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          I build beautiful, responsive, and interactive web applications using{" "}
          <span className="text-red-500 font-medium">
            HTML, CSS, JavaScript, Tailwind CSS, React JS and etc
          </span>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold text-white transition cursor-pointer"
          >
            About Me
          </Motion.button>
          <Motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 border border-red-600 hover:bg-red-700 rounded-md font-semibold text-white transition"
          >
            Contact Me
          </Motion.a>
        </div>
      </Motion.div>
      <RobotViewer />
      <AboutMeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
