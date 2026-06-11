"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, Cloud, Palette, ShoppingCart, LineChart, Database, Cpu, Users } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Code2,
        title: "Web Development",
        description: "Custom web applications built with modern frameworks like Next.js, React, and Node.js",
        features: ["Responsive Design", "SEO Optimized", "High Performance", "Scalable Architecture"],
        gradient: "from-blue-500 to-cyan-500",
        size: "large",
        href: "/services/web-development"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android",
        features: ["React Native", "Flutter", "Native iOS/Android"],
        gradient: "from-purple-500 to-pink-500",
        size: "medium",
        href: "/services/mobile-app-development"
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and deployment",
        features: ["AWS", "Azure", "Vercel", "Docker"],
        gradient: "from-emerald-500 to-teal-500",
        size: "medium",
        href: "/services/cloud-solutions"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces that users love",
        features: ["User Research", "Wireframing", "Prototyping"],
        gradient: "from-orange-500 to-red-500",
        size: "small",
        href: "/services/uiux-design"
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description: "Complete e-commerce platforms with payment integration",
        features: ["Stripe", "PayPal", "Inventory Management"],
        gradient: "from-indigo-500 to-purple-500",
        size: "small",
        href: "/services/ecommerce"
    },
    {
        icon: LineChart,
        title: "SaaS Development",
        description: "Software as a Service solutions for businesses",
        features: ["Multi-tenancy", "Subscription Billing", "Analytics"],
        gradient: "from-pink-500 to-rose-500",
        size: "medium",
        href: "/services/saas-development"
    },
    {
        icon: Database,
        title: "API Development",
        description: "RESTful and GraphQL APIs for seamless integrations",
        features: ["REST", "GraphQL", "Microservices"],
        gradient: "from-cyan-500 to-blue-500",
        size: "small",
        href: "/services/api-development"
    },
    {
        icon: Cpu,
        title: "AI Integration",
        description: "Integrate AI and machine learning into your products",
        features: ["ChatGPT", "Image Recognition", "Automation"],
        gradient: "from-violet-500 to-purple-500",
        size: "small",
        href: "/services/ai-integration"
    },
    {
        icon: Code2,
        title: "Custom Software",
        description: "Tailored software solutions for your unique business needs",
        features: ["Tailored Solutions", "Process Automation", "Enterprise Ready"],
        gradient: "from-purple-500 to-indigo-500",
        size: "small",
        href: "/services/custom-software"
    },
    {
        icon: Users,
        title: "Election Software",
        description: "Advanced political command center and voter analytics",
        features: ["Voter Database", "Booth Strategy", "War Room Setup"],
        gradient: "from-orange-500 to-amber-500",
        size: "small",
        href: "/election-software-development"
    }
];

const process = [
    {
        step: "01",
        title: "Discovery",
        description: "We understand your business goals and technical requirements"
    },
    {
        step: "02",
        title: "Planning",
        description: "Create detailed roadmap and technical specifications"
    },
    {
        step: "03",
        title: "Development",
        description: "Agile development with regular updates and iterations"
    },
    {
        step: "04",
        title: "Launch & Support",
        description: "Deploy to production and provide ongoing maintenance"
    }
];

export function ServicesClient() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px]"></div>

                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-sm">
                            <span className="text-indigo-200 text-sm font-semibold">Our Services</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Comprehensive <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                                Digital Solutions
                            </span>
                        </h1>

                        <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            From concept to deployment, we offer end-to-end services to bring your digital vision to life
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid - Bento Style */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`
                                    ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                    ${service.size === 'medium' ? 'md:col-span-2' : ''}
                                `}
                            >
                                <Link href={service.href} className="block h-full">
                                    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full cursor-pointer">
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        ></div>

                                        <div className="relative p-8 h-full flex flex-col bg-white dark:bg-slate-900">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                <service.icon className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className={`text-2xl font-bold mb-4 text-slate-900 dark:text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.gradient}`}>
                                                {service.title}
                                            </h3>

                                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                                                {service.description}
                                            </p>

                                            <div className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                                                <span className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
                                                    Learn More <ArrowRight className="w-4 h-4" style={{ color: 'currentColor' }} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="text-gradient">Development Process</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            A proven methodology that ensures project success
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="absolute -top-4 -left-4 text-8xl font-bold text-blue-500/10 dark:text-blue-400/10">
                                    {item.step}
                                </div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                                Let&apos;s discuss how we can help bring your vision to life
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/contact">
                                        Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
