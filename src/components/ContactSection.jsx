import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  X,
  ExternalLink,
  Copy,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copiedField, setCopiedField] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saim9j8@gmail.com",
      copyable: true,
      link: "mailto:saim9j8@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 312 361 9587",
      copyable: true,
      link: "tel:+923123619587",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Pakistan",
      copyable: false,
      link: "#",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      copyable: false,
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/saimmalik123-tech",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/saimmalikmuhammad/",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "instagram",
      url: "https://www.instagram.com/saim.malik820",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:saim9j8@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const iframe = document.createElement("iframe");
    iframe.name = "hiddenIframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.onload = () => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 4000);

      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    };

    form.target = iframe.name;
    form.submit();
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const infoVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-700/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-700/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-red-700">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's discuss your next project or just say hello. I'm always open
              to new opportunities and collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 relative overflow-hidden">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity },
                  }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-red-700/10 rounded-full"
                />

                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                  Send Message
                </h3>

                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-gray-400">
                        Thank you for your message. I'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      action="https://formsubmit.com/saim9j8@gmail.com"
                      method="POST"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                    >
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Contact Form Message"
                      />
                      <input type="hidden" name="_template" value="table" />
                      <input
                        type="hidden"
                        name="_next"
                        value="https://your-site.com/thank-you"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/20 transition-all duration-300"
                            placeholder="Enter your name"
                          />
                        </motion.div>

                        <motion.div variants={itemVariants}>
                          <label className="block text-gray-300 text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/20 transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/20 transition-all duration-300"
                          placeholder="Project discussion"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700/20 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </motion.div>

                      <motion.button
                        variants={itemVariants}
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-linear-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-700/20 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full cursor-pointer"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              variants={infoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-700/50 transition-all duration-300 group cursor-pointer"
                      onClick={() =>
                        item.copyable
                          ? copyToClipboard(item.value, item.label)
                          : null
                      }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-red-700/20 rounded-xl group-hover:bg-red-700/30 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-red-700" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">
                              {item.label}
                            </p>
                            <p className="text-white font-semibold">
                              {item.value}
                            </p>
                          </div>
                        </div>

                        {item.copyable && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            {copiedField === item.label ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <Copy className="w-5 h-5 text-gray-400" />
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowEmailModal(true)}
                className="w-full py-4 bg-gray-900 border border-gray-800 hover:border-red-700 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Mail className="w-6 h-6 text-red-700 group-hover:scale-110 transition-transform duration-300" />
                <span>View Email Template</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </motion.button>

              <motion.div
                variants={itemVariants}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
              >
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex justify-center gap-4">
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
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className={`p-3 bg-gray-800 rounded-xl text-gray-400 ${social.color} transition-all duration-300`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-900 border border-green-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-white font-semibold">
                      Available for work
                    </p>
                    <p className="text-gray-400 text-sm">
                      Currently accepting new projects
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showEmailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowEmailModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEmailModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Professional Email
                </h3>
                <p className="text-gray-400">
                  Copy this template for professional inquiries
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 mb-6">
                <div className="text-sm text-gray-300 space-y-2 font-mono">
                  <p>
                    <span className="text-red-700">Subject:</span> Project
                    Collaboration Inquiry
                  </p>
                  <p>
                    <span className="text-red-700">To:</span>{" "}
                    muhammadsaim@gmail.com
                  </p>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <p>Hello Muhammad,</p>
                    <p className="mt-2">
                      I came across your portfolio and was impressed by your
                      work...
                    </p>
                    <p className="mt-2">
                      I'd like to discuss a potential project with you.
                    </p>
                    <p className="mt-2">Best regards,</p>
                    <p>[Your Name]</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    copyToClipboard("muhammadsaim@gmail.com", "email")
                  }
                  className="flex-1 py-3 bg-red-700 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copiedField === "email" ? (
                    <CheckCircle size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                  Copy Email
                </motion.button>

                <motion.a
                  href="mailto:muhammadsaim@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Compose
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
