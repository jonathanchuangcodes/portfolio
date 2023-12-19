"use client"

import { useSpring, animated } from "@react-spring/web"

export default function AnimatedSubtitle({ text, delay = 3000 }) {
    const props = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay,
    })
  
    return (
      <animated.p style={props} className={"banner-subtitle"}>
        {text}
      </animated.p>
    )
  }