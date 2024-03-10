/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "liveblocks.io",
                port: ""
            }
        ]
    },
    
    typescript: {
        ignoreBuildErrors: true,
      },

    webpack: (config) => {
        config.externals.push({
          "utf-8-validate": "commonjs utf-8-validate",
          bufferutil: "commonjs bufferutil",
          canvas: "commonjs canvas",
        });
        // config.infrastructureLogging = { debug: /PackFileCache/ };
        return config;
      },
};

export default nextConfig;
