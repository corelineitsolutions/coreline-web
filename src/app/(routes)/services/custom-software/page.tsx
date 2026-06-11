import { Metadata } from "next";
import { CustomSoftwareClient } from "./CustomSoftwareClient";

export const metadata: Metadata = {
    title: "Custom Software Development Company Pune | Tailored IT Solutions",
    description: "Build high-performance, tailored software solutions with Coreline IT Solutions, the leading custom software development company in Pune. We solve unique business challenges.",
    keywords: "custom software development Pune, software development company for startups Pune, enterprise software development Pune, custom IT solutions Kharadi, bespoke software India",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/custom-software",
    },
    openGraph: {
        title: "Custom Software Development Company Pune | Tailored IT Solutions",
        description: "Leading custom software development company in Pune. We build high-performance, tailored software solutions to solve unique business challenges.",
        url: "https://corelineitsolutions.com/services/custom-software",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Custom Software Development Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Company Pune | Tailored IT Solutions",
        description: "Leading custom software development company in Pune. We build high-performance, tailored software solutions to solve unique business challenges.",
        images: ["/CL LOGO.png"],
    },
};

export default function CustomSoftwarePage() {
    return <CustomSoftwareClient />;
}
