import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "snjzgrnhlqngthyxcutc.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};


const withMDX = createMDX({
  extension: /\.mdx?$/,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [['rehype-katex', { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);