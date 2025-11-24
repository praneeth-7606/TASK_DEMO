"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { createNoise3D } from "simplex-noise";

function Sphere(props: any) {
    const ref = useRef<THREE.Points>(null!);
    const noise3D = useMemo(() => createNoise3D(), []);

    // Mouse position tracking
    const mouse = useRef(new THREE.Vector2());

    // Update mouse position
    useFrame((state) => {
        mouse.current.lerp(state.pointer, 0.1);
    });

    const { positions, colors, originalPositions } = useMemo(() => {
        const count = 6000; // Increased count for denser look
        const positions = new Float32Array(count * 3);
        const originalPositions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            // Spherical distribution
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            // Random point on sphere surface
            const x = Math.sin(theta) * Math.cos(phi);
            const y = Math.sin(theta) * Math.sin(phi);
            const z = Math.cos(theta);

            // Radius variation for depth
            const r = 1.5 + Math.random() * 0.5;

            positions[i * 3] = x * r;
            positions[i * 3 + 1] = y * r;
            positions[i * 3 + 2] = z * r;

            originalPositions[i * 3] = x * r;
            originalPositions[i * 3 + 1] = y * r;
            originalPositions[i * 3 + 2] = z * r;

            // Color gradient from accent to accent-2
            // Mix cyan (#00e6d3) and blue (#3bf0ff)
            if (i % 3 === 0) {
                color.set("#00e6d3"); // accent
            } else if (i % 3 === 1) {
                color.set("#3bf0ff"); // accent-2
            } else {
                color.set("#ffffff"); // white highlights
            }

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors, originalPositions };
    }, []);

    useFrame((state) => {
        const { clock } = state;
        const t = clock.getElapsedTime();

        if (ref.current) {
            // Rotate the entire sphere
            ref.current.rotation.x = t * 0.05 + mouse.current.y * 0.2;
            ref.current.rotation.y = t * 0.08 + mouse.current.x * 0.2;

            const positionsAttribute = ref.current.geometry.attributes.position;

            for (let i = 0; i < positions.length / 3; i++) {
                const x = originalPositions[i * 3];
                const y = originalPositions[i * 3 + 1];
                const z = originalPositions[i * 3 + 2];

                // Noise parameters
                const noiseScale = 0.5;
                const noiseSpeed = 0.5;

                // Calculate noise displacement
                const noise = noise3D(
                    x * noiseScale + t * noiseSpeed,
                    y * noiseScale + t * noiseSpeed,
                    z * noiseScale + t * noiseSpeed
                );

                // Apply displacement
                const displacement = 1 + noise * 0.2;

                // Mouse interaction effect (repel/attract)
                // Simple distance check from center isn't enough for 3D mouse interaction without raycasting,
                // so we'll stick to global rotation and noise modulation for now.

                positionsAttribute.setX(i, x * displacement);
                positionsAttribute.setY(i, y * displacement);
                positionsAttribute.setZ(i, z * displacement);
            }

            positionsAttribute.needsUpdate = true;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

export default function ParticleSphere() {
    return (
        <div className="w-full h-full min-h-[500px]">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} gl={{ antialias: true, alpha: true }}>
                <Sphere />
            </Canvas>
        </div>
    );
}
