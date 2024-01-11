"use client"

import React from "react"
import { useSpring, animated } from "@react-spring/web"
import Proptypes from "prop-types"

export default function AnimatedSubtitle({ text, delay = 3000 }) {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay,
  })

  return (
    <animated.p style={props} className="banner-subtitle">
      {text}
    </animated.p>
  )
}

AnimatedSubtitle.propTypes = {
  text: Proptypes.string,
  delay: Proptypes.number,
}
