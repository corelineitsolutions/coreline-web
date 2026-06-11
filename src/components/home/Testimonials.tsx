"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "John Doe",
        company: "TechStart Inc.",
        feedback: "Coreline IT Solutions transformed our idea into a fully functional product in record time. exceptional service!",
        image: "/placeholder-user.jpg"
    },
    {
        name: "Sarah Smith",
        company: "Creative Designs",
        feedback: "The team is highly professional and skilled. They understood our requirements perfectly and delivered a stunning website.",
        image: "/placeholder-user-2.jpg"
    },
    {
        name: "Michael Johnson",
        company: "Growth SaaS",
        feedback: "Their expertise in Next.js and React helped us build a scalable platform that our customers love.",
        image: "/placeholder-user-3.jpg"
    }
];

export function Testimonials() {
    return (
        <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        What our <span className="text-gradient">clients say</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 relative flex flex-col shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/20">
                                <Quote className="h-12 w-12" />
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 italic flex-grow relative z-10 leading-relaxed">
                                &quot;{testimonial.feedback}&quot;
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-lg font-bold text-blue-600 dark:text-blue-400">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-xs font-medium text-blue-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
