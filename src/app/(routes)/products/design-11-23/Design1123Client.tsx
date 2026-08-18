"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Briefcase, Landmark, User, Clapperboard } from "lucide-react";
import Link from "next/link";

const designCategories = [
    {
        icon: Briefcase,
        title: "Business Designs",
        description: "Create professional posters, banners, and social posts for your business — logos, offers, and brand promotions in minutes."
    },
    {
        icon: Landmark,
        title: "Political Designs",
        description: "Design election creatives, rally posters, campaign banners, and political social media graphics for your party or candidate."
    },
    {
        icon: User,
        title: "Personal Designs",
        description: "Make birthday wishes, anniversary posts, festival greetings, and personal celebration creatives with your own touch."
    },
    {
        icon: Clapperboard,
        title: "Reels & Video Creatives",
        description: "Create reel templates and video-style designs — add your name, photo, and custom text directly on the design."
    }
];

const capabilities = [
    "Business poster and banner designs",
    "Political campaign and election creatives",
    "Personal birthday & festival greetings",
    "Reel designs with your name & photo",
    "Add your name and details on any design",
    "Ready-to-use templates for every occasion",
    "Share directly to WhatsApp & social media",
    "Marathi, Hindi & English design support"
];

export function Design1123Client() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="Design 11/23"
                title="Create Designs for"
                highlight="Every Occasion"
                description="Design for your business, politics, and personal moments — plus reels where you add your name, photo, and details right on the creative."
                gradient="from-orange-600 via-fuchsia-600 to-purple-700"
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
                            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-slate-200 dark:border-slate-800">
                                <Image
                                    src="/design-image.jpeg"
                                    alt="Design 11/23 App"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover"
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
                                What is <span className="text-gradient">Design 11/23</span>?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Design 11/23 is a mobile app that lets you create stunning designs for your business,
                                political campaigns, and personal celebrations — all from your phone.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Make reels and video-style creatives with your name, photo, and custom text added
                                directly on the design. No design skills needed — just pick a template and personalize it.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Design Categories */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            What You Can <span className="text-gradient">Design</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Business, politics, personal, and reels — all in one app
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {designCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5">
                                    <category.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{category.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{category.description}</p>
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
                                <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0" />
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
                        className="relative bg-gradient-to-r from-orange-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Start Designing Today
                            </h2>
                            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                                Create business, political, personal, and reel designs with your name — all in Design 11/23
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="https://play.google.com/store/apps/details?id=com.coreline.design1123&hl=en_IN" target="_blank" rel="noopener noreferrer">
                                        Get the App <ArrowRight className="ml-2 h-5 w-5" />
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
