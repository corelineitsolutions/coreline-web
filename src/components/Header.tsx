"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesExpanded, setIsServicesExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Products", href: "/products" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Team", href: "/team" },
        { name: "Contact", href: "/contact" },
    ];

    const serviceLinks = [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "SaaS Development", href: "/services/saas-development" },
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "UI/UX Design", href: "/services/uiux-design" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "E-Commerce", href: "/services/ecommerce" },
        { name: "AI Integration", href: "/services/ai-integration" },
        { name: "API Development", href: "/services/api-development" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur-md",
                isScrolled
                    ? "border-slate-200 dark:border-slate-800 shadow-lg"
                    : "border-slate-200/50 dark:border-slate-800/50 shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <img
                            src="/CL LOGO name.png"
                            alt="Coreline IT Solutions - Software Development Company in Pune"
                            className="h-20 md:h-32 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            link.name === "Services" ? (
                                <div key={link.name} className="relative group/services py-6 -my-6">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex items-center gap-1 text-sm font-medium transition-colors relative group",
                                            (link as any).highlight
                                                ? "text-orange-600 dark:text-orange-400 font-bold"
                                                : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/services:rotate-180" />
                                        <span className={cn(
                                            "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                                            (link as any).highlight ? "bg-orange-500" : "bg-blue-600 dark:bg-blue-400"
                                        )} />
                                    </Link>

                                    <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 translate-y-2 invisible group-hover/services:opacity-100 group-hover/services:translate-y-0 group-hover/services:visible transition-all duration-300 z-50">
                                        <div className="bg-white dark:bg-[#0f172a] shadow-xl rounded-xl border border-slate-200 dark:border-slate-800 p-2 w-[280px] flex flex-col gap-1">
                                            {serviceLinks.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="px-4 py-2.5 text-[15px] font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors"
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors relative group",
                                        (link as any).highlight
                                            ? "text-orange-600 dark:text-orange-400 font-bold"
                                            : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    )}
                                >
                                    {link.name}
                                    <span className={cn(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                                        (link as any).highlight ? "bg-orange-500" : "bg-blue-600 dark:bg-blue-400"
                                    )} />
                                    {(link as any).highlight && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full animate-pulse">
                                            New
                                        </span>
                                    )}
                                </Link>
                            )
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button size="sm" className="hidden lg:flex gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 border-0">
                            Get Free Consultation <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 -mr-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                link.name === "Services" ? (
                                    <div key={link.name} className="flex flex-col">
                                        <div className="flex items-center justify-between border-b border-border/50">
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "text-lg font-medium py-3 transition-colors flex items-center flex-1",
                                                    (link as any).highlight ? "text-orange-600 dark:text-orange-400 font-bold" : "text-foreground hover:text-primary"
                                                )}
                                            >
                                                {link.name}
                                            </Link>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setIsServicesExpanded(!isServicesExpanded);
                                                }}
                                                className="p-2 -mr-2 text-foreground hover:text-primary"
                                            >
                                                <ChevronDown className={cn("h-5 w-5 transition-transform", isServicesExpanded && "rotate-180")} />
                                            </button>
                                        </div>
                                        <AnimatePresence>
                                            {isServicesExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="overflow-hidden bg-slate-50 dark:bg-slate-800/30 rounded-lg mt-2"
                                                >
                                                    <div className="flex flex-col py-2 px-4">
                                                        {serviceLinks.map((service) => (
                                                            <Link
                                                                key={service.name}
                                                                href={service.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 border-none transition-colors"
                                                            >
                                                                {service.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-lg font-medium py-3 border-b border-border/50 transition-colors flex items-center justify-between",
                                            (link as any).highlight ? "text-orange-600 dark:text-orange-400 font-bold" : "text-foreground hover:text-primary"
                                        )}
                                    >
                                        {link.name}
                                        {(link as any).highlight && (
                                            <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full">New</span>
                                        )}
                                    </Link>
                                )
                            ))}
                            <Button className="w-full mt-2 gap-2" size="lg">
                                Get Free Consultation <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
