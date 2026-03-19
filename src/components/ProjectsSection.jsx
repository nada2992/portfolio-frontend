import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../contexts/ThemeContext";

const fadeInParams = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const ProjectsSection = ({ projects, onDelete, showDelete }) => {
  const { theme } = useTheme();

  return (
    <motion.section
      {...fadeInParams}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="py-10"
      id="projects"
    >
      <div
        className={`flex items-center justify-between mb-12 border-b pb-6 ${
          theme === "dark" ? "border-neutral-900" : "border-neutral-200"
        }`}
      >
        <h2
          className={`text-4xl font-black tracking-tighter ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
        >
          Selected Works.
        </h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span
            className={`text-xs font-mono ${
              theme === "dark" ? "text-neutral-500" : "text-neutral-600"
            }`}
          >
            {projects?.length || 0} Projects
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects && projects.length > 0 ? (
          projects.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <ProjectCard
                project={p}
                onDelete={onDelete}
                showDelete={showDelete}
              />
            </motion.div>
          ))
        ) : (
          <div
            className={`col-span-full py-20 text-center border border-dashed rounded-3xl ${
              theme === "dark" ? "border-neutral-800" : "border-neutral-300"
            }`}
          >
            <p
              className={
                theme === "dark" ? "text-neutral-600" : "text-neutral-500"
              }
            >
              No projects found.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
