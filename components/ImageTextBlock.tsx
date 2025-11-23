"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

const accordionItems = [
    {
        title: "Semantic Continuity",
        content: "Preserve long multi-step conversations so agents don't lose the plot halfway through complex tasks.",
    },
    {
        title: "Cross-Thread Recall",
        content: "Connect ideas across chats, apps, and tasks. Oodl builds a graph of understanding that spans your entire digital footprint.",
    },
    {
        title: "Temporal Awareness",
        content: "Time matters. Oodl understands recency, deadlines, and follow-ups, prioritizing what's relevant now.",
    },
    {
        title: "Meta-Intent Detection",
        content: "Go beyond keywords. Extract reminders, dissatisfaction, and implicit goals from every interaction.",
    },
    {
        title: "Hybrid Retrieval",
        content: "The best of both worlds. Mix conversations, docs, files, app events, and videos for complete context.",
    },
    {
        title: "Dynamic Association",
        content: "Discover related memories at runtime. Oodl proactively surfaces relevant information before you even ask.",
    },
];

export default function ImageTextBlock() {
    return (
        <section id="how-it-works" className="py-32 bg-bg relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                {/* Left: Text & Accordion */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                        Built for real <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">conversational memory</span>
                    </h2>

                    <div className="space-y-4">
                        {accordionItems.map((item, i) => (
                            <Disclosure key={i} as="div" className="border-b border-white/10 pb-4">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between items-center py-3 text-left text-lg font-medium text-white hover:text-accent transition-colors focus:outline-none group">
                                            <span className={clsx("transition-colors", open ? "text-accent" : "")}>{item.title}</span>
                                            <ChevronDown
                                                className={clsx(
                                                    "w-5 h-5 text-muted transition-transform duration-300 group-hover:text-accent",
                                                    open ? "rotate-180 text-accent" : ""
                                                )}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-200 ease-out"
                                            enterFrom="transform scale-95 opacity-0 h-0"
                                            enterTo="transform scale-100 opacity-100 h-auto"
                                            leave="transition duration-100 ease-out"
                                            leaveFrom="transform scale-100 opacity-100 h-auto"
                                            leaveTo="transform scale-95 opacity-0 h-0"
                                        >
                                            <Disclosure.Panel className="pt-2 pb-4 text-muted leading-relaxed text-base">
                                                {item.content}
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-10 text-xl font-medium text-accent"
                    >
                        Vector search wasn't built for this. Your agents need it.
                    </motion.p>
                </motion.div>

                {/* Right: Visual Representation (Abstract Memory Graph) */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-square rounded-3xl bg-surface border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent" />

                    {/* Animated Nodes */}
                    <div className="relative w-full h-full">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(0,230,211,0.6)]"
                                style={{
                                    top: `${20 + Math.random() * 60}%`,
                                    left: `${20 + Math.random() * 60}%`,
                                }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}

                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                            <motion.path
                                d="M100,100 Q250,150 400,100 T600,200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-accent"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M50,400 Q200,250 350,350 T650,300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-accent-2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
