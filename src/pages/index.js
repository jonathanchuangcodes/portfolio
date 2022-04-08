import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useSpring, animated, config } from "react-spring"
import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "../components/layout"
import FeaturedWork from "../components/featuredWork"
import BlueFlow from "../components/background/BlueFlow"
import FadeIn from "../components/FadeIn"

import "../styles/sass/pages/home.scss"
import "../styles/sass/global.scss"
import RedFlow from "../components/background/RedFlow"

function AnimatedHeader({ text, delay = 1000 }) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    delay: delay,
    config: config.molasses,
  })

  return (
    <animated.h1 className="banner-title" style={props}>
      {text}
    </animated.h1>
  )
}

function AnimatedSubtitle({ text, delay = 3000 }) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    delay: delay,
    config: config.molasses,
  })

  return (
    <animated.p id="banner-sub-title" style={props}>
      {text}
    </animated.p>
  )
}

export default function HomePage({ data }) {
  const siteTitle = data.site.siteMetadata.title
  const works = data.allMdx.edges.filter(work => work.node.frontmatter.featured)

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: config.molasses,
  })

  return (
    <Layout title={siteTitle}>
      <GatsbySeo
        title="Jonathan Chuang's Portfolio"
        description="Homepage of Jonathan Chuang's web developer portfolio."
        canonical='https://www.jonathanchuang.codes/'
        openGraph={{
          url: "https://www.jonathanchuang.codes/",
          title: "Jonathan Chuang",
          description: "Jonathan Chuang's web developer portfolio.",
          site_name: "JonathanChuangCodes"
        }}
        twitter={{
          handle: "@jchuang02",
          site: "@site",
          cardType: "summary_large_image"
        }}
      />
      <FadeIn>
        <BlueFlow />
      </FadeIn>
      <FadeIn>
        <RedFlow />
      </FadeIn>

      <header id="banner">
        <div id="banner-titles">
          <div className="banner-headers">
            <AnimatedHeader text={"Developer."} />
            <AnimatedHeader text={"Designer."} delay={2000} />
          </div>
          <AnimatedSubtitle
            text={`Creating flow through user centered design and robust code.`}
          />
        </div>
        <animated.div style={props} id="profile-container">
          <GatsbyImage
            image={data.myFace.childImageSharp.gatsbyImageData}
            alt="profile picture"
          />
        </animated.div>
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
