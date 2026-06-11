"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, Shield, Layers, Monitor } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Monitor,
        title: "Responsive Design",
        description: "Mobile-first, fully responsive websites that work flawlessly on all devices"
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "Lightning-fast load times with optimized code and modern frameworks"
    },
    {
        icon: Shield,
        title: "Security First",
        description: "Built-in security best practices to protect your data and users"
    },
    {
        icon: Layers,
        title: "Scalable Architecture",
        description: "Future-proof solutions that grow with your business needs"
    }
];

const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL",
    "Tailwind CSS", "AWS", "Vercel", "GraphQL", "REST APIs", "Redux"
];

const benefits = [
    "Custom solutions tailored to your business",
    "SEO-optimized for better search rankings",
    "Progressive Web App (PWA) capabilities",
    "Third-party integrations (Stripe, PayPal, etc.)",
    "Real-time features with WebSockets",
    "Analytics and monitoring setup",
    "Ongoing maintenance and support",
    "Performance optimization"
];

import { ServiceSchema } from "@/components/ServiceSchema";

export function WebDevelopmentClient() {
    return (
        <div className="min-h-screen">
            <ServiceSchema
                name="Web Development Services"
                description="Custom web development company in Pune. We build modern, responsive web applications using React JS, Next.js, and the MERN stack."
                url="https://corelineitsolutions.com/services/web-development"
                serviceType="Web Application Development"
            />
            <PageHero
                badge="Web Development"
                title="Custom Web Applications"
                highlight="Built for Success"
                description="Transform your vision into powerful, scalable web applications using cutting-edge technologies and best practices."
                gradient="from-blue-600 via-cyan-600 to-teal-600"
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
                                Why Choose Our <span className="text-gradient">Web Development</span> Services?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                We are a premier <span className="font-semibold text-slate-900 dark:text-white">custom web development company in Pune</span> building modern,
                                responsive web applications that deliver exceptional user experiences.
                                From simple landing pages to complex enterprise platforms, we have the expertise to bring your ideas to life.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our team specializes in <span className="font-semibold text-slate-900 dark:text-white">React JS</span>, <span className="font-semibold text-slate-900 dark:text-white">Next.js</span>,
                                and the <span className="font-semibold text-slate-900 dark:text-white">MERN stack</span> to create fast,
                                SEO-friendly, and maintainable web applications that scale with your business.
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
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
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
                            Technologies We <span className="text-gradient">Master</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            We use the latest and most reliable technologies to build your web applications
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
                                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
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
                                Comprehensive web development services designed to exceed your expectations
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
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
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
                        className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Build Your Web Application?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Let's discuss your project and create something amazing together
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/contact">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
