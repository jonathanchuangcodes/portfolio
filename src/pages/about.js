import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`portfolio`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.myFace.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h2 id="introduction">
            I am a user experience designer with experience in web design, mobile app design, and UI development. I strive to .
          </h2>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    myFace: file(
      relativePath: { eq: "mahface.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360, maxHeight: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
