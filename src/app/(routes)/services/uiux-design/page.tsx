import { Metadata } from "next";
import { UIUXDesignClient } from "./UIUXDesignClient";

export const metadata: Metadata = {
    title: "UI/UX Design Services Pune | User Experience & Interface Design",
    description: "Top-tier UI/UX design services in Pune. We create beautiful, intuitive, and user-centered designs for web and mobile applications that drive engagement.",
    keywords: "UI/UX design Pune, user experience design Kharadi, interface design services India, Figma designers Pune, web design company Kharadi, mobile UI design India",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/uiux-design",
    },
    openGraph: {
        title: "UI/UX Design Services Pune | User Experience & Interface Design",
        description: "Top-tier UI/UX design services in Pune. We create beautiful, intuitive, and user-centered designs for web and mobile applications.",
        url: "https://corelineitsolutions.com/services/uiux-design",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "UI/UX Design Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "UI/UX Design Services Pune | User Experience & Interface Design",
        description: "Top-tier UI/UX design services in Pune. We create beautiful, intuitive, and user-centered designs for web and mobile applications.",
        images: ["/CL LOGO.png"],
    },
};

export default function UIUXDesignPage() {
    return <UIUXDesignClient />;
}
