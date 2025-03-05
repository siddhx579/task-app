"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <ParticlesBackground />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-bold text-white sm:text-6xl"
      >
        Welcome to <span className="text-[#ff6b6b]">NextTask</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 max-w-lg text-lg text-gray-200"
      >
        A modern task management application to boost your productivity.
      </motion.p>

      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={() => router.push("/dashboard")}
        className="mt-8 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#5f27cd] px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        Get Started 🚀
      </motion.button>
    </div>
  );
}