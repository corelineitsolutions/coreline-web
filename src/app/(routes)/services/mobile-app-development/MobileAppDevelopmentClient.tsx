"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Smartphone, Cloud, Code, Wifi } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Smartphone,
        title: "Native Performance",
        description: "Build fast, smooth apps that feel truly native on iOS and Android"
    },
    {
        icon: Code,
        title: "Cross-Platform",
        description: "Write once, deploy everywhere with React Native or Flutter"
    },
    {
        icon: Cloud,
        title: "Cloud Integration",
        description: "Seamlessly integrate with backend services and APIs"
    },
    {
        icon: Wifi,
        title: "Offline Support",
        description: "Apps that work even without internet connection"
    }
];

const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify",
    "Redux", "MobX", "GraphQL", "REST APIs", "Push Notifications", "SQLite"
];

const benefits = [
    "Native iOS and Android development",
    "Cross-platform solutions for faster deployment",
    "Intuitive and beautiful UI/UX design",
    "Real-time features and notifications",
    "App Store and Play Store submission",
    "In-app purchases and subscriptions",
    "Analytics and crash reporting",
    "Continuous updates and maintenance"
];

import { ServiceSchema } from "@/components/ServiceSchema";

export function MobileAppDevelopmentClient() {
    return (
        <div className="min-h-screen">
            <ServiceSchema
                name="Mobile App Development Services"
                description="Custom mobile app development for iOS and Android using React Native, Flutter, Swift, and Kotlin. We build premium, high-performance mobile solutions."
                url="https://corelineitsolutions.com/services/mobile-app-development"
                serviceType="Mobile Application Development"
            />
            <PageHero
                badge="Mobile App Development"
                title="Native & Cross-Platform"
                highlight="Mobile Solutions"
                description="Create powerful mobile experiences for iOS and Android that users love and businesses rely on."
                gradient="from-purple-600 via-pink-600 to-rose-600"
            />

            {/* Overview */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Why Choose Our <span className="text-gradient">Mobile App</span> Services?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                We develop high-quality mobile applications for iOS and Android platforms.
                                Whether you need a native app or a cross-platform solution, we deliver exceptional results.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our expertise in React Native, Flutter, Swift, and Kotlin allows us to create apps
                                that are fast, reliable, and provide an outstanding user experience.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Technologies We <span className="text-gradient">Use</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Modern frameworks and tools for building exceptional mobile apps
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                What You <span className="text-gradient">Get</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                                Complete mobile app development services from concept to launch
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>
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
                        className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Build Your Mobile App?
                            </h2>
                            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                Let's create an amazing mobile experience for your users
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/contact">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white/30 bg-white/10 hover:bg-white/20" asChild>
                                    <Link href="/portfolio">
                                        View Our Apps
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
