"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { MDXProvider } from "@mdx-js/react"
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
import Proptypes from "prop-types"

const WorkCard = ({ work, count }) => {
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
        className={`work-card ${work.thumbnail ? `with-image` : `no-image`}`}
        key={count}
      >
        <div className="work-card-image-container">
          <Link href={"/works/" + work.slug} className="work-card-link">
            <Image
              className="work-card-image"
              src={work.thumbnail}
              alt={work.title + " thumbnail"}
              objectFit="cover"
              fill
            />
          </Link>
        </div>
        <div
          className="work-card-content"
          style={{ backgroundColor: work.color }}
        >
          <div className="work-card-text">
            <h1 className="work-card-title">{work.title || work.slug}</h1>
            <p className="work-card-type">{work.type || ""}</p>
            <div
              className={work.icons?.length > 0 ? "work-card-tools" : "hidden"}
            >
              <div>
                {work.icons
                  ? work.icons.map((item, index) => (
                      <div key={index}>{item.value}</div>
                    ))
                  : ""}
              </div>
            </div>
            <p className="work-card-description">{work.description}</p>
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default WorkCard

WorkCard.propTypes = {
  work: Proptypes.object.isRequired,
  count: Proptypes.number.isRequired,
}
