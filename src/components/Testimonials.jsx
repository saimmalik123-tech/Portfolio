import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  Linkedin,
  Github,
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = useMemo(
    () => [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechInnovate",
      image: "/clients/sarah.jpg",
      rating: 5,
      text: "Working with Muhammad was an absolute pleasure. He delivered our e-commerce platform ahead of schedule and exceeded all our expectations. His attention to detail and problem-solving skills are exceptional.",
      project: "E-Commerce Platform",
      link: "https://linkedin.com/in/sarahjohnson",
      featured: true,
    },
    {
      id: 2,
      name: "Alex Chen",
      position: "CTO",
      company: "StartUpGrid",
      image: "/clients/alex.jpg",
      rating: 5,
      text: "Muhammad transformed our vision into a beautiful, functional reality. His technical expertise and communication throughout the project were outstanding. We've received countless compliments on our new platform.",
      project: "SaaS Dashboard",
      link: "https://linkedin.com/in/alexchen",
      featured: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "CreativeMinds",
      image: "/clients/emily.jpg",
      rating: 5,
      text: "The portfolio website Muhammad created for our agency has significantly increased our client inquiries. His understanding of design and user experience is remarkable. Highly recommended!",
      project: "Agency Portfolio",
      link: "https://linkedin.com/in/emilyrodriguez",
      featured: true,
    },
    {
      id: 4,
      name: "Michael Thompson",
      position: "Founder",
      company: "FitLife Apps",
      image: "/clients/michael.jpg",
      rating: 5,
      text: "Muhammad developed our mobile fitness app with precision and care. He was responsive to feedback and implemented complex features seamlessly. The app has been a huge success with our users.",
      project: "Fitness Mobile App",
      link: "https://linkedin.com/in/michaelthompson",
      featured: true,
    },
    {
      id: 5,
      name: "Jessica Wang",
      position: "CEO",
      company: "DataFlow Solutions",
      image: "/clients/jessica.jpg",
      rating: 5,
      text: "Outstanding developer with a keen eye for detail. Muhammad built our data visualization dashboard that handles millions of data points efficiently. His code is clean and well-documented.",
      project: "Analytics Dashboard",
      link: "https://linkedin.com/in/jessicawang",
      featured: false,
    },
    {
      id: 6,
      name: "David Park",
      position: "Lead Developer",
      company: "CodeCraft Studios",
      image: "/clients/david.jpg",
      rating: 5,
      text: "I've collaborated with Muhammad on multiple projects. His expertise in React and modern web technologies is impressive. He's a team player who delivers high-quality work consistently.",
      project: "Collaborative Tools",
      link: "https://linkedin.com/in/davidpark",
      featured: false,
    },
    ],
    []
  );

  const featuredTestimonials = useMemo(
    () => testimonials.filter((t) => t.featured),
    [testimonials]
  );
  const allTestimonials = testimonials;
  const featuredCount = featuredTestimonials.length;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentTestimonial((prev) =>
      prev === featuredCount - 1 ? 0 : prev + 1
    );
  }, [featuredCount]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentTestimonial((prev) =>
      prev === 0 ? featuredCount - 1 : prev - 1
    );
  }, [featuredCount]);

  const goToTestimonial = (index) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5 + i * 0.1 }}
      >
        <Star
          size={16}
          className={
            i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
          }
        />
      </Motion.div>
    ));
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-black relative overflow-hidden"
    >
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
            Client <span className="text-red-700">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients and colleagues
            say about working with me
          </p>
        </Motion.div>

        {/* Featured Testimonials Slider */}
        <div className="max-w-4xl mx-auto mb-20">
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-red-700/30" />

              <div className="text-center mb-8 min-h-[200px] flex items-center justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <Motion.div
                    key={currentTestimonial}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                    }}
                    className="w-full"
                  >
                    <Motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className="w-full"
                    >
                      <Motion.div
                        variants={itemVariants}
                        className="flex justify-center mb-4"
                      >
                        {renderStars(
                          featuredTestimonials[currentTestimonial]?.rating
                        )}
                      </Motion.div>
                      <Motion.p
                        variants={itemVariants}
                        className="text-xl sm:text-2xl text-gray-300 italic leading-relaxed mb-6"
                      >
                        "{featuredTestimonials[currentTestimonial]?.text}"
                      </Motion.p>
                    </Motion.div>
                  </Motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <Motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center gap-4"
                >
                  <Motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gray-800 border-2 border-red-700 overflow-hidden relative"
                  >
                    <img
                      src={featuredTestimonials[currentTestimonial]?.image}
                      alt={featuredTestimonials[currentTestimonial]?.name}
                      className="w-full h-full object-cover"
                    />
                  </Motion.div>
                  <div className="text-left">
                    <Motion.h4
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-white font-bold text-lg"
                    >
                      {featuredTestimonials[currentTestimonial]?.name}
                    </Motion.h4>
                    <Motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-red-700 font-semibold text-sm"
                    >
                      {featuredTestimonials[currentTestimonial]?.position}
                    </Motion.p>
                    <Motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-400 text-sm"
                    >
                      {featuredTestimonials[currentTestimonial]?.company}
                    </Motion.p>
                    <Motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-gray-500 text-xs mt-1"
                    >
                      Project:{" "}
                      {featuredTestimonials[currentTestimonial]?.project}
                    </Motion.p>
                  </div>
                </Motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {featuredTestimonials.length > 1 && (
                <>
                  <Motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 border border-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                  >
                    <ArrowLeft size={20} />
                  </Motion.button>
                  <Motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 border border-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
                  >
                    <ArrowRight size={20} />
                  </Motion.button>
                </>
              )}
            </div>

            {/* Indicators */}
            {featuredTestimonials.length > 1 && (
              <div className="flex justify-center mt-6 space-x-3">
                {featuredTestimonials.map((_, index) => (
                  <Motion.button
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-red-700 scale-125"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </Motion.div>
        </div>

        {/* All Testimonials Grid */}
        <Motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            More Client Feedback
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <Motion.div
                key={testimonial.id}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-700/50 transition-all duration-300 group relative overflow-hidden"
              >
                <Motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-red-700/10 rounded-full blur-xl"
                />

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <Motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-gray-800 border border-red-700/30 overflow-hidden"
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </Motion.div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-red-700 text-xs font-medium">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <Motion.a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#dc2626" }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-400"
                  >
                    <Linkedin size={16} />
                  </Motion.a>
                </div>

                <Motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex mb-3"
                >
                  {renderStars(testimonial.rating)}
                </Motion.div>

                <Motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-4"
                >
                  "{testimonial.text}"
                </Motion.p>

                <Motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex justify-between items-center pt-4 border-t border-gray-800"
                >
                  <span className="text-gray-500 text-xs">
                    {testimonial.company}
                  </span>
                  <span className="text-red-700 text-xs font-semibold bg-red-700/10 px-2 py-1 rounded">
                    {testimonial.project}
                  </span>
                </Motion.div>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

        {/* Stats Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "40+", label: "Happy Clients" },
            { number: "5.0", label: "Average Rating" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <Motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.4 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-red-700/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-red-700 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* CTA Section */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-linear-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
            <Motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity },
              }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-red-700/10 rounded-full"
            />
            <Motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold text-white mb-4 relative z-10"
            >
              Ready to Start Your Project?
            </Motion.h3>
            <Motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 mb-6 max-w-2xl mx-auto relative z-10"
            >
              Join dozens of satisfied clients who have transformed their ideas
              into successful digital products.
            </Motion.p>
            <Motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(220, 38, 38, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 relative z-10"
            >
              Let's Work Together
            </Motion.button>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
