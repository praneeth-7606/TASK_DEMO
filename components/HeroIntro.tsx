"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Glowing3DCard from "./Glowing3DCard";
import { useState } from "react";
import RequestDemoModal from "./RequestDemoModal";

export default function HeroIntro() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-bg to-bg pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Main Content */}
                <div className="max-w-4xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 text-balance"
                    >
                        The Memory Infrastructure for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">Agents.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-muted mb-10 text-balance leading-relaxed max-w-2xl mx-auto"
                    >
                        A unified system that captures, structures, and retrieves everything your apps, agents, and users do.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <button
                            onClick={() => setIsDemoModalOpen(true)}
                            className="group relative px-8 py-4 rounded-lg bg-accent text-bg font-bold text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,230,211,0.25)]"
                        >
                            <span className="flex items-center gap-2">
                                Get a demo <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                        <a
                            href="#quickstart"
                            className="px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg transition-all hover:border-accent/50 hover:-translate-y-1"
                        >
                            View Works / Docs
                        </a>
                    </motion.div>
                </div>

                {/* 3D Card Showcase - Centered below text for ZIZO style impact */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="w-full max-w-lg perspective-1000"
                >
                    <Glowing3DCard />
                </motion.div>
            </div>

            <RequestDemoModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </section>
    );
}
