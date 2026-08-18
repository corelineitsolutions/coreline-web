"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Search, ClipboardList, Filter, FileSpreadsheet } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Search,
        title: "Voter Search",
        description: "Instantly search voters by name, voter ID, booth number, area, and more with smart, lightning-fast lookup."
    },
    {
        icon: ClipboardList,
        title: "Survey Management",
        description: "Create and conduct on-ground surveys, track responses in real time, and analyze voter sentiment across booths."
    },
    {
        icon: Filter,
        title: "Multi-Filter",
        description: "Filter voters by caste, age, gender, booth, area, and other criteria to build targeted campaign lists."
    },
    {
        icon: FileSpreadsheet,
        title: "Excel & PDF Export",
        description: "Export filtered voter lists and survey reports to Excel and PDF formats for printing and field teams."
    }
];

const capabilities = [
    "Fast voter search by name and voter ID",
    "Create and manage election surveys",
    "Multi-filter by caste, age, booth & area",
    "Export data to Excel and PDF",
    "Booth-wise voter categorization",
    "Real-time survey tracking",
    "Marathi, Hindi & English support",
    "Trusted by 500+ political leaders"
];

export function ElectionSoftwareProductClient() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="Master Mind Election Software"
                title="Election Management"
                highlight="Made Simple"
                description="Search voters, run surveys, apply multi-filters, and export reports to Excel and PDF — all in one powerful election app."
                gradient="from-blue-600 via-blue-700 to-indigo-700"
            />

            {/* Product Image & Overview */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 p-8">
                                <Image
                                    src="/election-software.jpeg"
                                    alt="Master Mind Election Software"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Why Choose <span className="text-gradient">Election Software</span>?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Master Mind Election Software is built for political teams who need fast voter lookup,
                                structured surveys, and powerful filtering — with one-tap export to Excel and PDF for
                                your booth workers and war room.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                A flagship product from{" "}
                                <Link href="https://www.mastermindmedias.com/" target="_blank" className="text-blue-600 font-bold hover:underline">
                                    Mastermind Medias
                                </Link>
                                , trusted by 500+ political leaders across Maharashtra.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Key <span className="text-gradient">Features</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Everything you need to manage voters and run winning campaigns
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {capabilities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-800"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                                <span className="text-slate-700 dark:text-slate-300">{item}</span>
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
                        className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Win Your Next Election?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Get Master Mind Election Software and take control of your voter data today
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="https://play.google.com/store/apps/details?id=com.corelineitsolutions.master_mind&hl=en_IN" target="_blank" rel="noopener noreferrer">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/products">
                                        View All Products
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
