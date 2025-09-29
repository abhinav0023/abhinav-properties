/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
=======
  reactStrictMode: true,
  output: "export", // needed for GitHub Pages
  images: {
    unoptimized: true, // fixes image loader issue
  },
};

export default nextConfig;
>>>>>>> b56d4fc3fdc50b300541215be91d39f2915e5f26
