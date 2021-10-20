import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const postCard = props => {
  return (
    <div
      className={`post-card ${props.postClass} ${
        props.node.frontmatter.thumbnail ? `with-image` : `no-image`
      }`}
    >
      <Link to={"/" + props.node.slug} className="post-card-link">
        <div className="post-card-content">
          <GatsbyImage
            className="post-card-image"
            image={
              props.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
            }
            alt={props.node.frontmatter.title + " thumbnail"}
          ></GatsbyImage>
          <div
            className="post-card-text"
            style={{ backgroundColor: props.node.frontmatter.color }}
          >
            <h1 className="post-card-title">
              {props.node.frontmatter.title || props.node.slug}
            </h1>
            <p className="post-card-type">
              {props.node.frontmatter.type || ""}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default postCard
