import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/sass/featuredWork.scss"

export default function featuredWork(props) {
  return (
    <div
      className={`featured-work ${props.postClass} ${
        props.node.frontmatter.thumbnail ? `with-image` : `no-image`
      }`}
    >
      <Link to={props.node.slug} className="featured-work-link">
        <div className="featured-work-content">
          <div
            className="featured-work-text"
            style={{ backgroundColor: props.node.frontmatter.color }}
          >
            <h2>{props.node.frontmatter.title || props.node.slug}</h2>
            <p className="featured-work-role">
              {props.node.frontmatter.type +
                " | " +
                props.node.frontmatter.my_role}
            </p>
            <p className="featured-work-description">
              {props.node.frontmatter.description}
            </p>
          </div>
          <GatsbyImage
            image={
              props.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
            }
            alt=""
            className="featured-work-image-container"
            imgClassName="featured-work-image"
            objectFit="contain"
            objectPosition="50% 50%"
          ></GatsbyImage>
        </div>
      </Link>
    </div>
  )
}
