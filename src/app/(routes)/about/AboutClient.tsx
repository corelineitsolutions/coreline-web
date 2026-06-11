"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

const values = [
    {
        icon: Target,
        title: "Innovation First",
        description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
        color: "blue"
    },
    {
        icon: Users,
        title: "Client-Centric",
        description: "Your success is our priority. We build solutions that solve real problems.",
        color: "purple"
    },
    {
        icon: Shield,
        title: "Quality Driven",
        description: "We maintain the highest standards in code quality and security.",
        color: "emerald"
    },
    {
        icon: Zap,
        title: "Agile & Fast",
        description: "Quick iterations and rapid delivery without compromising quality.",
        color: "orange"
    }
];

const stats = [
    { value: "150+", label: "Projects" },
    { value: "50+", label: "Clients" },
    { value: "5+", label: "Years" },
    { value: "98%", label: "Satisfaction" }
];

const team = [
    {
        name: "Expert Developers",
        count: "15+",
        description: "Full-stack engineers with expertise in modern frameworks"
    },
    {
        name: "UI/UX Designers",
        count: "5+",
        description: "Creative designers crafting stunning user experiences"
    },
    {
        name: "Project Managers",
        count: "3+",
        description: "Dedicated PMs ensuring smooth project execution"
    }
];

export function AboutClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHero
                badge="About Us"
                title="Building Digital Excellence"
                highlight="One Project at a Time"
                description="We're a passionate team of developers, designers, and strategists dedicated to transforming ambitious ideas into exceptional digital products."
                gradient="from-slate-900 via-blue-900 to-indigo-900"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20"
                        >
                            <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                            <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </PageHero>

            {/* Mission & Vision */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-8 -left-8 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-blue-100 leading-relaxed text-base md:text-lg">
                                    To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting value. We bridge the gap between complex technology and business success.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -top-8 -right-8 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                            <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                    <Eye className="w-8 h-8" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
                                <p className="text-purple-100 leading-relaxed text-base md:text-lg">
                                    To become the most trusted global technology partner, recognized for excellence, innovation, and unwavering commitment to client success. We envision a future where technology empowers every business dream.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="text-gradient">Core Values</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <value.icon className={`w-7 h-7 text-blue-600 dark:text-blue-400`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Meet Our <span className="text-gradient">Talented Team</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Experts passionate about building exceptional software
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative group"
                            >
                                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                                    <div className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                                        {member.count}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let's Build Something Amazing Together
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Ready to transform your ideas into reality? Our team is here to help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/contact">
                                        Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white/30 bg-white/10 hover:bg-white/20" asChild>
                                    <Link href="/portfolio">
                                        View Our Work
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
