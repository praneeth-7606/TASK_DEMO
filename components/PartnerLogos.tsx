"use client";

import { motion } from "framer-motion";
import {
    Hexagon,
    Globe2,
    CloudLightning,
    Zap,
    Cpu,
    Layers,
    Network,
    BrainCircuit,
    Database,
    Share2
} from "lucide-react";

const partners = [
    { name: "Acme Corp", icon: Hexagon },
    { name: "GlobalAI", icon: Globe2 },
    { name: "Nebula", icon: CloudLightning },
    { name: "Vertex", icon: Zap },
    { name: "Quantum", icon: Cpu },
    { name: "Hyperion", icon: Layers },
    { name: "Synapse", icon: Network },
    { name: "Cortex", icon: BrainCircuit },
    { name: "Neural", icon: Database },
    { name: "Omni", icon: Share2 }
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
                            className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110 cursor-pointer text-white flex items-center gap-3 group"
                        >
                            <partner.icon size={32} className="text-accent group-hover:text-accent-2 transition-colors" />
                            <span className="text-xl font-bold tracking-tight">{partner.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
