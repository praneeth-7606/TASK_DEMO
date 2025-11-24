"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FloatingElementProps {
    className?: string;
    depth?: number;
}

export default function FloatingElement({ className, depth = 1 }: FloatingElementProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, depth * 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, depth * 45]);

    return (
        <motion.div
            ref={ref}
            style={{ y, rotate }}
            className={className}
        />
    );
}
