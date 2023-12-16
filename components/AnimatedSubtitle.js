"use client"

import { useSpring, animated } from "@react-spring/web"

export default function AnimatedSubtitle({ text, delay = 3000 }) {
    const props = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay,
    })
  
    return (
      <animated.p id="banner-sub-title" style={props}>
        {text}
      </animated.p>
    )
  }