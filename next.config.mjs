/** @type {import('next').NextConfig} */
const nextConfig = {

  allowedDevOrigins: ['192.168.0.105', 'localhost:3000'],
  

  images: {
    unoptimized: true, 
  },
};

export default nextConfig;