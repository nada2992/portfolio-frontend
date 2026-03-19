import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

const fadeInParams = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function AppContent() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState([]);

  const loadData = () => {
    axios
      .get("https://backend-1-2nv9.onrender.com/api/projects")
      .then((res) => {
        const sortedData = res.data.reverse();
        setProjects(sortedData);
      })
      .catch((err) => console.error("Error loading projects:", err));
  };

  useEffect(() => {
    loadData();
  }, []);

  const themeClasses =
    theme === "dark"
      ? "bg-gradient-to-b from-black via-neutral-950 to-black text-neutral-100 selection:bg-blue-400/30"
      : "bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-900 selection:bg-blue-600/30";

  return (
    <div className={`min-h-screen ${themeClasses} relative`}>
      <ParticleBackground />
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pb-20 pt-10 relative z-10">
        <motion.section {...fadeInParams}>
          <Hero />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <About />
        </motion.section>

        <motion.section
          {...fadeInParams}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Skills />
        </motion.section>

        {import.meta.env.DEV && <AdminDashboard onProjectAdded={loadData} />}
        <ProjectsSection
          projects={projects}
          onDelete={loadData}
          showDelete={import.meta.env.DEV}
        />

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.section>

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
