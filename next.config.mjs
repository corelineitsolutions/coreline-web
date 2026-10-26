/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/ads',
                destination: '/app-ads.txt',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
