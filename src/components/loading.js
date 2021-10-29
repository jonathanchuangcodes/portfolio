import React from "react"
import { useSpring, animated } from "react-spring"

export default function Loading() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  })
  return <animated.div style={props}>I will fade in. Loading...</animated.div>
}
