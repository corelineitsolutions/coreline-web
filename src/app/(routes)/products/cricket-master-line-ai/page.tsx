import { Metadata } from "next";
import { CricketMasterLineAIProductClient } from "./CricketMasterLineAIProductClient";

export const metadata: Metadata = {
    title: "Cricket Master Line AI | Live Cricket Score & AI Match Analysis App",
    description: "Cricket Master Line AI — Next-generation AI cricket score application delivering real-time ball-by-ball scores, live AI match analysis, win prediction, and deep statistics.",
    keywords: "Cricket Master Line AI, AI cricket score app, cricket match analysis, live cricket score AI, ball by ball cricket score, cricket analytics, win probability predictor",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/products/cricket-master-line-ai",
    },
    openGraph: {
        title: "Cricket Master Line AI | Live Cricket Score & AI Match Analysis App",
        description: "AI-powered cricket score and predictive match analysis app with real-time ball-by-ball updates and intelligent insights.",
        url: "https://corelineitsolutions.com/products/cricket-master-line-ai",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/cricket-master-line-ai.png", width: 800, height: 800, alt: "Cricket Master Line AI" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cricket Master Line AI | Live Cricket Score & AI Match Analysis App",
        description: "AI-powered cricket score and predictive match analysis app with real-time ball-by-ball updates and intelligent insights.",
        images: ["/cricket-master-line-ai.png"],
    },
};

export default function CricketMasterLineAIPage() {
    return <CricketMasterLineAIProductClient />;
}
