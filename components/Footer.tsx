// FILE: components/Footer.tsx
'use client'

import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="/" className="text-2xl font-bold text-white tracking-tight block mb-4">
                            Oodl
                        </a>
                        <p className="text-muted max-w-xs">
                            The Memory Infrastructure for Agents.
                            Ingest everything. Organize everything. Recall anything.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-3 text-muted">
                            <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Integration</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Resources</h4>
                        <ul className="space-y-3 text-muted">
                            <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Community</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted text-sm">
                        © {currentYear} Oodl Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-muted hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-muted hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-muted hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
