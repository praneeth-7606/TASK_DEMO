// FILE: components/HeroIntro.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import GlowingShowcaseCard from './GlowingShowcaseCard'

export default function HeroIntro() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-2/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                        The Memory <br />
                        <span className="text-gradient">Infrastructure</span> <br />
                        for Agents
                    </h1>

                    <p className="text-xl text-muted max-w-lg leading-relaxed">
                        A unified system that captures, structures, and retrieves everything your apps, agents, and users do.
                    </p>

                    <div className="space-y-3">
                        {['Long-term structured memory', 'Cross-app context', 'Real-time retrieval'].map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="flex items-center gap-3 text-text/90"
                            >
                                <CheckCircle2 size={20} className="text-accent" />
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-4 bg-accent text-bg font-bold rounded-btn hover:bg-accent-2 transition-colors shadow-glow flex items-center gap-2 group">
                            Get a demo
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-white/10 rounded-btn hover:bg-white/5 transition-colors font-medium">
                            Explore Docs
                        </button>
                    </div>
                </motion.div>

                {/* Visual Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10"
                >
                    <GlowingShowcaseCard />
                </motion.div>
            </div>
        </section>
    )
}
