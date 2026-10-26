"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, BrainCircuit, TrendingUp, BarChart3, Radio, Shield, Sparkles, Award } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Zap,
        title: "Fastest Ball-by-Ball Line",
        description: "Ultra-low latency live updates faster than TV broadcast, delivering instant ball-by-ball scores and commentary.",
        color: "from-amber-500 to-red-500",
    },
    {
        icon: BrainCircuit,
        title: "Real-Time AI Match Analysis",
        description: "Intelligent machine learning models analyzing match momentum, tactical field setups, and live pitch dynamics.",
        color: "from-rose-500 to-purple-600",
    },
    {
        icon: TrendingUp,
        title: "Predictive Win Probability",
        description: "Dynamic algorithmic win percentages, session projections, and score forecasting that evolve with every single delivery.",
        color: "from-emerald-500 to-teal-600",
    },
    {
        icon: BarChart3,
        title: "Deep Player & Team Metrics",
        description: "Head-to-head records, batter-bowler match-ups, venue statistics, and player form index powered by comprehensive data.",
        color: "from-blue-500 to-indigo-600",
    },
];

const capabilities = [
    "Ultra-low latency ball-by-ball live scorecard",
    "Real-time AI match momentum and win predictor",
    "Session projections and dynamic score forecasting",
    "Pitch behavior, weather impact, and venue analytics",
    "Deep player form index and head-to-head matchups",
    "Real-time instant push notifications for key match moments",
    "Full coverage across Tests, ODIs, T20s, and Global Leagues",
    "Customizable enterprise and white-label integration options",
];

const stats = [
    { value: "< 1s", label: "Score Latency" },
    { value: "98.5%", label: "Model Accuracy" },
    { value: "24/7", label: "Global Coverage" },
    { value: "100K+", label: "Concurrent Scale" },
];

export function CricketMasterLineAIProductClient() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="Cricket Master Line AI"
                title="Next-Gen Cricket Intelligence"
                highlight="Powered by AI"
                description="Experience ultra-fast ball-by-ball live scoring, predictive match modeling, dynamic win odds, and deep analytical insights — engineered for modern cricket fans and analysts."
                gradient="from-rose-700 via-red-800 to-slate-900"
            />

            {/* Product Image & Overview */}
            <section className="py-20 md:py-24 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-rose-500/20 border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 flex items-center justify-center">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                                <Image
                                    src="/cricket-master-line-ai.png"
                                    alt="Cricket Master Line AI - Live Cricket Score & AI Match Analysis"
                                    width={450}
                                    height={450}
                                    className="w-full h-auto max-h-[380px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400 text-xs font-semibold">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>AI-Driven Sports Technology</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                                Transform Live Matches into <br className="hidden sm:inline" />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-red-500 to-amber-600">
                                    Predictive Intelligence
                                </span>
                            </h2>

                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                <strong>Cricket Master Line AI</strong> is an advanced sports analytics application designed to give you real-time ball-by-ball updates and deep AI-powered match analysis. Whether tracking an IPL thriller or an international Test, get insights that go beyond traditional scorecards.
                            </p>

                            <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                With sub-second latency data feeds and algorithmic predictive models, Cricket Master Line AI delivers live win probability shifts, session projections, and player battle breakdowns right to your fingertips.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-500/25 gap-2">
                                    <Link href="/contact">
                                        Request App Demo <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-slate-300 dark:border-slate-700">
                                    <Link href="/products">
                                        View All Products
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Ribbon */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40"
                            >
                                <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1 font-mono">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                            Intelligent <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-amber-600">Core Features</span>
                        </h2>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                            Engineered for high-frequency live match tracking and analytical depth
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-rose-500/10 transition-all flex flex-col group"
                            >
                                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 text-white shadow-md group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Checklist */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                                Complete Matchday Capabilities
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400">
                                Comprehensive features tailored for enthusiasts, sports analysts, and broadcast partners
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {capabilities.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-800"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                                    <span className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-rose-700 via-red-700 to-amber-700 rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden shadow-2xl shadow-rose-900/30"
                    >
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                            Ready to Power Your Cricket Experience?
                        </h2>
                        <p className="text-rose-100 max-w-2xl mx-auto mb-8 text-base md:text-lg relative z-10">
                            Get in touch with Coreline IT Solutions for custom integration, live API data streams, or a full product walkthrough of Cricket Master Line AI.
                        </p>
                        <Button asChild size="lg" className="bg-white text-rose-700 hover:bg-slate-100 shadow-xl font-bold relative z-10 gap-2">
                            <Link href="/contact">
                                Contact Our Team <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
