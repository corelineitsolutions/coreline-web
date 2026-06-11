"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, CreditCard, BarChart3, Lock } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Users,
        title: "Multi-Tenancy",
        description: "Secure, isolated environments for each customer with shared infrastructure"
    },
    {
        icon: CreditCard,
        title: "Subscription Billing",
        description: "Integrated payment processing with Stripe for recurring revenue"
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description: "Built-in dashboards and insights to track usage and performance"
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        description: "Role-based access control, SSO, and compliance-ready architecture"
    }
];

const technologies = [
    "Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Stripe",
    "Auth0", "AWS", "Vercel", "GraphQL", "Prisma", "WebSockets"
];

const benefits = [
    "Multi-tenant architecture from day one",
    "Subscription and billing management",
    "User authentication and authorization",
    "Admin dashboard and analytics",
    "API for third-party integrations",
    "Automated email notifications",
    "Usage tracking and metering",
    "Compliance and data security (GDPR, SOC 2)"
];

export function SaaSDevelopmentClient() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="SaaS Development"
                title="Software as a Service Platforms"
                highlight="Subscription Ready"
                description="Build scalable, multi-tenant SaaS applications with integrated billing, analytics, and enterprise-grade security."
                gradient="from-pink-600 via-rose-600 to-red-600"
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
                                Why Choose Our <span className="text-gradient">SaaS Development</span>?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                We build complete SaaS platforms with all the features you need to launch and scale
                                your subscription-based business successfully.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                From user management and billing to analytics and integrations, we handle the complex
                                infrastructure so you can focus on your core product.
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
                                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
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
                            SaaS Tech <span className="text-gradient">Stack</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Proven technologies for building successful SaaS products
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
                                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400 transition-all"
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
                                Everything you need to launch and grow your SaaS business
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
                                    <CheckCircle2 className="w-6 h-6 text-pink-600 dark:text-pink-400 shrink-0 mt-0.5" />
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
                        className="relative bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Build Your SaaS?
                            </h2>
                            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                                Let's turn your SaaS idea into a profitable, scalable business
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
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
