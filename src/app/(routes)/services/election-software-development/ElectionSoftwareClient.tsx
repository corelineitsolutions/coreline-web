"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, BarChart4, ShieldCheck, Laptop } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Users,
        title: "Voter Database Management",
        description: "Advanced booth-wise categorization. Filter and sort by caste, age, and area with Excel/PDF export capabilities."
    },
    {
        icon: Laptop,
        title: "Custom Mobile Apps",
        description: "Personalized iOS & Android apps with your party colors, branding, and offline mode for remote areas."
    },
    {
        icon: BarChart4,
        title: "Political War Room",
        description: "Real-time survey management and digital command centers for live campaign tracking and data intelligence."
    },
    {
        icon: ShieldCheck,
        title: "Booth Strategy & Analysis",
        description: "Identify weak areas, plan targeted on-ground campaigning, and maximize voter turnout with data-driven insights."
    }
];

const technologies = [
    "Booth Management", "Voter Analytics", "iOS & Android Apps", "Multi-Language Support",
    "Real-time Surveys", "War Room Setup", "Marathi / Hindi / English", "Voter ID Smart Search",
    "Encrypted Database", "Offline Data Sync", "Live Counting Updates", "Constituency Mapping"
];

const benefits = [
    "Trusted by 500+ Political Leaders across Maharashtra",
    "Complete Voter Database Management with Caste Analysis",
    "Multi-language support for diverse regional campaigns",
    "On-ground and Digital Campaign Command Center",
    "Booth-wise voter categorization and visit tracking",
    "Custom branding with party colors and leaders' logos",
    "Fastest voter search tool for political workers",
    "End-to-end Political War Room team setup services"
];

import { ServiceSchema } from "@/components/ServiceSchema";

export function ElectionSoftwareClient() {
    return (
        <div className="min-h-screen">
            <ServiceSchema
                name="Election Software Development"
                description="Best election software development company in India. We offer voter database management, political war room setup, and booth strategy solutions for candidates across Maharashtra."
                url="https://corelineitsolutions.com/election-software-development"
                serviceType="Political Technology & Election Management"
            />
            <PageHero
                badge="Election Software"
                title="Election Management"
                highlight="& Voting Solutions"
                description="Secure, reliable, and transparent election software development company in India. We build cutting-edge digital voting systems."
                gradient="from-orange-600 via-amber-600 to-yellow-600"
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
                                Why Choose Our <span className="text-gradient">Election Software</span>?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                As Maharashtra's leading election software company, we provide data-driven solutions that
                                empower political leaders with actionable insights. From precise voter analytics to
                                real-time booth management, our tools are built for the Indian political landscape.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                This specialized solution is a flagship venture of <Link href="https://www.mastermindmedias.com/" target="_blank" className="text-orange-600 font-bold hover:underline">Mastermind Medias</Link>.
                                With a track record of supporting 500+ successful campaigns, we offer the most advanced political command center technology in the region.
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
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
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
                            Secure <span className="text-gradient">Technologies</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            We use military-grade security and modern frameworks for e-voting software development services
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
                                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
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
                                Solutions for <span className="text-gradient">Success</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                                Why we are the best election software development company in India
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
                                    <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
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
                        className="relative bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Win Your Next Election?
                            </h2>
                            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                                Join hundreds of successful candidates using the most advanced voter data management app in Maharashtra.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/contact">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white/30 bg-white/10 hover:bg-white/20" asChild>
                                    <Link href="/portfolio">
                                        View Case Studies
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
