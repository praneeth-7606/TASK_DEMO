// FILE: components/GlowingShowcaseCard.tsx
'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useHoverDirty } from 'react-use'

export default function GlowingShowcaseCard() {
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHoverDirty(ref)
    const [isFocused, setIsFocused] = useState(false)

    // Mouse position state
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth spring animation for tilt
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 })
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 })

    // Calculate rotation based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8])

    // Handle mouse move to update tilt values
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXRel = e.clientX - rect.left
        const mouseYRel = e.clientY - rect.top

        // Normalize values between -0.5 and 0.5
        const xPct = (mouseXRel / width) - 0.5
        const yPct = (mouseYRel / height) - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    // Reset tilt when mouse leaves
    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={0}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-md aspect-[4/5] md:aspect-square mx-auto cursor-pointer outline-none"
        >
            {/* Glowing Rim */}
            <div
                className={`absolute -inset-0.5 bg-gradient-to-br from-accent to-accent-2 rounded-card opacity-0 transition-opacity duration-500 blur-md ${isHovering || isFocused ? 'opacity-70' : 'opacity-0'
                    }`}
            />

            {/* Card Content */}
            <div className="absolute inset-0 bg-surface border border-white/10 rounded-card overflow-hidden shadow-2xl">
                {/* Background Grid/Pattern */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

                {/* Parallax Content Container */}
                <div
                    className="relative h-full flex flex-col items-center justify-center p-8 text-center"
                    style={{ transform: 'translateZ(20px)' }}
                >
                    <div className="w-20 h-20 mb-6 rounded-full bg-accent/10 flex items-center justify-center shadow-glow">
                        <div className="w-10 h-10 bg-accent rounded-full animate-pulse" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-white">Memory Graph</h3>
                    <p className="text-muted text-sm">
                        Visualizing the connections between your agent's memories in real-time.
                    </p>

                    {/* Floating Elements for Depth */}
                    <motion.div
                        className="absolute top-10 right-10 w-4 h-4 bg-accent-2 rounded-full blur-[2px]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-10 w-6 h-6 bg-accent rounded-full blur-[4px] opacity-60"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </div>
            </div>
        </motion.div>
    )
}
