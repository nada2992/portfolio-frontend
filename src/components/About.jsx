import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import {
  Code2,
  Globe,
  Zap,
  Target,
  Award,
  Users,
  Lightbulb,
  Rocket,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateY: -30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 400,
    },
  },
};

const timelineVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.6,
    },
  },
};

const skills = [
  { icon: Code2, name: "End-to-End Application Architecture", level: 95 },
  { icon: Globe, name: "Optimizing Core Web Vitals & Load Times", level: 90 },
  {
    icon: Zap,
    name: "RESTful Services with Go & Docker Integration",
    level: 88,
  },
  {
    icon: Target,
    name: "Algorithmic Efficiency & Debugging",
    level: 92,
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and creative solutions",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams and stakeholders",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Delivering polished, production-ready code",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Continuous learning and skill development",
  },
];

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20">
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <motion.h2
          className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
          whileHover={{
            scale: 1.05,
            textShadow:
              theme === "dark"
                ? "0 0 30px rgba(96, 165, 250, 0.5)"
                : "0 0 30px rgba(37, 99, 235, 0.3)",
          }}
          transition={{ type: "spring", damping: 8, stiffness: 400 }}
        >
          About Me.
        </motion.h2>

        <motion.div
          className={`max-w-3xl mx-auto text-lg leading-relaxed ${
            theme === "dark" ? "text-neutral-300" : "text-neutral-700"
          }`}
          variants={itemVariants}
        >
          <motion.p>
            I am a{" "}
            <motion.span
              className={`font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 5, stiffness: 400 }}
            >
              Full-Stack Developer
            </motion.span>{" "}
            dedicated to building scalable and user-centric web applications.
            With a strong foundation in{" "}
            <motion.span
              className={`font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 5, stiffness: 400 }}
            >
              React
            </motion.span>{" "}
            for crafting interactive frontends and{" "}
            <motion.span
              className={`font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 5, stiffness: 400 }}
            >
              Go
            </motion.span>{" "}
            for developing high-performance backends, I bridge the gap between
            complex logic and seamless user experiences. I thrive on solving
            technical challenges, from optimizing API performance to
            containerizing applications for reliable deployment.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h3
          className={`text-2xl md:text-3xl font-bold mb-12 text-center ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
          variants={itemVariants}
        >
          Core Competencies
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`p-6 rounded-2xl border ${
                theme === "dark"
                  ? "bg-neutral-900/50 border-neutral-800"
                  : "bg-white border-neutral-200"
              }`}
              variants={cardVariants}
              whileHover="hover"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"
                }`}
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6 },
                }}
              >
                <skill.icon
                  className={`w-6 h-6 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                />
              </motion.div>

              <h4
                className={`font-bold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
              >
                {skill.name}
              </h4>

              <div className="relative h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute top-0 left-0 h-full rounded-full ${
                    theme === "dark" ? "bg-blue-500" : "bg-blue-600"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </div>

              <span
                className={`text-xs mt-1 block ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
              >
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        className="mb-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h3
          className={`text-2xl md:text-3xl font-bold mb-12 text-center ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
          variants={itemVariants}
        >
          My Values
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className={`p-8 rounded-2xl border ${
                theme === "dark"
                  ? "bg-neutral-900/30 border-neutral-800"
                  : "bg-neutral-50 border-neutral-200"
              }`}
              variants={timelineVariants}
              whileHover={{
                scale: 1.02,
                borderColor: theme === "dark" ? "#60a5fa" : "#2563eb",
                transition: { type: "spring", damping: 8, stiffness: 400 },
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === "dark" ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <value.icon
                    className={`w-5 h-5 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                  />
                </motion.div>

                <div>
                  <h4
                    className={`font-bold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className={`text-center p-12 rounded-3xl border ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-neutral-800"
            : "bg-gradient-to-r from-blue-50 to-purple-50 border-neutral-200"
        }`}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className={`text-2xl md:text-3xl font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
        >
          Let's Build Something Amazing
        </motion.h3>

        <motion.p
          className={`mb-8 ${
            theme === "dark" ? "text-neutral-300" : "text-neutral-700"
          }`}
        >
          I'm always excited to take on new challenges and collaborate on
          innovative projects.
        </motion.p>

        <motion.button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`px-8 py-3 rounded-full font-bold transition-all ${
            theme === "dark"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          whileHover={{
            scale: 1.05,
            boxShadow:
              theme === "dark"
                ? "0 10px 30px rgba(59, 130, 246, 0.5)"
                : "0 10px 30px rgba(37, 99, 235, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </section>
  );
}
