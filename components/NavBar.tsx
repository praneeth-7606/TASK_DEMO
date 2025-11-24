"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import RequestDemoModal from "./RequestDemoModal";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./ui/Magnetic";

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [lang, setLang] = useState<"en" | "ja">("en");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "WORKS", href: "#features" },
        { name: "SERVICES", href: "#how-it-works" },
        { name: "CULTURE", href: "#docs" },
        { name: "CAREERS", href: "#careers" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
                    isScrolled
                        ? "h-16 bg-bg/90 backdrop-blur-md border-b border-white/5 shadow-lg"
                        : "h-24 bg-transparent border-transparent"
                )}
            >
                <div className="container mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-bg font-bold text-xl shadow-[0_0_15px_rgba(0,230,211,0.3)] group-hover:shadow-[0_0_25px_rgba(0,230,211,0.5)] transition-shadow">
                            O
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Oodl
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Magnetic key={link.name} strength={15}>
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium tracking-widest text-muted hover:text-accent transition-colors relative group py-2 px-2 block"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </Magnetic>
                        ))}
                    </nav>

                    {/* Right Side: Lang & CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Language Toggle */}
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <button
                                onClick={() => setLang("ja")}
                                className={clsx(
                                    "transition-colors hover:text-accent relative",
                                    lang === "ja" ? "text-white" : "text-muted"
                                )}
                            >
                                JA
                                {lang === "ja" && (
                                    <motion.div
                                        layoutId="lang-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                    />
                                )}
                            </button>
                            <span className="text-muted/50">|</span>
                            <button
                                onClick={() => setLang("en")}
                                className={clsx(
                                    "transition-colors hover:text-accent relative",
                                    lang === "en" ? "text-white" : "text-muted"
                                )}
                            >
                                EN
                                {lang === "en" && (
                                    <motion.div
                                        layoutId="lang-underline"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                    />
                                )}
                            </button>
                        </div>

                        <Magnetic>
                            <button
                                onClick={() => setIsDemoModalOpen(true)}
                                className="px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-accent/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                            >
                                Get a demo
                            </button>
                        </Magnetic>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2 relative z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-40 w-[300px] bg-bg border-l border-white/10 shadow-2xl md:hidden flex flex-col pt-24 px-8"
                        >
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-2xl font-bold tracking-widest text-muted hover:text-white hover:translate-x-2 transition-all inline-block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-8 pt-8 border-t border-white/10"
                                >
                                    <button
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsDemoModalOpen(true);
                                        }}
                                        className="w-full px-6 py-4 rounded-xl bg-accent text-bg font-bold text-lg hover:bg-accent-2 transition-colors"
                                    >
                                        Get a demo
                                    </button>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <RequestDemoModal
                isOpen={isDemoModalOpen}
                onClose={() => setIsDemoModalOpen(false)}
            />
        </>
    );
}
