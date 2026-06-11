import { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
    title: "About Coreline IT Solutions | Software Development Company Pune",
    description: "Learn about Coreline IT Solutions, a leading software development company in Kharadi Pune. Our mission, vision, and expert team of developers and designers.",
    keywords: "about Coreline IT Solutions, software development team Pune, IT experts Kharadi, software mission vision",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/about",
    },
    openGraph: {
        title: "About Coreline IT Solutions | Software Development Company Pune",
        description: "Leading software development company in Kharadi Pune. Mission, vision, and our expert team.",
        url: "https://corelineitsolutions.com/about",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "About Coreline IT Solutions" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Coreline IT Solutions | Software Development Company Pune",
        description: "Leading software development company in Kharadi Pune. Mission, vision, and our expert team.",
        images: ["/CL LOGO.png"],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
