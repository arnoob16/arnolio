/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    async redirects() {
        return [
            {
                source: '/resume',
                destination: '/Arnab\'s_Resume.pdf',
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig;
