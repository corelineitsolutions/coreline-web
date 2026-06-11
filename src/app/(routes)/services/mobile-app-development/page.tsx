import { Metadata } from "next";
import { MobileAppDevelopmentClient } from "./MobileAppDevelopmentClient";

export const metadata: Metadata = {
    title: "Mobile App Development Company Pune | iOS & Android Apps",
    description: "Leading mobile app development company in Pune. We build high-quality native and cross-platform apps using React Native, Flutter, and Swift for startups & enterprises.",
    keywords: "mobile app development Pune, iOS app developers Kharadi, Android app development India, React Native company Pune, Flutter developers Pune, mobile solutions India",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/mobile-app-development",
    },
    openGraph: {
        title: "Mobile App Development Company Pune | iOS & Android Apps",
        description: "Leading mobile app development company in Pune. We build high-quality native and cross-platform apps using React Native and Flutter.",
        url: "https://corelineitsolutions.com/services/mobile-app-development",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Mobile App Development Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Company Pune | iOS & Android Apps",
        description: "Leading mobile app development company in Pune. We build high-quality native and cross-platform apps using React Native and Flutter.",
        images: ["/CL LOGO.png"],
    },
};

export default function MobileAppDevelopmentPage() {
    return <MobileAppDevelopmentClient />;
}
