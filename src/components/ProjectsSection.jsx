import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../contexts/ThemeContext";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
    },
  },
};

const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateY: -15,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      duration: 0.6,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 400,
    },
  },
};

const statusIndicatorVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 120,
      duration: 0.6,
      delay: 0.4,
    },
  },
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const ProjectsSection = ({ projects, onDelete, showDelete }) => {
  const { theme } = useTheme();

  return (
    <motion.section
      className="py-10"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.div
        className={`flex items-center justify-between mb-12 border-b pb-6 ${
          theme === "dark" ? "border-neutral-900" : "border-neutral-200"
        }`}
        variants={headerVariants}
      >
        <motion.h2
          className={`text-xl md:text-2xl lg:text-4xl font-black tracking-tighter ${
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
          Selected Works.
        </motion.h2>

        <motion.div
          className="flex items-center gap-2"
          variants={statusIndicatorVariants}
        >
          <motion.span
            className="w-2 h-2 bg-green-500 rounded-full"
            variants={statusIndicatorVariants}
            animate="pulse"
          />
          <motion.span
            className={`text-xs font-mono ${
              theme === "dark" ? "text-neutral-500" : "text-neutral-600"
            }`}
            whileHover={{
              scale: 1.1,
              color: theme === "dark" ? "#60a5fa" : "#2563eb",
            }}
            transition={{ type: "spring", damping: 5, stiffness: 400 }}
          >
            {projects?.length || 0} Projects
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={sectionVariants}
      >
        {projects && projects.length > 0 ? (
          projects.map((p, index) => (
            <motion.div
              key={p.id}
              variants={projectCardVariants}
              whileHover="hover"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <ProjectCard
                project={p}
                onDelete={onDelete}
                showDelete={showDelete}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            className={`col-span-full py-20 text-center border border-dashed rounded-3xl ${
              theme === "dark" ? "border-neutral-800" : "border-neutral-300"
            }`}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 100,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.02,
              borderColor: theme === "dark" ? "#4b5563" : "#d1d5db",
            }}
          >
            <motion.p
              className={
                theme === "dark" ? "text-neutral-600" : "text-neutral-500"
              }
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              No projects found.
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
