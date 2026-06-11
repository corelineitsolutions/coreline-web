import React from 'react';

interface ServiceSchemaProps {
    name: string;
    description: string;
    providerName?: string;
    url: string;
    serviceType?: string;
}

export function ServiceSchema({ name, description, providerName = "Coreline IT Solutions", url, serviceType = "IT Service" }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": providerName,
            "url": "https://corelineitsolutions.com"
        },
        "url": url,
        "serviceType": serviceType,
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Software Development Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": name
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
