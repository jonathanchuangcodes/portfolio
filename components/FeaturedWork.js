"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  GatsbyFill,
  NextjsFill,
  ReactFill,
  ReduxFill,
  NodeFill,
} from "akar-icons"
import PropTypes from "prop-types"
import { useSpring, animated } from "@react-spring/web"

export default function FeaturedWork({ work }) {
  const [{ y }, set] = useSpring(() => ({ y: 0 }))
  return (
    <Link href={"/works/" + work.slug} className="featured-work-link">
      <div
        className={`featured-work ${
          work.thumbnail ? `with-image` : `no-image`
        }`}
      >
        <animated.div
          className="featured-work-content"
          onMouseEnter={() => set({ y: 100 })}
          onMouseLeave={() => set({ y: 0 })}
        >
          <div
            className="featured-work-text-container"
            style={{ backgroundColor: work.color }}
          >
            <h2 className="featured-work-title">{`${work.title || work.slug}${
              work.subtitle === undefined && work.subtitle !== "" ? ":" : ""
            } `}</h2>
            <h2 className="featured-work-subtitle">{work.subtitle}</h2>
            <p className="featured-work-role">
              {work.type + " | " + work.my_role}
            </p>
            {work.icons && (
              <div className="featured-work-tech">
                {work.icons?.map((tech, index) => {
                  switch (tech) {
                    case "gatsby":
                      return <GatsbyFill key={index} />
                    case "nextjs":
                      return <NextjsFill key={index} />
                    case "react":
                      return <ReactFill key={index} />
                    case "redux":
                      return <ReduxFill key={index} />
                    case "node":
                      return <NodeFill key={index} />
                    default:
                      return (
                        <p
                          key={index}
                          style={{
                            margin: 0,
                            padding: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            lineHeight: 0,
                          }}
                        >
                          {tech}
                        </p>
                      )
                  }
                })}
              </div>
            )}
            <p className="featured-work-description">{work.description}</p>
          </div>
          <div
            className="featured-work-image-container"
            style={{
              backgroundColor: work.color,
            }}
          >
            <Image
              src={work.thumbnail}
              alt=""
              className="featured-work-image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <animated.div
            style={{ transform: y.to(v => `translateY(${v}%`) }}
            className="glance"
          />
        </animated.div>
      </div>
    </Link>
  )
}

FeaturedWork.propTypes = {
  work: PropTypes.object,
}
