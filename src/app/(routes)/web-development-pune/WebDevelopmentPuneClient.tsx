"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Code, Layers, Smartphone, Search } from "lucide-react";
import Link from "next/link";

export function WebDevelopmentPuneClient() {
    return (
        <div className="min-h-screen">
            <PageHero
                badge="Top Web Development Company in Kharadi"
                title="Web Development Company"
                highlight="in Pune & Kharadi"
                description="Elevate your business with the best web development company in Pune. We deliver high-performance React.js and Next.js solutions."
                gradient="from-blue-600 via-cyan-600 to-blue-700"
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
                                Professional <span className="text-gradient">Web Development in Pune</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Coreline IT Solutions is the leading <span className="font-semibold text-slate-900 dark:text-white">web development company in Kharadi</span>.
                                We specialize in <span className="font-semibold text-slate-900 dark:text-white">custom web development company in Pune</span>,
                                building responsive and SEO-friendly websites that convert.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                As a premier <span className="font-semibold text-slate-900 dark:text-white">React JS development company in Pune</span> and
                                <span className="font-semibold text-slate-900 dark:text-white">Next.js development company in Pune</span>,
                                we leverage the <span className="font-semibold text-slate-900 dark:text-white">MERN stack development company in Pune</span> expertise
                                to create modern digital experiences.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: Code, text: "React JS Experts" },
                                { icon: Layers, text: "Next.js Solutions" },
                                { icon: Smartphone, text: "Responsive Design" },
                                { icon: Search, text: "SEO Optimized" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex flex-col items-center text-center gap-3">
                                    <item.icon className="w-8 h-8 text-blue-600" />
                                    <span className="font-bold text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Our <span className="text-gradient">Web Services</span> in Pune</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Custom Web Apps",
                                desc: "Leading custom web development company in Pune for enterprise and startups.",
                                features: ["Next.js & React", "High Performance", "Mobile First"]
                            },
                            {
                                title: "E-Commerce",
                                desc: "Best web development company in Kharadi for online stores and digital retail.",
                                features: ["Scalable Architecture", "Payment Gateway", "Secure Checkout"]
                            },
                            {
                                title: "MVP for Startups",
                                desc: "MERN stack development company in Pune helping startups launch faster.",
                                features: ["Agile Process", "Fast Deployment", "Scalable Tech"]
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">{item.desc}</p>
                                <ul className="space-y-2">
                                    {item.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Work with the Best <br /> <span className="text-gradient">Web Development Company in Kharadi</span></h2>
                    <p className="text-xl text-slate-600 mb-10">Get a free consultation for your web project in Pune today.</p>
                    <Button size="lg" className="h-14 px-10 text-lg" asChild>
                        <Link href="/contact">Start Your Project <ArrowRight className="ml-2" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
