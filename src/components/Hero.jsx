import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 text-center border-b border-neutral-900">
      <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-blue-300/80 uppercase bg-blue-300/5 border border-blue-300/20 rounded-full">
        Available for Freelance
      </div>
      <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
        Crafting Digital <br />
        <span className="text-neutral-600">Experiences.</span>
      </h1>
      <p className="max-w-xl mx-auto text-neutral-500 text-lg mb-10 leading-relaxed">
        I'm a Full-Stack Developer specializing in high-performance web
        applications using <span className="text-neutral-200">React</span> and{" "}
        <span className="text-neutral-200">Go</span>. Focusing on clean code and
        exceptional UI.
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-neutral-100 text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all"
        >
          View Projects
        </button>
        <a
          href="https://drive.google.com/drive/folders/1QL92ZAth_jwdRP1CXtUaUKsiCHU07dVj?usp=drive_link"
          download="Nada_Hesham_CV.pdf"
          className="border border-neutral-800 px-8 py-3 rounded-full font-bold hover:bg-neutral-900 transition-all text-sm flex items-center justify-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download CV
        </a>
        <button className="border border-neutral-800 px-8 py-3 rounded-full font-bold hover:bg-neutral-900 transition-all">
          Contact Me
        </button>
      </div>
    </section>
  );
}
