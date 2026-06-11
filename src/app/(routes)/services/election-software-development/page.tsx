import { Metadata } from "next";
import { ElectionSoftwareClient } from "./ElectionSoftwareClient";

export const metadata: Metadata = {
    title: "Election Software Development Company India | Voter Analytics Maharashtra",
    description: "Coreline IT Solutions is the best election software development company in India. We offer voter database management, political war room setup, and booth strategy in Maharashtra.",
    keywords: "election software development company India, political war room Pune, voter database management app, booth management software Maharashtra, e-voting software India",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/election-software-development",
    },
    openGraph: {
        title: "Election Software Development Company India | Voter Analytics Maharashtra",
        description: "Best election software development company in India. We offer voter database management, political war room setup, and booth strategy.",
        url: "https://corelineitsolutions.com/services/election-software-development",
        siteName: "Coreline IT Solutions",
        images: [
            {
                url: "/CL LOGO.png",
                width: 800,
                height: 600,
                alt: "Election Software India",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Election Software Development Company India | Voter Analytics Maharashtra",
        description: "Best election software development company in India. We offer voter database management, political war room setup, and booth strategy.",
        images: ["/CL LOGO.png"],
    },
};

export default function ElectionSoftwarePage() {
    return <ElectionSoftwareClient />;
}
