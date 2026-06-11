"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Web Design", "Mobile Apps", "Branding", "UI/UX"];

const galleryItems = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        category: "Web Design",
        gradient: "from-blue-500 to-cyan-500",
        size: "large"
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "Mobile Apps",
        gradient: "from-purple-500 to-pink-500",
        size: "medium"
    },
    {
        id: 3,
        title: "Brand Identity Design",
        category: "Branding",
        gradient: "from-emerald-500 to-teal-500",
        size: "medium"
    },
    {
        id: 4,
        title: "Creative Portfolio",
        category: "UI/UX",
        gradient: "from-orange-500 to-red-500",
        size: "small"
    },
    {
        id: 5,
        title: "Food Delivery App",
        category: "Mobile Apps",
        gradient: "from-pink-500 to-rose-500",
        size: "small"
    },
    {
        id: 6,
        title: "SaaS Analytics Platform",
        category: "Web Design",
        gradient: "from-indigo-500 to-purple-500",
        size: "large"
    },
    {
        id: 7,
        title: "Fitness App Interface",
        category: "Mobile Apps",
        gradient: "from-cyan-500 to-blue-500",
        size: "small"
    },
    {
        id: 8,
        title: "Startup Logo Suite",
        category: "Branding",
        gradient: "from-violet-500 to-purple-500",
        size: "small"
    },
    {
        id: 9,
        title: "Real Estate Portal",
        category: "Web Design",
        gradient: "from-teal-500 to-emerald-500",
        size: "medium"
    },
    {
        id: 10,
        title: "Travel Booking App",
        category: "UI/UX",
        gradient: "from-rose-500 to-pink-500",
        size: "medium"
    },
    {
        id: 11,
        title: "Tech Company Branding",
        category: "Branding",
        gradient: "from-blue-600 to-indigo-600",
        size: "small"
    },
    {
        id: 12,
        title: "Healthcare Dashboard",
        category: "Web Design",
        gradient: "from-emerald-600 to-cyan-600",
        size: "small"
    }
];

export function GalleryClient() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <PageHero
                badge="Our Gallery"
                title="Creative Works &"
                highlight="Design Showcase"
                description="Explore our collection of stunning designs, interfaces, and creative solutions that have helped brands stand out."
                gradient="from-purple-600 via-pink-600 to-rose-600"
            />

            {/* Filter Bar */}
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

            {/* Gallery Grid - Masonry Style */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`
                                        group cursor-pointer
                                        ${item.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[400px]' : ''}
                                        ${item.size === 'medium' ? 'md:col-span-2 h-[300px]' : ''}
                                        ${item.size === 'small' ? 'h-[250px]' : ''}
                                    `}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <div className="relative h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                                        {/* Gradient Background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white mb-3">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-white/80">
                                                    <ZoomIn className="w-4 h-4" />
                                                    <span className="text-sm">Click to view</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Pattern */}
                                        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-4 right-4 w-20 h-20 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${selectedItem.gradient}`}></div>

                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white mb-4">
                                    {selectedItem.category}
                                </span>
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    {selectedItem.title}
                                </h2>
                                <p className="text-white/80 text-lg">
                                    Click outside to close or press ESC
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
