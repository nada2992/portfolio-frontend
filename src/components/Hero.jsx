import { Download } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6,
    },
  },
};

const textRevealVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80,
      duration: 0.8,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 400,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const badgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 120,
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 400,
    },
  },
};

export default function Hero() {
  const { theme } = useTheme();

  return (
    <motion.section
      className={`py-12 sm:py-20 text-center border-b ${
        theme === "dark" ? "border-neutral-900" : "border-neutral-200"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className={`inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 text-xs font-medium tracking-widest uppercase rounded-full ${
          theme === "dark"
            ? "text-blue-300/80 bg-blue-300/5 border border-blue-300/20"
            : "text-blue-700/80 bg-blue-100 border border-blue-200"
        }`}
        variants={badgeVariants}
        whileHover="hover"
      >
        Available for Freelance
      </motion.div>

      <motion.h1
        className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter leading-none"
        variants={textRevealVariants}
        style={{ perspective: "1000px" }}
      >
        <motion.div variants={itemVariants}>Crafting Digital</motion.div>
        <br />
        <motion.div
          className={theme === "dark" ? "text-neutral-600" : "text-neutral-700"}
          variants={itemVariants}
        >
          Experiences.
        </motion.div>
      </motion.h1>

      <motion.p
        className={`max-w-xs sm:max-w-xl mx-auto text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed ${
          theme === "dark" ? "text-neutral-500" : "text-neutral-600"
        }`}
        variants={itemVariants}
      >
        I'm a Full-Stack Developer specializing in high-performance web
        applications using{" "}
        <motion.span
          className={theme === "dark" ? "text-neutral-200" : "text-neutral-800"}
          whileHover={{
            scale: 1.1,
            color: theme === "dark" ? "#60a5fa" : "#2563eb",
          }}
          transition={{ type: "spring", damping: 5, stiffness: 400 }}
        >
          React
        </motion.span>{" "}
        and{" "}
        <motion.span
          className={theme === "dark" ? "text-neutral-200" : "text-neutral-800"}
          whileHover={{
            scale: 1.1,
            color: theme === "dark" ? "#60a5fa" : "#2563eb",
          }}
          transition={{ type: "spring", damping: 5, stiffness: 400 }}
        >
          Go
        </motion.span>
        . Focusing on clean code and exceptional UI.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap"
        variants={containerVariants}
      >
        <motion.button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base ${
            theme === "dark"
              ? "bg-neutral-100 text-black hover:bg-neutral-200"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          }`}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          View Projects
        </motion.button>

        <motion.a
          href="https://drive.google.com/drive/folders/1QL92ZAth_jwdRP1CXtUaUKsiCHU07dVj?usp=drive_link"
          download="Nada_Hesham_CV.pdf"
          className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center gap-2 ${
            theme === "dark"
              ? "border border-neutral-800 text-white hover:bg-neutral-900"
              : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
          }`}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </motion.a>

        <motion.button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base ${
            theme === "dark"
              ? "border border-neutral-800 text-white hover:bg-neutral-900"
              : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
          }`}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
