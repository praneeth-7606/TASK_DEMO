import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Oodl - Memory Infrastructure for Agents",
    description: "A unified system that captures, structures, and retrieves everything your apps, agents, and users do.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={clsx(inter.variable, "font-sans bg-bg text-text antialiased selection:bg-accent selection:text-bg")}>
                {children}
            </body>
        </html>
    );
}
