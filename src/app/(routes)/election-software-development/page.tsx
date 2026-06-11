import { Metadata } from "next";
import { ElectionSoftwareClient } from "../services/election-software-development/ElectionSoftwareClient";

export const metadata: Metadata = {
    title: "Election Software Development | Political Voter Data App India",
    description: "Advanced election management software and voting solutions. Best election software development company in India with voter database management and analytics.",
    keywords: "election software development, voter data management app, digital voting solutions India, election management system, political campaign software",
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: "https://corelineitsolutions.com/election-software-development",
    },
};

export default function ElectionSoftwareLanding() {
    return <ElectionSoftwareClient />;
}
