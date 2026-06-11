import { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
    title: "Software Development Services Pune | Web & Mobile App Development",
    description: "Wide range of software development services in Pune. We offer custom web development, mobile apps, cloud solutions, UI/UX design, and AI integration for businesses.",
    keywords: "software development services Pune, web development Kharadi, mobile app developers Pune, cloud solutions India, AI integration services, IT outsourcing Pune",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services",
    },
    openGraph: {
        title: "Software Development Services Pune | Web & Mobile App Development",
        description: "Wide range of software development services in Pune. Web development, mobile apps, cloud solutions, and AI integration.",
        url: "https://corelineitsolutions.com/services",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Coreline IT Solutions Services" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development Services Pune | Web & Mobile App Development",
        description: "Wide range of software development services in Pune. Web development, mobile apps, cloud solutions, and AI integration.",
        images: ["/CL LOGO.png"],
    },
};

export default function ServicesPage() {
    return <ServicesClient />;
}
