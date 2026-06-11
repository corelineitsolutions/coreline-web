import { Metadata } from "next";
import { APIDevelopmentClient } from "./APIDevelopmentClient";

export const metadata: Metadata = {
    title: "API Development & Integration Services Pune | RESTful & GraphQL",
    description: "Expert API development services in Pune. We build secure, scalable RESTful and GraphQL APIs to power your web and mobile applications.",
    keywords: "API development Pune, REST API services Kharadi, GraphQL developers Pune, API integration India, custom API development, backend development Pune",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/services/api-development",
    },
    openGraph: {
        title: "API Development & Integration Services Pune | RESTful & GraphQL",
        description: "Expert API development services in Pune. We build secure, scalable RESTful and GraphQL APIs to power your applications.",
        url: "https://corelineitsolutions.com/services/api-development",
        siteName: "Coreline IT Solutions",
        images: [{ url: "/CL LOGO.png", width: 800, height: 600, alt: "API Development Pune" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "API Development & Integration Services Pune | RESTful & GraphQL",
        description: "Expert API development services in Pune. We build secure, scalable RESTful and GraphQL APIs to power your applications.",
        images: ["/CL LOGO.png"],
    },
};

export default function APIDevelopmentPage() {
    return <APIDevelopmentClient />;
}
