import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <div
        className={`backdrop-blur-md border px-3 md:px-6 py-2 md:py-3 rounded-full flex items-center ${
          theme === "dark"
            ? "bg-neutral-900/50 border-neutral-800"
            : "bg-white/50 border-neutral-200"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`text-sm md:text-base font-bold tracking-tighter transition-colors ${
            theme === "dark" ? "hover:text-blue-300" : "hover:text-blue-600"
          }`}
        >
          PORTFOLIO.
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 md:gap-8 ml-4 md:ml-8">
          <div
            className={`h-4 w-[1px] ${
              theme === "dark" ? "bg-neutral-800" : "bg-neutral-200"
            }`}
          ></div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xs uppercase tracking-widest font-medium transition-colors ${
                theme === "dark"
                  ? "text-neutral-400 hover:text-white"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 ml-4">
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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "hover:bg-neutral-800/50"
                : "hover:bg-neutral-200/50"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl border ${
            theme === "dark"
              ? "bg-neutral-900/95 border-neutral-800"
              : "bg-white/95 border-neutral-200"
          } backdrop-blur-md`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
