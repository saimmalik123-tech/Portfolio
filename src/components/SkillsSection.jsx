import { motion as Motion } from "framer-motion";
import { Code2, Server, Zap, Smartphone } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Supabase & Backend-as-a-Service",
      icon: Server,
      skills: [
        { name: "Supabase Auth", level: 85 },
        { name: "Supabase Database (PostgreSQL)", level: 80 },
        { name: "Supabase Storage", level: 75 },
        { name: "Supabase Realtime", level: 70 },
        { name: "Supabase Edge Functions", level: 65 },
        { name: "API Integrations", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Zap,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Figma", level: 75 },
        { name: "Webpack", level: 65 },
        { name: "Docker", level: 50 },
        { name: "AWS", level: 55 },
      ],
    },
    {
      title: "Build Tools & Deployment",
      icon: Smartphone,
      skills: [
        { name: "Vite", level: 85 },
        { name: "NPM / PNPM", level: 90 },
        { name: "Postman / API Testing", level: 80 },
        { name: "Netlify Deployment", level: 85 },
        { name: "Vercel Deployment", level: 90 },
        { name: "CI/CD Basics", level: 70 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-red-700">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </Motion.div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-red-700/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-700/20 rounded-xl group-hover:bg-red-700/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-red-700" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-red-700 font-bold text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <Motion.div
                          custom={skill.level}
                          variants={progressVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full bg-linear-to-r from-red-700 to-red-600 rounded-full shadow-lg shadow-red-700/30"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Motion.div>
            );
          })}
        </Motion.div>

        <Motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Also Familiar With
          </h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "SASS/SCSS",
              "Bootstrap",
              "Material-UI",
              "Redux",
              "Context API",
              "React Query",
              "Jest",
              "Cypress",
              "Webpack",
              "Vite",
              "Netlify",
              "Vercel",
              "Photoshop",
              "Illustrator",
              "WordPress",
              "SEO Optimization",
            ].map((skill, index) => (
              <Motion.span
                key={skill}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.1 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className="px-4 py-2 bg-gray-800 hover:bg-red-700 border border-gray-700 hover:border-red-600 text-gray-300 hover:text-white rounded-full text-sm font-medium transition-all duration-300 cursor-default shadow-lg"
              >
                {skill}
              </Motion.span>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
