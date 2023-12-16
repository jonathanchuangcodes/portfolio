import React from "react"
import { Link } from "next/link"
import Image from "next/image"
import "../styles/sass/featuredWork.scss"

export default function featuredWork(props) {
  return (
    <div
      className={`featured-work ${props.postClass} ${
        props.node.frontmatter.thumbnail ? `with-image` : `no-image`
      }`}
    >
      <Link href={""} className="featured-work-link">
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
          <Image
            image={
              props.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
            }
            alt=""
            className="featured-work-image-container"
            imgClassName="featured-work-image"
            objectFit="contain"
            objectPosition="50% 50%"
          ></Image>
        </div>
      </Link>
    </div>
  )
}
