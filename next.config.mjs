/** @type {import('next').NextConfig} */

const proxyDestination = "https://next-fallback-app.vercel.app";

const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/ja-JP/:path*",
          destination: `${proxyDestination}/:path*`,
          locale: false,
        },
        {
          source: "/zh-CN/:path*",
          destination: `${proxyDestination}/:path*`,
          locale: false,
        },
        {
          source: "/ko-KR/:path*",
          destination: `${proxyDestination}/:path*`,
          locale: false,
        },
        {
          source: "/en-US/:path*",
          destination: `${proxyDestination}/:path*`,
        },
        {
          source: "/:path*",
          destination: `${proxyDestination}/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
