"use client";
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import RequestDemoModal from "./RequestDemoModal";
import TextReveal from "./ui/TextReveal";
import Magnetic from "./ui/Magnetic";
import dynamic from "next/dynamic";

const ParticleSphere = dynamic(() => import("./ui/ParticleSphere"), { ssr: false });

export default function HeroIntro() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-bg to-bg pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center flex-1">
                {/* Main Content */}
                <div className="max-w-5xl mx-auto mb-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 text-balance">
                        <TextReveal text="Connect to the universal" /> <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
                            <TextReveal text="memory network" delay={0.5} />
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="text-lg md:text-xl text-muted mb-8 text-balance leading-relaxed max-w-2xl mx-auto"
                    >
                        Access global context at the best possible terms powered by open infrastructure that serves, not extracts.
                    </motion.p>
                </div>

                {/* Particle Sphere - Central Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="w-full max-w-[600px] h-[400px] md:h-[500px] relative mb-12"
                >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        {/* Central Logo/Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-bg font-bold text-3xl shadow-[0_0_30px_rgba(0,230,211,0.5)]">
                            O
                        </div>
                    </div>
                    <ParticleSphere />
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="w-full max-w-4xl grid grid-cols-2 gap-8 md:gap-20 text-left border-t border-white/5 pt-8 mb-12"
                >
                    <div>
                        <div className="text-muted text-sm md:text-base mb-2">Memories Indexed</div>
                        <div className="text-3xl md:text-5xl font-mono text-white tracking-tighter">
                            8,766,838,756
                        </div>
                    </div>
                    <div>
                        <div className="text-muted text-sm md:text-base mb-2">Active Agents</div>
                        <div className="text-3xl md:text-5xl font-mono text-white tracking-tighter">
                            2,988,058
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mb-12"
                >
                    <Magnetic>
                        <button
                            onClick={() => setIsDemoModalOpen(true)}
                            className="group relative px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg transition-all hover:border-accent/50 backdrop-blur-sm"
                        >
                            <span className="flex items-center gap-2">
                                Start Building <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                    </Magnetic>
                </motion.div>
            </div>

            <RequestDemoModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </section>
    );
}
