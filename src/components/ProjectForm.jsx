import { useState } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";

export default function ProjectForm({ onProjectAdded }) {
  const { theme } = useTheme();

  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    tech_stack: "",
    password: "",
    link: "",
  });

  const handleSubmit = (e) => {
    const newProject = {
      id: crypto.randomUUID(),
      title: form.title,
      description: form.description,
      tech_stack: form.tech_stack.split(",").map((item) => item.trim()),
      link: form.link,
    };

    axios.post("https://backend-1-2nv9.onrender.com/api/projects", newProject, {
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Password": form.password,
      },
    });
  };

  return (
    <div
      className={`max-w-xl mx-auto mb-16 p-8 rounded-3xl border shadow-2xl ${
        theme === "dark"
          ? "bg-neutral-900 border-neutral-800"
          : "bg-white border-neutral-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          theme === "dark" ? "text-blue-400" : "text-blue-600"
        }`}
      >
        Add New Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className={`w-full p-3 rounded-xl outline-none transition-all ${
            theme === "dark"
              ? "bg-black border border-neutral-800 focus:border-blue-500 text-white placeholder-neutral-600"
              : "bg-neutral-50 border border-neutral-300 focus:border-blue-600 text-neutral-900 placeholder-neutral-500"
          }`}
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className={`w-full p-3 rounded-xl outline-none h-24 ${
            theme === "dark"
              ? "bg-black border border-neutral-800 focus:border-blue-500 text-white placeholder-neutral-600"
              : "bg-neutral-50 border border-neutral-300 focus:border-blue-600 text-neutral-900 placeholder-neutral-500"
          }`}
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          className={`w-full p-3 rounded-xl outline-none transition-all ${
            theme === "dark"
              ? "bg-black border border-neutral-800 focus:border-blue-500 text-white placeholder-neutral-600"
              : "bg-neutral-50 border border-neutral-300 focus:border-blue-600 text-neutral-900 placeholder-neutral-500"
          }`}
          placeholder="Tech Stack (comma separated)"
          value={form.tech_stack}
          onChange={(e) => setForm({ ...form, tech_stack: e.target.value })}
          required
        />
        <input
          type="password"
          className={`w-full p-3 rounded-xl outline-none ${
            theme === "dark"
              ? "bg-blue-900/10 border border-blue-900/30 focus:border-blue-500 text-blue-300 placeholder-blue-300/50"
              : "bg-blue-50 border border-blue-200 focus:border-blue-600 text-blue-700 placeholder-blue-600/50"
          }`}
          placeholder="Admin Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Project URL (e.g. GitHub or Live Link)"
          className={`w-full p-3 rounded-xl outline-none ${
            theme === "dark"
              ? "bg-black border border-neutral-800 focus:border-blue-500 text-white"
              : "bg-neutral-50 border border-neutral-300 focus:border-blue-600 text-neutral-900 placeholder-neutral-500"
          }`}
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <button
          type="submit"
          onClick={onProjectAdded}
          className={`w-full p-3 rounded-xl font-bold transition-all shadow-lg ${
            theme === "dark"
              ? "bg-blue-600 hover:bg-blue-700 shadow-blue-900/20 text-white"
              : "bg-blue-600 hover:bg-blue-700 shadow-blue-200/30 text-white"
          }`}
        >
          Publish Project
        </button>
      </form>
    </div>
  );
}
