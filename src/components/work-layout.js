import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { LightboxImage } from "./LightboxImage"
import { GatsbyImage } from "gatsby-plugin-image"

const shortcodes = { GatsbyImage }

export default function Layout({ children }) {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>
}
