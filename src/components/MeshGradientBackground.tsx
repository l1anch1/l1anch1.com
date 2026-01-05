"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    id: 1,
    className: "animate-blob-1",
    gradient: "from-neon-purple via-neon-violet to-neon-fuchsia",
    size: "w-[600px] h-[600px]",
    position: "top-[-10%] left-[-5%]",
    opacity: "opacity-70",
  },
  {
    id: 2,
    className: "animate-blob-2",
    gradient: "from-neon-cyan via-neon-teal to-neon-blue",
    size: "w-[550px] h-[550px]",
    position: "top-[20%] right-[-10%]",
    opacity: "opacity-60",
  },
  {
    id: 3,
    className: "animate-blob-3",
    gradient: "from-neon-pink via-neon-rose to-neon-fuchsia",
    size: "w-[500px] h-[500px]",
    position: "bottom-[-5%] left-[20%]",
    opacity: "opacity-65",
  },
  {
    id: 4,
    className: "animate-blob-4",
    gradient: "from-neon-indigo via-neon-blue to-neon-cyan",
    size: "w-[450px] h-[450px]",
    position: "bottom-[10%] right-[15%]",
    opacity: "opacity-55",
  },
];

export default function MeshGradientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark-900">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700" />

      {/* Animated blobs */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: blob.id * 0.3,
            ease: "easeOut",
          }}
          className={`
            absolute ${blob.position} ${blob.size} ${blob.opacity}
            bg-gradient-to-br ${blob.gradient}
            rounded-full blur-[120px] ${blob.className}
          `}
        />
      ))}

      {/* Extra subtle floating orbs for depth */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[40%] w-[300px] h-[300px] opacity-40
          bg-gradient-to-br from-neon-emerald to-neon-teal
          rounded-full blur-[100px]"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[60%] right-[30%] w-[250px] h-[250px] opacity-35
          bg-gradient-to-br from-neon-rose to-neon-pink
          rounded-full blur-[80px]"
      />

      {/* Vignette overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,0,20,0.4)_70%,rgba(3,0,20,0.8)_100%)]" />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />
    </div>
  );
}

