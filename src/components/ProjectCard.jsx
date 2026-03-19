import axios from "axios";
import { RiDeleteBin6Line, RiExternalLinkLine } from "react-icons/ri";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    rotateY: 0,
    rotateX: 0,
    scale: 1,
  },
  hover: {
    rotateY: 5,
    rotateX: -5,
    scale: 1.02,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
    },
  },
};

const techTagVariants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 400,
    },
  },
};

const iconVariants = {
  initial: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: 15,
    scale: 1.2,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 400,
    },
  },
  tap: {
    scale: 0.9,
    rotate: -15,
  },
};

export default function ProjectCard({ project, onDelete, showDelete }) {
  const { theme } = useTheme();

  const handleDelete = async () => {
    const password = prompt("Enter Admin Password:");
    if (!password) return;

    try {
      await axios.delete(
        `https://backend-1-2nv9.onrender.com/api/projects/${project.id}`,
        {
          headers: { "X-Admin-Password": password },
        },
      );
      onDelete();
    } catch (err) {
      alert("Delete failed: Check password or ID");
    }
  };

  return (
    <motion.div
      className={`group relative border p-8 rounded-3xl transition-all duration-500 h-full min-h-[250px] flex flex-col ${
        theme === "dark"
          ? "bg-neutral-900/50 border-neutral-800 hover:border-blue-500/50"
          : "bg-white border-neutral-200 hover:border-blue-500/50 shadow-sm hover:shadow-md"
      }`}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <motion.h3
          className={`text-lg md:text-xl lg:text-2xl font-bold tracking-tight ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
          whileHover={{
            scale: 1.05,
            color: theme === "dark" ? "#60a5fa" : "#2563eb",
            textShadow:
              theme === "dark"
                ? "0 0 20px rgba(96, 165, 250, 0.5)"
                : "0 0 20px rgba(37, 99, 235, 0.3)",
          }}
          transition={{ type: "spring", damping: 8, stiffness: 400 }}
        >
          {project.title}
        </motion.h3>

        <div className="flex gap-3">
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-neutral-500 hover:text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <RiExternalLinkLine size={20} />
            </motion.a>
          )}

          {showDelete && (
            <motion.button
              onClick={handleDelete}
              className={`transition-colors ${
                theme === "dark"
                  ? "text-neutral-700 hover:text-red-500"
                  : "text-neutral-500 hover:text-red-600"
              }`}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <RiDeleteBin6Line />
            </motion.button>
          )}
        </div>
      </div>

      <motion.p
        className={`text-sm leading-relaxed mb-6 flex-grow ${
          theme === "dark" ? "text-neutral-400" : "text-neutral-600"
        }`}
        whileHover={{
          color: theme === "dark" ? "#d1d5db" : "#374151",
        }}
        transition={{ type: "spring", damping: 10, stiffness: 300 }}
      >
        {project.description}
      </motion.p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech_stack?.map((tech, i) => (
          <motion.span
            key={i}
            className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-widest cursor-default ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-400"
                : "bg-neutral-100 text-neutral-700"
            }`}
            variants={techTagVariants}
            initial="initial"
            whileHover="hover"
            whileInView={{
              opacity: [0, 1],
              y: [10, 0],
            }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              damping: 12,
              stiffness: 200,
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
