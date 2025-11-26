// FILE: components/FeatureGrid.tsx
'use client'

import { motion } from 'framer-motion'
import { Brain, Share2, Zap } from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: 'Semantic Memory',
        description: 'Understand the meaning behind data, not just keywords. Enable true contextual awareness for your agents.'
    },
    {
        icon: Share2,
        title: 'Cross-App Context',
        description: 'Connect data silos. Your agent remembers what happened in Slack while working in Notion.'
    },
    {
        icon: Zap,
        title: 'Real-time Ingestion',
        description: 'Stream events instantly. From user actions to system logs, capture everything as it happens.'
    }
]

export default function FeatureGrid() {
    return (
        <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-surface border border-white/5 p-8 rounded-card hover:border-accent/30 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                            <p className="text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
