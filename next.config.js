/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = "arnolio";

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    images: {
        unoptimized: true,
    },
    basePath: isGithubPages ? `/${repoName}` : '',
    assetPrefix: isGithubPages ? `/${repoName}/` : '',
    distDir: 'build',
}

if (isGithubPages) {
    nextConfig["output"] = "export";
}

module.exports = nextConfig;
