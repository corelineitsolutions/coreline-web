"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        description: "A full-featured e-commerce platform with payment gateway integration, admin dashboard, and real-time inventory.",
        tech: ["Next.js", "Stripe", "Prisma"],
        link: "#",
        color: "blue"
    },
    {
        title: "Healthcare App",
        category: "Mobile App",
        description: "Telemedicine application connecting patients with doctors for video consultations and prescription management.",
        tech: ["React Native", "Node.js", "WebRTC"],
        link: "#",
        color: "emerald"
    },
    {
        title: "SaaS Analytics Dashboard",
        category: "SaaS Product",
        description: "Real-time analytics dashboard for SaaS businesses to track MRR, churn, and user engagement metrics.",
        tech: ["React", "D3.js", "Firebase"],
        link: "#",
        color: "purple"
    }
];

export function PortfolioSection() {
    return (
        <section className="py-20 md:py-32 bg-white dark:bg-slate-900" id="portfolio">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-200 dark:border-blue-800"
                        >
                            Our Work
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white"
                        >
                            Trending <span className="text-gradient">Projects</span>
                        </motion.h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Explore some of our recent work helping businesses transform their ideas into reality.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/portfolio">
                            <Button variant="outline" className="gap-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                                View All Projects <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
                        >
                            <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden group">
                                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/10 to-${project.color}-500/5`} />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={`text-${project.color}-500 font-bold text-lg opacity-50`}>{project.title}</span>
                                </div>

                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20 backdrop-blur-sm">
                                    <Button size="sm" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
                                        Live Demo <ArrowUpRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider text-${project.color}-500 mb-2 block`}>
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium border border-slate-200 dark:border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
