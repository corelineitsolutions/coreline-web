import { Metadata } from "next";
import { PortfolioClient } from "./PortfolioClient";

export const metadata: Metadata = {
    title: "Portfolio | Software & Web Development Projects Pune",
    description: "Explore Coreline IT Solutions' portfolio of successful software and web development projects in Pune. See how we've helped businesses with custom apps and SaaS.",
    keywords: "software development portfolio Pune, web development projects Kharadi, custom app case studies, IT solutions portfolio India",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/portfolio",
    },
    openGraph: {
        title: "Portfolio | Software & Web Development Projects Pune",
        description: "Explore Coreline IT Solutions' portfolio of successful software and web development projects in Pune.",
        url: "https://corelineitsolutions.com/portfolio",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Coreline IT Solutions Portfolio" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio | Software & Web Development Projects Pune",
        description: "Explore Coreline IT Solutions' portfolio of successful software and web development projects in Pune.",
        images: ["/CL LOGO.png"],
    },
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}
