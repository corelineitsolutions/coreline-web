"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
    badge?: string;
    title: string;
    highlight: string;
    description: string;
    gradient?: string;
    children?: ReactNode;
}

export function PageHero({
    badge = "Welcome",
    title,
    highlight,
    description,
    gradient = "from-blue-600 to-cyan-600",
    children
}: PageHeroProps) {
    return (
        <section className="relative overflow-hidden bg-slate-900 text-white pt-32 pb-20 md:pt-48 md:pb-32">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                        <span className="text-sm font-semibold">{badge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        {title} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
                            {highlight}
                        </span>
                    </h1>

                    <p className="text-xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
                        {description}
                    </p>

                    {children}
                </motion.div>
            </div>
        </section>
    );
}
