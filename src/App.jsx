import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AdminDashboard from "./components/AdminDashboard";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const fadeInParams = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function App() {
  const [projects, setProjects] = useState([]);

  const loadData = () => {
    axios
      .get("http://localhost:8080/api/projects")
      .then((res) => {
        const sortedData = res.data.reverse();
        setProjects(sortedData);
      })
      .catch((err) => console.error("Error loading projects:", err));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-neutral-100 selection:bg-blue-400/30">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 pb-20 pt-10">
        <motion.section {...fadeInParams}>
          <Hero />
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

export default App;
