import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Bio({ data }) {
  const { author, social } = data.site.siteMetadata
  return (
    <section>
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author}
        imgStyle={{
          borderRadius: `25%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in Seattle
        building useful things.
        {` `}
        <a href={social.linkedin}>Find me on LinkedIn</a>
      </p>
    </section>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 50, height: 50, layout: FIXED)
      }
    }
    site {
      siteMetadata {
        author
        social {
          linkedin
        }
      }
    }
  }
`
