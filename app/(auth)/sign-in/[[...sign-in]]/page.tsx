"use client";

import { motion } from "framer-motion";
import { SignIn } from "@clerk/nextjs";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function SignInPage() {
    return (
        <div className="relative flex min-h-screen items-center justify-center p-6">
            <ParticlesBackground />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 rounded-2xl bg-white/10 p-10 shadow-xl backdrop-blur-lg"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6 text-center text-3xl font-bold text-white"
                >
                    Welcome Back 👋
                </motion.h1>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <SignIn />
                </motion.div>
            </motion.div>
        </div>
    );
}