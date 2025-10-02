/** @type {import('next').NextConfig} *//** @type {import('next').NextConfig} *//** @type {import('next').NextConfig} */

const nextConfig = {

  eslint: {const nextConfig = {const nextConfig = {

    ignoreDuringBuilds: true,

  },  eslint: {  eslint: {

  typescript: {

    ignoreBuildErrors: true,    ignoreDuringBuilds: true,    ignoreDuringBuilds: true,

  },

  images: {  },  },

    unoptimized: true,

  },  typescript: {  typescript: {

}

    ignoreBuildErrors: true,    ignoreBuildErrors: true,

export default nextConfig
  },  },

  images: {  images: {

    unoptimized: true,    unoptimized: true,

  },  },

}}



export default nextConfigexport default nextConfig
