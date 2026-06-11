import { Metadata } from "next";
import { SoftwareDevelopmentPuneClient } from "./SoftwareDevelopmentPuneClient";

export const metadata: Metadata = {
    title: "Software Development Company in Pune | Top IT Company Kharadi",
    description: "Coreline IT Solutions is the best software development company in Kharadi Pune. We specialize in custom software, web development, and mobile apps for startups and enterprises in Pune, India.",
    keywords: "software development company in Pune, IT company in Kharadi Pune, best software developers Pune, custom software development Pune India, IT services Kharadi",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/software-development-pune",
    },
    openGraph: {
        title: "Software Development Company in Pune | Top IT Company Kharadi",
        description: "Coreline IT Solutions is the best software development company in Kharadi Pune. Custom software, web development, and mobile apps.",
        url: "https://corelineitsolutions.com/software-development-pune",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Software Development Company Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development Company in Pune | Top IT Company Kharadi",
        description: "Coreline IT Solutions is the best software development company in Kharadi Pune. Custom software, web development, and mobile apps.",
        images: ["/CL LOGO.png"],
    },
};

export default function SoftwareDevelopmentPune() {
    return <SoftwareDevelopmentPuneClient />;
}
