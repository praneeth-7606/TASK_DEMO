// FILE: components/ImageTextBlock.tsx
'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Github, FileText, Mail, Globe, Folder } from 'lucide-react'
import NetworkAnimation3D from './NetworkAnimation3D'

export default function ImageTextBlock() {
    return (
        <section className="py-24 px-4 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ingest <span className="text-accent">Everything</span>
                        </h2>
                        <p className="text-muted text-lg mb-8 leading-relaxed">
                            Anything that happens in your apps gets CC'd into Oodl — automatically.
                            From Slack and GitHub to Notion, email, browser activity, files, and custom apps.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: MessageSquare, label: 'Slack', color: 'text-purple-400' },
                                { icon: Github, label: 'GitHub', color: 'text-white' },
                                { icon: FileText, label: 'Notion', color: 'text-gray-300' },
                                { icon: Mail, label: 'Email', color: 'text-blue-400' },
                                { icon: Globe, label: 'Browser', color: 'text-cyan-400' },
                                { icon: Folder, label: 'Files', color: 'text-yellow-400' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="flex flex-col items-center justify-center p-4 bg-surface rounded-xl border border-white/5 hover:border-accent/30 transition-colors shadow-soft group cursor-pointer"
                                >
                                    <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors ${item.color}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <span className="text-sm font-medium text-muted group-hover:text-white transition-colors">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Animation/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-video rounded-card overflow-hidden border border-white/10 shadow-2xl group bg-[#0b1220]">
                            {/* Replaced 2D animation with 3D NetworkAnimation */}
                            <div className="absolute inset-0">
                                <NetworkAnimation3D />
                            </div>

                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-bg/20 to-transparent pointer-events-none" />
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-2/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
