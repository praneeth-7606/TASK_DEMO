// FILE: components/PartnerLogos.tsx
'use client'

import { motion } from 'framer-motion'
import {
    Cloud,
    Database,
    Shield,
    Cpu,
    Globe,
    Server,
    Wifi,
    Box
} from 'lucide-react'

const partners = [
    { icon: Cloud, name: 'CloudCorp' },
    { icon: Database, name: 'DataFlow' },
    { icon: Shield, name: 'SecureNet' },
    { icon: Cpu, name: 'AI Systems' },
    { icon: Globe, name: 'GlobalConnect' },
    { icon: Server, name: 'ServerStack' },
    { icon: Wifi, name: 'NetWorks' },
    { icon: Box, name: 'CubeIO' }
]

export default function PartnerLogos() {
    return (
        <section className="py-12 border-y border-white/5 bg-surface/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <p className="text-center text-muted text-sm font-medium mb-8 uppercase tracking-wider">
                    Trusted by forward-thinking teams
                </p>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-scroll flex gap-8 md:gap-16 whitespace-nowrap hover:[animation-play-state:paused]">
                        {/* First set of logos */}
                        {partners.map((partner, index) => (
                            <div
                                key={`original-${index}`}
                                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-50 hover:opacity-100"
                            >
                                <div className="h-12 w-32 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-accent/20 transition-colors group/card">
                                    <partner.icon size={24} className="text-white group-hover/card:text-accent transition-colors" />
                                    <span className="ml-2 text-sm font-bold text-white hidden md:block">{partner.name}</span>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {partners.map((partner, index) => (
                            <div
                                key={`duplicate-${index}`}
                                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer opacity-50 hover:opacity-100"
                            >
                                <div className="h-12 w-32 bg-white/5 rounded-lg flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-accent/20 transition-colors group/card">
                                    <partner.icon size={24} className="text-white group-hover/card:text-accent transition-colors" />
                                    <span className="ml-2 text-sm font-bold text-white hidden md:block">{partner.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient masks for smooth fade edges */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent z-10" />
                </div>
            </div>
        </section>
    )
}
