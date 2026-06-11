import React from 'react';

export function SchemaMarkup() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Coreline IT Solutions",
        "url": "https://corelineitsolutions.com",
        "logo": "https://corelineitsolutions.com/CL%20LOGO.png",
        "sameAs": [
            "https://www.linkedin.com/company/corelineitsolutions",
            "https://twitter.com/corelineits"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9657301344",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Marathi"]
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ITService",
        "name": "Coreline IT Solutions",
        "image": "https://corelineitsolutions.com/CL%20LOGO.png",
        "@id": "https://corelineitsolutions.com",
        "url": "https://corelineitsolutions.com",
        "telephone": "+91-9657301344",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kharadi Pune",
            "addressLocality": "Pune",
            "postalCode": "411014",
            "addressRegion": "MH",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5515,
            "longitude": 73.9439
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "19:00"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Coreline IT Solutions",
        "url": "https://corelineitsolutions.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://corelineitsolutions.com/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
