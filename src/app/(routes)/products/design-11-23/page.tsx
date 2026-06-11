import { Metadata } from "next";
import { Design1123Client } from "./Design1123Client";

export const metadata: Metadata = {
    title: "Design 11-23 | Creative Campaign & Branding Platform",
    description: "Design 11/23 app — create designs for business, politics, and personal use. Make reels and add your name, photo, and details on every creative.",
    keywords: "Design 11/23, business design app, political design app, personal design app, reel design with name, design app India",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/products/design-11-23",
    },
    openGraph: {
        title: "Design 11-23 | Creative Campaign & Branding Platform",
        description: "Creative design platform for campaigns, branding, print, and digital assets by Coreline IT Solutions.",
        url: "https://corelineitsolutions.com/products/design-11-23",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/design-image.jpeg", width: 800, height: 600, alt: "Design 11/23 App" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Design 11-23 | Creative Campaign & Branding Platform",
        description: "Creative design platform for campaigns, branding, print, and digital assets by Coreline IT Solutions.",
        images: ["/design-image.jpeg"],
    },
};

export default function Design1123Page() {
    return <Design1123Client />;
}
