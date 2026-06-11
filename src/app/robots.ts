import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/_next/', '/api/'],
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/_next/', '/api/'],
            },
        ],
        sitemap: 'https://corelineitsolutions.com/sitemap.xml',
    };
}
