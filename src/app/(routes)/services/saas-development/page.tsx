import { Metadata } from "next";
import { SaaSDevelopmentClient } from "./SaaSDevelopmentClient";

export const metadata: Metadata = {
    title: "SaaS Development Company Pune | Scalable Software Solutions",
    description: "Build your next big software with the leading SaaS development company in Pune. We build secure, multi-tenant SaaS applications with integrated billing and analytics.",
    keywords: "SaaS development company Pune, software as a service developers India, multi-tenant architecture Pune, SaaS platform development Kharadi, subscription billing integration",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/saas-development",
    },
    openGraph: {
        title: "SaaS Development Company Pune | Scalable Software Solutions",
        description: "Leading SaaS development company in Pune. We build secure, multi-tenant SaaS applications with integrated billing and analytics.",
        url: "https://corelineitsolutions.com/services/saas-development",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "SaaS Development Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Development Company Pune | Scalable Software Solutions",
        description: "Leading SaaS development company in Pune. We build secure, multi-tenant SaaS applications with integrated billing and analytics.",
        images: ["/CL LOGO.png"],
    },
};

export default function SaaSDevelopmentPage() {
    return <SaaSDevelopmentClient />;
}
