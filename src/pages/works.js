import React from "react"
import { graphql  } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/postCard"

import "../styles/sass/screen.scss"
import "../styles/sass/pages/works.scss"

export default function Works({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <div className="works-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const WorksQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx {
      edges {
        node {
          excerpt
          frontmatter {
            title
            description
            type
            color
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
          slug
        }
      }
    }
  }
`
