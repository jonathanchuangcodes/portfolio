import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import LightboxImage from "../components/LightboxImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const shortcodes = { LightboxImage, GatsbyImage }

export default function blogPostTemplate({ data }) {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
      >
        <header className="post-content-header">
          <h1 className="post-content-title">{post.frontmatter.title}</h1>
        </header>

        {post.frontmatter.description && (
          <p className="post-content-excerpt">{post.frontmatter.description}</p>
        )}

        {post.frontmatter.thumbnail && (
          <GatsbyImage
            className="post-content-image"
            image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            alt={post.frontmatter.title}
            objectFit="contain"
          />
        )}

        <div className="row">
          {post.frontmatter.project_timeline && (
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Timeline</h3>
                <p>{post.frontmatter.project_timeline}</p>
              </div>
            </div>
          )}
          {post.frontmatter.deliverable && (
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Deliverable</h3>
                <p>{post.frontmatter.deliverable}</p>
              </div>
            </div>
          )}
          {post.frontmatter.my_role && (
            <div className="col">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h3>My Role</h3>
                <p>{post.frontmatter.my_role}</p>
              </div>
            </div>
          )}
        </div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer className="post-content-body">{post.body}</MDXRenderer>
        </MDXProvider>
        <footer className="post-content-footer">
          {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
        </footer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(slug: { eq: $slug }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
        project_timeline
        deliverable
        my_role
      }
    }
  }
`
