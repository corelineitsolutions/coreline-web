"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "Do you work with startups?",
        answer: "Yes, we specialize in helping startups build their MVP and scale their products. We understand the unique challenges startups face and offer flexible engagement models.",
    },
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex SaaS platform could take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
        question: "How do you handle maintenance and support?",
        answer: "We offer ongoing maintenance and support packages to ensure your software remains secure and up-to-date. This includes regular security patches, performance monitoring, and bug fixes.",
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We primarily work with the JavaScript ecosystem, including React, Next.js, Node.js, and TypeScript. We also have expertise in cloud platforms like AWS and Vercel, and databases like PostgreSQL and MongoDB.",
    },
    {
        question: "Can you take over an existing project?",
        answer: "Absolutely. We can audit your existing codebase, refactor legacy code, and add new features. We ensure smooth transition and documentation."
    }
];

export function CombinedFAQCTA() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: FAQ */}
                    <div className="space-y-8">
                        <div className="text-left">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                            >
                                Frequently Asked <span className="text-gradient">Questions</span>
                            </motion.h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Find answers to common questions about our services and process.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 bg-white dark:bg-slate-900 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-blue-200 dark:data-[state=open]:border-blue-900 transition-all">
                                        <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:no-underline py-6">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 dark:text-slate-400 text-base leading-relaxed pb-6">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </motion.div>
                    </div>

                    {/* Right Column: CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden text-white text-center lg:text-left">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />

                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 relative z-10">
                                Ready to Build Your Next Project?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 relative z-10 leading-relaxed">
                                Let&apos;s discuss how we can help you build scalable, secure, and high-performance software solutions tailored to your needs.
                            </p>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-white/90 font-bold h-14 px-8 text-base shadow-xl" asChild>
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                        Get Free Consultation <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="w-full h-14 px-8 text-base text-white border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:border-white/50" asChild>
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                        Contact Us <Mail className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
