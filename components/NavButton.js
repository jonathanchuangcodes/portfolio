import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"
export default function NavButton({ href, setToggleNav, toggleNav, title }) {
  return (
    <button
      className="nav-button"
      onClick={e => {
        e.preventDefault()
        setToggleNav(!toggleNav)
      }}
    >
      <Link href={href}>{title}</Link>
    </button>
  )
}

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  setToggleNav: PropTypes.func.isRequired,
  toggleNav: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}
