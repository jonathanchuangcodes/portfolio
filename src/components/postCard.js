import React from "react"
import { Link } from "gatsby"

export default props => (
  <div
    className={`post-card ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content">
        <div className="post-card-image">
          <img src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src} alt={props.node.frontmatter.title + " thumbnail"}></img>
        </div>
        <div className="post-card-text" style={{backgroundColor: props.node.frontmatter.color}}>
          <h2 className="post-card-title">
            {props.node.frontmatter.title || props.node.fields.slug}
          </h2>
          <p>{props.node.frontmatter.type || ''}</p>
        </div>
      </div>
    </Link>
  </div>
)
