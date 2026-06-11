"use client";

import { motion } from "framer-motion";

export function TrustSection() {
    const brands = [
        "Janvhi Travel", "Pawna Net Campaign", "ResearchPath", "Vision Solution", "Master Mind Election"
    ];

    return (
        <section className="py-12 bg-[#0b1120] border-y border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
                <p className="text-xl font-bold text-orange-400 dark:text-blue-400 uppercase tracking-widest mb-8">
                    Trusted by Leading Clients
                </p>

                <div className="flex overflow-hidden relative">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b1120] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b1120] to-transparent z-10" />

                    <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <span
                                key={i}
                                className="text-xl md:text-2xl font-bold text-slate-400 dark:text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 cursor-default transition-all duration-300 transform hover:scale-105"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
