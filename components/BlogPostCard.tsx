"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogPostProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageColor: string;
}

export default function BlogPostCard({ title, excerpt, date, category, imageColor }: BlogPostProps) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="group flex flex-col bg-surface rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-[0_6px_18px_rgba(0,0,0,0.2)] h-full"
        >
            {/* Thumbnail Placeholder */}
            <div className={`h-48 w-full ${imageColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                    {category}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-muted mb-3">{date}</div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {excerpt}
                </p>

                <div className="flex items-center text-accent text-sm font-medium group/link">
                    Read more
                    <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
                </div>
            </div>
        </motion.div>
    );
}
