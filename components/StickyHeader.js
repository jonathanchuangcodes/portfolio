import React from "react"
import useSticky from "../hooks/useSticky"

export default function StickyHeader( props ) {
  const { isSticky, element } = useSticky()
  return <div ref={element} className={isSticky ? `sticky-header` : `header`}>{props.children}</div>
}
