import React from 'react';
import { useSpring, animated, to } from "@react-spring/web"
import { useHover } from "@use-gesture/react"
import PropTypes from "prop-types"

export default function AnimatedLogo({ children }) {
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
  }))

  const bind = useHover(
    ({ hovering }) =>
      (hovering && api({ scale: 2 })) || (!hovering && api({ scale: 1 }))
  )

  return (
    <animated.div {...bind()} style={{ scale: to([scale], s => s) }}>
      {children}
    </animated.div>
  )
}

AnimatedLogo.propTypes = {
  children: PropTypes.node.isRequired,
}
