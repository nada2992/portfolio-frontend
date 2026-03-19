import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div
        className={`backdrop-blur-md border px-4 md:px-6 py-3 rounded-full flex gap-4 md:gap-8 items-center ${
          theme === "dark"
            ? "bg-neutral-900/50 border-neutral-800"
            : "bg-white/50 border-neutral-200"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`text-sm font-bold tracking-tighter transition-colors ${
            theme === "dark" ? "hover:text-blue-300" : "hover:text-blue-600"
          }`}
        >
          PORTFOLIO.
        </button>
        <div
          className={`h-4 w-[1px] ${
            theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
          }`}
        ></div>
        <button
          onClick={() => scrollTo("skills")}
          className={`text-xs uppercase tracking-widest font-medium transition-colors ${
            theme === "dark"
              ? "text-neutral-400 hover:text-white"
              : "text-neutral-600 hover:text-black"
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className={`text-xs uppercase tracking-widest font-medium transition-colors ${
            theme === "dark"
              ? "text-neutral-400 hover:text-white"
              : "text-neutral-600 hover:text-black"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`text-xs uppercase tracking-widest font-medium transition-colors ${
            theme === "dark"
              ? "text-neutral-400 hover:text-white"
              : "text-neutral-600 hover:text-black"
          }`}
        >
          Contact
        </button>
        <div
          className={`h-4 w-[1px] ${
            theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
          }`}
        ></div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${
            theme === "dark"
              ? "hover:bg-neutral-800/50"
              : "hover:bg-neutral-200/50"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-neutral-400 hover:text-yellow-300 transition-colors" />
          ) : (
            <Moon className="w-4 h-4 text-neutral-600 hover:text-blue-600 transition-colors" />
          )}
        </button>
      </div>
    </motion.nav>
  );
}
