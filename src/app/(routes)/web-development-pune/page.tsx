import { Metadata } from "next";
import { WebDevelopmentPuneClient } from "./WebDevelopmentPuneClient";

export const metadata: Metadata = {
    title: "Web Development Company in Pune | Best Web Developers Kharadi",
    description: "Looking for the best web development company in Kharadi Pune? Coreline IT Solutions specializes in custom web apps, React.js, and Next.js development for businesses in Pune India.",
    keywords: "web development company in Pune, best web developers Kharadi, React JS development company Pune, Next.js development company Pune, MERN stack development company Pune, web application development Kharadi",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/web-development-pune",
    },
    openGraph: {
        title: "Web Development Company in Pune | Best Web Developers Kharadi",
        description: "Best web development company in Kharadi Pune. Specialists in custom web apps, React.js, and Next.js development.",
        url: "https://corelineitsolutions.com/web-development-pune",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Web Development Company Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Company in Pune | Best Web Developers Kharadi",
        description: "Best web development company in Kharadi Pune. Specialists in custom web apps, React.js, and Next.js development.",
        images: ["/CL LOGO.png"],
    },
};

export default function WebDevelopmentPunePage() {
    return <WebDevelopmentPuneClient />;
}
