"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageSquare, Clock, Zap, Database } from "lucide-react";

export default function Glowing3DCard() {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-md aspect-[4/5] rounded-2xl bg-surface border border-white/5 shadow-2xl overflow-hidden group"
        >
            {/* Glow Effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0,230,211,0.1), transparent 40%)",
                }}
            />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-xs font-mono text-muted">LIVE MEMORY STREAM</div>
                </div>

                {/* Memory Stream */}
                <div className="space-y-4 mt-6 flex-1">
                    {[
                        { icon: MessageSquare, label: "User Intent", time: "Just now", color: "text-accent" },
                        { icon: Database, label: "Context Retrieved", time: "12ms ago", color: "text-purple-400" },
                        { icon: Clock, label: "Temporal Check", time: "45ms ago", color: "text-blue-400" },
                        { icon: Zap, label: "Memory Updated", time: "100ms ago", color: "text-yellow-400" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors"
                            style={{ transform: `translateZ(${30 + i * 10}px)` }}
                        >
                            <item.icon size={16} className={item.color} />
                            <div className="flex-1">
                                <div className="text-xs font-medium text-white">{item.label}</div>
                                <div className="text-[10px] text-muted">{item.time}</div>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" />
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-muted font-mono">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-accent">99.9% RECALL</span>
                </div>
            </div>

            {/* Decorative Gradient Blob */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
        </motion.div>
    );
}
