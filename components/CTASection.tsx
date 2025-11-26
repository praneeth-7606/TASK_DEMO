// FILE: components/CTASection.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section className="py-32 px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface to-accent/5" />

            <div className="container mx-auto max-w-4xl relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8"
                >
                    Ready to give your agents <br />
                    <span className="text-gradient">real memory?</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-auto px-8 py-4 bg-accent text-bg font-bold rounded-btn hover:bg-accent-2 transition-colors shadow-glow flex items-center justify-center gap-2 group">
                        Get a demo
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto px-8 py-4 border border-white/10 rounded-btn hover:bg-white/5 transition-colors font-medium">
                        Contact Sales
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
