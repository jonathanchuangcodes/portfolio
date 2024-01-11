"use client"

import React from "react"
import { useTrail, animated } from "@react-spring/web"
import PropTypes from "prop-types"

export default function AnimatedHeader({ text, delay = 1000, subheaderFlag }) {
  const trail = useTrail(1, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { opacity: 0, x: 20, height: 0 },
    to: { opacity: 1, x: 0, height: 40 },
    delay,
  })

  return (
    <>
      {subheaderFlag
        ? trail.map((prop, index) => (
            <animated.h2
              key={index}
              style={prop}
              className="banner-title-subheader"
            >
              {text}
            </animated.h2>
          ))
        : trail.map((prop, index) => (
            <animated.h1 key={index} style={prop} className="banner-title">
              {text}
            </animated.h1>
          ))}
    </>
  )
}

AnimatedHeader.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  subheaderFlag: PropTypes.bool,
}
