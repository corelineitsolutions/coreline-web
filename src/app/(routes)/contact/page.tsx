import { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Coreline IT Solutions Kharadi Pune",
    description: "Get in touch with Coreline IT Solutions for expert software development services in Pune. Contact us for a free consultation on your web, mobile, or SaaS project.",
    keywords: "contact Coreline IT Solutions, software company Pune phone number, IT services Kharadi contact, software development consultation Pune",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/contact",
    },
    openGraph: {
        title: "Contact Us | Coreline IT Solutions Kharadi Pune",
        description: "Get in touch with Coreline IT Solutions for expert software development services in Pune. Contact us for a free consultation.",
        url: "https://corelineitsolutions.com/contact",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "Contact Coreline IT Solutions" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Coreline IT Solutions Kharadi Pune",
        description: "Get in touch with Coreline IT Solutions for expert software development services in Pune. Contact us for a free consultation.",
        images: ["/CL LOGO.png"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
