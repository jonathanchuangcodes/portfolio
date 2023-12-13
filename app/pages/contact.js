import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ContactPage({ data }, location)  {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <article className="post-content page-template no-image">
        <form method="post" action="#">
          <div className="row gtr-uniform">
            {/* Break */}
            <div className="col-12">
              <p>
                Feel free to contact me about any job opportunities, questions,
                feedback, anything really.
              </p>
            </div>x
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

export const contactQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
