import { Download } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={`py-12 sm:py-20 text-center border-b ${
        theme === "dark" ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <div
        className={`inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 text-xs font-medium tracking-widest uppercase rounded-full ${
          theme === "dark"
            ? "text-blue-300/80 bg-blue-300/5 border border-blue-300/20"
            : "text-blue-700/80 bg-blue-100 border border-blue-200"
        }`}
      >
        Available for Freelance
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter leading-none">
        Crafting Digital <br />
        <span
          className={theme === "dark" ? "text-neutral-600" : "text-neutral-700"}
        >
          Experiences.
        </span>
      </h1>
      <p
        className={`max-w-xs sm:max-w-xl mx-auto text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed ${
          theme === "dark" ? "text-neutral-500" : "text-neutral-600"
        }`}
      >
        I'm a Full-Stack Developer specializing in high-performance web
        applications using{" "}
        <span
          className={theme === "dark" ? "text-neutral-200" : "text-neutral-800"}
        >
          React
        </span>{" "}
        and{" "}
        <span
          className={theme === "dark" ? "text-neutral-200" : "text-neutral-800"}
        >
          Go
        </span>
        . Focusing on clean code and exceptional UI.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 flex-wrap">
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base ${
            theme === "dark"
              ? "bg-neutral-100 text-black hover:bg-neutral-200"
              : "bg-neutral-900 text-white hover:bg-neutral-800"
          }`}
        >
          View Projects
        </button>
        <a
          href="https://drive.google.com/drive/folders/1QL92ZAth_jwdRP1CXtUaUKsiCHU07dVj?usp=drive_link"
          download="Nada_Hesham_CV.pdf"
          className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base flex items-center justify-center gap-2 ${
            theme === "dark"
              ? "border border-neutral-800 text-white hover:bg-neutral-900"
              : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
          }`}
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={`px-6 sm:px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base ${
            theme === "dark"
              ? "border border-neutral-800 text-white hover:bg-neutral-900"
              : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
          }`}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
