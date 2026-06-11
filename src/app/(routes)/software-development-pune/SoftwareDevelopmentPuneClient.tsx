"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, MapPin, Zap, Shield } from "lucide-react";
import Link from "next/link";

export function SoftwareDevelopmentPuneClient() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="Best IT Company in Kharadi Pune"
                title="Software Development Company"
                highlight="in Pune, India"
                description="Coreline IT Solutions is the premier custom software development company in Pune, specializing in building high-performance solutions for startups and enterprises."
                gradient="from-blue-700 via-indigo-700 to-violet-700"
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
                                Leading <span className="text-gradient">Software Company in Pune</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Looking for a reliable <span className="font-semibold text-slate-900 dark:text-white">IT company in Kharadi Pune</span>?
                                Coreline IT Solutions provides world-class <span className="font-semibold text-slate-900 dark:text-white">software development services in Kharadi Pune</span>
                                tailored to your business needs.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                We are recognized as one of the <span className="font-semibold text-slate-900 dark:text-white">best IT company in Kharadi Pune</span>,
                                delivering excellence in <span className="font-semibold text-slate-900 dark:text-white">custom software company in Pune Maharashtra</span>.
                                Our expert <span className="font-semibold text-slate-900 dark:text-white">software developers in Pune India</span> are ready to scale your project.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="bg-blue-600 text-white" asChild>
                                    <Link href="/contact">Book Free Consultation</Link>
                                </Button>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Building2, title: "Kharadi HQ", desc: "Top IT company near Kharadi Pune." },
                                { icon: MapPin, title: "Local Expertise", desc: "Software solutions company in Pune." },
                                { icon: Zap, title: "Fast Delivery", desc: "Affordable software development company in Pune." },
                                { icon: Shield, title: "Enterprise Security", desc: "Secure software company for startups in Pune." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                                    <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                                    <h3 className="font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Keyword Sections */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert <span className="text-gradient">Software Developers</span> in Pune</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Offering the best custom software development company in Pune experience for global clients and ambitious startups.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Custom Solutions</h3>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                <li>• Specialized software company in Pune</li>
                                <li>• Custom software development Pune</li>
                                <li>• Software development company for startups Pune</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Local SEO Focus</h3>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                <li>• Software company in Kharadi Pune</li>
                                <li>• Web development company in Kharadi</li>
                                <li>• Best IT company in Kharadi Pune</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Business Results</h3>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                <li>• Hire software developers in Pune India</li>
                                <li>• MVP development company Pune</li>
                                <li>• IT services company in Pune</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Ready to grow with the best <span className="text-gradient">IT Company in Kharadi</span>?</h2>
                    <Button size="lg" className="h-14 px-10 text-lg" asChild>
                        <Link href="/contact">Contact Our Pune Team <ArrowRight className="ml-2" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
