/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.styledivadesignerboutique.com",
          pathname: "/uploads/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  