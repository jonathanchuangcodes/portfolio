import rehypeSlug from "rehype-slug"
import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
    experimental: {
      mdxRs: false,
    },
  },
})

const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["js", "jsx", "mdx"],
}

config.resolve.modules.push(path.resolve("./"))

export default withMDX(nextConfig)
