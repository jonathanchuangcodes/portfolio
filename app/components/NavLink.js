import React from "react"
import Link from "next/link"

export default function NavLink({ children, to }) {
  return (
    <Link to={to} activeStyle={{ fontWeight: 800, opacity: 0.8 }}>
      {children}
    </Link>
  )
}
