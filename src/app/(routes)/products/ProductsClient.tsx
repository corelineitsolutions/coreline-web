"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
    {
        title: "Design 11/23",
        description: "Create designs for your business, politics, and personal moments. Make reels and add your name, photo, and details directly on the design.",
        features: ["Business Designs", "Political Designs", "Personal Designs", "Reels with Your Name"],
        gradient: "from-orange-500 to-purple-600",
        image: "/design-image.jpeg",
        imageAlt: "Design 11/23 App",
        href: "/products/design-11-23",
    },
    {
        title: "Election Software",
        description: "Search voters instantly, run surveys, apply multi-filters by booth, caste, and area — then export everything to Excel and PDF.",
        features: ["Voter Search", "Survey Management", "Multi-Filter", "Excel & PDF Export"],
        gradient: "from-blue-500 to-indigo-600",
        image: "/election-software.jpeg",
        imageAlt: "Master Mind Election Software",
        href: "/products/election-software",
    },
    {
        title: "Cricket Master Line AI",
        description: "AI-driven live cricket score application that delivers real-time match analysis, dynamic odds, ball-by-ball insights, and deep statistical breakdowns.",
        features: ["AI Match Analysis", "Live Ball-by-Ball Score", "Win Probability & Odds", "Deep Player Statistics"],
        gradient: "from-rose-600 via-red-500 to-amber-600",
        image: "/cricket-master-line-ai.png",
        imageAlt: "Cricket Master Line AI",
        href: "/products/cricket-master-line-ai",
    },
];

export function ProductsClient() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px]"></div>

                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-sm">
                            <span className="text-violet-200 text-sm font-semibold">Our Products</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Powerful Apps <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400">
                                Built by Coreline
                            </span>
                        </h1>

                        <p className="text-xl text-violet-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            From creative design suites and voter management systems to AI-powered live cricket analytics — built for real-world performance
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                <Link href={product.href} className="block h-full">
                                    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 h-full cursor-pointer bg-white dark:bg-slate-900">
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                        ></div>

                                        {/* Product Image */}
                                        <div className="relative h-56 md:h-64 overflow-hidden bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-6">
                                            <Image
                                                src={product.image}
                                                alt={product.imageAlt}
                                                width={400}
                                                height={250}
                                                className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="relative p-8 flex flex-col">
                                            <h3 className={`text-3xl font-bold mb-4 text-slate-900 dark:text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${product.gradient}`}>
                                                {product.title}
                                            </h3>

                                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                                                {product.description}
                                            </p>

                                            <div className="grid grid-cols-2 gap-3 mb-6">
                                                {product.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                                                <span className={`inline-flex items-center gap-2 text-base font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                                                    Explore Product <ArrowRight className="w-5 h-5" style={{ color: 'currentColor' }} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Need a Custom Solution?
                            </h2>
                            <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
                                Our team can tailor Design 11/23 or Election Software to fit your exact requirements
                            </p>
                            <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                <Link href="/contact">
                                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
