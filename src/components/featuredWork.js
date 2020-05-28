import React from "react"
import { Link } from "gatsby"

const featuredWork = props => {
    return (
      <div
        className={`featured-work ${
          props.postClass
        } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
      >
        <Link to={props.node.fields.slug} className="featured-work-link">
          <div className="featured-work-content">
              {props.count % 2 !== 0 &&
                <div className="featured-work-image">
                  <img src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src} alt={props.node.frontmatter.title + " thumbnail"}></img>
                </div>
              }
              <div className="featured-work-text" style={{backgroundColor: props.node.frontmatter.color}}>
                <h2>
                  {props.node.frontmatter.title || props.node.fields.slug}
                </h2>
                <p className="featured-work-role">{props.node.frontmatter.type + ' | ' + props.node.frontmatter.my_role}</p>
                <p className="featured-work-description">{props.node.frontmatter.description}</p>
              </div>
              {props.count % 2 === 0 &&
                <div className="featured-work-image">
                  <img src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src} alt={props.node.frontmatter.title + " thumbnail"}></img>
                </div>
              }
          </div>
        </Link>
      </div>
    );
};

export default featuredWork;
