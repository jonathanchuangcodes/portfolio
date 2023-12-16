"use client"

import { useSpring, animated } from "@react-spring/web"

export default function AnimatedHeader({ text, delay = 1000 }) {
    const props = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay,
    })
  
    return (
      <animated.h1 className="banner-title" style={props}>
        {text}
      </animated.h1>
    )
  }
  