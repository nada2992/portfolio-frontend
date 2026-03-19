import axios from "axios";
import { RiDeleteBin6Line, RiExternalLinkLine } from "react-icons/ri";
import { useTheme } from "../contexts/ThemeContext";

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
    <div
      className={`group relative border p-8 rounded-3xl transition-all duration-500 h-full min-h-[250px] flex flex-col ${
        theme === "dark"
          ? "bg-neutral-900/50 border-neutral-800 hover:border-blue-500/50"
          : "bg-white border-neutral-200 hover:border-blue-500/50 shadow-sm hover:shadow-md"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3
          className={`text-2xl font-bold tracking-tight ${
            theme === "dark" ? "text-white" : "text-neutral-900"
          }`}
        >
          {project.title}
        </h3>

        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-neutral-500 hover:text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <RiExternalLinkLine size={20} />
            </a>
          )}

          {showDelete && (
            <button
              onClick={handleDelete}
              className={`transition-colors ${
                theme === "dark"
                  ? "text-neutral-700 hover:text-red-500"
                  : "text-neutral-500 hover:text-red-600"
              }`}
            >
              <RiDeleteBin6Line />
            </button>
          )}
        </div>
      </div>

      <p
        className={`text-sm leading-relaxed mb-6 flex-grow ${
          theme === "dark" ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech_stack?.map((tech, i) => (
          <span
            key={i}
            className={`text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-widest ${
              theme === "dark"
                ? "bg-neutral-800 text-neutral-400"
                : "bg-neutral-100 text-neutral-700"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
