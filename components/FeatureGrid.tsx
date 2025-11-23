"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GitBranch, Clock, ArrowRight } from "lucide-react";

const features = [
    {
        title: "Semantic Continuity",
        description: "Preserve long multi-step conversations so agents follow complex threads.",
        icon: BrainCircuit,
        link: "#continuity"
    },
    {
        title: "Cross-Thread Recall",
        description: "Connect ideas across chats, apps, and tasks for holistic context.",
        icon: GitBranch,
        link: "#recall"
    },
    {
        title: "Temporal Awareness",
        description: "Remember recency, deadlines, follow-ups — time matters.",
        icon: Clock,
        link: "#temporal"
    },
];

export default function FeatureGrid() {
    return (
        <section id="features" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group relative p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] flex flex-col items-start"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                <feature.icon className="text-accent w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-muted leading-relaxed mb-8 flex-1">{feature.description}</p>

                            <a href={feature.link} className="inline-flex items-center text-accent font-medium group/link">
                                Read more
                                <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
