"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Cpu, Box, Rocket } from "lucide-react";
import Link from "next/link";

export function CustomSoftwarePuneClient() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="Premium Custom Software Pune"
                title="Custom Software Development"
                highlight="Services Pune"
                description="The best custom software development company in Pune. We build enterprise software and SaaS solutions tailored to your unique needs."
                gradient="from-purple-700 via-indigo-700 to-blue-700"
            />

            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Professional <span className="text-gradient">Custom Software Development Pune</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Coreline IT Solutions is the <span className="font-semibold text-slate-900 dark:text-white">best custom software development company in Pune</span>.
                                We offer end-to-end <span className="font-semibold text-slate-900 dark:text-white">custom software development services Pune</span>
                                for businesses looking to scale with efficiency.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                From being an <span className="font-semibold text-slate-900 dark:text-white">enterprise software development company Pune</span>
                                to a leading <span className="font-semibold text-slate-900 dark:text-white">SaaS development company Pune</span>,
                                we specialize in <span className="font-semibold text-slate-900 dark:text-white">software development company for startups Pune</span>.
                            </p>
                        </motion.div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
                            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Custom software company in Pune Maharashtra based.",
                                    "MVP development company Pune for fast launches.",
                                    "Affordable software development company in Pune.",
                                    "Hire software developers in Pune India today."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Box, title: "Custom ERP/CRM", desc: "Tailored enterprise software development company Pune services." },
                            { icon: Rocket, title: "SaaS Launch", desc: "Scalable SaaS development company Pune expertise." },
                            { icon: Cpu, title: "Automation", desc: "Intelligent software development services in Kharadi Pune." },
                            { icon: Shield, title: "Secure", desc: "Best custom software development company in Pune India." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Build Your MVP with the <br /> <span className="text-gradient">MVP Development Company Pune</span></h2>
                    <p className="text-xl text-slate-600 mb-10">Software development company in Kharadi Pune India ready to scale your vision.</p>
                    <Button size="lg" className="h-14 px-10 text-lg" asChild>
                        <Link href="/contact">Book Free MVP Strategy <ArrowRight className="ml-2" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
