import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section
      id="contact"
      className={`py-24 border-t ${
        theme === "dark" ? "border-neutral-900" : "border-neutral-200"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight">
            Let's build <br />
            <span
              className={
                theme === "dark" ? "text-neutral-500" : "text-neutral-600"
              }
            >
              something great.
            </span>
          </h2>
          <p
            className={`mb-10 max-w-sm leading-relaxed ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            I'm currently available for freelance projects and full-time
            opportunities. Have a question or just want to say hi?
          </p>

          <div className="space-y-6">
            <div>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] mb-2 font-bold ${
                  theme === "dark" ? "text-neutral-600" : "text-neutral-700"
                }`}
              >
                Email Me
              </p>
              <a
                href="mailto:nadahesham2992@gmail.com"
                className={`text-lg font-medium transition-colors ${
                  theme === "dark"
                    ? "hover:text-blue-400"
                    : "hover:text-blue-600"
                }`}
              >
                nadahesham2992@gmail.com
              </a>
            </div>

            <div>
              <p
                className={`text-[10px] uppercase tracking-[0.2em] mb-2 font-bold ${
                  theme === "dark" ? "text-neutral-600" : "text-neutral-700"
                }`}
              >
                Socials
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/nada-hesham-b28693246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-bold transition-colors ${
                    theme === "dark"
                      ? "hover:text-blue-500"
                      : "hover:text-blue-700"
                  }`}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nada2992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-bold transition-colors ${
                    theme === "dark"
                      ? "hover:text-blue-500"
                      : "hover:text-blue-700"
                  }`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form
            action="https://formspree.io/f/mbdzpvdw"
            method="POST"
            className={`space-y-4 p-8 rounded-3xl ${
              theme === "dark"
                ? "bg-neutral-900/30 border border-neutral-800"
                : "bg-neutral-50 border border-neutral-200"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className={`w-full p-4 rounded-2xl outline-none transition-all resize-none ${
                  theme === "dark"
                    ? "bg-black border border-neutral-800 focus:border-blue-500 placeholder:text-neutral-700 text-white"
                    : "bg-white border border-neutral-300 focus:border-blue-600 placeholder:text-neutral-500 text-neutral-900"
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className={`w-full p-4 rounded-2xl outline-none transition-all resize-none ${
                  theme === "dark"
                    ? "bg-black border border-neutral-800 focus:border-blue-500 placeholder:text-neutral-700 text-white"
                    : "bg-white border border-neutral-300 focus:border-blue-600 placeholder:text-neutral-500 text-neutral-900"
                }`}
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className={`w-full p-4 rounded-2xl outline-none transition-all resize-none ${
                theme === "dark"
                  ? "bg-black border border-neutral-800 focus:border-blue-500 placeholder:text-neutral-700 text-white"
                  : "bg-white border border-neutral-300 focus:border-blue-600 placeholder:text-neutral-500 text-neutral-900"
              }`}
            ></textarea>
            <button
              type="submit"
              className={`w-full font-black py-4 rounded-2xl transition-all duration-500 uppercase tracking-widest text-xs ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-blue-500 hover:text-white"
                  : "bg-neutral-900 text-white hover:bg-blue-600 hover:text-white"
              }`}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
