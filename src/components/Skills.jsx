import { useTheme } from "../contexts/ThemeContext";

const skills = [
  {
    name: "React",
    level: "Advanced",
    darkColor: "text-blue-400",
    lightColor: "text-blue-700",
  },
  {
    name: "Tailwind",
    level: "Advanced",
    darkColor: "text-sky-400",
    lightColor: "text-sky-700",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    darkColor: "text-blue-600",
    lightColor: "text-blue-800",
  },
  {
    name: "Node.js",
    level: "Advanced",
    darkColor: "text-green-500",
    lightColor: "text-green-700",
  },
  {
    name: "MongoDB",
    level: "Advanced",
    darkColor: "text-emerald-400",
    lightColor: "text-emerald-700",
  },
  {
    name: "Golang",
    level: "Beginner",
    darkColor: "text-cyan-500",
    lightColor: "text-cyan-700",
  },
  {
    name: "Docker",
    level: "Beginner",
    darkColor: "text-blue-400",
    lightColor: "text-blue-700",
  },
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20">
      <h2
        className={`text-sm font-bold tracking-[0.2em] uppercase mb-12 text-center ${
          theme === "dark" ? "text-neutral-600" : "text-neutral-700"
        }`}
      >
        Technical Stack
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`p-6 rounded-2xl text-center group transition-all duration-500 ${
              theme === "dark"
                ? "bg-neutral-900/20 border border-neutral-800/50 hover:border-blue-300/50"
                : "bg-neutral-50 border border-neutral-200 hover:border-blue-500/50 shadow-sm hover:shadow-md"
            }`}
          >
            <h3
              className={`text-xl font-bold mb-1 group-hover:scale-110 transition-transform ${
                theme === "dark" ? skill.darkColor : skill.lightColor
              }`}
            >
              {skill.name}
            </h3>
            <p
              className={`text-[10px] uppercase font-bold tracking-widest ${
                theme === "dark" ? "text-neutral-700" : "text-neutral-600"
              }`}
            >
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
