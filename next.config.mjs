/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // apply to anything under /graphics/*
        source: "/graphics/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
