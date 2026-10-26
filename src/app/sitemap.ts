import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://corelineitsolutions.com';

    const highPriorityRoutes = [
        { route: '', priority: 1.0, freq: 'weekly' },
    ];

    const landingRoutes = [
        { route: '/about', priority: 0.9, freq: 'monthly' },
        { route: '/contact', priority: 0.9, freq: 'monthly' },
        { route: '/portfolio', priority: 0.9, freq: 'weekly' },
        { route: '/gallery', priority: 0.8, freq: 'monthly' },
        { route: '/services', priority: 0.9, freq: 'weekly' },
        { route: '/products', priority: 0.9, freq: 'weekly' },
        { route: '/products/design-11-23', priority: 0.8, freq: 'monthly' },
        { route: '/products/election-software', priority: 0.8, freq: 'monthly' },
        { route: '/software-development-pune', priority: 0.9, freq: 'monthly' },
        { route: '/web-development-pune', priority: 0.9, freq: 'monthly' },
        { route: '/custom-software-development-pune', priority: 0.9, freq: 'monthly' },
        { route: '/election-software-development', priority: 0.9, freq: 'monthly' },
        { route: '/app-ads.txt', priority: 0.7, freq: 'monthly' },
    ];

    const serviceRoutes = [
        { route: '/services/web-development', priority: 0.8, freq: 'monthly' },
        { route: '/services/mobile-app-development', priority: 0.8, freq: 'monthly' },
        { route: '/services/saas-development', priority: 0.8, freq: 'monthly' },
        { route: '/services/custom-software', priority: 0.8, freq: 'monthly' },
        { route: '/services/uiux-design', priority: 0.8, freq: 'monthly' },
        { route: '/services/cloud-solutions', priority: 0.8, freq: 'monthly' },
        { route: '/services/ecommerce', priority: 0.8, freq: 'monthly' },
        { route: '/services/ai-integration', priority: 0.8, freq: 'monthly' },
        { route: '/services/api-development', priority: 0.8, freq: 'monthly' },
        { route: '/services/election-software-development', priority: 0.8, freq: 'monthly' },
    ];

    const allRoutes = [...highPriorityRoutes, ...landingRoutes, ...serviceRoutes];

    return allRoutes.map(({ route, priority, freq }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: freq as MetadataRoute.Sitemap[number]['changeFrequency'],
        priority,
    }));
}
