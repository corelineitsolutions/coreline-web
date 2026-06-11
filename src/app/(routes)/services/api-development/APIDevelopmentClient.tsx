"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Shield, Network, FileJson } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: FileJson,
        title: "RESTful APIs",
        description: "Clean, well-documented REST APIs following industry best practices"
    },
    {
        icon: Network,
        title: "GraphQL",
        description: "Flexible GraphQL APIs for efficient data fetching and mutations"
    },
    {
        icon: Zap,
        title: "Real-time Data",
        description: "WebSocket and Server-Sent Events for live data streams"
    },
    {
        icon: Shield,
        title: "Secure Authentication",
        description: "OAuth2, JWT, API keys, and rate limiting for security"
    }
];

const technologies = [
    "Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Redis",
    "Docker", "Swagger", "Postman", "JWT", "OAuth2", "WebSockets"
];

const benefits = [
    "RESTful and GraphQL API design",
    "Comprehensive API documentation",
    "Authentication and authorization",
    "Rate limiting and throttling",
    "Microservices architecture",
    "API versioning strategies",
    "Automated testing and monitoring",
    "Third-party API integrations"
];

export function APIDevelopmentClient() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="API Development"
                title="Powerful & Scalable APIs"
                highlight="Seamless Integration"
                description="Build robust RESTful and GraphQL APIs that power your applications and enable seamless integrations."
                gradient="from-cyan-600 via-blue-600 to-indigo-600"
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
                                Why Choose Our <span className="text-gradient">API Development</span>?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                We design and build APIs that are fast, secure, and easy to integrate. Whether you need
                                a simple REST API or a complex microservices architecture, we've got you covered.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our APIs are built with scalability, performance, and security in mind, following
                                industry standards and best practices.
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
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
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
                            API Technologies & <span className="text-gradient">Tools</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Modern tools and frameworks for building world-class APIs
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
                                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
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
                                Professional API development services that power your applications
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
                                    <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
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
                        className="relative bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Need a Custom API?
                            </h2>
                            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                                Let's build a powerful API that connects your systems seamlessly
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-cyan-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/contact">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white/30 bg-white/10 hover:bg-white/20" asChild>
                                    <Link href="/portfolio">
                                        View Examples
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
