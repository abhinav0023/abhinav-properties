/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  images: {
    unoptimized: true, // Important for GH Pages (no image optimization)
  },
  basePath: "/abhinav-properties", // 👈 replace with your GitHub repo name
  assetPrefix: "/abhinav0023/",
};

export default nextConfig;  