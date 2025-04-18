import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.lazcdn.com",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "8080",
                pathname: "/**",
            }
        ]
    }
};

export default nextConfig;
