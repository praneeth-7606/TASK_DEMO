// FILE: components/NetworkAnimation.tsx
'use client'

import { useEffect, useRef } from 'react'

interface Point {
    x: number
    y: number
    vx: number
    vy: number
}

interface Connection {
    p1: Point
    p2: Point
    opacity: number
}

export default function NetworkAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = canvas.width = canvas.offsetWidth
        let height = canvas.height = canvas.offsetHeight

        // Configuration
        const POINT_COUNT = 40
        const CONNECTION_DISTANCE = 150
        const MOUSE_DISTANCE = 200
        const ACCENT_COLOR = '0, 230, 211' // #00e6d3

        // State
        const points: Point[] = []
        let mouse = { x: -1000, y: -1000 }

        // Initialize points
        for (let i = 0; i < POINT_COUNT; i++) {
            points.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            })
        }

        const handleResize = () => {
            width = canvas.width = canvas.offsetWidth
            height = canvas.height = canvas.offsetHeight
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        }

        window.addEventListener('resize', handleResize)
        canvas.addEventListener('mousemove', handleMouseMove)

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            // Update and draw points
            points.forEach(point => {
                // Move
                point.x += point.vx
                point.y += point.vy

                // Bounce off walls
                if (point.x < 0 || point.x > width) point.vx *= -1
                if (point.y < 0 || point.y > height) point.vy *= -1

                // Mouse interaction (repel)
                const dx = mouse.x - point.x
                const dy = mouse.y - point.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (dist < MOUSE_DISTANCE) {
                    const angle = Math.atan2(dy, dx)
                    const force = (MOUSE_DISTANCE - dist) / MOUSE_DISTANCE
                    point.x -= Math.cos(angle) * force * 2
                    point.y -= Math.sin(angle) * force * 2
                }

                // Draw point (Cube-like square)
                ctx.fillStyle = `rgba(${ACCENT_COLOR}, 0.8)`
                ctx.shadowBlur = 10
                ctx.shadowColor = `rgba(${ACCENT_COLOR}, 0.5)`
                const size = 4
                ctx.fillRect(point.x - size / 2, point.y - size / 2, size, size)
                ctx.shadowBlur = 0
            })

            // Draw connections
            points.forEach((p1, i) => {
                points.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < CONNECTION_DISTANCE) {
                        const opacity = 1 - (dist / CONNECTION_DISTANCE)
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `rgba(${ACCENT_COLOR}, ${opacity * 0.4})`
                        ctx.lineWidth = 1
                        ctx.stroke()

                        // "Data packet" animation
                        const time = Date.now() * 0.002
                        const packetPos = (time + (i * 10)) % 1 // 0 to 1
                        const px = p1.x + (p2.x - p1.x) * packetPos
                        const py = p1.y + (p2.y - p1.y) * packetPos

                        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
                        ctx.fillRect(px - 1.5, py - 1.5, 3, 3)
                    }
                })
            })

            requestAnimationFrame(animate)
        }

        const animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', handleResize)
            canvas.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full bg-[#0b1220]"
        />
    )
}
