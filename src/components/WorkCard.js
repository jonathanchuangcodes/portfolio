import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const WorkCard = props => {
  console.log(props)
  return (
    <div
      className={`work-card ${
        props.node.frontmatter.thumbnail ? `with-image` : `no-image`
      }`}
    >
      <Link to={"/" + props.node.slug} className="work-card-link">
        <GatsbyImage
          image={
            props.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
          }
          alt={props.node.frontmatter.title + " thumbnail"}
          className="work-card-image"
        ></GatsbyImage>
      </Link>
      <div
        className="work-card-content"
        style={{ backgroundColor: props.node.frontmatter.color }}
      >
        <div className="work-card-text">
          <h1 className="work-card-title">
            {props.node.frontmatter.title || props.node.slug}
          </h1>
          <p className="work-card-type">{props.node.frontmatter.type || ""}</p>
          <p className="work-card-description">{props.node.frontmatter.description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
