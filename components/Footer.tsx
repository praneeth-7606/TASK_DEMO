import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 bg-[#050a10] border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-10">
                    All you have to do is… <span className="text-accent">contact us!</span>
                </h4>

                <ul className="flex justify-center gap-8 mb-16">
                    {[
                        { icon: Twitter, href: "#" },
                        { icon: Facebook, href: "#" },
                        { icon: Instagram, href: "#" },
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                    ].map((item, i) => (
                        <li key={i}>
                            <a
                                href={item.href}
                                className="text-muted hover:text-white transition-all hover:-translate-y-1 inline-block"
                            >
                                <item.icon size={24} />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-sm text-muted">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-bg font-bold text-xs">
                            O
                        </div>
                        <span>© {new Date().getFullYear()} Oodl — Memory for Agents</span>
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
