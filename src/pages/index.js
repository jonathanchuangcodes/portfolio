import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedWork from "../components/featuredWork"

import "../utils/css/normalize.css"
import "../utils/sass/screen.scss"

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const works = data.allMdx.edges.filter(work => work.node.frontmatter.featured)
  let postCounter = 0
  return (
    <Layout title={siteTitle}>
      <SEO
        title="Featured works"
        keywords={[`portfolio`, `gatsby`, `javascript`, `react`]}
      />
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}
      <div className="featured-works">
        {works.map(({ node }) => {
          postCounter++
          return (
            <FeaturedWork
              key={node.slug}
              count={postCounter}
              node={node}
              postClass={`work`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
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
          slug
          frontmatter {
            title
            description
            type
            my_role
            color
            featured
            thumbnail {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
