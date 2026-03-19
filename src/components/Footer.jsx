import { motion } from "framer-motion";

const fadeInParams = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Footer = () => {
  return (
    <motion.footer
      {...fadeInParams}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mt-40 pt-10 border-t border-neutral-900 text-center text-neutral-600 text-[10px] tracking-[0.3em] uppercase"
    >
      <div className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} — Designed & Developed by Nada Hesham
      </div>
      <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-neutral-400">
        <a
          href="https://github.com/nada2992"
          className="hover:text-blue-300 transition-colors"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/nada-hesham-b28693246"
          className="hover:text-blue-300 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
