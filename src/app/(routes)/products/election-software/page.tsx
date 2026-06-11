import { Metadata } from "next";
import { ElectionSoftwareProductClient } from "./ElectionSoftwareProductClient";

export const metadata: Metadata = {
    title: "Election Software | Voter Management & Political War Room",
    description: "Master Mind Election Software — search voters, run surveys, multi-filter by booth and caste, and export to Excel and PDF. Trusted across Maharashtra.",
    keywords: "election software product, voter search app, survey management, multi-filter voters, export excel PDF, Master Mind Election Software",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/products/election-software",
    },
    openGraph: {
        title: "Election Software | Voter Management & Political War Room",
        description: "Advanced election management software with voter database, booth strategy, and political war room solutions.",
        url: "https://corelineitsolutions.com/products/election-software",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/election-software.jpeg", width: 800, height: 600, alt: "Master Mind Election Software" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Election Software | Voter Management & Political War Room",
        description: "Advanced election management software with voter database, booth strategy, and political war room solutions.",
        images: ["/election-software.jpeg"],
    },
};

export default function ElectionSoftwareProductPage() {
    return <ElectionSoftwareProductClient />;
}
