import { motion } from "framer-motion";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="bg-neutral-900/50 backdrop-blur-md border border-neutral-800 px-4 md:px-6 py-3 rounded-full flex gap-4 md:gap-8 items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-bold tracking-tighter hover:text-blue-300 transition-colors"
        >
          PORTFOLIO.
        </button>
        <div className="h-4 w-[1px] bg-neutral-800"></div>
        <button
          onClick={() => scrollTo("skills")}
          className="text-xs uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors"
        >
          Skills
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="text-xs uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors"
        >
          Projects
        </button>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="text-xs uppercase tracking-widest font-medium text-neutral-400 hover:text-white transition-colors"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
