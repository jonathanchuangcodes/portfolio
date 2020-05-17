import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"

import "../utils/css/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <article className="post-content page-template no-image">
        <form method="post" action="#">
          <div className="row gtr-uniform">
            {/* Break */}
            <div className="col-12">
              <p>
                Feel free to contact me about any opportunities, questions,
                feedback, anything really. I am always up for a chat!
              </p>
            </div>
            {/* Break */}
            <div className="col-12">
              <textarea
                name="demo-message"
                id="demo-message"
                placeholder="Enter your message"
                rows={6}
                defaultValue={""}
              />
            </div>
            {/* Break */}
            <div className="col-12">
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
