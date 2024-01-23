/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      //add domains if i add images from external source.This is an example.I do not use it in this project
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
