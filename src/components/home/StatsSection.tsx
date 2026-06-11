"use client";

import { motion } from "framer-motion";
import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const stats = [
    {
        icon: Briefcase,
        value: "150+",
        label: "Projects Completed",
        color: "text-blue-500"
    },
    {
        icon: Users,
        value: "50+",
        label: "Happy Clients",
        color: "text-purple-500"
    },
    {
        icon: Award,
        value: "98%",
        label: "Client Satisfaction",
        color: "text-emerald-500"
    },
    {
        icon: TrendingUp,
        value: "5+",
        label: "Years Experience",
        color: "text-orange-500"
    },
];

export function StatsSection() {
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-full bg-opacity-10 flex items-center justify-center mb-4 ${stat.color.replace('text-', 'bg-')}/10`}>
                                <stat.icon className={`h-7 w-7 ${stat.color}`} />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold mb-2 text-slate-900 dark:text-white">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
