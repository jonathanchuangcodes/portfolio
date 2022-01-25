import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import "../styles/sass/pages/about.scss"

export default function AboutPage({ data }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <article className="page-template no-image">
        <div className="post-content-body">
          <h1 id="name">Jonathan Chuang</h1>
          <h2 id="titles">Designer, Developer</h2>
          <div id="bio-container">
            <div id="profile-container">
              <GatsbyImage
                image={data.myFace.childImageSharp.gatsbyImageData}
                alt="profile picture"
                className="kg-image profile-pic"
              />
            </div>
            <div id="social-links">
              <a
                href={data.site.siteMetadata.social.linkedin}
                className="icon-link"
              >
                <GatsbyImage
                  image={data.linkedinIcon.childImageSharp.gatsbyImageData}
                  alt="linkedin icon link"
                />
              </a>
              <a
                href={data.site.siteMetadata.social.dribbble}
                className="icon-link"
              >
                <GatsbyImage
                  image={data.dribbbleIcon.childImageSharp.gatsbyImageData}
                  alt="dribbble icon link"
                />
              </a>
            </div>
            <p id="bio">
              Hi, I'm Jonathan, a front-end developer with UX design training. I can help
              bridge the gap between developer and design teams.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const aboutQuery = graphql`
  {
    site {
      siteMetadata {
        title
        social {
          linkedin
          dribbble
        }
      }
    }
    myFace: file(relativePath: { eq: "mahface.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 320
          height: 480
          layout: CONSTRAINED
        )
      }
    }
    linkedinIcon: file(relativePath: { eq: "linkedin-icon.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 50
          height: 50
          layout: FIXED
        )
      }
    }
    dribbbleIcon: file(relativePath: { eq: "dribbble-ball-icon.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 50
          height: 50
          layout: FIXED
        )
      }
    }
  }
`
