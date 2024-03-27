import React, { useEffect } from "react"
import PropTypes from "prop-types"
import useSticky from "../hooks/useSticky"
import { useSpring, animated } from "@react-spring/web"

export default function StickyHeader({ children }) {
  const { isSticky, element } = useSticky()
  const [{ y, set }] = useSpring(() => ({ y: 0, color: "#fff" }))

  useEffect(() => {
    if (isSticky) set({ y: 100, color: "#000" })
    else set({ y: 0, color: "#fff" })
  }, [isSticky])
  return (
    <animated.div
      style={{ transform: y.to(v => `translateY(${v}%`) }}
      ref={element}
      // className={isSticky ? `sticky-header` : `header`}
    >
      {children}
    </animated.div>
  )
}

StickyHeader.propTypes = {
  children: PropTypes.node.isRequired,
}
