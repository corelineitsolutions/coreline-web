import { Metadata } from "next";
import { AIIntegrationClient } from "./AIIntegrationClient";

export const metadata: Metadata = {
    title: "AI Integration Services Pune | ChatGPT & Machine Learning Solutions",
    description: "Expert AI integration services in Pune. We help businesses integrate ChatGPT, GPT-4, computer vision, and custom machine learning models into their products.",
    keywords: "AI integration services Pune, ChatGPT integration India, machine learning solutions Kharadi, custom AI development Pune, GPT-4 app developers",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/ai-integration",
    },
    openGraph: {
        title: "AI Integration Services Pune | ChatGPT & Machine Learning Solutions",
        description: "Expert AI integration services in Pune. We help businesses integrate ChatGPT, GPT-4, and custom ML models.",
        url: "https://corelineitsolutions.com/services/ai-integration",
        siteName: "Coreline IT Solutions",
        images: [
            {
                url: "/CL LOGO.png",
                width: 800,
                height: 600,
                alt: "AI Integration Services Pune",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Integration Services Pune | ChatGPT & Machine Learning Solutions",
        description: "Expert AI integration services in Pune. We help businesses integrate ChatGPT, GPT-4, and custom ML models.",
        images: ["/CL LOGO.png"],
    },
};

export default function AIIntegrationPage() {
    return <AIIntegrationClient />;
}
