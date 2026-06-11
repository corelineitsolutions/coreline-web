import { Metadata } from "next";
import { WebDevelopmentClient } from "./WebDevelopmentClient";

export const metadata: Metadata = {
    title: "Custom Web Development Company Pune | Next.js & React Experts",
    description: "Coreline IT Solutions is a leading web development company in Pune. We build high-performance, SEO-optimized web applications using Next.js, React, and MERN stack.",
    keywords: "web development company Pune, custom web applications India, Next.js developers Pune, React JS development Kharadi, MERN stack developers Pune",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/web-development",
    },
    openGraph: {
        title: "Custom Web Development Company Pune | Next.js & React Experts",
        description: "Leading web development company in Pune. We build high-performance web applications using Next.js, React, and MERN stack.",
        url: "https://corelineitsolutions.com/services/web-development",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Web Development Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Web Development Company Pune | Next.js & React Experts",
        description: "Leading web development company in Pune. We build high-performance web applications using Next.js, React, and MERN stack.",
        images: ["/CL LOGO.png"],
    },
};

export default function WebDevelopmentPage() {
    return <WebDevelopmentClient />;
}
