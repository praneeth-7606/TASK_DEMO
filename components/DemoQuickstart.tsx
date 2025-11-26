// FILE: components/DemoQuickstart.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import toast from 'react-hot-toast'

export default function DemoQuickstart() {
    const [copiedCurl, setCopiedCurl] = useState(false)
    const [copiedNode, setCopiedNode] = useState(false)

    const curlExample = `curl -X POST https://api.oodl.cc/v1/memory \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"event": "user_query", "content": "Remember this"}'`

    const nodeExample = `import { OodlClient } from '@oodl/sdk';

const oodl = new OodlClient('YOUR_API_KEY');

await oodl.memory.create({
  event: 'user_query',
  content: 'Remember this for later',
  metadata: { userId: '123', timestamp: Date.now() }
});`

    const copyToClipboard = async (text: string, type: 'curl' | 'node') => {
        try {
            await navigator.clipboard.writeText(text)
            if (type === 'curl') {
                setCopiedCurl(true)
                setTimeout(() => setCopiedCurl(false), 2000)
            } else {
                setCopiedNode(true)
                setTimeout(() => setCopiedNode(false), 2000)
            }
            toast.success('Copied to clipboard!')
        } catch (err) {
            toast.error('Failed to copy')
        }
    }

    return (
        <section id="quickstart" className="py-24 px-4 bg-surface">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gradient">Setup in 5 minutes</span>
                    </h2>
                    <p className="text-xl text-muted">
                        Copy, replace API key, run. It's that simple.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {/* cURL Example */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative bg-bg border border-white/10 rounded-card overflow-hidden hover:border-accent/30 transition-colors"
                    >
                        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-surface/50">
                            <span className="text-sm font-semibold text-muted">cURL</span>
                            <button
                                onClick={() => copyToClipboard(curlExample, 'curl')}
                                className="flex items-center gap-2 px-3 py-1.5 rounded bg-accent/10 hover:bg-accent/20 text-accent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                                aria-label="Copy cURL example"
                            >
                                {copiedCurl ? (
                                    <>
                                        <Check size={16} />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy size={16} />
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>
                        <pre className="p-6 overflow-x-auto text-sm">
                            <code className="language-bash">{curlExample}</code>
                        </pre>
                    </motion.div>

                    {/* Node.js Example */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative bg-bg border border-white/10 rounded-card overflow-hidden hover:border-accent/30 transition-colors"
                    >
                        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-surface/50">
                            <span className="text-sm font-semibold text-muted">Node.js / TypeScript</span>
                            <button
                                onClick={() => copyToClipboard(nodeExample, 'node')}
                                className="flex items-center gap-2 px-3 py-1.5 rounded bg-accent/10 hover:bg-accent/20 text-accent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                                aria-label="Copy Node.js example"
                            >
                                {copiedNode ? (
                                    <>
                                        <Check size={16} />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy size={16} />
                                        Copy
                                    </>
                                )}
                            </button>
                        </div>
                        <pre className="p-6 overflow-x-auto text-sm">
                            <code className="language-javascript">{nodeExample}</code>
                        </pre>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-8 text-center"
                >
                    <p className="text-muted">
                        Need more examples?{' '}
                        <a
                            href="https://docs.oodl.cc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent-2 underline transition-colors"
                        >
                            View full documentation →
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
