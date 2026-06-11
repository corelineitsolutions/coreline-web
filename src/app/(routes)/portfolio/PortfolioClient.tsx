"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Web Apps", "Mobile Apps", "E-Commerce", "SaaS"];

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "E-Commerce",
        description: "Modern e-commerce solution with real-time inventory and payment integration",
        image: "gradient-blue",
        tech: ["Next.js", "Stripe", "PostgreSQL"],
        featured: true
    },
    {
        id: 2,
        title: "Healthcare Mobile App",
        category: "Mobile Apps",
        description: "Telemedicine app connecting patients with doctors",
        image: "gradient-purple",
        tech: ["React Native", "Node.js", "WebRTC"]
    },
    {
        id: 3,
        title: "SaaS Analytics Dashboard",
        category: "SaaS",
        description: "Real-time analytics for SaaS businesses",
        image: "gradient-emerald",
        tech: ["React", "D3.js", "Firebase"],
        featured: true
    },
    {
        id: 4,
        title: "Real Estate Web Portal",
        category: "Web Apps",
        description: "Property listing platform with advanced search",
        image: "gradient-orange",
        tech: ["Next.js", "Maps API", "MongoDB"]
    },
    {
        id: 5,
        title: "Food Delivery App",
        category: "Mobile Apps",
        description: "On-demand food delivery with real-time tracking",
        image: "gradient-pink",
        tech: ["Flutter", "Firebase", "Stripe"]
    },
    {
        id: 6,
        title: "CRM Software",
        category: "SaaS",
        description: "Customer relationship management platform",
        image: "gradient-cyan",
        tech: ["Next.js", "Prisma", "PostgreSQL"]
    },
    {
        id: 7,
        title: "Fashion E-Store",
        category: "E-Commerce",
        description: "Luxury fashion e-commerce with AR try-on",
        image: "gradient-indigo",
        tech: ["Next.js", "Shopify", "AR.js"]
    },
    {
        id: 8,
        title: "Fitness Tracking App",
        category: "Mobile Apps",
        description: "Health and fitness tracking with AI coaching",
        image: "gradient-teal",
        tech: ["React Native", "TensorFlow", "Firebase"]
    },
    {
        id: 9,
        title: "Project Management Tool",
        category: "SaaS",
        description: "Collaborative project management platform",
        image: "gradient-rose",
        tech: ["Next.js", "WebSockets", "Redis"]
    }
];

const gradients = {
    "gradient-blue": "from-blue-500 to-cyan-500",
    "gradient-purple": "from-purple-500 to-pink-500",
    "gradient-emerald": "from-emerald-500 to-teal-500",
    "gradient-orange": "from-orange-500 to-red-500",
    "gradient-pink": "from-pink-500 to-rose-500",
    "gradient-cyan": "from-cyan-500 to-blue-500",
    "gradient-indigo": "from-indigo-500 to-purple-500",
    "gradient-teal": "from-teal-500 to-emerald-500",
    "gradient-rose": "from-rose-500 to-pink-500"
};

type GradientKey = keyof typeof gradients;

export function PortfolioClient() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px]"></div>

                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                            <span className="text-purple-200 text-sm font-semibold">Our Portfolio</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
                            Transforming Ideas Into <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                                Digital Reality
                            </span>
                        </h1>

                        <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Explore our portfolio of successful projects that have helped businesses grow and succeed
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">150+</div>
                                <div className="text-sm text-purple-200">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">50+</div>
                                <div className="text-sm text-purple-200">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">20+</div>
                                <div className="text-sm text-purple-200">Industries</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filter  */}
            <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-40 backdrop-blur-lg bg-white/90 dark:bg-slate-900/90">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group cursor-pointer ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
                                >
                                    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 h-full flex flex-col">
                                        {/* Image Placeholder with Gradient */}
                                        <div className={`relative h-64 ${project.featured ? 'md:h-96' : ''} bg-gradient-to-br ${gradients[project.image as GradientKey]} overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <div className="flex gap-4">
                                                    <Button size="sm" className="bg-white text-slate-900 hover:bg-white/90">
                                                        <ExternalLink className="w-4 h-4 mr-2" /> View Project
                                                    </Button>
                                                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20">
                                                        <Github className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-grow flex flex-col">
                                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                                                <Link href="#" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all">
                                                    View Case Study <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let&apos;s Create Your Success Story
                            </h2>
                            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                                Ready to see your project featured in our portfolio?
                            </p>
                            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                <Link href="/contact">
                                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
