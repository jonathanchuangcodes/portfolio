import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import WorkCard from "../components/WorkCard"

import "../styles/sass/pages/works.scss"
import RedFlowWorks from "../components/background/RedFlowWorks"
import BlueFlowWorks from "../components/background/BlueFlowWorks"

export default function Works({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <RedFlowWorks />
      <BlueFlowWorks />
      <div className="works-feed">
        {posts.map(({ node }) => {
          postCounter++
          return <WorkCard key={node.slug} count={postCounter} node={node} />
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
            design {
              value
            }
            development {
              value
            }
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          slug
        }
      }
    }
  }
`
