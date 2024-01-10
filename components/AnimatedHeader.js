"use client"

import { useTrail, animated } from "@react-spring/web"

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
            <animated.h2 key={index} style={prop} className="banner-title-subheader">
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
