import { Metadata } from "next";
import { ECommerceClient } from "./ECommerceClient";

export const metadata: Metadata = {
    title: "E-Commerce Development Services Pune | Online Store Solutions",
    description: "Launch your online store with the best e-commerce development services in Pune. We specialize in Shopify, WooCommerce, and custom Next.js e-commerce platforms.",
    keywords: "e-commerce development Pune, online store builders Kharadi, Shopify developers Pune, WooCommerce experts India, custom e-commerce solutions, digital commerce Pune",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/ecommerce",
    },
    openGraph: {
        title: "E-Commerce Development Services Pune | Online Store Solutions",
        description: "Launch your online store with the best e-commerce development services in Pune. We specialize in Shopify, WooCommerce, and custom Next.js platforms.",
        url: "https://corelineitsolutions.com/services/ecommerce",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "E-Commerce Development Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "E-Commerce Development Services Pune | Online Store Solutions",
        description: "Launch your online store with the best e-commerce development services in Pune. We specialize in Shopify, WooCommerce, and custom Next.js platforms.",
        images: ["/CL LOGO.png"],
    },
};

export default function ECommercePage() {
    return <ECommerceClient />;
}
