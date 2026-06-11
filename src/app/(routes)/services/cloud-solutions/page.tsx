import { Metadata } from "next";
import { CloudSolutionsClient } from "./CloudSolutionsClient";

export const metadata: Metadata = {
    title: "Cloud Solutions & DevOps Services Pune | AWS, Azure & Google Cloud",
    description: "Scale your business with expert cloud solutions in Pune. We specialize in AWS, Azure, Google Cloud, and DevOps automation for high-performance applications.",
    keywords: "cloud solutions Pune, DevOps services Kharadi, AWS developers Pune, Azure cloud integration, Google Cloud services India, scalable infrastructure Pune",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/cloud-solutions",
    },
    openGraph: {
        title: "Cloud Solutions & DevOps Services Pune | AWS, Azure & Google Cloud",
        description: "Scale your business with expert cloud solutions in Pune. We specialize in AWS, Azure, Google Cloud, and DevOps automation.",
        url: "https://corelineitsolutions.com/services/cloud-solutions",
        siteName: "Coreline IT Solutions",
        images: [
            {
                url: "/CL LOGO.png",
                width: 800,
                height: 600,
                alt: "Cloud Solutions Pune",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Solutions & DevOps Services Pune | AWS, Azure & Google Cloud",
        description: "Scale your business with expert cloud solutions in Pune. We specialize in AWS, Azure, Google Cloud, and DevOps automation.",
        images: ["/CL LOGO.png"],
    },
};

export default function CloudSolutionsPage() {
    return <CloudSolutionsClient />;
}
