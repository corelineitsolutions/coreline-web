"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        title: "We Build Modern",
        highlight: "Software Solutions",
        description: "The leading software development company in Pune building cutting-edge web and mobile applications for global startups and enterprises.",
        image: "gradient-blue",
        cta: "Get Started",
        ctaLink: "/contact"
    },
    {
        title: "Innovative",
        highlight: "Digital Experiences",
        description: "Top-rated IT company in Kharadi Pune specializing in custom software development Pune and exceptional digital product engineering.",
        image: "gradient-purple",
        cta: "View Portfolio",
        ctaLink: "/portfolio"
    },
    {
        title: "Enterprise-Grade",
        highlight: "Election Software",
        description: "The best election software development company India has to offer, providing secure online voting and result management solutions.",
        image: "gradient-emerald",
        cta: "Our Services",
        ctaLink: "/services"
    }
];

const gradients = {
    "gradient-blue": "from-blue-600 via-cyan-500 to-blue-600",
    "gradient-purple": "from-purple-600 via-pink-500 to-purple-600",
    "gradient-emerald": "from-emerald-600 via-teal-500 to-emerald-600"
};

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative overflow-hidden h-[600px] md:h-[700px] bg-slate-900 text-white">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[slides[currentSlide].image as keyof typeof gradients]}`}>
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="container px-4 md:px-6 mx-auto relative z-10 h-full flex items-center py-20 md:py-0">
                <div className="max-w-4xl w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-start"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
                            >
                                <Sparkles className="h-4 w-4 text-yellow-300" />
                                <span className="text-sm font-semibold">Elevate Your Digital Presence</span>
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 min-h-[3.3em] sm:min-h-[2.2em] md:min-h-0 flex flex-col justify-center">
                                <span>{slides[currentSlide].title}</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
                                    {slides[currentSlide].highlight}
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed min-h-[4em] sm:min-h-[3em] md:min-h-0">
                                {slides[currentSlide].description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="bg-white text-slate-900 hover:bg-white/90 font-bold h-12 md:h-14 px-8 text-base shadow-2xl hover:scale-105 transition-transform"
                                    asChild
                                >
                                    <Link href={slides[currentSlide].ctaLink}>
                                        {slides[currentSlide].cta} <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 md:h-14 px-8 text-base text-white border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md"
                                    asChild
                                >
                                    <Link href="/about">Learn More</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Combined Navigation and Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 md:gap-8">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
                </button>

                <div className="flex gap-2 md:gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`transition-all duration-300 ${currentSlide === index
                                ? "w-8 md:w-12 h-2 md:h-3 bg-white rounded-full"
                                : "w-2 md:w-3 h-2 md:h-3 bg-white/50 rounded-full hover:bg-white/75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </section>
    );
}
