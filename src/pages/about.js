import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/css/normalize.css"
import "../utils/css/screen.css"
import "../utils/css/pages/about.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[`portfolio`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
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
              My name is Jonathan. I'm a fan of the cutting edge, the
              near-future. From experimental-tinged music to grandiose tech
              innovations, I love it all. Most of all, I love to think about how
              our technology can positively impact our world, how it changes us,
              and all the possibilities they bring. It's a sense of wonder and
              desire born from its impact on my own life, and the lives of those
              who inspire me. <br />
              <br /> I graduated from the University of Washington in June 2019,
              with a degree in Informatics and a strong focus in HCI
              (Human-Computer Interaction). Thinking back on my college
              experience now, I don't think I fully understood why this program
              grabbed my attention so swiftly, being as uncertain and undecided
              as I was when I first entered university. <br />
              <br />
              Nowadays if you asked me why I chose to study Informatics, why
              HCI, I think I would have a pretty good answer for you.
              <br /> <br />I consider human-computer interaction the lifeforce
              of any product or technology. It guarantees its success or
              failure, its impact, and its legacy. It requires knowledge and
              understanding of multiple disciplines from design to engineering,
              to psychology and sociology. Whether it's something as complex as
              designing a city's transportation system or a simple calculator
              app, they are all vital considerations in building that
              interaction and experience.
              <br /> <br />I may focus on the interaction side, but I aspire to
              be a generalist. I'm only at the beginning of my career journey,
              so you'll likely find me spending most of my time now designing
              and building websites and apps, but I know that my ambitions lie
              farther. Giving myself exposure to different kinds of knowledge
              and disciplines is to me just as important as practicing and
              perfecting the fundamentals of my trade. It gives me access to
              different perspectives, ideologies, and methods that could take my
              designs and practices to the next level. <br />
              <br /> When I'm not drumming up some new designs or building an
              apps and websites, you can find me sitting in coffee shops with a
              good novel or non-fiction title, practicing my (currently)
              mediocre photography skills, gaming, or learning how to
              illustrate. Or I'm guessing by the time that you have read this
              you might find me trying my hand at a new hobby, just because I
              got curious one day.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
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
          layout: FULL_WIDTH
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

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
