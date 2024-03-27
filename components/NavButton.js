import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"
import { usePathname } from "next/navigation"
export default function NavButton({ href, setToggleNav, title }) {
  const pathname = usePathname()
  return (
    <button
      className={`nav-button ${pathname === href ? "nav-current" : ""}`}
      onClick={e => {
        e.preventDefault()
        setToggleNav(false)
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
