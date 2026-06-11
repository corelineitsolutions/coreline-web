import { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
    title: "Our Products | Design 11-23 & Election Software",
    description: "Explore Coreline IT Solutions products — Design 11-23 creative campaign platform and Election Software for voter management, booth strategy, and political war room solutions.",
    keywords: "Coreline products, Design 11-23, election software India, voter management software, political campaign design platform",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/products",
    },
    openGraph: {
        title: "Our Products | Design 11-23 & Election Software",
        description: "Explore Coreline IT Solutions products — Design 11-23 and Election Software for campaigns and voter management.",
        url: "https://corelineitsolutions.com/products",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Coreline IT Solutions Products" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Products | Design 11-23 & Election Software",
        description: "Explore Coreline IT Solutions products — Design 11-23 and Election Software for campaigns and voter management.",
        images: ["/CL LOGO.png"],
    },
};

export default function ProductsPage() {
    return <ProductsClient />;
}
