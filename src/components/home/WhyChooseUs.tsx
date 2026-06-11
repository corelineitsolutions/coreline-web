"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Layers, Code2, Headphones, TrendingUp } from "lucide-react";

const features = [
    {
        title: "Modern Technologies",
        description: "We use the latest frameworks like Next.js and React to build future-proof applications.",
        icon: Code2,
    },
    {
        title: "Fast Delivery",
        description: "Our agile development process ensures quick turnaround times without compromising quality.",
        icon: Zap,
    },
    {
        title: "Scalable Architecture",
        description: "Systems designed to grow with your business, handling millions of users effortlessly.",
        icon: Layers,
    },
    {
        title: "Secure Applications",
        description: "Security is built-in from the ground up, protecting your data and your users.",
        icon: Shield,
    },
    {
        title: "Clean Code",
        description: "Maintainable, well-documented code that is easy to extend and manage.",
        icon: TrendingUp,
    },
    {
        title: "Long-term Support",
        description: "We don't just build and leave. We provide ongoing support and maintenance.",
        icon: Headphones,
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-20 md:py-32 bg-[#0b1120] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm font-medium border border-blue-500/20"
                    >
                        Why Choose Us
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        We deliver excellence
                    </motion.h2>
                    <p className="text-slate-400 text-lg">
                        Partner with a team that cares about your success as much as you do.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#111827] border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-900/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
