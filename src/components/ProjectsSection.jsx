import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
} from "lucide-react";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    {
      id: 1,
      title: "Simple E-Commerce Platform",
      description:
        "A Frontend e-commerce solution with React, Free API, and LocalStorage.",
      longDescription:
        "A comprehensive e-commerce platform built with modern technologies. Includes product management, shopping cart.",
      image: "/e-commerce.png",
      liveUrl: "https://e-commerce-by-react.netlify.app/",
      githubUrl: "https://github.com/username/ecommerce",
      technologies: ["React", "Free API", "LocalStorage"],
      category: "frontend",
      featured: true,
      status: "completed",
    },
    {
      id: 2,
      title: "SaaS Project",
      description:
        "A modern, responsive SaaS AI Project website with smooth animations and dark theme.",
      longDescription:
        "A cutting-edge SaaS AI website featuring smooth animations, responsive design, and optimized performance. Includes interactive elements and SEO optimization.",
      image: "/SaaS project.png",
      liveUrl: "https://free-aitoolshub.vercel.app/",
      githubUrl: "https://github.com/username/portfolio",
      technologies: ["React", "APIs", "Tailwind CSS", "Supabase"],
      category: "fullstack",
      featured: true,
      status: "completed",
    },
    {
      id: 3,
      title: "Temp Mail API Integration",
      description:
        "A disposable email generator with real-time inbox fetching.",
      longDescription:
        "A fully functional temporary email application using Temp Mail API. Users can generate disposable emails, view incoming messages in real time, and copy or refresh their inbox. Built with secure API handling and optimized UI for fast responses.",
      image: "/temp-mail.png",
      liveUrl: "https://temp-e-mail.netlify.app/",
      githubUrl: "https://github.com/username/tempmail-api",
      technologies: [
        "React.js",
        "Temp Mail API",
        "Tailwind CSS",
        "API Routing",
      ],
      category: "frontend",
      featured: false,
      status: "completed",
    },
    {
      id: 4,
      title: "Simple Weather App",
      description:
        "A simple weather application showing current weather by city.",
      longDescription:
        "A straightforward weather web app built using OpenWeather API. Users can search for any city to see real-time temperature, humidity, and weather conditions. Clean UI with responsive design for mobile and desktop.",
      image: "/weather.png",
      liveUrl: "https://weather-web-app-by-react.netlify.app/",
      githubUrl: "https://github.com/username/simple-weather-app",
      technologies: ["React", "CSS", "API", "Axios"],
      category: "frontend",
      featured: false,
      status: "completed",
    },
    {
      id: 5,
      title: "React Real-Time Chat App",
      description:
        "A real-time chat application with instant messaging and user presence.",
      longDescription:
        "A web-based chat application built using React, HTML, CSS, and JavaScript, with Supabase providing real-time database and authentication. Users can send and receive messages instantly, create chat rooms, and see online users in real-time.",
      image: "/chatApp.png",
      liveUrl: "https://active-chat.netlify.app/",
      githubUrl: "https://github.com/username/react-chat-app",
      technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
      category: "fullstack",
      featured: true,
      status: "completed",
    },
    {
      id: 6,
      title: "Quiz Web App",
      description:
        "An interactive quiz application fetching questions from an API.",
      longDescription:
        "A responsive web-based quiz application built with HTML, CSS, and JavaScript. It fetches questions dynamically from an API, allows multiple-choice answers, keeps track of scores, and provides instant feedback to users.",
      image: "/quiz.png",
      liveUrl: "https://quizwhizapp.netlify.app/",
      githubUrl: "https://github.com/username/quiz-web-app",
      technologies: ["HTML", "CSS", "JavaScript", "REST API"],
      category: "frontend",
      featured: false,
      status: "completed",
    },
    {
      id: 7,
      title: "SMIT Harbour Clone",
      description:
        "A clone of SMIT Harbour showcasing a responsive landing page and UI.",
      longDescription:
        "A Hackathon project replicating the SMIT Harbour website using only HTML and CSS. The project focuses on responsive layouts, modern UI elements, and pixel-perfect design based on the original platform.",
      image: "/hackathon.png",
      liveUrl: "https://roaring-squirrel-97db8e.netlify.app/",
      githubUrl: "https://github.com/username/smit-harbour-clone",
      technologies: ["HTML", "CSS", "Responsive Design"],
      category: "frontend",
      featured: false,
      status: "completed",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "fullstack",
      name: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      name: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "mobile",
      name: "Mobile",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "featured",
      name: "Featured",
      count: projects.filter((p) => p.featured).length,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : activeCategory === "featured"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.category === activeCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    if (!isAutoPlaying || featuredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) =>
        prev === featuredProjects.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentProject, featuredProjects.length, isAutoPlaying]);

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-700/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-red-700">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing {projects.length}+ projects across various technologies
            and domains
          </p>
        </Motion.div>

        {featuredProjects.length > 0 && (
          <div className="relative max-w-6xl mx-auto mb-20">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <Motion.div
                  key={currentProject}
                  custom={currentProject}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  {featuredProjects[currentProject] && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                      <Motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative rounded-2xl overflow-hidden group"
                      >
                        <img
                          src={featuredProjects[currentProject].image}
                          alt={featuredProjects[currentProject].title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                        <div
                          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                            featuredProjects[currentProject].status ===
                            "completed"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          }`}
                        >
                          {featuredProjects[currentProject].status ===
                          "completed"
                            ? "Live"
                            : "In Progress"}
                        </div>
                        <div className="absolute top-4 right-4 px-3 py-1 bg-red-700/20 text-red-400 rounded-full text-xs font-semibold border border-red-700/30">
                          Featured
                        </div>
                      </Motion.div>

                      <Motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col justify-center p-6"
                      >
                        <div className="mb-4">
                          <span className="text-red-700 font-semibold text-sm uppercase tracking-wider">
                            {featuredProjects[currentProject].category} Project
                          </span>
                          <h3 className="text-3xl font-bold text-white mt-2 mb-4">
                            {featuredProjects[currentProject].title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {featuredProjects[currentProject].longDescription}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {featuredProjects[currentProject].technologies.map(
                              (tech, index) => (
                                <Motion.span
                                  key={tech}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.7 + index * 0.1 }}
                                  className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm"
                                >
                                  {tech}
                                </Motion.span>
                              )
                            )}
                          </div>
                        </div>

                        <Motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.9 }}
                          className="flex flex-wrap gap-4 mt-auto"
                        >
                          <Motion.a
                            href={featuredProjects[currentProject].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300"
                          >
                            <Play size={16} />
                            Live Demo
                          </Motion.a>
                        </Motion.div>
                      </Motion.div>
                    </div>
                  )}
                </Motion.div>
              </AnimatePresence>
            </div>

            {featuredProjects.length > 1 && (
              <>
                <Motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-red-700 border border-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                >
                  <ArrowLeft size={20} />
                </Motion.button>
                <Motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 hover:bg-red-700 border border-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                >
                  <ArrowRight size={20} />
                </Motion.button>

                <div className="flex justify-center mt-8 space-x-3">
                  {featuredProjects.map((_, index) => (
                    <Motion.button
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => goToProject(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentProject
                          ? "bg-red-700 scale-125"
                          : "bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <Motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center gap-2 mx-auto mt-6 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isAutoPlaying ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <span className="text-sm">
                    Auto-play: {isAutoPlaying ? "On" : "Off"}
                  </span>
                </Motion.button>
              </>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Motion.button
                key={category.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                onClick={() => {
                  setActiveCategory(category.id);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 border text-sm ${
                  activeCategory === category.id
                    ? "bg-red-700 border-red-700 text-white shadow-lg shadow-red-700/30"
                    : "bg-gray-900 border-gray-700 text-gray-300 hover:border-red-700 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </Motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-red-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-red-700 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        <Motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }`}
        >
          {currentProjects.map((project, index) => (
            <Motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-red-700/50 transition-all duration-300 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <div
                className={`relative ${
                  viewMode === "list" ? "w-48 shrink-0" : "h-48"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {project.featured && (
                    <div className="px-2 py-1 bg-red-700/20 text-red-400 rounded-full text-xs font-semibold border border-red-700/30">
                      Featured
                    </div>
                  )}
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === "completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {project.status === "completed" ? "Live" : "In Progress"}
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-white font-semibold text-lg">
                    {project.title}
                  </h4>
                  <span className="text-red-700 text-sm font-medium capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <Motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 flex-1 justify-center"
                  >
                    <Play size={14} />
                    Live Demo
                  </Motion.a>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        {totalPages > 1 && (
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mt-12"
          >
            <Motion.button
              onClick={prevPage}
              disabled={currentPage === 1}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Previous
            </Motion.button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Motion.button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === page
                        ? "bg-red-700 text-white shadow-lg shadow-red-700/30"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {page}
                  </Motion.button>
                )
              )}
            </div>

            <Motion.button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight size={16} />
            </Motion.button>
          </Motion.div>
        )}

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Showing {indexOfFirstProject + 1}-
            {Math.min(indexOfLastProject, filteredProjects.length)} of{" "}
            {filteredProjects.length} projects
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
