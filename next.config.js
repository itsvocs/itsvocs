/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable indent */
/** @type {import('next').NextConfig} */
const nextConfig = {

    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
        appDir: true,
        mdxRs: true,
    },
};

module.exports = nextConfig
