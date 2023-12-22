import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { LightboxImage } from "./LightboxImages"

const shortcodes = { LightboxImage }

export default function Layout({ children }) {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>
}
