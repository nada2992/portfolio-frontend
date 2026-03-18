const skills = [
  { name: "React", level: "Expert", color: "text-blue-400" },
  { name: "Golang", level: "Advanced", color: "text-cyan-500" },
  { name: "Tailwind", level: "Expert", color: "text-sky-400" },
  { name: "Node.js", level: "Advanced", color: "text-green-500" },
  { name: "MongoDB", level: "Expert", color: "text-emerald-400" },
  { name: "TypeScript", level: "Intermediate", color: "text-blue-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-600 uppercase mb-12 text-center">
        Technical Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 bg-neutral-900/20 border border-neutral-800/50 rounded-2xl text-center group hover:border-blue-300/50 transition-all duration-500"
          >
            <h3
              className={`text-xl font-bold mb-1 ${skill.color} group-hover:scale-110 transition-transform`}
            >
              {skill.name}
            </h3>
            <p className="text-[10px] text-neutral-700 uppercase font-bold tracking-widest">
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
