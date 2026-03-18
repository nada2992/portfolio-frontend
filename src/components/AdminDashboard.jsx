import { motion } from "framer-motion";
import ProjectForm from "./ProjectForm";

const fadeInParams = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const AdminDashboard = ({ onProjectAdded }) => {
  return (
    <motion.section
      {...fadeInParams}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="py-20 border-t border-neutral-900"
    >
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-xl font-bold text-neutral-500 uppercase tracking-widest mb-2 underline decoration-blue-500/50">
          Admin Dashboard
        </h2>
        <p className="text-sm text-neutral-600">
          This section is only visible to you locally.
        </p>
      </div>
      <ProjectForm onProjectAdded={onProjectAdded} />
    </motion.section>
  );
};

export default AdminDashboard;
