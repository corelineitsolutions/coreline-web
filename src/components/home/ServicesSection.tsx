"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database, Globe, Layout, Cloud } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web Development",
        description: "Leading web development company in Pune building high-performance websites with React and Next.js.",
        icon: Globe,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        gradient: "group-hover:from-blue-500/10 group-hover:to-blue-500/5",
        href: "/services/web-development"
    },
    {
        title: "Mobile App Development",
        description: "Expert mobile app development in Pune for iOS and Android platforms using native and cross-platform tech.",
        icon: Smartphone,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        gradient: "group-hover:from-green-500/10 group-hover:to-green-500/5",
        href: "/services/mobile-app-development"
    },
    {
        title: "Custom Software",
        description: "The best custom software development Pune services for enterprise automation and scalability.",
        icon: Code,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        gradient: "group-hover:from-purple-500/10 group-hover:to-purple-500/5",
        href: "/services/custom-software"
    },
    {
        title: "SaaS Development",
        description: "A specialized SaaS development company Pune helping startups build and scale recurring revenue products.",
        icon: Cloud,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        gradient: "group-hover:from-pink-500/10 group-hover:to-pink-500/5",
        href: "/services/saas-development"
    },
    {
        title: "UI/UX Design",
        description: "Premium UI/UX design company in Kharadi Pune creating user-centric and beautiful digital experiences.",
        icon: Layout,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        gradient: "group-hover:from-orange-500/10 group-hover:to-orange-500/5",
        href: "/services/uiux-design"
    },
    {
        title: "Election Software",
        description: "The best election software development company India for secure voting systems and result management.",
        icon: Globe,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        gradient: "group-hover:from-indigo-500/10 group-hover:to-indigo-500/5",
        href: "/services/election-software-development"
    },
    {
        title: "Cloud Solutions",
        description: "Secure and scalable cloud infrastructure setup on AWS, Azure, or Vercel.",
        icon: Database,
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        gradient: "group-hover:from-cyan-500/10 group-hover:to-cyan-500/5",
        href: "/services/cloud-solutions"
    },
    {
        title: "AI Integration",
        description: "Leading IT company in Kharadi Pune integrating advanced AI and ML into modern business software.",
        icon: Database,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        gradient: "group-hover:from-violet-500/10 group-hover:to-violet-500/5",
        href: "/services/ai-integration"
    },
];

export function ServicesSection() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden" id="services">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Everything you need to <span className="text-gradient">scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-muted-foreground text-lg md:text-xl"
                    >
                        We provide end-to-end software development services to help you achieve your business goals with speed and precision.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link key={index} href={service.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative h-full"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent ${service.gradient} rounded-2xl blur-xl transition-all duration-500`} />
                                <div className="relative h-full p-8 bg-card border border-border rounded-2xl hover:border-border/80 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left group-hover:-translate-y-1">
                                    <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`h-7 w-7 ${service.color}`} />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-3 transition-colors`}>{service.title}</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                                    <div className={`flex items-center ${service.color} font-semibold text-sm group-hover:gap-2 transition-all cursor-pointer`}>
                                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
