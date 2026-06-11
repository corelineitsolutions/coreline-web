"use client";

import { motion } from "framer-motion";

const technologies = [
    { category: "Frontend", tools: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux"] },
    { category: "Backend", tools: ["Node.js", "Express", "Python", "Go", "GraphQL"] },
    { category: "Database", tools: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"] },
    { category: "Cloud & DevOps", tools: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"] },
];

export function TechStack() {
    return (
        <section className="py-20 md:py-32 bg-[#0b1120] border-y border-slate-200 dark:border-slate-800">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-200 dark:border-blue-800"
                    >
                        Tech Stack
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white dark:text-white"
                    >
                        Built with <span className="text-gradient">Modern Technologies</span>
                    </motion.h2>
                    <p className="text-white dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        We use the latest tools and frameworks to ensure your application is fast, secure, and scalable.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-700">{tech.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {tech.tools.map((tool, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-blue-500/20 transition-colors"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
