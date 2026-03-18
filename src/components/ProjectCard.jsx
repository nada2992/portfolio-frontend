import axios from "axios";
import { RiDeleteBin6Line, RiExternalLinkLine } from "react-icons/ri";

export default function ProjectCard({ project, onDelete, showDelete }) {
  const handleDelete = async () => {
    const password = prompt("Enter Admin Password:");
    if (!password) return;

    try {
      await axios.delete(`http://localhost:8080/api/projects/${project.id}`, {
        headers: { "X-Admin-Password": password },
      });
      onDelete();
    } catch (err) {
      alert("Delete failed: Check password or ID");
    }
  };

  return (
    <div className="group relative bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-500 h-full min-h-[250px] flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>

        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <RiExternalLinkLine size={20} />
            </a>
          )}

          {showDelete && (
            <button
              onClick={handleDelete}
              className="text-neutral-700 hover:text-red-500 transition-colors"
            >
              <RiDeleteBin6Line />
            </button>
          )}
        </div>
      </div>

      <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech_stack?.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] font-mono bg-neutral-800 text-neutral-400 px-3 py-1 rounded-full uppercase tracking-widest"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
