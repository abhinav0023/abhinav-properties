/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // needed for GitHub Pages
  images: {
    unoptimized: true, // fixes image loader issue
  },
};

export default nextConfig;
