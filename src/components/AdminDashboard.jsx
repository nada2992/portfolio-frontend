import { motion } from "framer-motion";
import ProjectForm from "./ProjectForm";
import { useTheme } from "../contexts/ThemeContext";

const fadeInParams = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const AdminDashboard = ({ onProjectAdded }) => {
  const { theme } = useTheme();

  return (
    <motion.section
      {...fadeInParams}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={`py-20 border-t ${
        theme === "dark" ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2
          className={`text-xl font-bold uppercase tracking-widest mb-2 underline ${
            theme === "dark"
              ? "text-neutral-500 decoration-blue-500/50"
              : "text-neutral-600 decoration-blue-600/50"
          }`}
        >
          Admin Dashboard
        </h2>
        <p
          className={`text-sm ${
            theme === "dark" ? "text-neutral-600" : "text-neutral-700"
          }`}
        >
          This section is only visible to you locally.
        </p>
      </div>
      <ProjectForm onProjectAdded={onProjectAdded} />
    </motion.section>
  );
};

export default AdminDashboard;
