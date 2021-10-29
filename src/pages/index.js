import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedWork from "../components/featuredWork"

import "../styles/sass/screen.scss"
import Loading from "../components/loading"

export default function HomePage({ data })   {
  const siteTitle = data.site.siteMetadata.title
  const works = data.allMdx.edges.filter(work => work.node.frontmatter.featured)

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
      {/* <Loading /> */}
      <div className="featured-works">
        {works.map(({ node }) => {
          return (
            <FeaturedWork
              key={node.slug}
              node={node}
              postClass={`work`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const HomePageQuery = graphql`
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