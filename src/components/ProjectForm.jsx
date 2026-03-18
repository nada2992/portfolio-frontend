import { useState } from "react";
import axios from "axios";

export default function ProjectForm({ onProjectAdded }) {
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
      id: Date.now().toString(),
      title: form.title,
      description: form.description,
      tech_stack: form.tech_stack.split(",").map((item) => item.trim()),
      link: form.link,
    };

    axios.post("http://localhost:8080/api/projects", newProject, {
      headers: {
        "Content-Type": "application/json",
        "X-Admin-Password": form.password,
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto mb-16 p-8 bg-neutral-900 rounded-3xl border border-neutral-800 shadow-2xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full bg-black border border-neutral-800 p-3 rounded-xl focus:border-blue-500 outline-none text-white placeholder-neutral-600 transition-all"
          placeholder="Project Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="w-full bg-black border border-neutral-800 p-3 rounded-xl focus:border-blue-500 outline-none h-24"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <input
          className="w-full bg-black border border-neutral-800 p-3 rounded-xl focus:border-blue-500 outline-none text-white placeholder-neutral-600 transition-all"
          placeholder="Tech Stack (comma separated)"
          value={form.tech_stack}
          onChange={(e) => setForm({ ...form, tech_stack: e.target.value })}
          required
        />
        <input
          type="password"
          className="w-full bg-blue-900/10 border border-blue-900/30 p-3 rounded-xl focus:border-blue-500 outline-none text-blue-300"
          placeholder="Admin Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Project URL (e.g. GitHub or Live Link)"
          className="w-full bg-black border border-neutral-800 p-3 rounded-xl focus:border-blue-500 outline-none text-white"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20"
        >
          Publish Project
        </button>
      </form>
    </div>
  );
}
