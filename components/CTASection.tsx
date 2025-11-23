"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import RequestDemoModal from "./RequestDemoModal";
import { motion } from "framer-motion";

export default function CTASection() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    return (
        <section className="py-32 relative overflow-hidden bg-gradient-to-br from-accent/20 to-bg border-y border-white/5">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold text-white mb-8"
                >
                    Ready to get started?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted mb-12 max-w-2xl mx-auto"
                >
                    Let’s connect and build something great together. Join the leading AI teams building context-aware applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={() => setIsDemoModalOpen(true)}
                        className="px-10 py-5 rounded-xl bg-white text-bg font-bold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)] hover:bg-accent-2 focus:outline-none focus:ring-4 focus:ring-white/30"
                    >
                        Contact Us
                    </button>
                </motion.div>
            </div>

            <RequestDemoModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </section>
    );
}
