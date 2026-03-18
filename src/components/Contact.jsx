import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-black tracking-tighter mb-6 leading-tight">
            Let's build <br />
            <span className="text-neutral-500 italic">something great.</span>
          </h2>
          <p className="text-neutral-400 mb-10 max-w-sm leading-relaxed">
            I'm currently available for freelance projects and full-time
            opportunities. Have a question or just want to say hi?
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-bold">
                Email Me
              </p>
              <a
                href="mailto:nadahesham2992@gmail.com"
                className="text-lg font-medium hover:text-blue-400 transition-colors"
              >
                nadahesham2992@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-2 font-bold">
                Socials
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/nada-hesham-b28693246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold hover:text-blue-500 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nada2992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold hover:text-blue-500 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* الجزء الأيمن: الفورم الحقيقية */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* استبدلي 'YOUR_FORMSPREE_ID' بالـ ID اللي هتاخديه من موقع Formspree */}
          <form
            action="https://formspree.io/f/mbdzpvdw"
            method="POST"
            className="space-y-4 p-8 bg-neutral-900/30 border border-neutral-800 rounded-3xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full bg-black border border-neutral-800 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all placeholder:text-neutral-700 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full bg-black border border-neutral-800 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all placeholder:text-neutral-700 text-white"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full bg-black border border-neutral-800 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all placeholder:text-neutral-700 text-white resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-500 uppercase tracking-widest text-xs"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
