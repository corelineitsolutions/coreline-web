import { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
    title: "Design Gallery & Creative Showcase | Coreline IT Solutions",
    description: "Explore the creative portfolio of Coreline IT Solutions. Our gallery features web designs, mobile app interfaces, branding projects, and UI/UX showcases.",
    keywords: "design gallery Pune, web design showcase, mobile app UI gallery, branding portfolio India, UI/UX design examples Pune",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/gallery",
    },
    openGraph: {
        title: "Design Gallery & Creative Showcase | Coreline IT Solutions",
        description: "Explore the creative portfolio of Coreline IT Solutions. Web designs, mobile apps, and UI/UX showcases.",
        url: "https://corelineitsolutions.com/gallery",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Design Gallery Coreline IT Solutions" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Design Gallery & Creative Showcase | Coreline IT Solutions",
        description: "Explore the creative portfolio of Coreline IT Solutions. Web designs, mobile apps, and UI/UX showcases.",
        images: ["/CL LOGO.png"],
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
