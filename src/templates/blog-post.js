import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import LightboxImage from "../components/LightboxImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const shortcodes = { LightboxImage }

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
            <p class="post-content-excerpt">{post.frontmatter.description}</p>
          )}

          {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
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
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        project_timeline
        deliverable
        my_role
      }
    }
  }
`
