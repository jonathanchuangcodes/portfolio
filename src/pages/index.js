import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useSpring, animated, config } from "react-spring"

import Layout from "../components/layout"
import FeaturedWork from "../components/featuredWork"
import BlueFlow from "../components/background/BlueFlow"

import "../styles/sass/pages/home.scss"
import "../styles/sass/global.scss"
import RedFlow from "../components/background/RedFlow"

function HeaderText({ text }) {
  const [flip, setFlip] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => setFlip(!flip),
  })

  return (
    <animated.h1 id="banner-title" style={props}>
      {text}
    </animated.h1>
  )
}

export default function HomePage({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const works = data.allMdx.edges.filter(work => work.node.frontmatter.featured)

  return (
    <Layout title={siteTitle}>
      <BlueFlow />
      <RedFlow />
      <header id="banner">
        <div id="banner-titles">
          <HeaderText text={"Designer. Developer."} />
          <p id="banner-sub-title">
            Creating <u>flow</u> through user centered design and robust code.
          </p>
        </div>
        <div id="profile-container">
          <GatsbyImage
            image={data.myFace.childImageSharp.gatsbyImageData}
            alt="profile picture"
          />
        </div>
      </header>
      <div className="featured-works">
        {works.map(({ node }) => {
          return <FeaturedWork key={node.slug} node={node} postClass={`work`} />
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
