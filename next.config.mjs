/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // needed for GitHub Pages
  images: {
    unoptimized: true, // fixes image loader issue
  },
  assetPrefix: "https://abhinavproperties.com",
  basePath: "",
};

export default nextConfig;
