"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Brain, MessageSquare, Image, Workflow } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: MessageSquare,
        title: "ChatGPT Integration",
        description: "Conversational AI powered by GPT-4 for customer support and engagement"
    },
    {
        icon: Image,
        title: "Image Recognition",
        description: "Computer vision for object detection, classification, and analysis"
    },
    {
        icon: Workflow,
        title: "Process Automation",
        description: "Intelligent automation to streamline repetitive tasks and workflows"
    },
    {
        icon: Brain,
        title: "Machine Learning",
        description: "Custom ML models trained on your data for predictive insights"
    }
];

const technologies = [
    "OpenAI GPT-4", "TensorFlow", "PyTorch", "Langchain", "Pinecone", "Hugging Face",
    "Google Vision AI", "AWS Rekognition", "Python", "FastAPI", "Vector DB", "RAG"
];

const benefits = [
    "ChatGPT and GPT-4 API integration",
    "Custom chatbots and virtual assistants",
    "Image and video analysis with AI",
    "Natural language processing (NLP)",
    "Sentiment analysis and text classification",
    "Recommendation engines",
    "Predictive analytics and forecasting",
    "AI-powered search and RAG systems"
];

import { ServiceSchema } from "@/components/ServiceSchema";

export function AIIntegrationClient() {
    return (
        <div className="min-h-screen">
            <ServiceSchema
                name="AI Integration Services"
                description="Expert AI integration services including ChatGPT, machine learning, and computer vision solutions for businesses."
                url="https://corelineitsolutions.com/services/ai-integration"
                serviceType="AI & Machine Learning Development"
            />
            <PageHero
                badge="AI Integration"
                title="Intelligent AI Solutions"
                highlight="Powered by AI"
                description="Integrate cutting-edge AI and machine learning into your products to unlock new capabilities and automate complex tasks."
                gradient="from-violet-600 via-purple-600 to-fuchsia-600"
            />

            {/* Overview */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Why Choose Our <span className="text-gradient">AI Integration</span>?
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                Transform your business with AI-powered features that enhance user experiences,
                                automate workflows, and provide intelligent insights from your data.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                We integrate the latest AI technologies including ChatGPT, computer vision, and custom
                                machine learning models tailored to your specific needs.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {features.map((feature, index) => (
                                <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            AI Technologies & <span className="text-gradient">Frameworks</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Cutting-edge AI tools and platforms we work with
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 md:py-12 bg-white dark:bg-slate-900">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                What You <span className="text-gradient">Get</span>
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                                AI-powered features that give your product a competitive edge
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-12 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-900/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Add AI to Your Product?
                            </h2>
                            <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
                                Let's explore how AI can transform your business and delight your users
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-violet-600 hover:bg-white/90 font-bold h-14 px-8 text-base" asChild>
                                    <Link href="/contact">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white/30 bg-white/10 hover:bg-white/20" asChild>
                                    <Link href="/portfolio">
                                        View AI Projects
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
