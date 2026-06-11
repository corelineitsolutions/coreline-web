import { Metadata } from "next";
import { CustomSoftwarePuneClient } from "./CustomSoftwarePuneClient";

export const metadata: Metadata = {
    title: "Custom Software Development Pune | Enterprise Software Company",
    description: "Coreline IT Solutions is the premier custom software development company in Pune. We build tailor-made enterprise software, CRM, ERP, and SaaS solutions for global clients.",
    keywords: "custom software development Pune, enterprise software company Pune, SaaS development company Pune, MVP development company Pune, software developers Pune India",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/custom-software-development-pune",
    },
    openGraph: {
        title: "Custom Software Development Pune | Enterprise Software Company",
        description: "Premier custom software development company in Pune. We build tailor-made enterprise software, CRM, ERP, and SaaS solutions.",
        url: "https://corelineitsolutions.com/custom-software-development-pune",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Custom Software Development Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Pune | Enterprise Software Company",
        description: "Premier custom software development company in Pune. We build tailor-made enterprise software, CRM, ERP, and SaaS solutions.",
        images: ["/CL LOGO.png"],
    },
};

export default function CustomSoftwarePunePage() {
    return <CustomSoftwarePuneClient />;
}
