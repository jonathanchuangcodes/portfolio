import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Lightbox } from "./Lightbox"

const shortcodes = { Lightbox }

export default function Layout({ children }) {
  return <MDXProvider components={shortcodes}>{children}</MDXProvider>
}
