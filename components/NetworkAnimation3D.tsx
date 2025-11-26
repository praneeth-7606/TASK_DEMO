// FILE: components/NetworkAnimation3D.tsx
'use client'

import { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, Line, OrbitControls, Effects } from '@react-three/drei'
import * as THREE from 'three'
import { UnrealBloomPass } from 'three-stdlib'
import { extend } from '@react-three/fiber'

extend({ UnrealBloomPass })

const COUNT = 40
const CONNECTION_DIST = 3
const SPEED = 0.2

function Nodes({ temp = new THREE.Object3D() }) {
    const [hovered, setHover] = useState<number | null>(null)

    // Generate random positions and velocities
    const [data] = useState(() => {
        return Array.from({ length: COUNT }, () => ({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            ),
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * SPEED,
                (Math.random() - 0.5) * SPEED,
                (Math.random() - 0.5) * SPEED
            )
        }))
    })

    const lines = useMemo(() => {
        return new Array(COUNT * COUNT).fill(0).map(() => ({
            start: new THREE.Vector3(),
            end: new THREE.Vector3(),
            visible: false,
            key: Math.random()
        }))
    }, [])

    const lineRef = useRef<any>(null)
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state, delta) => {
        // Update positions
        data.forEach((point) => {
            point.position.add(point.velocity.clone().multiplyScalar(delta))

            // Bounce off walls (imaginary box of size 12)
            if (Math.abs(point.position.x) > 6) point.velocity.x *= -1
            if (Math.abs(point.position.y) > 6) point.velocity.y *= -1
            if (Math.abs(point.position.z) > 6) point.velocity.z *= -1
        })

        // Update lines
        let lineIndex = 0
        // Reset lines (conceptually - we can't easily dynamic add/remove in R3F efficiently without overhead, 
        // so we might just draw a subset or use a custom line shader, but for <50 nodes, simple checks are fine)

        // We'll use a simple approach: update the Instance positions and calculate connections for a separate Line component
        // Actually, drawing dynamic lines in R3F can be heavy if creating new components. 
        // Let's use a single geometry for lines if possible, or just render "active" connections.
        // For simplicity and "exact" look, we'll render lines as separate components but only the active ones.
        // Optimization: Only calculate connections for the first N closest to avoid N^2 checks every frame if count is high.
        // With 40 nodes, 1600 checks is trivial.
    })

    // We need a way to pass updated positions to the Instances and Lines.
    // Using a ref-based approach for the instances.
    return (
        <group ref={groupRef}>
            <Instances range={COUNT}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial
                    color="#00e6d3"
                    emissive="#00e6d3"
                    emissiveIntensity={2}
                    toneMapped={false}
                />
                {data.map((point, i) => (
                    <Node
                        key={i}
                        point={point}
                        allPoints={data}
                        index={i}
                    />
                ))}
            </Instances>
        </group>
    )
}

function Node({ point, allPoints, index }: { point: any, allPoints: any[], index: number }) {
    const ref = useRef<THREE.Group>(null)
    const [connections, setConnections] = useState<THREE.Vector3[]>([])

    useFrame((state, delta) => {
        if (ref.current) {
            // Update position from the shared data which is being updated in parent? 
            // Actually, better to update here or have a manager. 
            // Let's update local state from the point object which is mutable.
            ref.current.position.copy(point.position)

            // Find neighbors
            const newConnections: THREE.Vector3[] = []
            allPoints.forEach((other, i) => {
                if (i <= index) return // Avoid duplicates
                const dist = point.position.distanceTo(other.position)
                if (dist < CONNECTION_DIST) {
                    newConnections.push(other.position)
                }
            })
            setConnections(newConnections)
        }
    })

    return (
        <group ref={ref}>
            <Instance />
            {connections.map((target, i) => (
                <Line
                    key={i}
                    points={[new THREE.Vector3(0, 0, 0), target.clone().sub(point.position)]} // Local space
                    color="#00e6d3"
                    transparent
                    opacity={0.3}
                    lineWidth={1}
                />
            ))}
        </group>
    )
}

function Scene() {
    return (
        <>
            <Nodes />
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.5}
                enablePan={false}
            />
            <Effects disableGamma>
                {/* @ts-ignore */}
                <unrealBloomPass threshold={0} strength={1.5} radius={0.5} />
            </Effects>
        </>
    )
}

export default function NetworkAnimation3D() {
    return (
        <div className="w-full h-full bg-[#0b1220]">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <color attach="background" args={['#0b1220']} />
                <Scene />
            </Canvas>
        </div>
    )
}
