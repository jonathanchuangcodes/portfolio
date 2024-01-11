import React from "react"
import PropTypes from "prop-types"
import useSticky from "../hooks/useSticky"

export default function StickyHeader({ children }) {
  const { isSticky, element } = useSticky()
  return (
    <div ref={element} className={isSticky ? `sticky-header` : `header`}>
      {children}
    </div>
  )
}

StickyHeader.propTypes = {
  children: PropTypes.node.isRequired,
}
