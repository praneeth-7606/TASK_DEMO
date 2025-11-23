"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const codeSnippet = `// 1. Install Oodl SDK
npm install @oodl/sdk

// 2. Initialize Client
import { OodlClient } from '@oodl/sdk';
const oodl = new OodlClient({ apiKey: 'oodl_sk_...' });

// 3. Create a Memory
await oodl.memory.create({
  content: "User prefers dark mode and React.",
  context: { source: "slack", thread_id: "123" }
});

// 4. Query Memory
const context = await oodl.memory.search({
  query: "What are the user's preferences?"
});
console.log(context.results);`;

export default function DemoQuickstart() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippet);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="quickstart" className="py-24 bg-surface/50 relative">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
                    >
                        <Terminal size={14} />
                        <span>Developer First</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-6"
                    >
                        Ingest Everything with Oodl.cc
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted mb-8 leading-relaxed"
                    >
                        From Slack and GitHub to Notion, email, browser activity, files, and custom apps. Oodl.cc transforms fragmented events into a single, semantic, unified memory timeline.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-surface border-2 border-bg flex items-center justify-center text-xs font-bold text-muted">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm text-muted">Trusted by 500+ AI teams</span>
                    </motion.div>
                </div>

                {/* Right: Code Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-xl bg-[#0d1117] border border-white/10 shadow-2xl overflow-hidden group"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="text-xs font-mono text-muted">quickstart.ts</div>
                    </div>

                    {/* Code */}
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed">
                            <code className="language-typescript">
                                {codeSnippet.split('\n').map((line, i) => (
                                    <div key={i} className="table-row">
                                        <span className="table-cell text-right pr-4 select-none text-white/20">{i + 1}</span>
                                        <span className={clsx(
                                            "table-cell",
                                            line.startsWith('//') ? "text-muted italic" : "text-blue-300",
                                            line.includes('const') && "text-purple-400",
                                            line.includes('await') && "text-red-400",
                                            line.includes('apiKey') && "text-yellow-400"
                                        )}>
                                            {line}
                                        </span>
                                    </div>
                                ))}
                            </code>
                        </pre>
                    </div>

                    {/* Copy Button */}
                    <button
                        onClick={handleCopy}
                        className="absolute top-14 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Copy code"
                    >
                        {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                    </button>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-white/5 bg-white/5 flex justify-between items-center">
                        <span className="text-xs text-muted">Setup in 5 minutes — copy, replace API key, run.</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
