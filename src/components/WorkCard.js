import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  FigmaFill,
  ReactFill,
  SassFill,
  GithubFill,
  HtmlFill,
  CssFill,
  ReduxFill,
  GraphqlFill,
  GatsbyFill,
  JavascriptFill,
} from "akar-icons"
const WorkCard = props => {
  return (
    <MDXProvider
      components={{
        FigmaFill,
        ReactFill,
        SassFill,
        GithubFill,
        HtmlFill,
        CssFill,
        ReduxFill,
        GraphqlFill,
        GatsbyFill,
        JavascriptFill,
      }}
    >
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
            <p className="work-card-type">
              {props.node.frontmatter.type || ""}
            </p>
            <div
              className={
                props.node.frontmatter.design &&
                props.node.frontmatter.development &&
                props.node.frontmatter.design.length +
                  props.node.frontmatter.development.length >
                  0
                  ? "work-card-tools"
                  : "hidden"
              }
            >
              <div>
                {props.node.frontmatter.design
                  ? props.node.frontmatter.design.map(item => (
                      <MDXRenderer>{item.value}</MDXRenderer>
                    ))
                  : ""}
              </div>
              <div>
                {props.node.frontmatter.development
                  ? props.node.frontmatter.development.map(item => (
                      <MDXRenderer>{item.value}</MDXRenderer>
                    ))
                  : ""}
              </div>
            </div>
            <p className="work-card-description">
              {props.node.frontmatter.description}
            </p>
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default WorkCard
