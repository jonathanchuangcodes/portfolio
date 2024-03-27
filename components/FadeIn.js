"use client"

import React from "react"
import PropTypes from "prop-types"
import { useSpring, animated } from "@react-spring/web"

export default function FadeIn({ children }) {
  const props = useSpring({
    from: { height: "100%", opacity: 0, zIndex: -999 },
    to: { height: "100%", opacity: 1, zIndex: -999 },
    delay: 10,
  })

  return <animated.div style={props}>{children}</animated.div>
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
}
