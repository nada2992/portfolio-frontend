import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const ParticleBackground = () => {
  const { theme } = useTheme();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const particleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0],
      transition: {
        duration: (particle) => particle.duration,
        repeat: Infinity,
        delay: (particle) => particle.delay,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: theme === "dark" 
              ? "rgba(96, 165, 250, 0.3)" 
              : "rgba(37, 99, 235, 0.2)",
            boxShadow: theme === "dark"
              ? "0 0 10px rgba(96, 165, 250, 0.5)"
              : "0 0 10px rgba(37, 99, 235, 0.3)",
          }}
          variants={particleVariants}
          initial="initial"
          animate="animate"
          custom={particle}
        />
      ))}
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 rounded-lg opacity-20"
        style={{
          borderColor: theme === "dark" ? "#60a5fa" : "#2563eb",
        }}
        animate={{
          rotate: [0, 360],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border-2 rounded-full opacity-20"
        style={{
          borderColor: theme === "dark" ? "#60a5fa" : "#2563eb",
        }}
        animate={{
          rotate: [360, 0],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 border-2 opacity-15"
        style={{
          borderColor: theme === "dark" ? "#60a5fa" : "#2563eb",
          transform: "rotate(45deg)",
        }}
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
