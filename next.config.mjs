/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: true
      },
      {
        source: "/ar",
        destination: "/",
        permanent: true
      },
      {
        source: "/ar/:path*",
        destination: "/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
