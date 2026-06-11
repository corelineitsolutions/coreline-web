"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, MessageSquare, Clock } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
    {
        icon: MapPin,
        title: "Visit Us",
        details: "06,B Wing, 4th Floor, City Vista, Ashoka Nagar, Kharadhi, Pune",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Mail,
        title: "Email Us",
        details: "contact@corelineitsolutions.com",
        link: "mailto:contact@corelineitsolutions.com",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Phone,
        title: "Call Us",
        details: "+91 XXXXX XXXXX",
        link: "tel:+91XXXXXXXXXX",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        icon: Clock,
        title: "Working Hours",
        details: "Mon - Sat: 9:00 AM - 6:00 PM",
        gradient: "from-orange-500 to-red-500"
    }
];

const faqs = [
    {
        question: "What's your typical response time?",
        answer: "We respond to all inquiries within 24 hours."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes! We provide free initial consultations to discuss your project."
    },
    {
        question: "What's your project timeline?",
        answer: "Timelines vary by project complexity. We'll provide a detailed timeline during consultation."
    }
];

export function ContactClient() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        toast.success("Message sent successfully! We'll get back to you soon.");
        setLoading(false);
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

                <div className="container px-4 md:px-6 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 backdrop-blur-sm">
                            <span className="text-cyan-200 text-sm font-semibold">Get In Touch</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Let&apos;s Build Something <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                Amazing Together
                            </span>
                        </h1>

                        <p className="text-xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="h-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <info.icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                                        {info.title}
                                    </h3>

                                    {info.link ? (
                                        <a href={info.link} className={`text-slate-600 dark:text-slate-400 hover:bg-gradient-to-r ${info.gradient} hover:bg-clip-text hover:text-transparent transition-all`}>
                                            {info.details}
                                        </a>
                                    ) : (
                                        <p className="text-slate-600 dark:text-slate-400">
                                            {info.details}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send us a Message</h2>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                First Name *
                                            </label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                required
                                                className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 rounded-xl"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                                Last Name *
                                            </label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                required
                                                className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            Email Address *
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            required
                                            className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 rounded-xl"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            Phone Number (Optional)
                                        </label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 rounded-xl"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                            Your Message *
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project..."
                                            className="min-h-[180px] bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 rounded-xl resize-none"
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-500/30 disabled:opacity-50"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Map & FAQs */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Map */}
                            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484131.8330897639!2d73.58231080682135!3d18.56141360000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c37942ddc8d9%3A0x5617a3bcbfc7565f!2sCity%20Vista%2C%20Kharadi!5e0!3m2!1sen!2sin!4v1772087419073!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>

                            {/* Quick FAQs */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Quick Answers</h3>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="group">
                                            <div className="font-semibold text-slate-900 dark:text-white mb-2 flex items-start gap-2">
                                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs mt-0.5">
                                                    ?
                                                </div>
                                                {faq.question}
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm pl-7">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
