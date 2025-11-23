"use client";

import { motion } from "framer-motion";

// Placeholder SVG components for logos
const LogoPlaceholder = ({ name }: { name: string }) => (
    <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
        <div className="w-10 h-10 rounded-lg bg-current opacity-20" />
        {name}
    </div>
);

const partners = [
    "Acme Corp",
    "GlobalAI",
    "Nebula",
    "Vertex",
    "Quantum",
    "Hyperion",
    "Synapse",
    "Cortex",
    "Neural",
    "Omni"
];

export default function PartnerLogos() {
    return (
        <section className="py-24 border-b border-white/5 bg-bg">
            <div className="container mx-auto px-6">
                <h3 className="text-center text-2xl font-semibold text-white mb-16">
                    Backed by leading teams reshaping AI
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer text-white"
                        >
                            <LogoPlaceholder name={partner} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
