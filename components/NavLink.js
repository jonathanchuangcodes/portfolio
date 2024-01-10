import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"
export default function NavLink({ children, href }) {
  return <Link href={href}>{children}</Link>
}

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
